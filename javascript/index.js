//document.getElementById('date').innerHTML = new Date().toDateString();



/*class Character {
	constructor(name) {
	this._name = name;}
	get name() {
		return this._name;
	}
	
}*/

//DEFAULT OBJECTS AND ARRAYS
let arrayOfNames = ['Dannielle',
'German',
'Colton',
'Juli',
'Annita',
'Chae',
'Toi',
'Joycelyn',
'Lachelle',
'Cristobal',
'Merideth',
'Herlinda',
'Edmond',
'Tenesha',
'Bobbi',
'Karie',
'Cecil',
'Julio',
'Maye',
'Timmy',
'Felipa',
'Emilio',
'Elisabeth',
'Ardis',
'Lin',
'Alma',
'Nakisha',
'Emilie',
'Anderson',
'Gilbert',
'Rossana',
'Dean',
'Mitchel',
'Eva',
'Marvella',
'Arnoldo',
'Tia',
'Tanisha',
'Jayme',
'Paula',
'Layla',
'Tameika',
'Siu',
'Makeda',
'Trula',
'Clara',
'Junior',
'Davis',
'Meaghan',
'Melanie'

];
let defaultDamage = 1;

let characterOne = {
	name: '',
	alignment: '',
	armorClass: 10,
	hitPoints: 5,
	strength: 10,
	dexterity: 10,
	constitution: 10,
	wisdom: 10,
	intelligence: 10,
	charisma: 10,
	experience: 0,
	level: 1,
	levelAttackRollModifier: 0,
	characterClass: '',
	race: 'Human',
	equippedWeapon: '',
	buttonDeleteCheck: 0,
	Saved: 0
}

let randomBadGuy = {
	name: '',
	alignment: 'Evil',
	armorClass: 10,
	hitPoints: 10,
	strength: 10,
	dexterity: 10,
	constitution: 10,
	wisdom: 10,
	intelligence: 10,
	charisma: 10
};

let buttonDeletion = {
	name: '',
	alignment: '',
	strength: '',
	dexterity: '',
	constitution: '',
	wisdom: '',
	intelligence: '',
	charisma: '',
	characterClass: '',
	race: ''
}

function dont() { 
return false; }

/*const saveCharacter = (myCharacter, saveWith) => {
    switch(saveWith){
        case "cookie":
            saveInCookie(myCharacter);
        break;
        case "server":
            saveOnServer(myCharacter);
        break;
        default:
            alert('Dummy, you didn\'t specify where to save it!');
    }
}

const saveInCookie = (character) => {
    var c = JSON.stringify(character); //now my character is a string!
    document.cookie = c;
}

const loadFromCookie =() => {
    var c = document.cookie;
    var myCharacter = JSON.parse(c);
    return myCharacter;
}*/

const abilityModifier = (character,characterString) => {
	
	returnValue = 0;
	switch(character) {
		case 1:
		returnValue = -5;
		break;
		case 2:
		returnValue = -4;
		break;
		case 3:
		returnValue = -4;
		break;
		case 4:
		returnValue = -3;
		break;
		case 5:
		returnValue = -3;
		break;
		case 6:
		returnValue = -2;
		break;
		case 7:
		returnValue = -2;
		break;
		case 8:
		returnValue = -1;
		break;
		case 9:
		returnValue = -1;
		break;
		case 10:
		returnValue = 0;
		break;
		case 11:
		returnValue = 0;
		break;
		case 12:
		returnValue = 1;
		break;
		case 13:
		returnValue = 1;
		break;
		case 14:
		returnValue = 2;
		break;
		case 15:
		returnValue = 2;
		break;
		case 16:
		returnValue = 3;
		break;
		case 17:
		returnValue = 4;
		break;
		case 18:
		returnValue = 4;
		break;
		case 19:
		returnValue = 5;
		break;
		case 20:
		returnValue = 5;
		break;	
}
if (characterOne.race === 'Orc' && (characterString === 'characterOne.intelligence' ||characterString === 'characterOne.wisdom' || characterString === 'characterOne.charisma')) {
		returnValue = returnValue - 1;
	}
else if (characterOne.race === 'Orc' && characterString === 'characterOne.strength') {
		returnValue = returnValue + 2;
	}
else if (characterOne.race === 'Dwarf' && characterString === 'characterOne.charisma') {
		returnValue = returnValue - 1;
	}
else if (characterOne.race === 'Dwarf' && characterString === 'characterOne.constitution') {
		returnValue = returnValue + 1;
	}
else if (characterOne.race === 'Elf' && characterString === 'characterOne.dexterity') {
		returnValue = returnValue + 1;
	}
else if (characterOne.race === 'Elf' && characterString === 'characterOne.constitution') {
		returnValue = returnValue - 1;
	}
else if (characterOne.race === 'Halfling' && characterString === 'characterOne.dexterity') {
		returnValue = returnValue + 1;
	}
else if (characterOne.race === 'Halfling' && characterString === 'characterOne.strength') {
		returnValue = returnValue - 1;
	}
if (characterOne.race === 'Dwarf' && randomBadGuy.race === 'Orc' && characterString === 'characterOne.strength') {
		returnValue = returnValue + 2;
	}
	
return returnValue;
}


