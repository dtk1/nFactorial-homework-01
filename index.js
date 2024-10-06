//Task 1
const footballteam ={
    name: 'fcAktobe',
    locaton: 'Aktobe',
    rating: 2,
    isPlaying: true,
    topPlayers: ['Igor Shatskiy', 'Idris Umayev', 'Zhairo Zhan'],
    disqualifiedPlayers: null
};
footballteam.ceo = "Azamat Shaihy";

footballteam['established'] = 1967;

footballteam.rating = 3;

delete footballteam.disqualifiedPlayers

console.log(footballteam)

//Task 2
let vehicle ={
}
vehicle.brandName = 'BMW M5'

vehicle.model = 'M5 F90'

vehicle.model = 'M1'

delete vehicle.model

console.log(vehicle)

//Task 3

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let totalSalary = 0;
for (let prop in salaries){
    totalSalary += salaries[prop]
}
console.log(`Total salary is equal to ${totalSalary}`);