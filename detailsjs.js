// مصفوفة الحواسيب مع المواصفات التفصيلية (على شكل جدول)
const allComputers = [
    { 
        name: "microsoft surface go 4", price: 400, type: "programming", image: "img/microsoft surface go 3.jpg", id: 4,
        specs: [
            { label: "المعالج (CPU)", value: "Intel Processor N200" },
            { label: "الأنوية", value: "4 Cores" },
            { label: "التردد", value: "يصل إلى 3.7 GHz" },
            { label: "كرت الشاشة (GPU)", value: "Intel UHD Graphics" },
            { label: "الرام (RAM)", value: "8GB LPDDR5" },
            { label: "التخزين", value: "128GB / 256GB UFS" },
            { label: "الشاشة", value: "10.5 بوصة PixelSense" },
            { label: "الدقة", value: "1920 × 1280" },
            { label: "اللمس", value: "10 نقاط لمس" },
            { label: "نظام التشغيل", value: "Windows 11 Pro" },
            { label: "البطارية", value: "حتى 12.5 ساعة (حسب الاستخدام)" }
        ]
    },
    { 
        name: "Msi GF63", price: 900, type: "gaming", image: "img/msi.jpg", id: 0,
        specs: [
            { label: "المعالج (CPU)", value: "Intel Core i7-11800H" },
            { label: "الأنوية", value: "8 Cores" },
            { label: "كرت الشاشة (GPU)", value: "NVIDIA RTX 3050" },
            { label: "الرام (RAM)", value: "16GB DDR4" },
            { label: "الشاشة", value: "15.6 بوصة 144Hz" }
        ]
    },
    { 
        name: "Dell inspiRron", price: 350, type: "programming", image: "img/LAENVA.jpg", id: 1,
        specs: [
            { label: "المعالج (CPU)", value: "Intel Core i5-1135G7" },
            { label: "كرت الشاشة (GPU)", value: "Intel Iris Xe" },
            { label: "الرام (RAM)", value: "8GB DDR4" },
            { label: "الشاشة", value: "14 بوصة FHD" }
        ]
    },
    { 
        name: "Dell inspiarin", price: 250, type: "browsing", image: "img/Dell inspiarin.jpg", id: 2,
        specs: [
            { label: "المعالج (CPU)", value: "Intel Core i3-1005G1" },
            { label: "كرت الشاشة (GPU)", value: "Intel UHD" },
            { label: "الرام (RAM)", value: "4GB" },
            { label: "الشاشة", value: "15.6 بوصة HD" }
        ]
    },
    { 
        name: "Acer Swift 3", price: 550, type: "editing", image: "img/Acer Swift 3.jpg", id: 3,
        specs: [
            { label: "المعالج (CPU)", value: "AMD Ryzen 5 4500U" },
            { label: "كرت الشاشة (GPU)", value: "AMD Radeon Graphics" },
            { label: "الرام (RAM)", value: "8GB" },
            { label: "الشاشة", value: "14 بوصة FHD" }
        ]
    },
    { 
        name: "macbook air", price: 850, type: "editing", image: "img/macbook air.jpg", id: 5,
        specs: [
            { label: "المعالج (CPU)", value: "Apple M1" },
            { label: "كرت الشاشة (GPU)", value: "Apple M1 7-core" },
            { label: "الرام (RAM)", value: "8GB" },
            { label: "الشاشة", value: "13.3 بوصة Retina" }
        ]
    },
    { 
        name: "Dall xps 13", price: 1000, type: "gaming", image: "img/Dall xps 13.jpg", id: 6,
        specs: [
            { label: "المعالج (CPU)", value: "Intel Core i7-1165G7" },
            { label: "كرت الشاشة (GPU)", value: "Intel Iris Xe" },
            { label: "الرام (RAM)", value: "16GB" },
            { label: "الشاشة", value: "13.4 بوصة 4K" }
        ]
    },
    { 
        name: "lenovo thinkpad t14", price: 900, type: "editing", image: "img/lenovo thinkpad t14.jpg", id: 7,
        specs: [
            { label: "المعالج (CPU)", value: "AMD Ryzen 7 PRO 4750U" },
            { label: "كرت الشاشة (GPU)", value: "AMD Radeon" },
            { label: "الرام (RAM)", value: "16GB" },
            { label: "الشاشة", value: "14 بوصة FHD" }
        ]
    },
    { 
        name: "micrwsoft surfas pro 9", price: 11000, type: "programming", image: "img/micrwsoft surfas pro 9.jpg", id: 8,
        specs: [
            { label: "المعالج (CPU)", value: "Intel Core i5-1235U" },
            { label: "كرت الشاشة (GPU)", value: "Intel Iris Xe" },
            { label: "الرام (RAM)", value: "16GB" },
            { label: "الشاشة", value: "13 بوصة 120Hz" }
        ]
    }
];

// جلب الـ id من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const computerId = parseInt(urlParams.get('id'));

// البحث عن الكمبيوتر المطابق في المصفوفة
const selectedComputer = allComputers.find(comp => comp.id === computerId);

// عرض البيانات في الصفحة إذا وجد المنتج
if (selectedComputer) {
    document.getElementById('comp-name').innerText = selectedComputer.name;
    document.getElementById('comp-price').innerText = "السعر: " + selectedComputer.price + " $";
    document.getElementById('comp-type').innerText = "التصنيف: " + selectedComputer.type;
    document.getElementById('comp-image').src = selectedComputer.image;

    // تعبئة جدول المواصفات ديناميكياً
    const tbody = document.getElementById('specs-tbody');
    tbody.innerHTML = ""; // تفريغ الجدول أولاً
    
    if (selectedComputer.specs && selectedComputer.specs.length > 0) {
        selectedComputer.specs.forEach(spec => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${spec.label}</td><td>${spec.value}</td>`;
            tbody.appendChild(row);
        });
    }
} else {
    // إذا لم يتم العثور على المنتج
    document.body.innerHTML = `<h2 style="text-align: center; color: red; margin-top: 100px;">عذراً، لم يتم العثور على المنتج المطلوب.</h2>`;
}