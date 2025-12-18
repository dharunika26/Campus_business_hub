function showSection(sectionId) {
    document.querySelectorAll('.section')
        .forEach(section => section.classList.add('hidden'));

    document.getElementById(sectionId)
        .classList.remove('hidden');
}

/* Bar Chart using Canvas */
const canvas = document.getElementById("salesChart");

if (canvas) {
    const ctx = canvas.getContext("2d");

    const products = ["Notebook", "Pen Stand", "Keychain"];
    const sales = [8, 4, 2];

    sales.forEach((value, index) => {
        ctx.fillStyle = "#ADEBB3";
        ctx.fillRect(60 + index * 100, 200 - value * 15, 50, value * 15);

        ctx.fillStyle = "#000";
        ctx.fillText(products[index], 55 + index * 100, 215);
    });
}

function logout() {
    alert("Logged out successfully");
    window.location.href = "index.html"; // redirect to home/login page
}

