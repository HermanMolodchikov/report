'use strict';

writeFile('one.csv', 'work', (err) => {
  if (err) console.log('Error');
});

// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray(strData, strDelimiter) {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = (strDelimiter || ",");

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    (
      // Delimiters.
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

      // Quoted fields.
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

      // Standard fields.
      "([^\"\\" + strDelimiter + "\\r\\n]*))"
    ),
    "gi"
  );


  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [
    []
  ];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;


  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec(strData)) {

    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (
      strMatchedDelimiter.length &&
      strMatchedDelimiter !== strDelimiter
    ) {

      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);

    }

    var strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {

      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(
        new RegExp("\"\"", "g"),
        "\""
      );

    } else {

      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];

    }


    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return (arrData);
}


let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(2, 2, '64689874'); // начиная с позиции 1, удалить 1 элемент
console.log( arr ); // осталось ["Я", "JavaScript"]

let remove = arr.splice(1, 2); 
console.log( remove ); 

arr.splice(2, 0, "изучаю", "сложный", "язык"); // начиная с позиции 1, удалить 1 элемент
console.log( arr ); // осталось ["Я", "JavaScript"]


let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 1
};
console.log(arr.concat(arrayLike, [1, 2, 3] , 3, 123));

var arr2 = '123456';
var arrResult = [];

for(let i = 0; i <= arr2.length; ++i){
  if(i == 0|| i == 1 || i == 2 ) {  
  } else {
    for(let j = 0; j <= arr2.length; ++j){
      arrResult += arr2[i];
    }
    console.log(arrResult);
  }

}

var x=[], i, j;
for (i=0; i<5; i++){
  x.push(i);
  x[i] = [];
  for (j=0; j<5; j++){
    x[i].push(j);
  }
}
console.log(x);


let minValue = Math.min.apply(null, arr[i]);
let maxValue = Math.max.apply(null, arr[i]);
let value = (maxValue-minValue)/2;
console.log(minValue);
console.log(maxValue);
console.log(value);
