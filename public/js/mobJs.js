document.querySelector('.openBar').addEventListener('click',openBar);
function openBar() {
    document.querySelector('.mobSideB').style.display = 'block';
    document.querySelector('.closeBar').style.display = 'block';
    document.querySelector('.closeBar').addEventListener('click', closeBar);
}
function closeBar() {
    document.querySelector('.mobSideB').style.display = 'none';
    document.querySelector('.closeBar').style.display = 'none';

}