const populateAbilityMods = () => {
	const strengthModifier = abilityModifier(characterOne.strength, 'characterOne.strength');
	const dexterityModifier = abilityModifier(characterOne.dexterity, 'characterOne.dexterity');
	const charismaModifier = abilityModifier(characterOne.charisma, 'characterOne.charisma');
	const wisdomModifier = abilityModifier(characterOne.wisdom, 'characterOne.wisdom');
	const intelligenceModifier = abilityModifier(characterOne.intelligence, 'characterOne.intelligence');
	const constitutionModifier = abilityModifier(characterOne.constitution, 'characterOne.constitution');
	document.getElementById("strengthModBox").innerHTML = strengthModifier;
	document.getElementById("dexterityModBox").innerHTML = dexterityModifier;
	document.getElementById("charismaModBox").innerHTML = charismaModifier;
	document.getElementById("wisdomModBox").innerHTML = wisdomModifier;
	document.getElementById("intelligenceModBox").innerHTML = intelligenceModifier;
	document.getElementById("constitutionModBox").innerHTML = constitutionModifier;
}





const saveCharacter = (character) => {
	console.log('save function running')
	characterOne.Saved = 1;
	let c = JSON.stringify(character); //now my character is a string!
    document.cookie = c;
	
}

const retrieveCharacter = () => {
	   var c = document.cookie;
    var myCharacter = JSON.parse(c);
    return myCharacter;
}





