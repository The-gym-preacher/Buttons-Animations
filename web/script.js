document.addEventListener("DOMContentLoaded", () => {
    // for the preloader
    setTimeout(function () {
        document.getElementById("preloader").classList.add("opacity-0");
        setTimeout(function () {
            document.getElementById("preloader").classList.add("hidden");
        }, 700); // Wait for fade-out animation to complete
    }, 4000);

    const buttons = document.querySelectorAll(".btn");
    
    // For the first section
    const div1 = document.getElementById("div");
    const output1 = document.getElementById("output");
    const copyBtn1 = document.getElementById("copy");
    const copM1 = document.getElementById("copM");

    // For the second section (Flashy Animation)
    const div2 = document.getElementById("div1");
    const output2 = document.getElementById("output1");
    const copyBtn2 = document.getElementById("copy1");
    const copM2 = document.getElementById("copM1");

    let lastClickedHtml1 = "";
    let lastClickedHtml2 = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const parentSection = button.closest(".grid") ? div1 : div2;
            const outputElement = parentSection === div1 ? output1 : output2;

            parentSection.classList.remove("hidden");
            setTimeout(() => {
                parentSection.classList.add("hidden");
            }, 50000);

            if (parentSection === div1) {
                lastClickedHtml1 = button.outerHTML;
                output1.innerText = lastClickedHtml1;
            } else {
                lastClickedHtml2 = button.outerHTML;
                output2.innerText = lastClickedHtml2;
            }
        });
    });

    // Copy functions
    copyBtn1.addEventListener("click", () => {
        if (lastClickedHtml1) {
            navigator.clipboard.writeText(lastClickedHtml1).then(() => {
                copM1.classList.remove("hidden");
                setTimeout(() => {
                    copM1.classList.add("hidden");
                }, 3000);
            }).catch(err => console.error("Failed to copy:", err));
        }
    });

    copyBtn2.addEventListener("click", () => {
        if (lastClickedHtml2) {
            navigator.clipboard.writeText(lastClickedHtml2).then(() => {
                copM2.classList.remove("hidden");
                setTimeout(() => {
                    copM2.classList.add("hidden");
                }, 3000);
            }).catch(err => console.error("Failed to copy:", err));
        }
    });
});
