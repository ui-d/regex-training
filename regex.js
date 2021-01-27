// matching

let str = "This is testing of this conteentt";

let exp = /this/gi;

let arrOfMatches = str.match(exp);

let match1 = arrOfMatches[0]; // This
let match2 = arrOfMatches[1]; // this

// one or more

let letterE = /e+/g;

let findEs = str.match(letterE);

findEs;

// optional char

let optionalChar = /nt?/g;

let nAndOptionalT = str.match(optionalChar);

nAndOptionalT;

// match 0 or more

let zeroOrMore = /nt*/g;

let findZeroOrMore = str.match(zeroOrMore);

findZeroOrMore;

// match anything

let matchOneBefore = /.nt/g;
let matchTwoAfter = /nt../g;

let matchingAnythingBefore = str.match(matchOneBefore);

matchingAnythingBefore;
