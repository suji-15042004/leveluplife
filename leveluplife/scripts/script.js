document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector(".hero h2");
    const ctaButton = document.querySelector(".cta-button");

    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroText.style.transition = "all 1s ease-in-out";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);

    ctaButton.addEventListener("mouseover", function() {
        ctaButton.style.transform = "scale(1.1)";
    });

    ctaButton.addEventListener("mouseout", function() {
        ctaButton.style.transform = "scale(1)";
    });
});
