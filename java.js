// مصفوفة الحواسيب
const allComputers = [
    { name: "Msi GF63", price: 900, type: "gaming", image: "img/msi.jpg", id: 0 },
    { name: "Dell inspiRron", price: 350, type: "programming", image: "img/LAENVA.jpg", id: 1 },
    { name: "Dell inspiarin", price: 250, type: "browsing", image: "img/Dell inspiarin.jpg", id: 2 },
    { name: "Acer Swift 3", price: 550, type: "editing", image: "img/Acer Swift 3.jpg", id: 3 },
    { name: "microsoft surface go 3", price: 400, type: "programming", image: "img/microsoft surface go 3.jpg", id: 4 },
    { name: "macbook air", price: 850, type: "editing", image: "img/macbook air.jpg", id: 5 },
    { name: "Dall xps 13", price: 1000, type: "gaming", image: "img/Dall xps 13.jpg", id: 6 },
    { name: "lenovo thinkpad t14", price: 900, type: "editing", image: "img/lenovo thinkpad t14.jpg", id: 7 },
    { name: "micrwsoft surfas pro 9", price: 11000, type: "programming", image: "img/micrwsoft surfas pro 9.jpg", id: 8 }
];

// التحكم في القائمة الجانبية (Sidebar)
const btntogl = document.getElementById("sideBtn1");
const sidbar = document.getElementById("sidebar");
const btntogl2 = document.getElementById("sideBtn");

if (btntogl && sidbar) {
    btntogl.addEventListener("click", () => {
        sidbar.classList.toggle("active");
    });
}

if (btntogl2 && sidbar) {
    btntogl2.addEventListener("click", () => {
        sidbar.classList.toggle("active");
    });
}

// دالة البحث عن الحاسوب المناسب وعرضه مع زر التفاصيل
function findMyPC() {
    let userBudget = document.getElementById("budget").value;
    let userUsage = document.getElementById("usage").value;
    let results = document.getElementById("resultsArea");
    
    results.innerHTML = ""; 
    let foundAny = false;

    for (let i = 0; i < allComputers.length; i++) {
        let pc = allComputers[i];

        if (pc.price <= userBudget && pc.type === userUsage) {
            foundAny = true; 
            results.innerHTML += `
                <div class="card">
                    <img src="${pc.image}" alt="${pc.name}">
                    <div class="card-content">
                        <h2>${pc.name}</h2>
                        <p>السعر: $${pc.price}</p>
                        <button onclick="viewDetails(${pc.id})">عرض التفاصيل</button>
                    </div>
                </div>
            `;
        }
    }

    if (!foundAny) {
        results.innerHTML = "<h3>ماكو هيج شي</h3>";
    }
}

// دالة الانتقال إلى صفحة التفاصيل
function viewDetails(id) {
    window.location.href = `details.html?id=${id}`;
}