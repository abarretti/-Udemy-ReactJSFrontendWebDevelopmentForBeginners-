//SPREAD
var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan];
console.log(allMountains);

var day = {
  breakfast: "toast with milk",
  lunch: "rice with chicken curry"
}

var night = {
  dinner: "noodle soup"
}

var picnic = {...day, ...night};
console.log(picnic);

//REST
var rivers = ['Sunkoshi', 'Tamakoshhi', 'Saptakoshi'];
var [first, ...rest] = rivers;

console.log(rest);
