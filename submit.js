/* declaring constants & queries that will be used frequently */
const url = "https://mhw-db.com/monsters/";
const submitB = document.querySelector('#new_item_submit');
const err = document.querySelector('.err_container');
const resultDiv = document.querySelector('.result');
const form = document.querySelector('.new_item');

import { monImgFileMatcher, weaponIconFileMatcher, successStampMatcher } from "./matcher.js";

/**
 * onSubmit
 * Listen to onSubmit event
 * 
 * @type {HTMLElement} - Clicking on the #new_item_submti button will fire this event.
 * @listens onSubmit
 */
submitB.addEventListener('click', e=>onSubmit(e));

/**
 * onSubmit()
 * -------------------------------
 * create a result page on the html.
 * 
 * @param {document#event:onSubmit} e
 * @listen document#onSubmit
 */
function onSubmit(e){
    e.preventDefault();

    /* declaring queries & values */
    const monsterBox = document.querySelector('.monster_list');
    const monsterName = monsterBox.options[monsterBox.selectedIndex].text;
    const memo = document.querySelector('.memo').value;
    const weaponQuery = document.querySelector('.weapon');
    const weapon = weaponQuery.options[weaponQuery.selectedIndex].text;
    const difficultyQuery = document.querySelector('.difficulty');
    const difficulty = difficultyQuery.options[difficultyQuery.selectedIndex].text;
    const numOfTrial = document.querySelector('.number_of_trial').value;
    const successQuery = document.querySelector('.success');
    const success = successQuery.options[successQuery.selectedIndex].text;

    /* validation for the data */
    if(validation(numOfTrial, difficulty, monsterName)){
        createDiary(weapon, memo, difficulty, numOfTrial, success, monsterName);
    }

    /* reset to default */
    form.reset(); 
}

/**
 * validation()
 * -----------------------------
 * varify inputs from the form.
 * 
 * @param {string} numOfTrial - number of trial..it should be integer.
 * @param {string} rank - certain monsters can be found in certain difficulty.
 * @param {string} monsterName - a monster's name
 * @returns {boolean}
 */
function validation(numOfTrial, rank, monsterName){
    const errMsgContainerQuery = document.querySelector('.err_msg_container');

    if(errMsgContainerQuery){
        errMsgContainerQuery.remove();
    }

    /* create new container for error message */
    const errorMsgContainer = document.createElement('p');
    errorMsgContainer.setAttribute('class','err_msg_container');
    
    if(!validateNum(errorMsgContainer, numOfTrial)){
        return false;
    }
    if(!validateRank(errorMsgContainer, rank, monsterName)){
        return false;
    }

    return true;
}

/**
 * validateRank()
 * ----------------------------------------
 * validate the difficulty (monster's rank) of the monster.
 * 
 * @param {object} errorMsgContainer - where the error message placed
 * @param {string} rank - a monster's rank to validate
 * @param {string} monsterName - a monster's name
 * @returns {boolean}
 */
