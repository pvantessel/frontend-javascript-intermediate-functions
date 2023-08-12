// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

console.log("----- OPD 1A -----")

const studentGrades1 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let count1 = 0;

for (let i = 0; i < studentGrades1.length; i++) {
    if (studentGrades1[i] >= 8) {
        count1++;
    }
}

console.log(count1);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log("----- OPD 1B -----")
function cumLaude(listGrades2) {
    let count2 = 0;

    for (let i = 0; i < listGrades2.length; i++) {
        if (listGrades2[i] >= 8) {
            count2++;
        }
    }
    return count2;
}

const studentGrades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const result1 = cumLaude(studentGrades2);
console.log(result1);
const result2 = cumLaude([6, 4, 5]);
console.log(result2);
const result3 = cumLaude([8, 9, 4, 6, 10]);
console.log(result3);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
console.log("----- OPD 2A -----")

const studentGrades3 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let sumGrades3 = 0;

for (let i = 0; i < studentGrades3.length; i++) {
    sumGrades3 = sumGrades3 + studentGrades3[i];
}
const averageGrades3 = sumGrades3/studentGrades3.length;
console.log(averageGrades3);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
console.log("----- OPD 2B -----")

function averageGrade(listGrades4) {
    if (listGrades4.length === 0) {
        return 0; // Can't devide by 0
    }

    let sumGrades4 = 0;

    for (let i = 0; i < listGrades4.length; i++) {
        sumGrades4 = sumGrades4 + listGrades4[i];
    }

    return sumGrades4/listGrades4.length;
}

const studentGrades4 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

const result4 = averageGrade(studentGrades4);
console.log(result4);
const result5 = averageGrade([6, 4, 5]);
console.log(result5);
const result6 = averageGrade([8, 9, 4, 6, 10]);
console.log(result6);
// const result7 = averageGrade([]);
// console.log(result7);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
console.log("----- OPD 2C -----")

// const afgerondNum = num.toFixed(2);
function averageGrade2dec(listGrades5) {
    if (listGrades5.length === 0) {
        return 0; // Can't devide by 0
    }

    let sumGrades5 = 0;

    for (let i = 0; i < listGrades5.length; i++) {
        sumGrades5 = sumGrades5 + listGrades5[i];
    }
    const averageGrade = sumGrades5/listGrades5.length;
    return averageGrade.toFixed(2);
}

const studentGrades5 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

const result7 = averageGrade2dec(studentGrades5);
console.log(result7);
const result8 = averageGrade2dec([6, 4, 5]);
console.log(result8);
const result9 = averageGrade2dec([8, 9, 4, 6, 10]);
console.log(result9);
// const result7 = averageGrade([]);
// console.log(result7);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
console.log("----- OPD 3A -----")

const studentGrades6 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let highestGrade6 = studentGrades6[0];

for (let i = 0; i < studentGrades6.length; i++) {

    if (studentGrades6[i] > highestGrade6) {
        highestGrade6 = studentGrades6[i];
    }
}

console.log(highestGrade6);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

console.log("----- OPD 3B -----")

function highestGrade(listGrades7) {
    if (listGrades7.length === 0) {
        return "No grades available";
    }

    let highestGrade7 = listGrades7[0];

    for (let i = 0; i < listGrades7.length; i++) {

        if (listGrades7[i] > highestGrade7) {
            highestGrade7 = listGrades7[i];
        }
    }

    return highestGrade7;
}

const studentGrades7 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

const result10 = highestGrade(studentGrades7);
console.log(result10);
const result11 = highestGrade([6, 4, 5]);
console.log(result11);
const result12 = highestGrade([8, 9, 4, 6, 10]);
console.log(result12);
// const result13 = highestGrade([]);
// console.log(result13);

