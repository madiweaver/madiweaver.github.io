function render() {
    const now = new Date();

    const month = document.getElementById("month");
    month.innerText = now.toLocaleString("default", { month: "long" });

    const year = document.getElementById("year");
    year.innerText = now.toLocaleString("default", { year: "numeric" });

    const start = new Date();
    start.setDate(1);
    start.setDate(start.getDate() - start.getDay());
    const curr = new Date(start);

    console.log(start);
    console.log(start.getDay());

    const body = document.getElementById("body");

    const weeks = [];

    for (let i = 0; i < 5; i++) {
        const week = document.createElement("div");
        week.classList.add("week");

        for (let j = 0; j < 7; j++) {
            curr.setDate(curr.getDate() + 1);

            const day = document.createElement("div");
            day.classList.add("day");
            if (curr.getMonth() !== now.getMonth()) day.classList.add("other");
            if (curr.getDate() === now.getDate()) day.classList.add("today");
            day.innerText = curr.getDate();
            week.appendChild(day);
        }

        weeks.push(week);
    }

    body.replaceChildren(...weeks);
}

document.addEventListener("DOMContentLoaded", () => {
    render();
    
    setInterval(render, 1000);
});