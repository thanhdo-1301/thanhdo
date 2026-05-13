const progressBars = document.querySelectorAll('.skill-progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.style.width = el.getAttribute('style').match(/\d+/) + '%'; 
        }
    });
}, { threshold: 0.1 });
progressBars.forEach(bar => observer.observe(bar));