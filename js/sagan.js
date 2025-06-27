// SAGAN Page JavaScript

class SaganPageManager {
    constructor() {
        this.init();
    }

    init() {
        this.initTabs();
        this.initImageGallery();
    }

    // Tab functionality
    initTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }

    // Image gallery functionality
    initImageGallery() {
        const galleries = document.querySelectorAll('.mech-image-gallery');
        
        galleries.forEach(gallery => {
            const mainImg = gallery.querySelector('.mech-main-img');
            const thumbnails = gallery.querySelectorAll('.thumbnail');
            
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', () => {
                    const newMainSrc = thumbnail.getAttribute('data-main');
                    
                    // Update main image
                    mainImg.src = newMainSrc;
                    
                    // Update active thumbnail
                    thumbnails.forEach(thumb => thumb.classList.remove('active'));
                    thumbnail.classList.add('active');
                });
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SaganPageManager();
}); 