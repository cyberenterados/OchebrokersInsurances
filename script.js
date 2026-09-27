document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Notificación flotante de WhatsApp ---------- */
    const waNotification = document.getElementById('wa-notification');
    const closeBtn = document.getElementById('close-notification');

    if (waNotification) {
        setTimeout(() => {
            waNotification.classList.add('show');
        }, 2500);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            waNotification.classList.remove('show');
            setTimeout(() => {
                waNotification.style.display = 'none';
            }, 500);
        });
    }

    /* ---------- Header: estado sólido al hacer scroll ---------- */
    const header = document.getElementById('site-header');
    if (header) {
        const updateHeader = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 12);
        };
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    /* ---------- Pilares de servicio: acordeón ---------- */
    const pillars = document.querySelectorAll('.pillar');

    pillars.forEach((pillar) => {
        const trigger = pillar.querySelector('.pillar-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            const isOpen = pillar.classList.contains('is-open');

            // Un solo pilar abierto a la vez
            pillars.forEach((p) => {
                p.classList.remove('is-open');
                const t = p.querySelector('.pillar-trigger');
                if (t) t.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                pillar.classList.add('is-open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