function validateRank(errorMsgContainer, rank, monsterName){
    const lowRank = ["Great Jagras", "Kulu-Ya-Ku", "Pukei-Pukei", "Barroth", "Jyuratodus", "Tobi-Kadachi", "Anjanath", "Rathian", "Tzitzi-Ya-Ku", "Paolumu", "Great Girros", "Radobaan", "Legiana", "Odogaron", "Rathalos", "Diablos"];
    const highRank = ["Zorah Magdaros", "Kirin", "Bazelgeuse", "Pink Rathian", "Dodogama", "Kushala Daora", "Lavasioth", "Nergigante", "Teostra", "Uragaan", "Vaal Hazak", "Xeno'jiiva", "Azure Rathalos", "Black Diablos", "Deviljho", "Kulve Taroth", "Lunastra", "Behemoth", "Leshen", "Ancient Leshen", "Great Jagras", "Kulu-Ya-Ku", "Pukei-Pukei", "Barroth", "Jyuratodus", "Tobi-Kadachi", "Anjanath", "Rathian", "Tzitzi-Ya-Ku", "Paolumu", "Great Girros", "Radobaan", "Legiana", "Odogaron", "Rathalos", "Diablos"];
    const masterRank = ["Banbaro", "Barioth", "Beotodus", "Brachydios", "Brute Tigrex", "Coral Pukei-Pukei", "Ebony Odogaron", "Fulgur Anjanath", "Glavenus", "Namielle", "Nargacuga", "Nightshade Paolumu", "Rajang", "Shara Ishvalda", "Shrieking Legiana", "Tigrex", "Velkhana", "Viper Tobi-Kadachi", "Yian Garuga", "Zinogre", "Alatreon", "Fatalis", "Frostfang Barioth", "Furious Rajang", "Gold Rathian", "Raging Brachydios", "Safi'jiiva", "Scarred Yian Garuga", "Stygian Zinogre", "Kirin", "Seething Bazelgeuse", "Pink Rathian", "Dodogama", "Kushala Daora", "Lavasioth", "Ruiner Nergigante", "Teostra", "Uragaan", "Blackveil Vaal Hazak", "Azure Rathalos", "Black Diablos", "Great Jagras", "Kulu-Ya-Ku", "Pukei-Pukei","Lunastra", "Barroth", "Jyuratodus", "Tobi-Kadachi", "Anjanath", "Rathian", "Tzitzi-Ya-Ku", "Paolumu", "Great Girros", "Radobaan", "Legiana", "Odogaron", "Rathalos", "Diablos"];

    if(rank == "Low Rank"){
        if(!lowRank.find(elem => elem == monsterName)){
            const span = document.createElement('span');
            span.innerText = `${monsterName} is not a "${rank}" monster.`;
            
            errorMsgContainer.appendChild(span);
            err.appendChild(errorMsgContainer);
            return false;
        }
        return true;
    }
    else if(rank == "High Rank"){
        if(!highRank.find(elem => elem == monsterName)){
            const span = document.createElement('span');
            span.innerText = `${monsterName} is not a "${rank}" monster.`;
            
            errorMsgContainer.appendChild(span);
            err.appendChild(errorMsgContainer);
            return false;
        }
        return true;
    }
    else if(rank == "Master Rank"){
        if(!masterRank.find(elem => elem == monsterName)){
            const span = document.createElement('span');
            span.innerText = `${monsterName} is not a "${rank}" monster.`;
            
            errorMsgContainer.appendChild(span);
            err.appendChild(errorMsgContainer);
            return false;
            }
        return true;
    }
    else {
        console.log("something wrong");
        return false;
    }
}

/**
 * validateNum()
 * ---------------------------------
 * validate the string input from the form.
 * This function will filter out the negative numbers/floats/any character besides number.
 * 
 * @param {object} errorMsgContainer - place to put error messages.
 * @param {string} str - a string value from the input field on the html page.
 * @returns {boolean}
 */
function validateNum(errorMsgContainer, str){
    /* is it digit? */
    if(!/\d+/.test(str.toString())){
        const span = document.createElement('span');
        span.innerText = "digit only";
        
        errorMsgContainer.appendChild(span);
        err.appendChild(errorMsgContainer);
        return false;
    }
    
    /* the event will not accept any number equal or less than 0 */
    if(Number(str) == 0){
        const span = document.createElement('span');
        span.innerText = "You should try at least once, duh";
        
        errorMsgContainer.appendChild(span);
        err.appendChild(errorMsgContainer);
        return false;
    }
    else if(Number(str) < 0){
        const span = document.createElement('span');
        span.innerText = "The number cannot be negative.";
        
        errorMsgContainer.appendChild(span);
        err.appendChild(errorMsgContainer);
        return false;
    }

    /* need to omit floats */
    else if(Number(str) % 1 !== 0){
        const span = document.createElement('span');
        span.innerText = "The number cannot be float.";
        
        errorMsgContainer.appendChild(span);
        err.appendChild(errorMsgContainer);
        return false;
    }
    else{
        return true;
    }
}

/**
 * createDiary()
 * ----------------------------------------
 * creating actuall container for the result page.
 * this container will be put into .result div
 * 
 * @param {string} weapon - name of weapon that the user used
 * @param {string} memo - extra stuff the user want to write
 * @param {string} difficulty - quest rank
 * @param {string} numOfTrial - the number of trial 
 * @param {string} success - is quest clear?
 * @param {string} monsterName - name of the monster
 */
