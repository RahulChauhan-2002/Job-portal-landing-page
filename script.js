const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

const sortBtns = document.querySelectorAll(".job-id > *");
const sortitems = document.querySelectorAll(".jobs-container > *"); // Fixed selector

sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        // Filter job items
        const targetdata = btn.getAttribute("data-target");
        sortitems.forEach((item) => {
            item.classList.add("delete");
            if (item.getAttribute("data-item") === targetdata || targetdata === "all") {
                item.classList.remove("delete");
            }
        });
    });
});
