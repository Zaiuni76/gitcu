const allComputers = [
    { name: "Msi GF63", price: 900, type: "gaming", image: "img/msi.jpg" }, // للمتصفح
    { name: "Dell inspiRron", price: 350, type: "programming", image: "img/LAENVA.jpg" }, // للبرمجة
    { name: "Dell inspiarin", price: 250, type: "browsing", image: "img/Dell inspiarin.jpg" }, // للألعاب
    { name: "Acer Swift 3", price: 550, type: "editing", image: "img/Acer Swift 3.jpg" }, // للمونتاج
    { name: "microsoft surface go 3", price: 400, type: "programming", image: "img/microsoft surface go 3.jpg" },
        { name: "macbook air", price: 850, type: "editing", image: "img/macbook air.jpg" }, // للمونتاج
            { name: "Dall xps 13", price: 1000, type: "gaming", image: "img/Dall xps 13.jpg" }, // للمونتاج
                { name: "lenovo thinkpad t14", price: 900, type: "editing", image: "img/lenovo thinkpad t14.jpg" }, // للمونتاج
                    { name: "micrwsoft surfas pro 9", price: 11000, type: "programming", image: "img/micrwsoft surfas pro 9.jpg" }, 





]
 

const btntogl = document.getElementById("sideBtn1")
const sidbar = document.getElementById("sidebar")
const btntogl2 = document.getElementById("sideBtn")
btntogl.addEventListener("click", () => {

    sidbar.classList.toggle("active")

})
btntogl2.addEventListener("click", () => {

    sidbar.classList.toggle("active")

})


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
                            <img src="${pc.image}">
                            <div class="card-content">
                                <h2>${pc.name}</h2>
                                <p>السعر: $${pc.price}</p>
                            </div>
                        </div>
                    `;
                }
            }

            
            if (foundAny === false) {
                results.innerHTML = "<h3>ماكو هيج شي</h3>";
            }
        }