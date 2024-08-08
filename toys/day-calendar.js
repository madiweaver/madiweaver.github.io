function refresh() {
    const eMonth = document.getElementById("month");
    if (!eMonth) {
        console.error("Failed to select month element");
        return;
    }

    const eDay = document.getElementById("day");
    if (!eDay) {
        console.error("Failed to select day element");
        return;
    }

    const eWeekDay = document.getElementById("week-day");
    if (!eWeekDay) {
        console.error("Failed to select week day element");
        return;
    }

    const now = new Date();
    eMonth.innerText = now.toLocaleString("default", { month: "short" });
    eDay.innerText = now.toLocaleString("default", { day: "numeric" });
    eWeekDay.innerText = now.toLocaleString("default", { weekday: "short" });
}

document.addEventListener("DOMContentLoaded", () => {
    refresh();
    setInterval(refresh, 1000);
});