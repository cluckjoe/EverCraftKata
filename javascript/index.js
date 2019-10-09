
document.getElementById('date').innerHTML = new Date().toDateString();

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
	charisma: 10
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

//Used whenever something requires the ability modifier of a characters skill
const abilityModifier = (character) => {
	switch(character) {
		case 1:
		return -5;
		break;
		case 2:
		return -4;
		break;
		case 3:
		return -4;
		break;
		case 4:
		return -3;
		break;
		case 5:
		return -3;
		break;
		case 6:
		return -2;
		break;
		case 7:
		return -2;
		break;
		case 8:
		return -1;
		break;
		case 9:
		return -1;
		break;
		case 10:
		return 0;
		break;
		case 11:
		return 0;
		break;
		case 12:
		return 1;
		break;
		case 13:
		return 1;
		break;
		case 14:
		return 2;
		break;
		case 15:
		return 2;
		break;
		case 16:
		return 3;
		break;
		case 17:
		return 4;
		break;
		case 18:
		return 4;
		break;
		case 19:
		return 5;
		break;
		case 20:
		return 5;
		break;	
}
}

//END OF DEFAULT OBJECTS AND ARRAYS


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//CHARACTER CREATION
let buttonDeletion = {
	name: '',
	alignment: '',
	strength: '',
	dexterity: '',
	constitution: '',
	wisdom: '',
	intelligence: '',
	charisma: ''
}

const deleteTheButtons = () => {
	console.log('button deletion has been requested')
	if (buttonDeletion.name === 'done' && buttonDeletion.alignment === 'done' && buttonDeletion.strength === 'done' && buttonDeletion.dexterity === 'done' && buttonDeletion.constitution === 'done' && buttonDeletion.wisdom === 'done' && buttonDeletion.intelligence === 'done' && buttonDeletion.charisma === 'done') {
		console.log('BUTTONS BEING REMOVED');
		$( ".button" ).remove();
		$( ".buttonAlignment" ).remove();
		
		$( '.buttonStrength').remove();
		$( '.buttonDexterity').remove();
		$( '.buttonCharisma').remove();
		$( '.buttonConstitution').remove();
		$( '.buttonWisdom').remove();
		$( '.buttonIntelligence').remove();
		document.getElementById("theTable").deleteRow(2);
		document.getElementById("theTable").deleteRow(4);
		document.getElementById("theTable").deleteRow(6);
		
	}
	else {
		console.log('it was determined not to delete the buttons yet, here are the current settings:');
		console.log(buttonDeletion);
	}
}


const nameEntry = () => {
	characterOne.name = prompt("Enter your name: ", "name");
	document.getElementById("characterSheet").innerHTML = characterOne.name;
	if (characterOne.name != 'name'&& characterOne.name != '') {
		buttonDeletion.name = 'done';
		deleteTheButtons()
	}
	
	document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
	
}

