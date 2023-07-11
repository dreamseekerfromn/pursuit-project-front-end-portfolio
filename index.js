const url = "https://mhw-db.com/monsters/";
const submitB = document.querySelector('#new_item_submit');
const err = document.querySelector('.err');

submitB.addEventListener('click', e=>onSubmit(e));

function onSubmit(e){
    e.preventDefault();
    //https://mhw-db.com/monsters?q={"name":"Bazelgeuse"}
    //fetch(``)
    const monsterBox = document.querySelector('.monster_list');
    const monsterName = monsterBox.options[monsterBox.selectedIndex].text;
    fetch(`${url}\?q={\"name\":\"${monsterName}\"}`).then(data => data.json()).then(json => jsonHandler(json));
    createContainer(e);
}

function createContainer(e){
    const div = document.createElement("div");
    const article = document.createElement("article");
    const image = document.createElement("img");
    const p = document.createElement('p');



}

function jsonHandler(json){
    console.log(json);
}