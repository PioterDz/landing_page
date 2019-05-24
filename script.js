
document.querySelector('.bar').addEventListener('click', displayMenu);

function displayMenu() {
    document.querySelector('.navigation').classList.toggle('show');
    document.querySelector('.hero').classList.toggle('move');
    document.querySelector('.welcome').classList.toggle('no-show');
}