function openForm() {
  document.getElementById("myForm").style.display = "block";
  saveCharacter(characterOne);
  console.log('saving character')
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const resetTheCharacter = () => {
	let characterOne = {
	name: '',
	alignment: '',
	armorClass: 10,
	hitPoints: 5,
	strength: 10,
	dexterity: 10,
	constitution: 10,
	wisdom: 10,
	intelligence: 10,
	charisma: 10,
	experience: 0,
	level: 1,
	levelAttackRollModifier: 0,
	characterClass: '',
	race: 'Human',
	equippedWeapon: '',
	buttonDeleteCheck: 0,
	Saved: 0
}

let buttonDeletion = {
	name: '',
	alignment: '',
	strength: '',
	dexterity: '',
	constitution: '',
	wisdom: '',
	intelligence: '',
	charisma: '',
	characterClass: '',
	race: ''
}
  saveCharacter(characterOne);
}

const deleteTheButtons = () => {
	
	if (buttonDeletion.name === 'done' && buttonDeletion.alignment === 'done' && buttonDeletion.strength === 'done' && buttonDeletion.dexterity === 'done' && buttonDeletion.constitution === 'done' && buttonDeletion.wisdom === 'done' && buttonDeletion.intelligence === 'done' && buttonDeletion.charisma === 'done' && buttonDeletion.characterClass === 'done' && buttonDeletion.race === 'done') {
		
		$( ".button" ).remove();
		$( ".buttonAlignment" ).remove();
		$( '.buttonStrength').remove();
		$( '.buttonDexterity').remove();
		$( '.buttonCharisma').remove();
		$( '.buttonConstitution').remove();
		$( '.buttonWisdom').remove();
		$( '.buttonIntelligence').remove();
		$( '.buttonClass').remove();
		$( '.buttonRace').remove();
		document.getElementById("theTable").deleteRow(2);
		document.getElementById("theTable").deleteRow(4);
		document.getElementById("theTable").deleteRow(6);
		document.getElementById("theTable").deleteRow(8);
		characterOne.buttonDeleteCheck = 1;
		endSetTasks();
		
	}

}


const nameEntry = () => {
	characterOne.name = prompt("Enter your name: ", "name");
	document.getElementById("characterSheet").innerHTML = characterOne.name + ' the ' + characterOne.race;
	if (characterOne.name != 'name'&& characterOne.name != '') {
		buttonDeletion.name = 'done';
		deleteTheButtons()
	}
	
	document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	
}

const raceEntry = () => {
		let characterRace = prompt("Enter your race (Human, Orc, Dwarf, Elf, or Halfling): ");
		let characterRaceLower = characterRace.toLowerCase();
		switch(characterRaceLower) {
			case "human":
			characterOne.race = "Human";
			break;
			case "orc":
			characterOne.race = "Orc";
			break;
			case "dwarf":
			characterOne.race = "Dwarf";
			break;
			case "elf":
			characterOne.race = "Elf";
			break;
			case "halfling":
			if (characterOne.alignment === 'Evil') {
				alert('Halflings cannot be Evil aligned')
			}
			else {
				characterOne.race = "Halfling";
			}
			break;
			default:
			alert('you must select a valid race option (Human, Orc, Dwarf, Elf, or Halfling)');
			break;
		}
		
		
		
		
	document.getElementById("characterSheet").innerHTML = characterOne.name + ' the ' + characterOne.race;
	if (characterOne.race !='') {
		buttonDeletion.race = 'done';
		populateAbilityMods();
		deleteTheButtons()
	}
}

const endSetTasks = () => {
	if (characterOne.race === 'Orc') {
		characterOne.armorClass = characterOne.armorClass + 2;
		document.getElementById("armorClassBox").innerHTML = characterOne.armorClass;
	}
	if (characterOne.characterClass === 'fighter') {
		characterOne.hitPoints = characterOne.hitPoints + 5;
		document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	}
	else if (characterOne.characterClass === 'monk') {
		characterOne.hitPoints = characterOne.hitPoints + 1;
		document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	}
	else if (characterOne.characterClass === 'paladin') {
		characterOne.hitPoints = characterOne.hitPoints + 3;
		document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	}
	populateAbilityMods();
	
}


const enterAlignment = () => {

	let alignment = prompt("Enter your alignment (good, neutral, or evil):  ", "alignment");
	let alignmentLower = alignment.toLowerCase();
	switch(alignmentLower) {
		case "good": 
			if (characterOne.characterClass === 'rogue') {
				characterOne.alignment = '';
				alert('You cannot have the alignment of "good" as a rogue');
			}
			else {
				characterOne.alignment = "Good"; 
			}
			break;
		case "neutral":
			if (characterOne.characterClass === 'paladin') {
				alert('Paladins must be good aligned')
				characterOne.alignment = '';
			}
			else {
			characterOne.alignment = "Neutral"; 
			}
			break;
		case "evil":
		if (characterOne.characterClass === 'paladin') {
				alert('Paladins must be good aligned')
				characterOne.alignment = '';
			}
			else {
			characterOne.alignment = "Evil"; 
			}
		if (characterOne.race === 'Halfling') {
			alert('Halflings cannot be Evil aligned')
		}
		else {
			characterOne.alignment = "Evil"; 
		}
			
			break;
		default:
			characterOne.alignment = "Invalid Alignment, please re-enter a valid option";
			break;
			}
	
	document.getElementById("alignmentBox").innerHTML = characterOne.alignment;
	if (characterOne.alignment != "Invalid Alignment, please re-enter a valid option" && characterOne.alignment != '') {
		buttonDeletion.alignment = 'done';
		deleteTheButtons()
	}
	}
	
	
//used for all ability modifiers
const checkValidEntry = (ability) => {
	for (i = 1; i <= 20; i++) {
		
		let check = i.toString();
		if (check === ability) {
			
			return true;
		}
		if (check === '20') {
			
			return false;
		}
	}
}
		
				

//function used by all ability score buttons to enter the value
const enterSkillButton = (skill) => {
	let skillLower = skill.toLowerCase()
	
	let skillEntry = prompt(`Enter your ${skillLower} roll:  `);
	switch (skillLower) {
		case 'strength':
		characterOne.strength = parseInt(skillEntry,10) ;
		break;
		case 'dexterity':
		characterOne.dexterity = parseInt(skillEntry,10) ;
		if (characterOne.characterClass === 'monk') {
			characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity,'characterOne.dexterity') + abilityModifier(characterOne.wisdom, 'characterOne.wisdom');
		}
		else {
		characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity, 'characterOne.dexterity');
		}
		document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
		break;
		case 'constitution':
		characterOne.constitution = parseInt(skillEntry,10) ;
		characterOne.hitPoints = 5 + abilityModifier(characterOne.constitution, 'characterOne.constitution');
		document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
		break;
		case 'wisdom':
		characterOne.wisdom = parseInt(skillEntry,10) ;
		if (characterOne.characterClass === 'monk') {
			characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity,'characterOne.dexterity') + abilityModifier(characterOne.wisdom, 'characterOne.wisdom');
			document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
		}
		break;
		case 'intelligence':
		characterOne.intelligence = parseInt(skillEntry,10) ;
		break;
		case 'charisma':
		characterOne.charisma = parseInt(skillEntry,10) ;
		break;
	
	};
	let checkValidSkill = checkValidEntry(skillEntry);
	if (checkValidSkill === false) {
		document.getElementById(skillLower + 'Box').innerHTML = 'input must be 1 -> 20';
	}		
	else {
		document.getElementById(skillLower + 'Box').innerHTML = skillEntry;}
	
	
	if (document.getElementById(skillLower + 'Box').innerHTML != 'input must be 1 -&gt; 20') {
	
		switch (skillLower) {
			case 'strength':
			buttonDeletion.strength = 'done';
			break;
			case 'dexterity':
			buttonDeletion.dexterity = 'done';
			break;
			case 'constitution':
			buttonDeletion.constitution = 'done';
			break;
			case 'wisdom':
			buttonDeletion.wisdom = 'done';
			break;
			case 'intelligence':
			buttonDeletion.intelligence = 'done';
			break;
			case 'charisma':
			buttonDeletion.charisma = 'done';
			break;
		}
		populateAbilityMods();
		deleteTheButtons();
		
	}
}



