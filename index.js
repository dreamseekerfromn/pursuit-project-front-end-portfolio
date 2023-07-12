const url = "https://mhw-db.com/monsters/";
const submitB = document.querySelector('#new_item_submit');
const err = document.querySelector('.err_container');
const resultDiv = document.querySelector('.result');

const monImgFileMatcher = {
    "Anjanath" : "MHW_Anjanath_Icon.webp",
    "Barroth" : "MHW_Barroth_Icon.webp",
    "Bazelgeuse" : "MHW_Bazelgeuse_Icon.webp",
    "Seething Bazelgeuse" : "MHWI_Seething_Bazelgeuse_Icon.webp",
    /*"Behemoth"
    "Deviljho"
    "Savage Deviljho"
    "Diablos"
    "Black Diablos"
    "Dodogama"
    "Great Girros"
    "Great Jagras"
    "Jyuratodus"
    "Kirin"
    "Kulu-Ya-Ku:
    "Kulve Taroth"
    "Kushala Daora"
    'Lavasioth '
    'Legiana'
    'Lunastra'
    'Nergigante'
    'Odogaron'
    'Paolumu'
    'Pukei-Pukei'
    'Radobaan'
    'Rathalos'
    'Azure Rathalos'
    'Rathian'
    'Pink Rathian'
    'Teostra'
    'Tobi-Kadachi'
    'Tzitzi-Ya-Ku'
    'Uragaan'
    'Vaal Hazak'
    'Blackveil Vaal Hazak'
    'Xeno\'Jiiva'
    'Zorah Magdaros'
    'Ancient Leshen'
    'Leshen'
    'Banbaro'
    'Belotodus'
    'Nargacuga'
    'Velkhana'
    'Tigrex'
    'Shrieking Legiana'
    'Barioth'
    'Glavenus'
    'Brachydios'
    'Fulgur Anjanath'
    'Ebony Odogaron'
    'Acidic Glavenus'
    'Ruiner Nergigante'
    'Viper Tobi-Kadachi'
    'Coral Pukei-Pukei'
    'Nightshade Paolumu'
    'Namielle'
    'Yian Garuga'
    'Shara Ishvalda'
    'Scarred Yian Garuga'
    'Gold Rathian'
    'Silver Rathalos'
    'Brute Tigrex'
    'Zinogre'
    'Rajang'
    'Stygian Zinogre'
    'Safi\'jiiva'
    'Raging Brachydios'
    'Furious Rajang'
    'Alatreon'
    'Frostfang Barioth'
    'Fatalis'*/
}

const weaponIconFileMatcher = {
    'Sword and Shield' : "Sword_and_Shield_Icon_White.webp",
    'Dual Blades' : "Dual_Blades_Icon_White.webp",
    'Long Sword' : "Long_Sword_Icon_White.webp",
    'Great Sword' : "Great_Sword_Icon_White.webp",
    'Lance' : "Lance_Icon_White.webp",
    'Gunlance' : "Gunlance_Icon_White.webp",
    'Hammer' : "Hammer_Icon_White.webp",
    'Hunting Horn' : "Hunting_Horn_Icon_White.webp",
    'Charge Blade' : "Charge_Blade_Icon_White.webp",
    'Switch Axe' : "Switch_Axe_Icon_White.webp",
    'Insect Glaive' : "Insect_Glaive_Icon_White.webp",
    'Light Bowgun' : "Light_Bowgun_Icon_White.webp",
    'Heavy Bowgun' : "Heavy_Bowgun_Icon_White.webp",
    'Bow' : "Bow_Icon_White.webp",
}

const successStampMatcher = {
    'Yes' : 'quest-clear.png',
    'No' : 'quest-failed.png',
}

submitB.addEventListener('click', e=>onSubmit(e));

