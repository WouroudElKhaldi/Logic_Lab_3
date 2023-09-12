
// var arrayInput = prompt("Enter an array of numbers in this format : [2,5,7,3,8,4,6] ");
// arrayInput = arrayInput.slice(1, -1) ;
// var arrayItems = arrayInput.split(",") ;
// var finalArray = [] ;

// for (var j = 0; j < arrayItems.length; j++) {
//     var number = parseFloat(arrayItems[j]) ;
//     finalArray.push(number) ;  
// }

// var max = finalArray[0] ;

// for (let i = 0; i < finalArray.length ; i++) {
//     for (let j = 0; j < finalArray.length; j++) {
//          if (finalArray[j] > max ) {
//             max = finalArray[j] ;
//          }
//     }
// }
// // finalArray = [2,5,7,3,8,4,6]
// alert("The largest number in the array is: " + max);


function largeNum(array) {
    array = array.slice(1, -1) ;
    var arrayItems = array.split(",") ;
    var finalArray = [] ;

    for (var j = 0; j < arrayItems.length; j++) {
        var number = parseFloat(arrayItems[j]) ;
        finalArray.push(number) ;  
    }

    var max = finalArray[0] ;

    for (let i = 0; i < finalArray.length ; i++) {
        for (let j = 0; j < finalArray.length; j++) {
            if (finalArray[j] > max ) {
                max = finalArray[j] ;
            }
        }
    }
    // finalArray = [2,5,7,3,8,4,6]
    alert("The largest number in the array is: " + max);
}



var arrayInput = prompt("Enter an array of numbers in this format : [2,5,7,3,8,4,6] ");
largeNum(arrayInput);