const enterClass = () => {

	let characterClass = prompt("Enter your class (rogue, monk, paladin, or fighter):  ");
	let characterClassLower = characterClass.toLowerCase();
	switch(characterClassLower) {
		case "rogue": 
			if (characterOne.alignment === 'Good') {
				alert('you cannot play as a rogue if your alignment is good');
				characterOne.characterClass = '';
			}
			else {
				characterOne.characterClass = 'rogue';
			}
			break;
		case "fighter":
			characterOne.characterClass = "fighter"; 
			break;
		case "paladin":
			characterOne.characterClass = "paladin"; 
			if (characterOne.alignment === 'Evil' || characterOne.alignment === 'Neutral') {
				alert('Paladins can only have a good alignment')
				characterOne.characterClass = '';
			}
			else {
				characterOne.characterClass = 'paladin';
			}
			break;
		case "monk":
			characterOne.characterClass = 'monk';
			break;
		default:
			characterOne.characterClass = "Invalid Alignment, please re-enter a valid option";
			break;
			}
	
	document.getElementById("characterClassBox").innerHTML = characterOne.characterClass;
	if (characterOne.characterClass === 'monk') {
			characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity, 'characterOne.dexterity') + abilityModifier(characterOne.wisdom, 'characterOne.wisdom');
			document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
		}
	else {
		characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity, 'characterOne.dexterity');
		document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
	}
	if (characterOne.characterClass != "Invalid Alignment, please re-enter a valid option" && characterOne.characterClass != "") {
		buttonDeletion.characterClass = 'done';
		deleteTheButtons()
	}
	}




//CHARACTER CREATION AND MODIFICATION

const levelUp = () => {
	for (i=1000; i<=20000; i=i+1000) {
		if(characterOne.experience >= i && characterOne.experience < (i+1000) && ((characterOne.level * 1000)-1000) != i) {
			characterOne.level = ((i/1000)+1);
			console.log(`your character level is ${characterOne.level} and i = ${i}`);
			document.getElementById("levelCell").innerHTML = characterOne.level;
			characterOne.hitPoints = characterOne.hitPoints + abilityModifier(characterOne.constitution, 'characterOne.constitution') + 5;
			document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
			if (characterOne.characterClass === 'fighter') {
				characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1
				characterOne.hitPoints = characterOne.hitPoints + 5;
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
				console.log(`I AM A FIGHTER SO I GET MORE ATTACK AND MORE HP`);
			}
			else if (characterOne.characterClass === 'monk') {
				if ((characterOne.level)%2 === 0 || (characterOne.level)%3 === 0) {
					characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1;
				}
				characterOne.hitPoints = characterOne.hitPoints + 1;
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
				console.log(`I AM A MONK SO I GET MORE HP`);
			}
			else if (characterone.characterClass === 'paladin') {
				characterOne.hitPoints = characterOne.hitPoints + 3;
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
				characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1
			}
			
			else if ((characterOne.level)%2 === 0) {
				characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1;
			}
			if (characterOne.race === 'Dwarf' && (abilityModifier(characterOne.constitution,'characterOne.constitution') >=0)) {
				characterOne.hitPoints = characterOne.hitPoints + abilityModifier(characterOne.constitution, 'characterOne.constitution');
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
			}
			console.log('CONGRATS YOU LEVELED UP');
			console.log(`Your level is now ${characterOne.level} your hitpoints are now ${characterOne.hitPoints} and your bonus to attack roll is now ${characterOne.levelAttackRollModifier}`)
			
		}
	}
	
}



	
//END OF CHARACTER CREATION		

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//COMBAT RELATED FUNCTIONS


