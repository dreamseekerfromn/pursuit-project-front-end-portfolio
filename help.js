const closeB = document.querySelector('.closeB');

closeB.addEventListener('click', (e) => onClickClose(e));

/**
 * onClickClose()
 * ------------------
 * will close the current window.
 * 
 * @param {*} e 
 */
function onClickClose(e){
    window.open('','_self').close();
}