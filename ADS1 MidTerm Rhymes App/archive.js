// //creating rhymes based on the words on file and map them
// for (var i = 0; i < dataArray.length; i++) {
//     var rhymesWords = [];
//     var counter = 0;
//     for (var j = 0; j < dataArray.length; j++) {
//         if (dataArray[i].slice(-4) == dataArray[j].slice(-4)) {
//             // var data = dataArray[i].slice(-4);
//             // var data1 = dataArray[j].slice(-4);
//             // console.log(data);
//             // console.log(data1);
//             rhymesWords[counter] = dataArray[j];
//             counter++;
//         }
//     }
//     //mapping the elements based on the last 3 words they end with
//     if (rhymesWords.length > 0) {
//         rhymesData.set(dataArray[i], rhymesWords);        
//     }
//     else {
//         rhymesData.set(dataArray[i], "There are no rhymes for this word");
//     }
// }