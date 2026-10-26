document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
    let currentFilter = 'all';
    let showAllItems = false;

    // Show more button, created once and placed after the grid
    const showMoreBtn = document.createElement('button');
    showMoreBtn.type = 'button';
    showMoreBtn.className = 'show-more-button';
    showMoreBtn.setAttribute('aria-controls', 'portfolio-grid');
    portfolioGrid.parentElement.appendChild(showMoreBtn);

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentFilter = this.getAttribute('data-filter');

            // Update active button and ARIA states
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Reset show more state when filter changes
            showAllItems = false;
            updateItemVisibility();
        });
    });

    function matchingItems() {
        return portfolioItems.filter(item =>
            currentFilter === 'all' || item.getAttribute('data-category') === currentFilter
        );
    }

    // Determine how many items to show based on viewport width
    function initialItemCount() {
        return window.innerWidth < 768 ? 3 : 6;
    }

    // Show more functionality
    function updateItemVisibility() {
        const visibleItems = matchingItems();
        const itemsToShow = showAllItems ? visibleItems.length : initialItemCount();

        portfolioItems.forEach(item => {
            item.style.display = 'none';
        });
        visibleItems.forEach((item, index) => {
            item.style.display = index < itemsToShow ? 'block' : 'none';
        });

        if (visibleItems.length > initialItemCount()) {
            showMoreBtn.textContent = showAllItems ? 'Show fewer' : `Show all ${visibleItems.length}`;
            showMoreBtn.setAttribute('aria-expanded', showAllItems ? 'true' : 'false');
            showMoreBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'none';
        }
    }

    // Initial setup
    updateItemVisibility();

    // Show more button click handler
    showMoreBtn.addEventListener('click', function() {
        const firstHiddenIndex = initialItemCount();
        showAllItems = !showAllItems;
        updateItemVisibility();

        if (showAllItems) {
            // Move keyboard focus to the first newly revealed item
            const firstNewItem = matchingItems()[firstHiddenIndex];
            const firstNewLink = firstNewItem && firstNewItem.querySelector('.portfolio-title a');
            if (firstNewLink) {
                firstNewLink.focus({ preventScroll: true });
            }
        } else {
            // Scroll back to the top of the portfolio section
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            document.getElementById('writing').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }
    });

    // Update on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (!showAllItems) {
                updateItemVisibility();
            }
        }, 250);
    });
});