function createDiary(weapon, memo, difficulty, numOfTrial, success, monsterName){
    /* creating elements for each subcontainers */
    const div = document.createElement("div");
    const monNameTag = document.createElement("div");
    const weaponTag = document.createElement("p");
    const difficultyTag = document.createElement("p");
    const trialTag = document.createElement("p");
    const successTag = document.createElement("p");
    const memoTag = document.createElement("p");

    /* listDiv will contains all the subcontainers and prepend to the .result */
    const listDiv = document.createElement("div");
    listDiv.setAttribute('class', 'list');

    /* fillout subcontainers */
    monNameFieldGen(monNameTag, monsterName);
    div.appendChild(monNameTag);

    weaponFieldGen(weaponTag, weapon);
    div.appendChild(weaponTag);

    difficultyFieldGen(difficultyTag, difficulty);
    div.appendChild(difficultyTag);
    
    numOfTrialFieldGen(trialTag, numOfTrial);
    div.appendChild(trialTag);
    
    successFieldGen(successTag, success);
    div.appendChild(successTag);

    memoFieldGen(memoTag, memo);
    div.appendChild(memoTag);

    /* set class name, so we can hide this record */
    div.setAttribute('class', 'record_hidden');
    
    
    listDiv.appendChild(div);
    addListField(listDiv, monsterName);
    
    /* clicking the list will show the detail page */
    listDiv.addEventListener("click", () => {
        if(div.className == 'record_hidden'){
            div.className = 'record_show';
        }
        else{
            div.className = 'record_hidden';
        }
    });

    /* adding a remove button */
    addRemove(listDiv);

    resultDiv.prepend(listDiv);
}

function memoFieldGen(tag, memo){
    tag.innerHTML = `<span class="list_sub">${memo}</span>`;
}

/**
 * addListField()
 * ---------------------------------------
 * container for the list page. Date & monster name will be hold in this div.
 * 
 * @param {object} tag - where this inner tags are hold
 * @param {string} monsterName - monster name to show
 */
function addListField(tag, monsterName){
    const spanTime = document.createElement('span');
    let today = new Date();
    let time = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    spanTime.innerText = time;

    const spanName = document.createElement('span');
    spanName.innerText = monsterName;

    const img = document.createElement('img');

    /* img should come first */
    img.setAttribute('src', `./assets/img/monster_icons/${monImgFileMatcher[monsterName]}`);
    img.setAttribute('class', "monster_icon_small");

    const tab1 = document.createElement('span');
    tab1.setAttribute('class','tab');
    const tab2 = document.createElement('span');
    tab2.setAttribute('class','tab');
    tag.appendChild(spanTime);
    tag.appendChild(tab1);
    tag.appendChild(img);
    tag.appendChild(spanName);
    tag.appendChild(tab2);
}

/**
 * addRemove()
 * -------------------------------
 * adding a remove button & its event to the [tag]
 * @param {object} tag - where this button is attatched.
 */
function addRemove(tag){
    const button = document.createElement('button');
    button.innerText = 'remove';
    button.addEventListener('click', ()=>tag.remove());
    tag.appendChild(button);
}

/**
 * successFieldGen()
 * ----------------------------
 * attatch an equivalent stamp img to the subcontainer.
 * 
 * @param {object} successTag - the tag where the image is attatched.
 * @param {string} success - string value to use for finding the right stamp.
 */
function successFieldGen(successTag, success){
    const img = document.createElement('img');
    img.setAttribute('class','stamp');
    img.setAttribute('src',`./assets/img/stamp/${successStampMatcher[success]}`);
    img.setAttribute('class',"stamp");
    successTag.appendChild(img);
}

/**
 * numOfTrialFieldGen()
 * ----------------------------------------------
 * Put the number of trial to the record.
 * 
 * @param {object} trialTag - the tag where we put our string.
 * @param {string} numOfTrial - string value for the number.
 */
