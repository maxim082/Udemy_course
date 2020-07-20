window.addEventListener('DOMContentLoader', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabsContent.forEach(tab => {
           tab.classList.remove('tabheader__item_active');
        });
    }
})