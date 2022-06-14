//const mainBtn = document.querySelector('button');
//
//let activeElem;
//function activeBtn(elem) {
//    if(activeElem) {
//        activeElem.classList.toggle('active_btn');
//    }
//    activeElem = elem;
//    activeElem.classList.toggle('active_btn');
//}
//
//console.log(mainBtn);
//
//function btnClickHandler(e) {
//    if(e.target.tagName === 'BUTTON')
//        activeBtn(e.target);
//}
//// $('ul > li > button');
//document.querySelector('ul.main_tabbtn_list')
//    .addEventListener('click', btnClickHandler)
//// document.querySelectorAll('button').forEach((item) => {
////     item.addEventListener('click', btnClickHandler);
//// });
//
//
//activeBtn(mainBtn)


const btns = document.querySelectorAll('ul.main_tabbtn_list button');

const click = el => {
    btns?.length > 0 && btns?.forEach(btn => btn?.classList.remove('active_btn'));
    el && el?.classList?.add('active_btn');
}

btns?.forEach(btn => btn?.addEventListener('click', e => click(e.target)));

btns?.length > 0 && click(btns[0]);