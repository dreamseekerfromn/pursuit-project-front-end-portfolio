/* declaring constants & queries that will be used frequently */
const url = "https://mhw-db.com/monsters/";
const submitB = document.querySelector('#new_item_submit');
const err = document.querySelector('.err_container');
const resultDiv = document.querySelector('.result');
const form = document.querySelector('.new_item');

/* declaring objs that will be used to converting file names */
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
    'Radobaan' : "MHW_Radobaan_Icon.webp",
    'Rathalos' : "MHW_Rathalos_Icon.webp",
    'Rathian' : "MHW_Rathian_Icon.webp",
    'Pink Rathian' : "MHW_Pink_Rathian_Icon.webp",
    'Teostra' : "MHW_Teostra_Icon.webp", 
    "Savage Deviljho" : "MHWI_Savage_Deviljho_Icon.webp",
    'Tobi-Kadachi' : "MHW_Tobi-Kadachi_Icon.webp",
    'Tzitzi-Ya-Ku' : "MHW_Tzitzi-Ya-Ku_Icon.webp",
    'Uragaan' : "MHW_Uragaan_Icon.webp",
    'Vaal Hazak' : "MHW_Vaal_Hazak_Icon.webp", 
    'Blackveil Vaal Hazak' : "MHWI_Blackveil_Vaal_Hazak_Icon.webp",
    'Xeno\'Jiiva' : "MHW_Xeno%27jiiva_Icon.webp",
    'Zorah Magdaros' : "MHW_Zorah_Magdaros_Icon.webp",
    'Banbaro' : "MHWI_Banbaro_Icon.webp",
    'Belotodus' : "MHWI_Beotodus_Icon.webp",
    'Nargacuga' : "MHWI_Nargacuga_Icon.webp",
    'Velkhana' : "MHWI_Velkhana_Icon.webp",
    'Tigrex' : "MHWI_Tigrex_Icon.webp",
    'Shrieking Legiana' : "MHWI_Shrieking_Legiana_Icon.webp",
    'Barioth' : "MHWI_Barioth_Icon.webp",
    'Glavenus' : "MHWI_Glavenus_Icon.webp",
    'Brachydios' : "MHWI_Brachydios_Icon.webp", 
    'Fulgur Anjanath' : "MHWI_Fulgur_Anjanath_Icon.webp",
    'Ebony Odogaron' : "MHWI_Ebony_Odogaron_Icon.webp",
    'Acidic Glavenus' : "MHWI_Acidic_Glavenus_Icon.webp",
    'Ruiner Nergigante' : "MHWI_Ruiner_Nergigante_Icon.webp",
    'Viper Tobi-Kadachi' : "MHWI_Viper_Tobi-Kadachi_Icon.webp",
    'Coral Pukei-Pukei' : "MHWI_Coral_Pukei-Pukei_Icon.webp",
    'Nightshade Paolumu' : "MHWI_Nightshade_Paolumu_Icon.webp",
    'Namielle' : "MHWI_Namielle_Icon.webp",
    'Yian Garuga' : "MHWI_Yian_Garuga_Icon.webp",
    'Shara Ishvalda' : "MHWI_Shara_Ishvalda_Icon.webp",
    'Scarred Yian Garuga' : "MHWI-Scarred_Yian_Garuga_Icon.webp",
    'Gold Rathian' : "mhwi-gold_rathian_icon.png",
    'Silver Rathalos' : "MHW_Silver_Rathalos.png",
    'Brute Tigrex' : "MHWI_Brute_Tigrex_Icon.webp",
    'Zinogre' : "MHWI_Zinogre_Icon.webp",
    'Rajang' : "MHWI_Rajang_Icon.webp",
    'Fatalis' : "mhwi-fatalis_icon.png",
    'Azure Rathalos' : "MHW-Azure_Rathalos_Icon.webp",
    'Leshen' : "MHW_Leshen_Icon.webp",
    'Stygian Zinogre' : "MHWI-Stygian_Zinogre_Icon.webp",
    'Safi\'jiiva' : "MHWI-Safi%27jiiva_Icon.webp",
    'Raging Brachydios' : "MHWI-Raging_Brachydios_Icon.webp",
    'Furious Rajang' : "MHWI-Furious_Rajang_Icon.webp",
    'Alatreon' : "MHWI-Alatreon_Icon.webp",
    'Frostfang Barioth' : "MHWI-Frostfang_Barioth_Icon.webp",
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
    const highRank = ["Zorah Magdaros", "Kirin", "Bazelgeuse", "Pink Rathian", "Dodogama", "Kushala Daora", "Lavasioth", "Nergigante", "Teostra", "Uragaan", "Vaal Hazak", "Xeno'jiiva", "Azure Rathalos", "Black Diablos", "Deviljho", "Kulve Taroth", "Lunastra", "Behemoth", "Leshen", "Ancient Leshen"];
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

    tag.appendChild(spanTime);
    tag.appendChild(spanName);
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
    fetch(`${url}\?q={\"name\":\"${monsterName}\"}`).then(data => data.json()).then(json => jsonHandler(tooltip, json));
}

/**
 * jsonHandler()
 * ------------------------------------
 * a handling function to handle json from the api.
 * it will create actual tooltip.
 * 
 * @param {object} tooltip - the tag where the data is attatched.
 * @param {object*} json - JSON from the api.
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