
// Get the page elements
var bigCloud = document.getElementById('bigcloud');
var smallCloud = document.getElementById('smallcloud');

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeContent, false);

// Resizes the content of the page according to window resize changes
function resizeContent() {

    // get the width and height of the window and calculate desired margins
    var bigCloudMarginLeft = (window.innerWidth - bigCloud.width) / 2;
    var bigCloudMarginTop = (window.innerHeight - bigCloud.height) / 2;

    var smallCloudMarginLeft = (window.innerWidth - smallCloud.width + 100) / 2;
    var smallCloudMarginTop = (window.innerHeight - smallCloud.height + 50) / 2;

    // resize the page content elements
    bigCloud.style.marginLeft = bigCloudMarginLeft.toString() + 'px';
    bigCloud.style.marginTop = bigCloudMarginTop.toString() + 'px';

    smallCloud.style.marginLeft = smallCloudMarginLeft.toString() + 'px';
    smallCloud.style.marginTop = smallCloudMarginTop.toString() + 'px';

}
resizeContent();