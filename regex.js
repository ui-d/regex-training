// matching

let str = "This is testing of this conteent";

let exp = /this/gi;

let arrOfMatches = str.match(exp);

let match1 = arrOfMatches[0]; // This
let match2 = arrOfMatches[1]; // this

// one or more

let letterE = /e+/g;

let findEs = str.match(letterE);

findEs;