const createRandomBadGuy = () => {
	const arrayPosition = Math.floor(Math.random()*50);
	randomBadGuy.name = arrayOfNames[arrayPosition];
	randomBadGuy.armorClass = Math.floor(Math.random()*18 + 1);
	randomBadGuy.hitPoints = Math.floor(Math.random()*9 + 1);
	const randomAlignment = Math.floor(Math.random()*3);
	const randomRace = Math.floor(Math.random()*5);
	switch(randomRace) {
		case 0:
		randomBadGuy.race = 'Human';
		break;
		case 1:
		randomBadGuy.race = 'Orc';
		break;
		case 2:
		randomBadGuy.race = 'Dwarf';
		break;
		case 3:
		randomBadGuy.race = 'Elf';
		break;
		case 4:
		randomBadGuy.race = 'Halfling';
		break;
		
	}
	switch (randomAlignment) {
		case 0:
		randomBadGuy.alignment = 'Good';
		break;
		case 1:
		randomBadGuy.alignment = 'Evil';
		break;
		case 2:
		randomBadGuy.alignment = 'Neutral';
		break;
	}
	document.getElementById("alignmentBoxEnemy").innerHTML = randomBadGuy.alignment;
	document.getElementById("armorClassBoxEnemy").innerHTML = randomBadGuy.armorClass;
	document.getElementById("hitPointsBoxEnemy").innerHTML = randomBadGuy.hitPoints;
	document.getElementById("enemyHeader").innerHTML = randomBadGuy.name + ' the ' + randomBadGuy.race;
	document.getElementById("alignmentBoxEnemy").innerHTML = randomBadGuy.alignment;
	generateEnemySprite();

}
	
const generateEnemySprite = () => {
	const delay = 200;
	if (randomBadGuy.alignment === 'Neutral') {
		document.getElementById("enemySprite").src = "./goblinSpriteWalk1.jpg";
	
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk2.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk3.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk4.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStand.jpg"}, delay)}, delay)}, delay)}, delay);
	}
	else if (randomBadGuy.alignment === 'Good') {
		document.getElementById("enemySprite").src = "./goblinSpriteWalk1Blue.jpg";
	
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk2Blue.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk3Blue.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk4Blue.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStandBlue.jpg"}, delay)}, delay)}, delay)}, delay);
	}
	else if (randomBadGuy.alignment === 'Evil') {
		document.getElementById("enemySprite").src = "./goblinSpriteWalk1Red.jpg";
	
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk2Red.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk3Red.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk4Red.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStandRed.jpg"}, delay)}, delay)}, delay)}, delay);
	}
}	

const enemySpriteAttack = () => {
	
		
	const delay = 200;
	if (randomBadGuy.alignment === 'Neutral') {
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStab.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStand.jpg"}, delay)}, delay);
	}
	else if (randomBadGuy.alignment === 'Good') {
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStabBlue.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStandBlue.jpg"}, delay)}, delay);
	}
	else if (randomBadGuy.alignment === 'Evil') {
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStabRed.jpg"
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStandRed.jpg"}, delay)}, delay);
	}
		
	
}
	
const rollDie = () => {
	
return Math.floor(Math.random()*20 + 1);	
}

const rollDamageDie = (character) => {
	const rollValue = rollDie();
    const modRollValue = rollValue + abilityModifier(character.strength);
    const totalRoll = [modRollValue, rollValue];
return totalRoll;

}


let damageDealt1 = 0;

const getAttacked = () => {
	if (randomBadGuy.hitPoints > 0) {
	let damageResult1 = '';
	let innerRollResult = rollDamageDie(randomBadGuy);
	if (characterOne.race === 'Elf' && randomBadGuy.race === 'Orc') {
		innerRollResult[0] = innerRollResult[0] - 2;
	}
	else if (characterOne.race === 'Halfling' && randomBadGuy.race != 'Halfling') {
		innerRollResult[0] = innerRollResult[0] -2;
	}
	if (innerRollResult[0] >= characterOne.armorClass || innerRollResult[1] === 20) {
		enemySpriteAttack();
		characterOne.hitPoints = characterOne.hitPoints -1-abilityModifier(randomBadGuy.strength, 'randomBadGuy.strength');
		if (innerRollResult[1] === 20) {
			
			characterOne.hitPoints = characterOne.hitPoints -1-abilityModifier(randomBadGuy.strength, 'randomBadGuy.strength');
			let damageDealt1 = 2*(1+abilityModifier(randomBadGuy.strength, 'randomBadGuy.strength'))
			damageResult1 = `${damageDealt1} dmg`;
		}
		else {
			
			let damageDealt1 = 1+abilityModifier(randomBadGuy.strength, 'randomBadGuy.strength');
			damageResult1 = `${damageDealt1} dmg`;			
		}
		
		if (characterOne.hitPoints <= 0) {
				
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
				document.getElementById("characterSheet").innerHTML = characterOne.name + " RIP";
				document.getElementById("attackLog2").innerHTML = `Oh no!  You have died!`;
				document.getElementById("attackLog").innerHTML = `GAME OVER!`
		}
		else {
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
				document.getElementById("attackLog2").innerHTML = `${randomBadGuy.name} rolled a ${innerRollResult[1]} in retaliation.  Their attack was successful! You've been hit for ${damageResult1} and your HP is now ${characterOne.hitPoints}!`;
		}
	}	
	else {document.getElementById("attackLog2").innerHTML = `${randomBadGuy.name} rolled a ${innerRollResult[1]} and missed!`;
	enemySpriteAttack();
	}
	}
}


