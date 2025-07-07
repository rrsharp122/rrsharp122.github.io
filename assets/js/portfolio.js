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
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
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
        let itemsToShow = 4; // Default to show 4 items initially
        const viewportWidth = window.innerWidth;
        
        if (viewportWidth < 768) {
            itemsToShow = 3; // Mobile: show 3
        } else if (viewportWidth >= 1200) {
            itemsToShow = 6; // Large screens: show 6
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
                
                showMoreBtn.addEventListener('click', function() {
                    showAllItems = !showAllItems;
                    updateItemVisibility();
                    
                    if (showAllItems) {
                        this.textContent = 'Show Less';
                        this.classList.add('show-less');
                        // Show all filtered items
                        portfolioItems.forEach(item => {
                            if (currentFilter === 'all' || item.getAttribute('data-category') === currentFilter) {
                                item.style.display = 'block';
                            }
                        });
                    } else {
                        this.textContent = 'Show More';
                        this.classList.remove('show-less');
                        // Scroll back to the top of the portfolio section
                        document.getElementById('writing').scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
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