
/* Pervoe zadanie
    +1	    2, 3, 4, 5, 6
     0	    7, 8, 9
    -1	    10, 'J', 'Q', 'K', 'A'*/

    var count = 0;

    function cc(card) {
      // Only change code below this line
    switch (card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      count++;
      break;
      case 7:
      case 8:
      case 9:
      break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
      count--;
      break;
    }
    
    if (count > 0) {
      return ""+count+" Bet";
    } else {   
      return ""+count+" Hold";
    }
    }
      //return ""+Count+" Hold";
    
    console.log(cc(2)); 
    console.log(cc(3));
    console.log(cc(7)); 
    console.log(cc('K')); 
    console.log(cc('A'));
    console.log(count);

      
/* Vtoroe zadanie */

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
/*    reshenie */

 // Only change code below this line
 function updateRecords(id, prop, value) {
  if(value === ""){
  delete collection[id][prop];
  return collection;
  }
if(prop === "tracks") {
  if(!collection[id].hasOwnProperty(prop))collection[id][prop] = [];
    collection[id][prop].push(value);
    return collection;
}
  collection[id][prop] = value;
  return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));

/*   tretje zadanie */

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
/* reshenie */
function lookUpProfile(name, prop){

  for (let i=0; i < contacts.length; i++){
  //console.log(contacts[i]);
  if (contacts[i].firstName === name){
    console.log("Cool found match!");
    console.log(contacts[i]);
  }
}
}