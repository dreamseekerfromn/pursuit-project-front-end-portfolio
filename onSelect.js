const select = document.querySelector(".monster_list");
const info_pg = document.querySelector(".info_pg");
const url = "https://mhw-db.com/monsters/";
import { jsonHandler } from './preload.js';
import { monImgFileMatcher } from "./matcher.js";
import { showFetchErr } from "./submit.js";

select.addEventListener('change',e=>onChange(e));

function onChange(e){
    const monsterName = select.options[select.selectedIndex].text;
    console.log(monsterName);
    fetch(`${url}\?q={\"name\":\"${monsterName}\"}`).then(data => data.json()).then(json => jsonHandler(monsterName, json)).catch((errorFetch) => showFetchErr(errorFetch));
}

