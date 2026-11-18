document.getElementById('button').addEventListener('click', () => {
    const links = document.querySelectorAll('a');
    if (links) {
        links.forEach((link) => {
            link.classList.toggle('dark');
        });
    }
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('dark');
    }
    document.body.classList.toggle('dark');
    
    const listItems = document.querySelectorAll('article.about ul li');
    if (listItems) {
        listItems.forEach((listItem) => {
            listItem.classList.toggle('dark');
        });
    }
    
    const footerList = document.querySelectorAll('footer ul li');
    if (footerList) {
        footerList.forEach((footerListElement) => {
            footerListElement.classList.toggle('dark');
        });
    }
});
