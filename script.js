// Array of search items with their corresponding URLs
const searchItems = [
    { name: 'محمد صديق المنشاوي', url: 'quraa/menchaoui.html' },
    { name: 'محمود خليل الحصري ', url: 'quraa/kalil.html' },
    { name: 'ياسر الدوسري', url: 'quraa/y_dosari.html' },
    { name: 'علي جابر ', url: 'quraa/a_jbr.html' },
    { name: 'محمد أيوب  ', url: 'quraa/ayoub.html' },
    { name: 'مشاري العفاسي   ', url: 'quraa/afs.html' },
    { name: 'ناصر القطامي    ', url: 'quraa/qtm.html' },
    { name: 'عبد اارحمن السديس    ', url: 'quraa/sds.html' },
    { name: 'محمد الحيدان', url: 'quraa/elhidan.html' }
];

function performSearch() {
    let input = document.getElementById('searchInput').value.toLowerCase().trim();
    let resultsContainer = document.getElementById('searchResults');
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // If input is empty, exit the function
    if (input === '') {
        return;
    }
    
    // Filter search items
    let filteredItems = searchItems.filter(item => item.name.toLowerCase().includes(input));
    
    // Check if there are any results
    if (filteredItems.length === 0) {
        resultsContainer.innerHTML = '<p>هذا القارئ غير موجود حاليا</p>';
    } else {
        // Display filtered results
        filteredItems.forEach(item => {
            let resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `<a href="${item.url}">${item.name}</a>`;
            resultsContainer.appendChild(resultElement);
        });
    }
}
