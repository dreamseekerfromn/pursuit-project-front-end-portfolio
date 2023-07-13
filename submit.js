const url = "https://mhw-db.com/monsters/";
const submitB = document.querySelector('#new_item_submit');
const err = document.querySelector('.err_container');
const resultDiv = document.querySelector('.result');
const form = document.querySelector('.new_item');
const monImgFileMatcher = {
    "Anjanath" : "MHW_Anjanath_Icon.webp",
    "Barroth" : "MHW_Barroth_Icon.webp", 
    "Bazelgeuse" : "MHW_Bazelgeuse_Icon.webp",
    "Seething Bazelgeuse" : "MHWI_Seething_Bazelgeuse_Icon.webp",
    "Behemoth" : "MHW_Behemoth_Icon.webp",
    "Deviljho" : "MHW_Deviljho_Icon.webp",
    "Diablos" : "MHW_Diablos_Icon.webp",
    "Black Diablos" : "MHW_Black_Diablos_Icon.webp",
    "Ancient Leshen" : "MHW_Ancient_Leshen_Icon.webp",
    "Dodogama" : "MHW_Dodogama_Icon.webp",
    "Great Girros" : "MHW_Great_Girros_Icon.webp",
    "Great Jagras" : "MHW_Great_Jagras_Icon.webp",
    "Jyuratodus" : "MHW_Jyuratodus_Icon.webp",
    "Kirin" : "MHW_Kirin_Icon.webp",
    "Kulu-Ya-Ku" : "MHW_Kulu-Ya-Ku_Icon.webp",
    "Kulve Taroth" : "MHW_Kulve_Taroth_Icon.webp",
    "Kushala Daora" : "MHW_Kushala_Daora_Icon.webp",
    'Lavasioth' : "MHW_Lavasioth_Icon.webp",
    'Legiana' : "MHW_Legiana_Icon.webp",
    'Lunastra' : "MHW_Lunastra_Icon.webp",
    'Nergigante' : "MHW_Nergigante_Icon.webp",
    'Odogaron' : "MHW_Odogaron_Icon.webp",
    'Paolumu' : "MHW_Paolumu_Icon.webp",
    'Pukei-Pukei' : "MHW_Pukei-Pukei_Icon.webp",
    /*
    'Radobaan' assets/img/monster_icons/MHW_Radobaan_Icon.webp 
    'Rathalos' assets/img/monster_icons/MHW_Rathalos_Icon.webp 
    'Azure Rathalos' 
    'Rathian' assets/img/monster_icons/MHW_Rathian_Icon.webp
    'Pink Rathian' assets/img/monster_icons/MHW_Pink_Rathian_Icon.webp
    'Teostra'  assets/img/monster_icons/MHW_Teostra_Icon.webp 
    "Savage Deviljho" assets/img/monster_icons/MHWI_Savage_Deviljho_Icon.webp
    'Tobi-Kadachi' assets/img/monster_icons/MHW_Tobi-Kadachi_Icon.webp
    'Tzitzi-Ya-Ku' assets/img/monster_icons/MHW_Tzitzi-Ya-Ku_Icon.webp 
    'Uragaan' assets/img/monster_icons/MHW_Uragaan_Icon.webp
    'Vaal Hazak' assets/img/monster_icons/MHW_Vaal_Hazak_Icon.webp 
    'Blackveil Vaal Hazak' assets/img/monster_icons/MHWI_Blackveil_Vaal_Hazak_Icon.webp
    'Xeno\'Jiiva' assets/img/monster_icons/MHW_Xeno%27jiiva_Icon.webp
    'Zorah Magdaros' assets/img/monster_icons/MHW_Zorah_Magdaros_Icon.webp
    'Leshen'
    'Banbaro' assets/img/monster_icons/MHWI_Banbaro_Icon.webp
    'Belotodus' assets/img/monster_icons/MHWI_Beotodus_Icon.webp 
    'Nargacuga' assets/img/monster_icons/MHWI_Nargacuga_Icon.webp
    'Velkhana' assets/img/monster_icons/MHWI_Velkhana_Icon.webp
    'Tigrex' assets/img/monster_icons/MHWI_Tigrex_Icon.webp
    'Shrieking Legiana' assets/img/monster_icons/MHWI_Shrieking_Legiana_Icon.webp
    'Barioth' assets/img/monster_icons/MHWI_Barioth_Icon.webp
    'Glavenus' assets/img/monster_icons/MHWI_Glavenus_Icon.webp
    'Brachydios' assets/img/monster_icons/MHWI_Brachydios_Icon.webp 
    'Fulgur Anjanath' assets/img/monster_icons/MHWI_Fulgur_Anjanath_Icon.webp
    'Ebony Odogaron' assets/img/monster_icons/MHWI_Ebony_Odogaron_Icon.webp
    'Acidic Glavenus' assets/img/monster_icons/MHWI_Acidic_Glavenus_Icon.webp 
    'Ruiner Nergigante' assets/img/monster_icons/MHWI_Ruiner_Nergigante_Icon.webp
    'Viper Tobi-Kadachi' assets/img/monster_icons/MHWI_Viper_Tobi-Kadachi_Icon.webp
    'Coral Pukei-Pukei' assets/img/monster_icons/MHWI_Coral_Pukei-Pukei_Icon.webp 
    'Nightshade Paolumu' assets/img/monster_icons/MHWI_Nightshade_Paolumu_Icon.webp
    'Namielle' assets/img/monster_icons/MHWI_Namielle_Icon.webp
    'Yian Garuga' assets/img/monster_icons/MHWI_Yian_Garuga_Icon.webp 
    'Shara Ishvalda' assets/img/monster_icons/MHWI_Shara_Ishvalda_Icon.webp 
    'Scarred Yian Garuga' assets/img/monster_icons/MHWI-Scarred_Yian_Garuga_Icon.webp
    'Gold Rathian' assets/img/monster_icons/mhwi-gold_rathian_icon.png 
    'Silver Rathalos' assets/img/monster_icons/MHW_Silver_Rathalos.png
    'Brute Tigrex' assets/img/monster_icons/MHWI_Brute_Tigrex_Icon.webp
    'Zinogre' assets/img/monster_icons/MHWI_Zinogre_Icon.webp
    'Rajang' assets/img/monster_icons/MHWI_Rajang_Icon.webp
    'Stygian Zinogre'
    'Safi\'jiiva'
    'Raging Brachydios'
    'Furious Rajang'
    'Alatreon'
    'Frostfang Barioth'
    'Fatalis'assets/img/monster_icons/mhwi-fatalis_icon.png*/
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

    if(validateNum(numOfTrial)){
        createDiary(weapon, memo, difficulty, numOfTrial, success, monsterName);
    }

    
    form.reset(); 
}

