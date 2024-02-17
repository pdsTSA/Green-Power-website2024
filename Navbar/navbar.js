$(document).ready(function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Loop through each navbar item
    $('nav ul li a').each(function() {
        // Check if the href attribute of the navbar item matches the current page URL
        if ($(this).attr('href') === currentPageUrl) {
            // Add the "active" class to the navbar item
            $(this).addClass('active');
        }
    });
});
