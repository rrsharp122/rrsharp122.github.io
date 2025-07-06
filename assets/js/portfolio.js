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
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Reset show more state when filter changes
            showAllItems = false;
            updateItemVisibility();
        });
    });

    // Show more functionality
    function updateItemVisibility() {
        const visibleItems = Array.from(portfolioItems).filter(item => 
            item.style.display !== 'none'
        );
        
        if (!showAllItems && visibleItems.length > 4) {
            // Hide items beyond the first 4 (2 rows)
            visibleItems.forEach((item, index) => {
                if (index >= 4) {
                    item.style.display = 'none';
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
});