function onSubmit(e){
    e.preventDefault();
    //https://mhw-db.com/monsters?q={"name":"Bazelgeuse"}
    //fetch(``)

    const monsterBox = document.querySelector('.monster_list');
    const monsterName = monsterBox.options[monsterBox.selectedIndex].text;
    const memo = document.querySelector('.memo').value;
    const weaponQuery = document.querySelector('.weapon');
    const weapon = weaponQuery.options[weaponQuery.selectedIndex].text;
    const difficultyQuery = document.querySelector('.difficulty');
    const difficulty = difficultyQuery.options[difficultyQuery.selectedIndex].text;
    //const numOfTrialQuery = document.querySelector('.number_of_trial');
    const numOfTrial = document.querySelector('.number_of_trial').value;
    const successQuery = document.querySelector('.success');
    const success = successQuery.options[successQuery.selectedIndex].text;

    createDiary(weapon, memo, difficulty, numOfTrial, success, monsterName);
    
}

function validateNum(str){
    if(!/\d+/.test(str)){
        const span = document.createElement('span');
        span.innerText = "digit only";
        err.appendChild(span);
    }
}

function createDiary(weapon, memo, difficulty, numOfTrial, success, monsterName){
    const div = document.createElement("div");
    const monNameTag = document.createElement("div");
    
    const weaponTag = document.createElement("p");
    const difficultyTag = document.createElement("p");
    const trialTag = document.createElement("p");
    const successTag = document.createElement("p");
    const memoTag = document.createElement("p");

    const listDiv = document.createElement("div");
    listDiv.setAttribute('class', 'list');




    monNameFieldGen(monNameTag, monsterName);
    div.appendChild(monNameTag);

    weaponFieldGen(weaponTag, weapon);
    div.appendChild(weaponTag);

    difficultyFieldGen(difficultyTag, difficulty);
    div.appendChild(difficultyTag);
    successFieldGen(successTag, success);
    div.appendChild(successTag);

    numOfTrialFieldGen(trialTag, numOfTrial);
    div.appendChild(trialTag);

    div.setAttribute('class', 'record_hidden');
    listDiv.innerText = 'HI';
    listDiv.appendChild(div);
    listDiv.addEventListener("click", () => {
        if(div.className == 'record_hidden'){
            div.className = 'record_show';
        }
        else{
            div.className = 'record_hidden';
        }
    });
    resultDiv.appendChild(listDiv);

}

function successFieldGen(successTag, success){
    const img = document.createElement('img');
    img.setAttribute('class','stamp');
    img.setAttribute('src',`./assets/img/stamp/${successStampMatcher[success]}`);
    successTag.appendChild(img);
}

function numOfTrialFieldGen(trialTag, numOfTrial){
    trialTag.innerText = numOfTrial;
}

function difficultyFieldGen(difficultyTag, difficulty){
    difficultyTag.innerText = difficulty;
}

function weaponFieldGen(weaponTag, weapon){
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/img/weapons/${weaponIconFileMatcher[weapon]}`);
    img.setAttribute('class', "weapon_icon");
    weaponTag.appendChild(img);

    const h4 = document.createElement('h4');
    h4.innerText = weapon;

    weaponTag.appendChild(h4);
}

function monNameFieldGen(monNameTag, monsterName){
    monNameTag.setAttribute('class','monster_info');
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/img/monster_icons/${monImgFileMatcher[monsterName]}`);
    img.setAttribute('class', "monster_icon");
    monNameTag.appendChild(img);

    const tooltip = document.createElement('span');
    tooltip.setAttribute('class','tooltip');

    toolTipGen(tooltip, monsterName);
    monNameTag.appendChild(tooltip);

    const h4 = document.createElement('h4');
    h4.innerText = monsterName;
    monNameTag.appendChild(h4);
}

function toolTipGen(tooltip, monsterName){
    fetch(`${url}\?q={\"name\":\"${monsterName}\"}`).then(data => data.json()).then(json => jsonHandler(tooltip, json));
}

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