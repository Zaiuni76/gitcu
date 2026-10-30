// مصفوفة الحواسيب (مطلوبة هنا أيضاً لكي يتم البحث فيها عن المنتج)
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

// 1. جلب الـ id من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const computerId = parseInt(urlParams.get('id'));

// 2. البحث عن الكمبيوتر المطابق في المصفوفة
const selectedComputer = allComputers.find(comp => comp.id === computerId);

// 3. عرض البيانات في الصفحة الثانية
const container = document.getElementById('details-container');

if (selectedComputer) {
    document.getElementById('comp-name').innerText = selectedComputer.name;
    document.getElementById('comp-price').innerText = "السعر: " + selectedComputer.price + " $";
    document.getElementById('comp-type').innerText = "التصنيف: " + selectedComputer.type;
    document.getElementById('comp-image').src = selectedComputer.image;
} else if (container) {
    container.innerHTML = "<h2>عذراً، لم يتم العثور على المنتج المطلوب.</h2>";
}