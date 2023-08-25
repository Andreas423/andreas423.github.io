window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", event => {
    const preferredColorScheme = event.matches ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", preferredColorScheme);
});