const attackPlayer = () => {
	let damageDealt = 0;
	let enemyDexModIfPositive = 0;
	if (abilityModifier(randomBadGuy.dexterity)>=0) {
		 enemyDexModIfPositive = abilityModifier(randomBadGuy.dexterity, 'randomBadGuy.dexterity');
	}
	else {
		 enemyDexModIfPositive = 0;
	}
	if (characterOne.name != 'name'&& characterOne.name != '') {
		//checks weapon/class to determine default damage
		if(characterOne.weapon === 'longsword') {
			defaultDamage = 5;
		}
		else if (characterOne.characterClass === 'monk') {
			defaultDamage = 3;
		}
		else { 
			defaultDamage = 1;
		}
		if (characterOne.hitPoints > 0) {
			//checks that the bad guy exists at all
			if(randomBadGuy.name != ''){
				//confirms bad guy is alive before attempting an attack
				if (randomBadGuy.hitPoints <= 0) {
					document.getElementById("attackLog").innerHTML = `They are already dead! Have some mercy!`;}
					//after confirming they are alive proceed with rolling for attack
				else {	
					const rollResult = rollDamageDie(characterOne);
					if (characterOne.race === 'Dwarf' && randomBadGuy.race === 'Orc') {
						rollResult[0] = rollResult[0] + characterOne.levelAttackRollModifier + 2;
					}
					else {
					rollResult[0] = rollResult[0] + characterOne.levelAttackRollModifier;
					}
					//paladins have the ability to increase their roll if against an evil enemy
					if (characterOne.characterClass === 'paladin' && randomBadGuy.alignment === 'Evil') {
						rollResult[0] = rollResult[0] + 2;
					}
					//Begin section of effects for a successful hit
					if (rollResult[0] >= randomBadGuy.armorClass || rollResult[1] === 20 || ((characterOne.characterClass === 'rogue')&&(rollResult[0] >= (randomBadGuy.armorClass - enemyDexModIfPositive)))) {
						console.log('initiate successful attack');
						console.log(characterOne.characterClass);
						characterOne.experience = characterOne.experience + 10;
						document.getElementById("experienceCell").innerHTML = characterOne.experience;
						//various class unique abilities being taken into account
						if (characterOne.characterClass === 'rogue') {
							damageDealt = defaultDamage + abilityModifier(characterOne.dexterity, 'characterOne.dexterity');
							if (damageDealt <= 0){
								damageDealt = 1;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage;
							}
							else {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.dexterity, 'characterOne.dexterity');
							}
							console.log(`As a rogue I used dexterity mod to my attack which was ${characterOne.dexterity}`);
						}
						else if (characterOne.characterClass === 'monk') {
							damageDealt = defaultDamage+abilityModifier(characterOne.strength, 'characterOne.strength');
							if (damageDealt <= 0){
								damageDealt = 1;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.strength, 'characterOne.strength');
							}
							console.log(`As a monk I hit ${defaultDamage} default damage`);
						}
						else if (characterOne.characterClass === 'paladin' && randomBadGuy.alignment === 'Evil') {
							damageDealt = 1+abilityModifier(characterOne.strength, 'characterOne.strength')+2;
							if (damageDealt <= 0){
								damageDealt = 1;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.strength, 'characterOne.strength') - 2;
							}
							console.log(damageDealt);
						}
						//if no class unique abilities are relevant proceed to the standard combat
						else {
							damageDealt = 1+abilityModifier(characterOne.strength, 'characterOne.strength');
							if (damageDealt <= 0){
								damageDealt = 1;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.strength, 'characterOne.strength');
							}
						}
						let damageResult = `${damageDealt} dmg`;
						//Critical roll section, this never replaces the above combat steps but instead adds to them.  i.e. no 2* damage, it allows for the damage above, then repeats same damage below
						if (rollResult[1]=== 20 || (characterOne.race === 'Elf' && rollResult[1] === 19)) {
							//class specific crit rules
							if (characterOne.characterClass === 'monk') {
								damageDealt = 2*(defaultDamage+abilityModifier(characterOne.strength, 'characterOne.strength'));
								if (damageDealt <= 0){
								damageDealt = 2;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
								damageDealt = 2*(defaultDamage+abilityModifier(characterOne.strength, 'characterOne.strength'));
								if (damageDealt <= 0){
								damageDealt = 2;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.strength, 'characterOne.strength');
							}
								
							}
							}
							else if (characterOne.characterClass === 'paladin' && randomBadGuy.alignment === 'Evil') {
								damageDealt = 3*(defaultDamage+abilityModifier(characterOne.strength, 'characterOne.strength')+2);
								if (damageDealt <= 0){
								damageDealt = 2;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - (2*(defaultDamage + abilityModifier(characterOne.strength, 'characterOne.strength') + 2));
							}
							}	
							else {
								damageDealt = 2*(1+abilityModifier(characterOne.strength, 'characterOne.strength'));
								if (damageDealt <= 0){
								damageDealt = 2;
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1;
							}
							else {
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.strength, 'characterOne.strength');
							}
								if (characterOne.characterClass === 'rogue') {
									randomBadGuy.hitPoints = randomBadGuy.hitPoints - defaultDamage - abilityModifier(characterOne.dexterity, 'characterOne.dexterity');
								damageDealt = 3*(defaultDamage+abilityModifier(characterOne.dexterity, 'characterOne.dexterity'));
								console.log('ROGUE CRITICAL');
								}
							}
							damageResult = `${damageDealt} dmg (it's a crit!)`;
						}
						//The enemy has died
						if (randomBadGuy.hitPoints <= 0) {
							if (randomBadGuy.alignment === 'Neutral') {
								setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteDead.jpg"}, 810)
							}
							else if (randomBadGuy.alignment === 'Evil') {
								setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteDeadRed.jpg"}, 810)
							}
							else if (randomBadGuy.alignment === 'Good') {
								setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteDeadBlue.jpg"}, 810)
							}
							document.getElementById("hitPointsBoxEnemy").innerHTML = randomBadGuy.hitPoints;
							document.getElementById("enemyHeader").innerHTML = randomBadGuy.name + " RIP";
							document.getElementById("attackLog").innerHTML = ` You rolled a ${rollResult[1]}. and hit for ${damageResult} ${randomBadGuy.name} is dead! You are victorious!`;
							document.getElementById("attackLog2").innerHTML = ``
							levelUp();
						}
						else {
							document.getElementById("hitPointsBoxEnemy").innerHTML = randomBadGuy.hitPoints;
							document.getElementById("attackLog").innerHTML = `You rolled a ${rollResult[1]}.  Your attack was successful! You hit for ${damageResult} and Enemy's HP is now ${randomBadGuy.hitPoints}!`;
							getAttacked();
							levelUp();
							}
					}
					//End section of effects for a successful hit
		else {document.getElementById("attackLog").innerHTML = `You rolled a ${rollResult[1]}.  Your attack failed!`;
		console.log('i have missed');
		}
		//see getAttacked function for the bad guys turn to attack
		getAttacked();
		if (characterOne.hitPoints <= 0) {
			if (randomBadGuy.alignment === 'Neutral') {
								setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWin.jpg"}, 810)
							}
							else if (randomBadGuy.alignment === 'Evil') {
								setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWinRed.jpg"}, 810)
							}
							else if (randomBadGuy.alignment === 'Good') {
								setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWinBlue.jpg"}, 810)
							}
		}
					}
			}
			//sections to accomodate an attempt to attack before character creation or enemy creation
			else {document.getElementById("attackLog").innerHTML = `You do not yet have an enemy!`;
			}
		
		}
		
		}
		else {document.getElementById("attackLog").innerHTML = `You don't even exist yet!`}
}




