document.addEventListener('DOMContentLoaded', () => {
    // Add your JavaScript code here

    // Example: Add event listeners or interactive elements
    console.log('Document loaded and scripts running');

    // Load YouTube videos dynamically
    loadYouTubeVideos();
});

function loadYouTubeVideos() {
    // Example function to dynamically load YouTube videos
    const videoContainer = document.getElementById('video-container');
    const videoUrls = [
        'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example URL
        'https://www.youtube.com/embed/3JZ_D3ELwOQ'  // Example URL
    ];

    videoUrls.forEach(url => {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = '560';
        iframe.height = '315';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
    });
}
