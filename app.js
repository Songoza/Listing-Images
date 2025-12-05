document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.classList.toggle('hidden', index !== pageIndex);
        });
        prevButton.disabled = pageIndex === 0;
        nextButton.disabled = pageIndex === pages.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
