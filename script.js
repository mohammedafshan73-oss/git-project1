```javascript
// =============================
// MOBILE MENU
// =============================

function openMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "90px";

        nav.style.right = "20px";

        nav.style.background = "#111";

        nav.style.padding = "25px";

        nav.style.width = "200px";

        nav.style.border = "1px solid #333";
    }
}


// =============================
// CAR MODAL
// =============================

function openCar(carName) {

    const modal = document.getElementById("carModal");

    const title = document.getElementById("carTitle");

    title.innerText = carName;

    modal.classList.add("active");

}


function closeCar() {

    const modal = document.getElementById("carModal");

    modal.classList.remove("active");

}


// Close modal by clicking outside

document
    .getElementById("carModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeCar();

        }

    });


// =============================
// COUNTER ANIMATION
// =============================

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const stats =
        document.querySelector(".stats");

    const position =
        stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                target / 80;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerText =
                        Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);


// =============================
// CONTACT FORM
// =============================

document
    .getElementById("driveForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const vehicle =
            document.getElementById("vehicle").value;

        if (!vehicle) {

            alert("Please select a vehicle.");

            return;

        }

        alert(
            "Thank you, " +
            name +
            "!\n\n" +
            "Your test drive request for " +
            vehicle +
            " has been received."
        );

        this.reset();

    });


// =============================
// NAVBAR EFFECT
// =============================

window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(8,8,8,.92)";

    } else {

        navbar.style.background =
            "rgba(8,8,8,.45)";

    }

});


// =============================
// ESCAPE KEY MODAL
// =============================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCar();

        }

    }
);
```
