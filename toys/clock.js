function render() {
    const now = new Date();

    const clock = document.getElementById("clock");
    clock.innerText = now.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" });
}

document.addEventListener("DOMContentLoaded", () => {
    render();
    
    setInterval(render, 1000);
});