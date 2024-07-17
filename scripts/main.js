// Custom cursor script
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a, button').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        document.getElementById('customCursor').classList.add('hovered');
    });
    elem.addEventListener('mouseleave', () => {
        document.getElementById('customCursor').classList.remove('hovered');
    });
});

// Dark mode toggle script
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('data-scroll-in');
        }
    });
});

document.querySelectorAll('.project[data-scroll]').forEach(project => {
    observer.observe(project);
});