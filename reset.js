const reset = document.querySelector('.new_item_reset');

reset.addEventListener('click',()=>{resetOnClick()});

function resetOnClick(){
    const form = document.querySelector(".new_item");
    form.reset();
}