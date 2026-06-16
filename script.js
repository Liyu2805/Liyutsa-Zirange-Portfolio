document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        }
    );

    scrollElements.forEach(el => observer.observe(el));
});