function validateNum(str){
    const errMsgContainerQuery = document.querySelector('.err_msg_container');
    if(errMsgContainerQuery){
        errMsgContainerQuery.remove();
    }
    const errorMsgContainer = document.createElement('p');
    errorMsgContainer.setAttribute('class','err_msg_container');
    
    if(!/\d+/.test(str.toString())){
        const span = document.createElement('span');
        span.innerText = "digit only";
        
        errorMsgContainer.appendChild(span);
        err.appendChild(errorMsgContainer);
        return false;
    }
    
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
    
    
    listDiv.appendChild(div);
    addListField(listDiv, monsterName);
    
    listDiv.addEventListener("click", () => {
        if(div.className == 'record_hidden'){
            div.className = 'record_show';
        }
        else{
            div.className = 'record_hidden';
        }
    });
    addRemove(listDiv);

    resultDiv.prepend(listDiv);
}

function addListField(tag, monsterName){
    const spanTime = document.createElement('span');
    let today = new Date();
    let time = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    spanTime.innerText = time;

    const spanName = document.createElement('span');
    spanName.innerText = monsterName;

    tag.appendChild(spanTime);
    tag.appendChild(spanName);

    
}

function addRemove(tag){
    const button = document.createElement('button');
    button.innerText = 'remove';
    button.addEventListener('click', ()=>tag.remove());
    tag.appendChild(button);
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