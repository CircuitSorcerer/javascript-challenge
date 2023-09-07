const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList ="0123456789";
const symbolList = "!@#$%&*()";

// Function to get user options for password
function getParams() {
    options = {};
    // Functions for getting and filtering user input
    function getLength() {
        var length = parseInt(prompt("Length  of password?", "between 8 and 128"));
        console.log(length);
        if (isNaN(length) || length < 8 || length > 128) {
            alert("Invalid Entry, please choose an integer between 8 and 128");
            getLength();
        }
        return length;
    }
    
    function getLowerCase() {
        var lowerCase = prompt("Use lower case letters?", "'y' or 'n'");
        if (lowerCase.toLowerCase() != "y" && lowerCase.toLowerCase() != "n") {
            alert("Invalid Entry, please choose 'y' or 'n'");
            getLowerCase();
        } else if (lowerCase.toLowerCase() === "y") {
            options.lowerCase = true;
        } else {
            options.lowerCase = false;
        }
        console.log(options.lowerCase);
    }

    function getUpperCase() {
        var upperCase = prompt("Use upper case letters?", "'y' or 'n'");
        if (upperCase.toLowerCase() != "y" && upperCase.toLowerCase() != "n") {
            alert("Invalid Entry, please choose 'y' or 'n'");
            getUpperCase();
        } else if (upperCase.toLowerCase() === "y") {
            options.upperCase = true;
        } else {
            options.upperCase = false;
        }
        console.log(options.upperCase);
    }

    function getNums() {
        var nums = prompt("Use numbers?", "'y' or 'n'");
        if (nums.toLowerCase() != "y" && nums.toLowerCase() != "n") {
            alert("Invalid Entry, please choose 'y' or 'n'");
            getNums();
        } else if (nums.toLowerCase() === "y") {
            options.nums = true;
        } else {
            options.nums = false;
        }
        console.log(options.nums);
    }

    function getSymbols() {
        var symbols = prompt("Use special characters?", "'y' or 'n'");
        if (symbols.toLowerCase() != "y" && symbols.toLowerCase() != "n") {
            alert("Invalid Entry, please choose 'y' or 'n'");
            getSymbols();
        } else if (symbols.toLowerCase() === "y") {
            options.symbols = true;
        } else {
            options.symbols = false;
        }
        console.log(options.symbols);
        
    }

    // Call prompt functions
    options.length = getLength();
    lowerCase = getLowerCase();
    upperCase = getUpperCase();
    nums = getNums();
    symbols = getSymbols();

    //Check at least one input has been chosen
    if (options.lowerCase === false && options.upperCase === false && options.nums === false && options.symbols === false ) {
        alert("Must select at least one character option!")
        displayPassword(passwordGenerator(getParams()));
    } else {
        console.log("NO WORKY")
    }
    

    return options;
}

// Function to take user inputs and generate a random string
function passwordGenerator(options) {
    console.log(options);
    var useChar = []
    var passString = ""
    if (options.lowerCase === true) {
        useChar.push(lowerCaseLetters);
    }
    if (options.upperCase === true) {
        useChar.push(upperCaseLetters);
    }
    if (options.nums === true) {
        useChar.push(numberList);
    }
    if (options.symbols === true) {
        useChar.push(symbolList)
    }
    console.log(useChar);
    for (var i=0; i<options.length; i++) {
        var randList1 = [];
        randList1 = useChar[Math.floor(Math.random()*useChar.length)];
        console.log(randList1);
        var randListChar = randList1[Math.floor(Math.random()*randList1.length)];
        console.log(randListChar);
        passString = passString + randListChar
    }
    console.log(passString);
    console.log(passString.length);

    /*    PASSWORD FILTERING TO BE REVISITED
    for (i=0; i<useChar.length; i++) {
        j = 0;
        for (j=0; j<passString.length; j++) {
            console.log(useChar[i]);
            console.log()
        if (useChar[i].includes(passString[j]) == false) {
            contained = false;
        } else {
            return contained = true;
        }
        console.log(contained)
        }
        if (contained === false) {
            return displayPassword(passwordGenerator(options));
        }
    }
    var contained = false;
    var i = 0;
    while (i < useChar.length) {
        let j= 0;
        do {
            if (useChar[i].includes(passString[j]) == false) {
                contained = false;
                j++;
            } else {
                return contained = true;
            }
            console.log(contained)
        } while (j < passString.length || contained === false);
        if (contained === false) {
            console.log("Success")
            return displayPassword(passwordGenerator(options));
        }
    }*/

    return passString;
}

// Display the generated password in the box on screen
var passwordBox = document.querySelector("#password-box")

function displayPassword(passString) {
    passwordBox.innerHTML = passString;
}


// Button code, changes from generate to regenerate and detects click
var button = document.querySelector("button")

function buttonText() {
    if (webpageFresh === false) {
        button.textContent = "Regenerate"
    }
}

button.addEventListener("click", function(){
    if (webpageFresh === true) {
        webpageFresh = false
        displayPassword(passwordGenerator(getParams()));
        buttonText()
    } else {
        displayPassword(passwordGenerator(options))
    }
})


/*   CLICK TO COPY TO BE REVISITED
passwordBox.addEventListener("click", function clickToCopy() {
    const passBoxText = document.getElementById("passText");
    passBoxText.select();
    navigator.clipboard.writeText(passBoxText.value);
})*/

// Initialisation function
function init() {
    webpageFresh = true;
}

init();