const mainBtn = document.querySelectorAll('button');

console.log(mainBtn);

function btnClickHandler(e) {
    console.log(e.currentTarget);
    this.classList.toggle('active_btn');

}

mainBtn.forEach((item) => {
    item.addEventListener('click', btnClickHandler);
});