const enterAlignment = () => {

	let alignment = prompt("Enter your alignment (good, neutral, or evil):  ", "alignment");
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
	
	
//used for all ability modifiers
const checkValidEntry = (ability) => {
	for (i = 0; i <= 20; i++) {
		
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
		document.getElementById(skill + 'Box').innerHTML = 'input must be 0 -> 20';
	}		
	else {
		document.getElementById(skillLower + 'Box').innerHTML = skillEntry;}
	
	
	if (document.getElementById(skillLower + 'Box').innerHTML != 'input must be 0 -> 20') {
	
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
	

//END OF CHARACTER CREATION		

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//COMBAT RELATED FUNCTIONS


const createRandomBadGuy = () => {
	const arrayPosition = Math.floor(Math.random()*50);
	randomBadGuy.name = arrayOfNames[arrayPosition];
	randomBadGuy.armorClass = Math.floor(Math.random()*18 + 1);
	randomBadGuy.hitPoints = Math.floor(Math.random()*9 + 1);
	document.getElementById("alignmentBoxEnemy").innerHTML = randomBadGuy.alignment;
	document.getElementById("armorClassBoxEnemy").innerHTML = randomBadGuy.armorClass;
	document.getElementById("hitPointsBoxEnemy").innerHTML = randomBadGuy.hitPoints;
	document.getElementById("enemyHeader").innerHTML = randomBadGuy.name;
	generateEnemySprite();

}
	
const generateEnemySprite = () => {
	const delay = 200;
	document.getElementById("enemySprite").src = "./goblinSpriteWalk1.jpg";
	
	setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk2.jpg"
	setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk3.jpg"
	setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWalk4.jpg"
	setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStand.jpg"}, delay)}, delay)}, delay)}, delay);
 
}	

const enemySpriteAttack = () => {
	const delay = 200;
	setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStab.jpg"
	setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteStand.jpg"}, delay)}, delay);
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
	let damageResult1 = '';
	const innerRollResult = rollDamageDie(randomBadGuy);
	if (innerRollResult[0] >= characterOne.armorClass) {
		enemySpriteAttack();
		characterOne.hitPoints = characterOne.hitPoints -1-abilityModifier(randomBadGuy.strength);
		if (innerRollResult[1] === 20) {
			console.log(`step 2: roll result was a 20, i take double damage`);
			characterOne.hitPoints = characterOne.hitPoints -1-abilityModifier(randomBadGuy.strength);
			let damageDealt1 = 2*(1+abilityModifier(randomBadGuy.strength))
			damageResult1 = `${damageDealt1} dmg`;
		}
		else {
			console.log(`step 2: i took regular damage`);
			let damageDealt1 = 1+abilityModifier(randomBadGuy.strength);
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


const attackPlayer = () => {
	if (characterOne.hitPoints != 0) {
	if(randomBadGuy.name != ''){
		if (randomBadGuy.hitPoints <= 0) {
			document.getElementById("attackLog").innerHTML = `They are already dead! Have some mercy!`;}
		else {	
		const rollResult = rollDamageDie(characterOne);
		if (rollResult[0] >= randomBadGuy.armorClass) {
			randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.strength);
			let damageDealt = 1+abilityModifier(characterOne.strength);
			let damageResult = `${damageDealt} dmg`;
			if (rollResult[1]=== 20) {
				randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.strength);
				damageDealt = 2*(1+abilityModifier(characterOne.strength));
			damageResult = `${damageDealt} dmg (it's a crit!)`;}
			if (randomBadGuy.hitPoints <= 0) {
				document.getElementById("enemySprite").src = "./goblinSpriteDead.jpg";
				document.getElementById("hitPointsBoxEnemy").innerHTML = randomBadGuy.hitPoints;
				document.getElementById("enemyHeader").innerHTML = randomBadGuy.name + " RIP";
				document.getElementById("attackLog").innerHTML = ` You rolled a ${rollResult[1]}. and hit for ${damageResult} ${randomBadGuy.name} is dead! You are victorious!`;
				document.getElementById("attackLog2").innerHTML = ``}
			else {
				document.getElementById("hitPointsBoxEnemy").innerHTML = randomBadGuy.hitPoints;
				document.getElementById("attackLog").innerHTML = `You rolled a ${rollResult[1]}.  Your attack was successful! You hit for ${damageResult} and Enemy's HP is now ${randomBadGuy.hitPoints}!`;
				getAttacked();
				}
				}
	
	else {document.getElementById("attackLog").innerHTML = `You rolled a ${rollResult[1]}.  Your attack failed!`;
	getAttacked();
	
	}

	}
	}
	
	
else if (characterOne.name != 'name'&& characterOne.name != '') {document.getElementById("attackLog").innerHTML = `You do not yet have an enemy!`;
}
else {document.getElementById("attackLog").innerHTML = `You don't even exist yet!`}
	}
}


//END OF COMBAT RELATED FUNCTIONS

//TEST FUNCTIONS BELOW
/*
const nameEntryTest = () => {
	characterOne.name = "BillyTesting"
	document.getElementById("characterSheet").innerHTML = characterOne.name;
	if (characterOne.name != 'name'&& characterOne.name != '' && characterOne.alignment != "Invalid Alignment, please re-enter a valid option" && characterOne.alignment != '') {

				$( ".button" ).remove();
				$( ".buttonAlignment" ).remove();
				document.getElementById("theTable").deleteRow(2);
    }
	characterOne.armorClass = characterOne.armorClass + abilityModifier(characterOne.dexterity);
	document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
	document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints;
}


const enterAlignmentTest = () => {

	let alignment = "good";
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
	if (characterOne.alignment != "Invalid Alignment, please re-enter a valid option" && characterOne.name != 'name' && characterOne.name != '') {
	$( ".buttonAlignment" ).remove();
	document.getElementById("theTable").deleteRow(2);
	}
	}


let testI = 0;
const testFunction = () => {
	if (testI===0) {
		testI++;
	nameEntryTest();
	enterAlignmentTest();
	createRandomBadGuy();
	}
	getAttacked()
}
	*/	
