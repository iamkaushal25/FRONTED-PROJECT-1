
// Search Suggestions
const input = document.querySelector('input');
const suggestionsBox = document.createElement('div');
suggestionsBox.className = 'suggestions';
document.body.appendChild(suggestionsBox);

const suggestions = ['Pizza', 'Burger', 'Momos'];

input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    if (value) {
        const filtered = suggestions.filter(item => item.toLowerCase().includes(value));
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.onclick = () => {
                input.value = item;
                suggestionsBox.style.display = 'none';
            };
            suggestionsBox.appendChild(div);
        });
        suggestionsBox.style.display = filtered.length ? 'block' : 'none';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.add('hidden');
    observer.observe(item);
});

// Add CSS classes for animation
const style = document.createElement('style');
style.textContent = `
    .hidden { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
    .visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
