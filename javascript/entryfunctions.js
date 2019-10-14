//Used whenever something requires the ability modifier of a characters skill
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