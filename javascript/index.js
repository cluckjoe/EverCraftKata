
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
	charisma: 10,
	experience: 0,
	level: 1,
	levelAttackRollModifier: 0,
	characterClass: ''
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


//CHARACTER CREATION AND MODIFICATION
let buttonDeletion = {
	name: '',
	alignment: '',
	strength: '',
	dexterity: '',
	constitution: '',
	wisdom: '',
	intelligence: '',
	charisma: '',
	characterClass: ''
}

const deleteTheButtons = () => {
	
	if (buttonDeletion.name === 'done' && buttonDeletion.alignment === 'done' && buttonDeletion.strength === 'done' && buttonDeletion.dexterity === 'done' && buttonDeletion.constitution === 'done' && buttonDeletion.wisdom === 'done' && buttonDeletion.intelligence === 'done' && buttonDeletion.charisma === 'done' && buttonDeletion.characterClass === 'done') {
		
		$( ".button" ).remove();
		$( ".buttonAlignment" ).remove();
		$( '.buttonStrength').remove();
		$( '.buttonDexterity').remove();
		$( '.buttonCharisma').remove();
		$( '.buttonConstitution').remove();
		$( '.buttonWisdom').remove();
		$( '.buttonIntelligence').remove();
		$( '.buttonClass').remove();
		document.getElementById("theTable").deleteRow(2);
		document.getElementById("theTable").deleteRow(4);
		document.getElementById("theTable").deleteRow(6);
		document.getElementById("theTable").deleteRow(8);
		
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
			characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity) + abilityModifier(characterOne.wisdom);
		}
		else {
		characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity);
		}
		document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
		break;
		case 'constitution':
		characterOne.constitution = parseInt(skillEntry,10) ;
		characterOne.hitPoints = 5 + abilityModifier(characterOne.constitution);
		document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
		break;
		case 'wisdom':
		characterOne.wisdom = parseInt(skillEntry,10) ;
		if (characterOne.characterClass === 'monk') {
			characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity) + abilityModifier(characterOne.wisdom);
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
		deleteTheButtons()
		
	}
}
	
const levelUp = () => {
	for (i=1000; i<=20000; i=i+1000) {
		if(characterOne.experience >= i && characterOne.experience < (i+1000) && ((characterOne.level * 1000)-1000) != i) {
			characterOne.level = ((i/1000)+1);
			console.log(`your character level is ${characterOne.level} and i = ${i}`);
			document.getElementById("levelCell").innerHTML = characterOne.level;
			characterOne.hitPoints = characterOne.hitPoints + abilityModifier(characterOne.constitution) + 5;
			document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
			if (characterOne.characterClass === 'fighter') {
				characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1
				characterOne.hitPoints = characterOne.hitPoints + abilityModifier(characterOne.constitution) + 5;
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
				console.log(`I AM A FIGHTER SO I GET MORE ATTACK AND MORE HP`);
			}
			else if (characterOne.characterClass === 'monk') {
				if ((characterOne.level)%2 === 0 || (characterOne.level)%3 === 0) {
					characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1;
				}
				characterOne.hitPoints = characterOne.hitPoints + abilityModifier(characterOne.constitution) + 1;
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
				console.log(`I AM A MONK SO I GET MORE HP`);
			}
			else if (characterone.characterClass === 'paladin') {
				characterOne.hitPoints = characterOne.hitPoints + abilityModifier(characterOne.constitution) + 3;
				document.getElementById("hitPointsBox").innerHTML = characterOne.hitPoints; 
				characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1
			}
			
			else if ((characterOne.level)%2 === 0) {
				characterOne.levelAttackRollModifier = characterOne.levelAttackRollModifier + 1;
			}
			console.log('CONGRATS YOU LEVELED UP');
			console.log(`Your level is now ${characterOne.level} your hitpoints are now ${characterOne.hitPoints} and your bonus to attack roll is now ${characterOne.levelAttackRollModifier}`)
			
		}
	}
	
}