function numOfTrialFieldGen(trialTag, numOfTrial){
    trialTag.innerHTML = `<span class="list_sub">Number of Trial</span> ${numOfTrial}`;
}

/**
 * difficultyFieldGen()
 * -----------------------------------------------
 * Place the difficulty value (in MH..it is called hunter rank or quest rank...some equivalent term).
 * @param {object} difficultyTag - the tag to hold the value
 * @param {string} difficulty - the string value for the difficulty
 */
function difficultyFieldGen(difficultyTag, difficulty){
    difficultyTag.innerHTML = `<span class="list_sub">Quest Rank</span> ${difficulty}`;
}

/**
 * weaponFieldGen()
 * ----------------------------------------------
 * place the weapon icon and the name to a tag.
 * 
 * @param {object} weaponTag - the tag to hold <img> and the name of weapon.
 * @param {string} weapon - the string value of the weapon, use to find the icon for it.
 */
function weaponFieldGen(weaponTag, weapon){
    weaponTag.innerHTML = `<span class="list_sub">${weapon}</span>`;
    
    const img = document.createElement('img');

    img.setAttribute('src', `./assets/img/weapons/${weaponIconFileMatcher[weapon]}`);
    img.setAttribute('class', "weapon_icon");

    weaponTag.appendChild(img);
    weaponTag.setAttribute('class', 'weapon_field');
}

/**
 * monNameFieldGen()
 * ----------------------------------
 * Monster Name Field Generator. This function will place the monster icon to the tag
 * and create a tooltip for the monster's weakness.
 * 
 * @param {object} monNameTag - a tag where it put all the child tags.
 * @param {string} monsterName - a string value for the monster name.
 */
function monNameFieldGen(monNameTag, monsterName){
    monNameTag.innerHTML = `<span class="list_sub">${monsterName}</span>`;
    monNameTag.setAttribute('class','monster_info');

    const img = document.createElement('img');

    /* img should come first */
    img.setAttribute('src', `./assets/img/monster_icons/${monImgFileMatcher[monsterName]}`);
    img.setAttribute('class', "monster_icon");
    monNameTag.prepend(img);

    /* creating a tooltip. Hovering to the icon will display it */
    const tooltip = document.createElement('span');
    tooltip.setAttribute('class','tooltip');

    toolTipGen(tooltip, monsterName);
    monNameTag.appendChild(tooltip);
}

/**
 * toolTipGen()
 * -----------------------------------
 * pull data from api to make a tooltip.
 * 
 * @param {object} tooltip 
 * @param {string} monsterName 
 */
function toolTipGen(tooltip, monsterName){
    fetch(`${url}\?q={\"name\":\"${monsterName}\"}`).then(data => data.json()).then(json => jsonHandler(tooltip, json)).catch((errorFetch) => showFetchErr(errorFetch));
}

/**
 * showFetchErr()
 * -----------------------------
 * will attatch error code to the error message container.
 * 
 * @param {string} errMessage - 
 */
export function showFetchErr(errMessage){
    const errMsgContainerQuery = document.querySelector('.err_msg_container');

    if(errMsgContainerQuery){
        errMsgContainerQuery.remove();
    }

    /* create new container for error message */
    const errorMsgContainer = document.createElement('p');
    errorMsgContainer.setAttribute('class','err_msg_container');
    
    const span = document.createElement('span');
    span.innerText = `Error code :${errMessage}`;
            
    errorMsgContainer.appendChild(span);
    err.appendChild(errorMsgContainer);
}

/**
 * jsonHandler()
 * ------------------------------------
 * a handling function to handle json from the api.
 * it will create actual tooltip.
 * 
 * @param {object} tooltip - the tag where the data is attatched.
 * @param {object[]} json - JSON from the api.
 */
function jsonHandler(tooltip,json){
    //let name = json[0].name;
    //const location = json[0].location;
    const weakness = json[0].weaknesses;

    let tooltipStr = `Weaknesses\n`;
    for(let index of weakness){
        tooltipStr += `${index.element}\t`;
        for(let star = 0; star < index.stars; star++){
            tooltipStr += '⭐';
        }
        tooltipStr += `\n`;
    }

    tooltip.innerText = tooltipStr;
}