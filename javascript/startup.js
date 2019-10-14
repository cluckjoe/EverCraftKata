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
	characterClass: '',
	race: 'Human'
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