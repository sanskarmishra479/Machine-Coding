const img = [
    {link: 'https://i.pinimg.com/736x/b1/4e/75/b14e75caf7c6cf3614130eae4fe5ee23.jpg'},
    {link: 'https://i.pinimg.com/474x/2d/46/b7/2d46b7b8aeb8cec7bdc78edeadefdfef.jpg'},
    {link: 'https://i.pinimg.com/736x/65/fa/83/65fa8337de7311b516b0de20d3762298.jpg'},
    {link: 'https://i.pinimg.com/1200x/fb/9b/9a/fb9b9af1089370eaae4e501372d0c729.jpg'},
    {link: 'https://i.pinimg.com/1200x/e4/95/bb/e495bb910f9830955c73854f99c1e910.jpg'},
]

const imgBox = document.getElementById('imgBox');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const imgHolder = document.createElement('img');
imgBox.appendChild(imgHolder);

let currentImg = 0;
imgHolder.src = img[currentImg].link

prevBtn.addEventListener('click', ()=>{
    currentImg--;
    imgHolder.src = img[currentImg].link
})

nextBtn.addEventListener('click', ()=>{
    currentImg++;
    imgHolder.src = img[currentImg].link
})