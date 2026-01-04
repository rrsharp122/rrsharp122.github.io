document.addEventListener('DOMContentLoaded', function() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    let currentFilter = 'all';
    let showAllItems = false;

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Update active button and ARIA states
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            
            // Reset all items first
            portfolioItems.forEach(item => {
                item.style.display = 'none';
            });
            
            // Reset show more state when filter changes
            showAllItems = false;
            // Reset button text when filter changes
            const showMoreBtn = document.querySelector('.show-more-button');
            if (showMoreBtn) {
                showMoreBtn.textContent = 'Show More';
                showMoreBtn.classList.remove('show-less');
            }
            updateItemVisibility();
        });
    });

    // Show more functionality
    function updateItemVisibility() {
        const visibleItems = Array.from(portfolioItems).filter(item => {
            if (currentFilter === 'all') {
                return true;
            }
            return item.getAttribute('data-category') === currentFilter;
        });
        
        // Determine how many items to show based on viewport width
        let itemsToShow = 9; // Default to show 9 items (3 rows of 3)
        const viewportWidth = window.innerWidth;

        if (viewportWidth < 768) {
            itemsToShow = 6; // Mobile: show 6
        } else if (viewportWidth >= 1200) {
            itemsToShow = 9; // Large screens: show 9
        }
        
        // First, show all items that match the filter
        portfolioItems.forEach(item => {
            if (currentFilter === 'all' || item.getAttribute('data-category') === currentFilter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        if (!showAllItems && visibleItems.length > itemsToShow) {
            // Hide items beyond the initial set
            let shown = 0;
            portfolioItems.forEach(item => {
                if (item.style.display === 'block') {
                    if (shown >= itemsToShow) {
                        item.style.display = 'none';
                    }
                    shown++;
                }
            });
            
            // Show/create the show more button
            let showMoreBtn = document.querySelector('.show-more-button');
            if (!showMoreBtn) {
                showMoreBtn = document.createElement('button');
                showMoreBtn.className = 'show-more-button';
                showMoreBtn.textContent = 'Show More';
                portfolioGrid.parentElement.appendChild(showMoreBtn);
            }
            
            // Update button text based on state
            if (showAllItems) {
                showMoreBtn.textContent = 'Show Less';
                showMoreBtn.classList.add('show-less');
            } else {
                showMoreBtn.textContent = 'Show More';
                showMoreBtn.classList.remove('show-less');
            }
            
            showMoreBtn.style.display = 'block';
        } else {
            // Hide show more button if not needed
            const showMoreBtn = document.querySelector('.show-more-button');
            if (showMoreBtn) {
                showMoreBtn.style.display = 'none';
            }
        }
    }

    // Initial setup
    updateItemVisibility();
    
    // Show more button click handler
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('show-more-button')) {
            showAllItems = !showAllItems;
            
            if (showAllItems) {
                // Show all filtered items
                portfolioItems.forEach(item => {
                    if (currentFilter === 'all' || item.getAttribute('data-category') === currentFilter) {
                        item.style.display = 'block';
                    }
                });
            }
            
            updateItemVisibility();
            
            if (!showAllItems) {
                // Scroll back to the top of the portfolio section
                document.getElementById('writing').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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