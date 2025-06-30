document.addEventListener('DOMContentLoaded', () => {
    // Animate circular progress bars on page load
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const dashArray = circle.getAttribute('stroke-dasharray');
        circle.style.strokeDasharray = '0, 100';
        setTimeout(() => {
            circle.style.strokeDasharray = dashArray;
        }, 100);
    });

    // Animate progress bars on page load (for backward compatibility)
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });

    // Add tooltip functionality for progress bars
    progressBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'progress-tooltip';
            tooltip.textContent = bar.parentElement.title || '';
            document.body.appendChild(tooltip);

            const rect = bar.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 30}px`;
            tooltip.style.opacity = '1';

            bar._tooltip = tooltip;
        });

        bar.addEventListener('mouseleave', () => {
            if (bar._tooltip) {
                bar._tooltip.style.opacity = '0';
                setTimeout(() => {
                    if (bar._tooltip && bar._tooltip.parentElement) {
                        bar._tooltip.parentElement.removeChild(bar._tooltip);
                        bar._tooltip = null;
                    }
                }, 300);
            }
        });
    });
});

// Unified Toggle Function with Slide Animation
function slideToggle(element, duration = 400) {
    if (window.getComputedStyle(element).display === 'none') {
        element.style.removeProperty('display');
        let display = window.getComputedStyle(element).display;
        if (display === 'none') display = 'block';
        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight; // force repaint
        element.style.transitionProperty = "height, margin, padding";
        element.style.transitionDuration = duration + 'ms';
        element.style.height = height + 'px';
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-property');
            element.style.removeProperty('transition-duration');
        }, duration);
    } else {
        element.style.height = element.offsetHeight + 'px';
        element.offsetHeight; // force repaint
        element.style.transitionProperty = "height, margin, padding";
        element.style.transitionDuration = duration + 'ms';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        window.setTimeout(() => {
            element.style.display = 'none';
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-property');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
        }, duration);
    }
}

// Toggle About Me Details
function toggleAboutMe() {
    const details = document.getElementById('about-me-details');
    slideToggle(details, 400);
}

// Toggle Project Details
function toggleProjectDetails(projectId) {
    // Close any other open project details
    const allProjectDetails = document.querySelectorAll('.project-details');
    allProjectDetails.forEach(detail => {
        if (detail.id !== projectId) {
            detail.style.display = 'none';
            detail.setAttribute('aria-hidden', 'true');
        }
    });

    // Toggle the clicked project details
    const projectDetails = document.getElementById(projectId);
    if (projectDetails) {
        const isVisible = projectDetails.style.display === 'block';
        projectDetails.style.display = isVisible ? 'none' : 'block';
        projectDetails.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
        if (!isVisible) {
            projectDetails.focus();
        }
    }
}
