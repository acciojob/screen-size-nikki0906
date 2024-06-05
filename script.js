//your JS code here. If required.
// Function to update the width and height
function updateSizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('sizeInfo').querySelector('h1');
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Initial call to set the size information
updateSizeInfo();

// Add an event listener to update the size information when the window is resized
window.addEventListener('resize', updateSizeInfo);

