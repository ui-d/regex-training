// matching

let str = "This is testing ooof this 21. conteentt.m 21a";

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

// look behind (find something, followed by something)

let followedBySpace = /(?<=i)s/g; // every s followed by i

// oposite look behind

let NOTfollowedBySpace = /(?<!i)s/g;

// look ahead

let anyTwithHISafterIT = /t|T(?=his)/g; // T t t t t t t (any t with his after it)

let testing = str.match(anyTwithHISafterIT);

testing;

// EXERCISES

// Exercise 1: Matching Characters
// Task	Text
// Match	abcdefg
// Match	abcde
// Match	abc

let solution = /[a-g]{1,7}/;

// Exercise 1½: Matching Digits

// Match	abc123xyz
// Match	define "123"
// Match	var g = 123;

let solution2 = /123/;

// Exercise 2: Matching With Wildcards

// Match	cat.
// Match	?=+.

// Skip	abc1

let solution3 = /cat|896|\?=\+/;

// Exercise 3: Matching Characters

// Match	can
// Match	man
// Match	fan

let solution4 = /[cmf]an/;

// Exercise 4: Excluding Characters

// Match	hog
// Match	dog

// Skip	bog

let solution5 = /[d-h]og/;

// Exercise 5: Matching Character Ranges

// Match	Ana
// Match	Bob
// Match	Cpc

// Skip	aax
// Skip	bby
// Skip	ccz

let solution6 = /[a-pA-P]{3}/;

// Exercise 6: Matching Repeated Characters

// Match	wazzzzzup
// Match	wazzzup

// Skip	wazup

let solution7 = /waz{2,}up/;

// Exercise 7: Matching Repeated Characters

// Match	aaaabcc
// Match	aabbbbc
// Match	aacc

// Skip	a

let solution8 = /a+(b+)?c+/;

// Exercise 8: Matching Optional Characters

// Match	1 file found?
// Match	2 files found?
// Match	24 files found?

// Skip	No files found.

let solution9 = /\d+\sfiles?\sfound\?/;

// Exercise 9: Matching Whitespaces

// Match	1.
// Match	2.
// Match	3.

// Skip	4.abc

let solution10 = /[1-3].\s+abc/;

// Exercise 10: Matching Lines

// Match	Mission

// Skip	Last Mission
// Skip	Next Mission

let solution11 = /^Mission/;

// Exercise 11: Matching Groups
// Task	Text	                      Capture Groups
// file_record_transcript.pdf	      file_record_transcript
// file_07241999.pdf	              file_07241999

// Skip	test file_fake.pdf.tmp

let solution12 = /(file_record_transcript)|(file_07241999)\.pdf/;

// Exercise 12: Matching Nested Groups
// Task	Text	Capture Groups
// Jan 1987	  Jan 1987 1987
// May 1969	  May 1969 1969
// Aug 2011	  Aug 2011 2011

let solution13 = /((Jan|May|Aug)\s(1987|1969|2011))/;

// Exercise 13: Matching Nested Groups

// Task Text	    Capture Groups
// 1280x720	    1280 720
// 1920x1600	    1920 1600
// 1024x768	    1024 768

let solution14 = /(\d+)x(\d+)/;

// Exercise 14: Matching Conditional Text

// Match	I love cats
// Match	I love dogs

// Skip	I love logs
// Skip	I love cogs

let solution15 = /I love (cats|dogs)/;

// CODEWARS

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

let pin1 = "3434";
let pin2 = "2224";

function validatePIN(pin) {
  let regex = /^\d{4}$|^\d{6}$/;

  let test = pin.match(regex);

  console.log(test);
}

let a = validatePIN(pin2);
