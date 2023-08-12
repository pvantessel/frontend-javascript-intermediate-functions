// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email) {
    const splitEmail = email.split("@");
    return splitEmail[1];
}

const domainName1 = getEmailDomain("n.eeken@novi-education.nl");
console.log(domainName1);
const domainName2 = getEmailDomain("t.mellink@novi.nl");
console.log(domainName2);
const domainName3 = getEmailDomain("a.wiersma@outlook.com");
console.log(domainName3);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email2){
    const splitEmail2 = email2.split("@");
    const domainName = splitEmail2[1];

    switch(domainName) {
        case "novi-education.nl":
            return "Student";
        case "novi.nl":
            return "Employee";
        default:
            return "External";
    }
}

const emailType1 = typeOfEmail("n.eeken@novi-education.nl");
console.log(emailType1);
const emailType2 = typeOfEmail("t.mellink@novi.nl");
console.log(emailType2);
const emailType3 = typeOfEmail("novi.nlaapjesk@outlook.com");
console.log(emailType3);
const emailType4 = typeOfEmail("a.wiersma@outlook.com");
console.log(emailType4);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity(email3) {
    const checkAtSign = email3.includes("@");
    const checkComma = email3.includes(",");
    const checkDot = email3[email3.length -1];

    if ((checkAtSign) && !(checkComma) && !(checkDot === ".") ) {
        return "true";
    }  else {
        return "False";
    }
}

const validEmailAddress1 = checkEmailValidity("n.eeken@novi.nl");
console.log(validEmailAddress1);
const validEmailAddress2 = checkEmailValidity("tessmellink@novi.nl");
console.log(validEmailAddress2);
const validEmailAddress3 = checkEmailValidity("n.eekenanovi.nl");
console.log(validEmailAddress3);
const validEmailAddress4 = checkEmailValidity("n.eeken@novinl.");
console.log(validEmailAddress4);
const validEmailAddress5 = checkEmailValidity("tessmellink@novi,nl");
console.log(validEmailAddress5);
