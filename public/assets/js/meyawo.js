// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Dark Mode Toggle Logic (final)
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (!toggle) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    // Load saved theme OR set default
    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
        savedTheme = "light";
        localStorage.setItem("theme", "light");
    }

    // Force set theme
    body.setAttribute("data-theme", savedTheme);
    console.log("Initial theme:", savedTheme);

    function updateThemeIcon(theme) {
        const iconPath = document.getElementById("theme-icon-path");

        if (!iconPath) return;

        if (theme === "dark") {
            // Moon Icon
            iconPath.setAttribute(
                "d",
                "M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z"
            );
        } else {
            // Sun Icon
            iconPath.setAttribute(
                "d",
                "M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM4.22 4.22a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.42 1.42L4.22 5.64a1 1 0 0 1 0-1.42zM2 13a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H2zm16.36 5.36-1.41-1.41a1 1 0 1 1 1.41-1.42l1.42 1.42a1 1 0 0 1-1.42 1.41zM20 13a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2h-2zM6.64 18.36 5.22 16.95a1 1 0 0 1 1.42-1.41l1.41 1.41a1 1 0 1 1-1.41 1.42Z"
            );
        }
    }

    function updateLampIcon(theme) {
        const beam = document.getElementById("light-beam");

        if (!beam) return;

        if (theme === "dark") {
            beam.style.opacity = "0"; // lamp off
        } else {
            beam.style.opacity = "1"; // lamp on
        }
    }

    function syncLamp(theme) {
        const light = document.querySelector(".lamp-light");
        if (!light) return;

        light.style.opacity = theme === "dark" ? "0" : "1";
    }

    // Run on page load
    updateThemeIcon(savedTheme);
    updateLampIcon(savedTheme || "light");
    syncLamp(savedTheme);

    toggle.addEventListener("click", function () {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        updateThemeIcon(newTheme);
        updateLampIcon(newTheme);
        syncLamp(newTheme);
    });
});