//END OF COMBAT RELATED FUNCTIONS

//TEST FUNCTIONS BELOW
/*
const nameEntryTest = () => {
	characterOne.name = 'Billy';
	document.getElementById("characterSheet").innerHTML = characterOne.name;
	if (characterOne.name != 'name'&& characterOne.name != '') {
		buttonDeletion.name = 'done';
		deleteTheButtons()
	}
	
	document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	
}

const enterAlignmentTest = () => {

	let alignment = 'good';
	let alignmentLower = alignment.toLowerCase();
	switch(alignmentLower) {
		case "good": 
			characterOne.alignment = "Good"; 
			break;
		case "neutral":
			characterOne.alignment = "Neutral"; 
			break;
		case "evil":
			characterOne.alignment = "Evil"; 
			break;
		default:
			characterOne.alignment = "Invalid Alignment, please re-enter a valid option";
			break;
			}
	
	document.getElementById("alignmentBox").innerHTML = characterOne.alignment;
	if (characterOne.alignment != "Invalid Alignment, please re-enter a valid option") {
		buttonDeletion.alignment = 'done';
		deleteTheButtons()
	}
	}

const enterSkillButtonTest = (skill) => {
	let skillLower = skill.toLowerCase()
	let testSkillEntry = '20';
	let skillEntry = testSkillEntry;
	switch (skillLower) {
		case 'strength':
		characterOne.strength = parseInt(skillEntry,10) ;
		break;
		case 'dexterity':
		characterOne.dexterity = parseInt(skillEntry,10) ;
		characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity);
		document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
		break;
		case 'constitution':
		characterOne.constitution = parseInt(skillEntry,10) ;
		characterOne.hitPoints = 5 + abilityModifier(characterOne.constitution);
		document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
		break;
		case 'wisdom':
		characterOne.wisdom = parseInt(skillEntry,10) ;
		break;
		case 'intelligence':
		characterOne.intelligence = parseInt(skillEntry,10) ;
		break;
		case 'charisma':
		characterOne.charisma = parseInt(skillEntry,10) ;
		break;
	
	};
	let checkValidSkill = checkValidEntry(skillEntry);
	if (checkValidSkill === false) {
		document.getElementById(skillLower + 'Box').innerHTML = 'input must be 1 -> 20';
	}		
	else {
		document.getElementById(skillLower + 'Box').innerHTML = skillEntry;}
	
	
	if (document.getElementById(skillLower + 'Box').innerHTML != "input must be 1 -&gt; 20") {
	
		switch (skillLower) {
			case 'strength':
			buttonDeletion.strength = 'done';
			break;
			case 'dexterity':
			buttonDeletion.dexterity = 'done';
			break;
			case 'constitution':
			buttonDeletion.constitution = 'done';
			break;
			case 'wisdom':
			buttonDeletion.wisdom = 'done';
			break;
			case 'intelligence':
			buttonDeletion.intelligence = 'done';
			break;
			case 'charisma':
			buttonDeletion.charisma = 'done';
			break;
		}
		deleteTheButtons()
		
	}
	
}

let testI = 0;
const testFunction = () => {
	if (testI===0) {
		testI++;
	nameEntryTest();
	enterAlignmentTest();
	enterSkillButtonTest('strength');
	enterSkillButtonTest('dexterity');
	enterSkillButtonTest('constitution');
	enterSkillButtonTest('wisdom');
	enterSkillButtonTest('intelligence');
	enterSkillButtonTest('charisma');
	
	}

}
*/
const loadFunction = () => {
	console.log('initializing load function');
	let savedCharacter = retrieveCharacter();
	if (savedCharacter.Saved === 1) {
		console.log('loading saved character');
	characterOne = retrieveCharacter();
	document.getElementById("characterSheet").innerHTML = characterOne.name + ' the ' + characterOne.race;
	document.getElementById("armorClassBox").innerHTML = characterOne.armorClass;
	document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	document.getElementById("alignmentBox").innerHTML = characterOne.alignment;
	document.getElementById("strengthBox").innerHTML = characterOne.strength;
	document.getElementById("dexterityBox").innerHTML = characterOne.dexterity;
	document.getElementById("charismaBox").innerHTML = characterOne.charisma;
	document.getElementById("constitutionBox").innerHTML = characterOne.constitution;
	document.getElementById("wisdomBox").innerHTML = characterOne.wisdom;
	document.getElementById("intelligenceBox").innerHTML = characterOne.intelligence;
	document.getElementById("characterClassBox").innerHTML = characterOne.characterClass;
	document.getElementById("levelCell").innerHTML = characterOne.level;
	document.getElementById("experienceCell").innerHTML = characterOne.experience;
	populateAbilityMods();
	}
	if (characterOne.buttonDeleteCheck === 1) {
		$( ".button" ).remove();
		$( ".buttonAlignment" ).remove();
		$( '.buttonStrength').remove();
		$( '.buttonDexterity').remove();
		$( '.buttonCharisma').remove();
		$( '.buttonConstitution').remove();
		$( '.buttonWisdom').remove();
		$( '.buttonIntelligence').remove();
		$( '.buttonClass').remove();
		$( '.buttonRace').remove();
		document.getElementById("theTable").deleteRow(2);
		document.getElementById("theTable").deleteRow(4);
		document.getElementById("theTable").deleteRow(6);
		document.getElementById("theTable").deleteRow(8);
	}
	
}
//window.onload = loadFunction();
$(document).ready(loadFunction()
});
