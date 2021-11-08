const icons = 
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//CREO UNA FUNZIONE PER GENERARE LE ICONE IN BASE ALLA SCELTA DEL COLORE
function sceltaColore(array){

		for(let icon of array){
	
			const name = icon.name;
			const prefix = icon.prefix;
			const type = icon.type;
			const family = icon.family;
			const color = icon.color;

		if(icon.color === 'blue'){
			
			document.getElementById('container-box').innerHTML +=
	
			`
		
			<div class="box-icon d-flex justify-content-center align-items-sm-center">
					<div class="container-content-box d-flex flex-column align-items-center">
							<i class="${family} ${prefix}${name} fas-blue "></i>
							<h6>${name.toUpperCase()}</h6>
					</div>  
			</div>
		
		 `
		}

		if(icon.color === 'green'){

			document.getElementById('container-box').innerHTML +=
	
			`
		
			<div class="box-icon d-flex justify-content-center align-items-sm-center">
					<div class="container-content-box d-flex flex-column align-items-center">
							<i class="${family} ${prefix}${name} fas-green "></i>
							<h6>${name.toUpperCase()}</h6>
					</div>  
			</div>
		
		 `
		}
		if(icon.color === 'orange'){

			document.getElementById('container-box').innerHTML +=
	
			`
		
			<div class="box-icon d-flex justify-content-center align-items-sm-center">
					<div class="container-content-box d-flex flex-column align-items-center">
							<i class="${family} ${prefix}${name} fas-orange "></i>
							<h6>${name.toUpperCase()}</h6>
					</div>  
			</div>
		
		 `
		}

		
		}
	
}

//CREO I TRE ARRAY DIVISI PER COLORE

const blueIcon = icons.filter((colore)=>{
	if(colore.color==='blue'){
		return true;
	}
})
const greenIcon = icons.filter((colore)=>{
	if(colore.color==='green'){
		return true;

	}
})
const orangeIcon = icons.filter((colore)=>{
	if(colore.color==='orange'){
		return true;
	}
})

let sceltaUtente = 'green';
// let sceltaUtente = prompt('Quale colore scelgi (blue, green, orange, all?');

//ESEGUO LA FUNZIONE IN BASE AL COLORE SCELTO

if(sceltaUtente==='blue') sceltaColore(blueIcon);
if(sceltaUtente==='green') sceltaColore(greenIcon);
if(sceltaUtente==='orange') sceltaColore(orangeIcon);
if(sceltaUtente==='all') sceltaColore(icons);


console.log('blu icons', blueIcon);
console.log('green icons', greenIcon);
console.log('orange icons', orangeIcon);






