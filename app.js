const shareBtn = document.querySelector('.card__data-image');
const share = document.querySelector('.card__share');
const shareBlock = share.querySelector('.card__share-block');



shareBtn.addEventListener('click', () => {
    share.classList.toggle('active');
})

shareBlock.addEventListener('click', function (event) {
    event._isClick = true;
})

share.addEventListener('click', function (event) {
    if (event._isClick === true) return
    share.classList.remove('active');
});