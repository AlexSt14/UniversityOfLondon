//ADS1 MidTerm Rhymes code implementation
var dataArray = [];
var rhymesData = new Map();

//loading the words file into an array
var fs = require('fs');
var wordListPath = './wordlist.csv';
var data = fs.readFileSync(wordListPath, 'utf-8');
dataArray = data.split('\n');

//creating the user interface
//This code for creating user interface was taken and adapted for my app from:
// https://www.codecademy.com/article/getting-user-input-in-node-js
const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

//script logic
function startApp() {
    //this will compare all words and add the ones ending in same 3 letters to array
    function getRhyme(word) {
        var rhymesWords = [];
        //if they are part of the map/dictionary, we skip traversing the whole array, 
        //else we continue with traversing
        if (rhymesData.has(word)) {
            rhymesWords = rhymesData.get(word);
        }
        else {
            for (var i = 0; i < dataArray.length; i++) {
                if (dataArray[i].slice(-4).trim() === word.slice(-3).trim()){
                    rhymesWords.push(dataArray[i]);                          
                }
            }  
            //add the current word search to the map
            rhymesData.set(word, rhymesWords);
        }    
        return rhymesWords;
    }
    //user input
    console.log('We have a total word count of ' + dataArray.length + ' in our database');
    rl.question('Enter a word to find a rhyme: ', (word) => {
        var rhymes = getRhyme(word);
        for (var i = 0; i < rhymes.length; i++) {
            console.log(rhymes[i]);  
        }
        console.log('There are a total of ' + rhymes.length + ' rhymes for ' + word);
        
        //logic to restart the app or to show the map of key/value pairs for rhymes
        //already found/searched
        rl.question('Do you want to type another word? (yes/no) ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                startApp();
            }
            else {
                rl.question('Do you want to see the map/dictionary for the existing rhymes? If you want to exit the app, type no! (yes/no) ', (answer) => {
                    //this will print the map to the console
                    if (answer.toLowerCase() === 'yes') {
                        console.log(rhymesData);
                        rl.question('Do you want to exit the app? (yes/no) ', (answer) => {
                            if (answer.toLowerCase() === 'yes') {
                                closeApp();
                            }
                            else {
                                startApp();
                            }
                        })
                    }
                    else {
                        closeApp();
                    }
                })                
            }
        })
    }) 
}

//closing the app
function closeApp() {
    console.log('Exiting the app now...');
    process.exit();
}

//initial call to start the app once the file is opened
startApp();