const enterClass = () => {

	let characterClass = prompt("Enter your class (rogue, monk, paladin, or fighter):  ");
	let characterClassLower = characterClass.toLowerCase();
	switch(characterClassLower) {
		case "rogue": 
			if (characterOne.alignment === 'good') {
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
			characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity) + abilityModifier(characterOne.wisdom);
			document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
		}
	else {
		characterOne.armorClass = 10 + abilityModifier(characterOne.dexterity);
		document.getElementById("armorClassBox").innerHTML = characterOne.armorClass 
	}
	if (characterOne.characterClass != "Invalid Alignment, please re-enter a valid option" && characterOne.characterClass != "") {
		buttonDeletion.characterClass = 'done';
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
	const randomAlignment = Math.floor(Math.random()*3);
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
	document.getElementById("enemyHeader").innerHTML = randomBadGuy.name;
	document.getElementById("alignmentBoxEnemy").innerHTML = randomBadGuy.alignment;
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
			
			characterOne.hitPoints = characterOne.hitPoints -1-abilityModifier(randomBadGuy.strength);
			let damageDealt1 = 2*(1+abilityModifier(randomBadGuy.strength))
			damageResult1 = `${damageDealt1} dmg`;
		}
		else {
			
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
	let damageDealt = 0;
	if (abilityModifier(randomBadGuy.dexterity)>=0) {
		let enemyDexModIfPositive = abilityModifier(randomBadGuy.dexterity);
	}
	else {
		let enemyDexModIfPositive = 0;
	}
if (characterOne.name != 'name'&& characterOne.name != '') {
	if (characterOne.hitPoints > 0) {
		if(randomBadGuy.name != ''){
			if (randomBadGuy.hitPoints <= 0) {
				
				document.getElementById("attackLog").innerHTML = `They are already dead! Have some mercy!`;}
			else {	
				const rollResult = rollDamageDie(characterOne);
				rollResult[0] = rollResult[0] + characterOne.levelAttackRollModifier;
				if (characterOne.characterClass === 'paladin' && randomBadGuy.alignment === 'evil') {
					rollResult[0] = rollResult[0] + 2;
				}
				if (rollResult[0] >= randomBadGuy.armorClass || ((characterOne.characterClass === 'rogue')&&(rollResult[0] >= (randomBadGuy.armorClass - enemyDexModIfPositive)))) {
					console.log('initiate successful attack');
					console.log(characterOne.characterClass);
					characterOne.experience = characterOne.experience + 10;
					document.getElementById("experienceCell").innerHTML = characterOne.experience;
					if (characterOne.characterClass === 'rogue') {
						randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.dexterity);
						damageDealt = 1+abilityModifier(characterOne.dexterity);
						console.log(`As a rogue I used dexterity mod to my attack which was ${characterOne.dexterity}`);
					}
					else if (characterOne.characterClass === 'monk') {
						randomBadGuy.hitPoints = randomBadGuy.hitPoints - 3 - abilityModifier(characterOne.strength);
						damageDealt = 3+abilityModifier(characterOne.strength);
						console.log(`As a monk I hit 3 default damage`);
					}
					else if (characterOne.characterClass === 'paladin' && randomBadGuy.alignment === 'Evil') {
						randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.strength) - 2;
						damageDealt = 1+abilityModifier(characterOne.strength)+2;
						console.log(damageDealt);
					}
					else {
						randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.strength);
						damageDealt = 1+abilityModifier(characterOne.strength);
					}
					let damageResult = `${damageDealt} dmg`;
					if (rollResult[1]=== 20) {
						if (characterOne.characterClass === 'monk') {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - 3 - abilityModifier(characterOne.strength);
							damageDealt = 2*(3+abilityModifier(characterOne.strength));
						}
						else if (characterOne.characterClass === 'paladin' && randomBadGuy.alignment === 'Evil') {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - (2*(1 + abilityModifier(characterOne.strength) + 2));
							damageDealt = 3*(1+abilityModifier(characterOne.strength)+2);
						}	
						else {
							randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.strength);
							damageDealt = 2*(1+abilityModifier(characterOne.strength));
							if (characterOne.characterClass === 'rogue') {
								randomBadGuy.hitPoints = randomBadGuy.hitPoints - 1 - abilityModifier(characterOne.dexterity);
							damageDealt = 3*(1+abilityModifier(characterOne.dexterity));
							console.log('ROGUE CRITICAL');
							}
						}
						damageResult = `${damageDealt} dmg (it's a crit!)`;
					}
					if (randomBadGuy.hitPoints <= 0) {
						setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteDead.jpg"}, 810)
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
	
	else {document.getElementById("attackLog").innerHTML = `You rolled a ${rollResult[1]}.  Your attack failed!`;
	console.log('i have missed');
	}
	getAttacked();
	if (characterOne.hitPoints <= 0) {
		setTimeout(function(){document.getElementById("enemySprite").src = "./goblinSpriteWin.jpg"}, 810)
	}
				}
		}
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
