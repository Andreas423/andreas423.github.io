window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
    const preferredColorScheme = event.matches ? "dark" : "light";
    updateColorScheme(preferredColorScheme);
});

function updateColorScheme(preferredColorScheme) {
    document.documentElement.setAttribute("data-bs-theme", preferredColorScheme);
}

const preferredColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
updateColorScheme(preferredColorScheme);