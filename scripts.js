
        document.addEventListener('DOMContentLoaded', function () {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
                } else {
                    navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.85)';
                    navbar.style.boxShadow = 'none';
                }
            });
        });