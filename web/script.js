document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const div = document.getElementById("div");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copy");
    const copM = document.getElementById("copM");

    let lastClickedHtml = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            div.classList.remove("hidden");
            setTimeout(()=>{
                div.classList.add("hidden")
            }, 50000)
            lastClickedHtml = button.outerHTML;
            output.innerText = lastClickedHtml;
        });
    });

    copyBtn.addEventListener("click", () => {
        if (lastClickedHtml) {
            navigator.clipboard.writeText(lastClickedHtml).then(() => {
                copM.classList.remove("hidden"); 
                setTimeout(() => {
                    copM.classList.add("hidden");
                }, 3000);
            }).catch(err => {
                console.error("Failed to copy:", err);
            });
        }
    });
});