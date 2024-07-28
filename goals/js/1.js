document.getElementById('more-info-btn').addEventListener('click', function() {
    var detailsSection = document.getElementById('details');
    if (detailsSection.style.display === 'none') {
        detailsSection.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        detailsSection.style.display = 'none';
        this.textContent = 'Learn More';
    }
});
