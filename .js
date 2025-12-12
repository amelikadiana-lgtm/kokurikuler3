// -------------------
// Smooth Scroll Navbar
// -------------------
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
        });
    });
});


// -------------------
// Alert Form Kontak
// -------------------
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Terima kasih! Pesan Anda sudah terkirim 😊");
        form.reset();
    });
}


// -------------------
// Fade In Animation Saat Scroll
// -------------------
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', function() {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Set default state untuk animasi
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease-in-out";
});
