document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");

    document.querySelector('.hamburger').addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');

        nav.classList.toggle('active'); // Toggle the active class
        hamburger.classList.toggle('cross'); // Toggle the cross class

        // Change the icon based on the state
        if (nav.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>'; // Change to cross icon
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Change back to hamburger icon
        }
    });
});
