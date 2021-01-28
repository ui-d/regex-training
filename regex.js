// matching

let str = "This is testing ooof this conteentt.m 21a";

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

// match 0 or more

let zeroOrMore = /nt*/g;

// match anything

let matchOneBefore = /.nt/g;
let matchTwoAfter = /nt../g;

// escaping

let escapePiriod = /\./g;

// match any word

let matchAnyWord = /\w/;

// any form of space

let spaces = /\s/g;

// opposite

let notLetter = /\W/;

let notSpace = /\S/;

// find min/max number of...

let minMax = /o{1,3}/g;
let minMaxWords = /\w{4,10}/g;

// match any character

let anyChar = /[nstao]t/g;

// match any char from range

let anyCharFromRange = /[a-z]t/g;

// match any char from range (lower and uppercase)

let anyCharFromRangeLowerAndUppercase = /[a-zA-Z]t/g;

// match any number from range

let anyNumFromRange = /[0-2000]a/g;

// grouping and OR operator

let thisOrThat = /(t|T)[a-z]/g;

// multiple char from group

let multipleCharsFromGroup = /(o|c|d){2,3}/g; // 'ooo', 'co'

// match the begining of the line

let beginingOfLine = /^This/g;

// end of line

let endOfLine = /21a$/g;

// COMPLEX STUFF

// look ahead

let testing = str.match(endOfLine);

testing;
