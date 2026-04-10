const data = [
    {
        title: "Accordion Item 1",
        content: "This is the content for item 1.",
    },
    {
        title: "Accordion Item 2",
        content: "This is the content for item 2.",
    },
    {
        title: "Accordion Item 3",
        content: "This is the content for item 3.",
    },
    {
        title: "Accordion Item 4",
        content: "This is the content for item 4.",
    },
];

const accordions = document.getElementById('Accordion');

data.forEach((item) => {
    const accordionItems = document.createElement('div');
    accordionItems.classList.add('accordionItems');

    const accordionTitle = document.createElement('div');
    accordionTitle.classList.add('accordionTitle')
    accordionTitle.innerText = item.title;

    const accordionContent = document.createElement('div');
    accordionContent.classList.add('accordionContent');
    accordionContent.innerText = item.content;

    accordionContent.style.display = 'none';
    
    accordionItems.addEventListener('click', () => {
        const isOpen = accordionContent.style.display === 'block';
        accordionContent.style.display = isOpen ? 'none' : 'block';
    })

    accordionItems.appendChild(accordionTitle)
    accordionItems.appendChild(accordionContent)
    accordions.appendChild(accordionItems);
})