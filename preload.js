const info_pg = document.querySelector(".info_pg");
import { monImgFileMatcher } from "./matcher.js";
import { showFetchErr } from "./submit.js";
const url = "https://mhw-db.com/monsters/";

/**
 * DOMContentLoaded
 * Listen to preload event
 * 
 * @type {HTMLElement} - event will be fired when the page is loaded/
 * @listens DOMContentLoaded
 */
window.addEventListener("DOMContentLoaded", (e) => onPageLoaded(e));

/**
 * onPageLoaded()
 * ----------------------------------------
 * trigger when the page is loaded
 * 
 * @param {document#event:DOMContentLoaded} e 
 * @listens DOMContentLoaded
 */
function onPageLoaded(e){
    const monsterBox = document.querySelector('.monster_list');
    const monsterName = randomProperty(monImgFileMatcher);

    fetch(`${url}\?q={\"name\":\"${monsterName}\"}`).then(data => data.json()).then(json => jsonHandler(monsterName, json)).catch((errorFetch) => showFetchErr(errorFetch));;
}

/**
 * jsonHandler()
 * ---------------------------
 * a function to handle json.
 * this will fill out random info for a monster to .info_pg
 * 
 * @param {string} monsterName - name of a monster, will be selected randomly
 * @param {Object*} json - json from the api.
 */
function jsonHandler(monsterName, json){
    /* if info is already exist, remove it */
    const existingQuery = document.querySelector('.info_pg_record');

    if(existingQuery){
        existingQuery.remove();
    }

    /* declare HTML elements w/ attributes */
    const monNameTag = document.createElement("div");
    monNameTag.innerHTML = `<span class="list_sub">${monsterName}</span>`;
    monNameTag.setAttribute('class','info_pg_record');
    
    const imgIcon = document.createElement('img');
    
    /* img should come first */
    imgIcon.setAttribute('src', `./assets/img/monster_icons/${monImgFileMatcher[monsterName]}`);
    imgIcon.setAttribute('class', "monster_icon");
    monNameTag.prepend(imgIcon);

    info_pg.appendChild(monNameTag);
    monsterInfoGen(info_pg, json);
    
}

/**
 * monsterInfoGen()
 * ----------------------------
 * will fill out w/ info from the api to [tag].
 * 
 * @param {object} tag - where we put all info
 * @param {object[]} json - json from api.
 */
function monsterInfoGen(tag, json){
    const species = json[0]["species"];
    const description = json[0]["description"];
    const elements = json[0]["elements"];

    const speciesDiv = document.createElement('div');
    speciesDiv.innerHTML = `<span class="list_sub">${species}</span>`;
    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = `<span class="list_sub">${description}</span>`;
    const elementsDiv = document.createElement('div');
    elementsDiv.innerHTML = `<span class="list_sub">${json[0].name}'s Element </span>`;
    const elementsP = document.createElement('p');
    for(let singleElem of elements){
        elementsP.innerHTML += `<span class="elements" id="${singleElem}">${singleElem}</span><br />`;
    }

    tag.appendChild(speciesDiv);
    tag.appendChild(descriptionDiv);
    elementsDiv.appendChild(elementsP);
    tag.appendChild(elementsDiv);
}

/**
 * randomProperty()
 * ----------------------
 * return random property name of [obj] that is passed into this function.
 * 
 * @param {object} obj - an object.
 * @returns {string} - random name of property
 */
function randomProperty(obj) {
    let keys = Object.keys(obj);
    return keys[keys.length * Math.random() << 0];
}