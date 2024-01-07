//ADS1 MidTerm Rhymes App
//loading the CMU dictionary version 0.7b
const wordMap = new Map();
const existingRhymes = new Map();
const fs = require('fs');
const wordListPath = './wordlist.csv';
const fileData = fs.readFileSync(wordListPath, 'utf-8');
const lines = fileData.split('\n');


//this will separate the words from their pronunciation
//as soon as first space in the word is found
for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line !== '') {
        const firstSpaceIndex = line.indexOf(' '); 
        //extract the word from the line
        const word = line.slice(0, firstSpaceIndex).trim(); 
        //extract the pronunciation from the line, trimming any additional spaces
        const pronunciation = line.slice(firstSpaceIndex + 1).trim(); 
        wordMap.set(word.toLowerCase(), pronunciation);
    }
}
//creating the user interface
//this code for creating user interface was taken and adapted for my app from:
//https://www.codecademy.com/article/getting-user-input-in-node-js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startApp() {
    //user input
    console.log('There are a total of '+wordMap.size+' words in the database')
    rl.question('Enter a word to find rhymes: ', (userInput) => {
        const wordToFindRhymesFor = userInput.trim().toLowerCase();
        performRhymeMatching(wordToFindRhymesFor);
        rl.question('Do you want to type another word? ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
                startApp();
            }
            else {
                rl.question('Do you want to see the map/dictionary for the existing rhymes? If you want to exit the app, type no! (yes/no) ', (answer) => {
                    //this will print the map to the console
                    if (answer.toLowerCase() === 'yes') {
                        console.log(existingRhymes);
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
    });
    

    //function to perform rhyme matching for the user input word
    //catching any new rhyme searches in a new map for easy future retrieval
    function performRhymeMatching(word) {
        let rhymes = [];
        if(existingRhymes.has(word)) {
            rhymes = existingRhymes.get(word);
        }
        else {
            const userInputPronunciation = wordMap.get(word);
            //iterating over the words in the wordMap
            for (const [mapWord, mapPronunciation] of wordMap) {
                if (mapWord === word) {
                    continue;
                }
                //comparing the phonetic representations
                if (arePhoneticRepresentationsSimilar(userInputPronunciation, mapPronunciation)) {
                    rhymes.push(mapWord);
                }
            }
            existingRhymes.set(word, rhymes);
        }
        //displaying the rhymes
        console.log('Rhymes: ');
        for (var i = 0; i < rhymes.length; i++) {
            console.log(rhymes[i]);
        }
        console.log('There are a total of ' + rhymes.length + ' rhymes for ' + word);
    }
    
    //function to compare the phonetic representations and 
    //determine if they are similar with similarity threshold
    function arePhoneticRepresentationsSimilar(pronunciation1, pronunciation2) {
        const distance = levenshteinDistance(pronunciation1, pronunciation2);
        const similarityThreshold = 1.7;
        return distance <= similarityThreshold;
    }
    //the levenshtein distance algorithm was taken and adapted from
    //https://www.tutorialspoint.com/levenshtein-distance-in-javascript
    function levenshteinDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;
        const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
        for (let i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (let j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (word1[i - 1] === word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } 
                else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1] + 1,
                        dp[i][j - 1] + 1,
                        dp[i - 1][j] + 1
                    );
                }
            }
        }
        return dp[m][n];
    }
}
//closing the app
function closeApp() {
    console.log('Exiting the app now...');
    process.exit();
}

startApp();