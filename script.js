```javascript
// =====================================
// Shwapnojatra Foundation
// Dropout Prevention Website
// JavaScript File
// =====================================


// 1. Mobile Navigation Menu

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    if (header && nav) {

        const menuButton = document.createElement("button");

        menuButton.innerHTML = "☰ Menu";
        menuButton.className = "menu-toggle";

        header.insertBefore(menuButton, nav);

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("active");

        });

    }


    // 2. Navigation Link Click

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

        });

    });


    // 3. Smooth Scrolling

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // 4. Scroll To Top Button

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });


    // 5. Update Copyright Year

    const footer = document.querySelector("footer");

    if (footer) {

        const copyright = footer.querySelector("p:last-child");

        if (copyright) {

            copyright.innerHTML =
                "Copyright © " +
                new Date().getFullYear() +
                " Shwapnojatra Foundation. All Rights Reserved.";

        }

    }


    // 6. Welcome Message in Console

    console.log(
        "Welcome to Shwapnojatra Foundation Website!"
    );

});
```