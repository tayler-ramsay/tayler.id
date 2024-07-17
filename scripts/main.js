document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor script
    document.addEventListener('mousemove', (e) => {
        const cursor = document.getElementById('customCursor');
        if (cursor) {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        }
    });
});

    document.querySelectorAll('a, button').forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            const cursor = document.getElementById('customCursor');
            if (cursor) {
                cursor.classList.add('hovered');
            }
        });
        elem.addEventListener('mouseleave', () => {
            const cursor = document.getElementById('customCursor');
            if (cursor) {
                cursor.classList.remove('hovered');
            }
        });
    });

    // Dark mode toggle script
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');});}
            // Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('data-scroll-in');
            observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
    });
});

document.querySelectorAll('.project[data-scroll]').forEach(project => {
    observer.observe(project);
});