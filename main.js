let reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

let name = prompt('Please enter the name for your reservation');
let keys = Object.keys(reservations)

let claimReservation = function(){

  let nameLower = name.toLowerCase()
  for(let i=0;i<keys.length;i++){
    let keysLower = keys[i].toLowerCase()
    if (keysLower===nameLower){
    if(reservations[keys[i]].claimed===false){
      return alert("Welcome, to our humble abode.")
    }
    else if(reservations[keys[i]].claimed===true){
      return alert("It seems someone has claimed your reservation. Please wait a moment while I sort the situation.")
    }

  }
}
for(let i=0;i<keys.length;i++){  
    let keysLower = keys[i].toLowerCase()
    if (keysLower!==nameLower){
    reservations[name] = {claimed:true}
    keys.push(name)
     alert ("It seems there was't a reservation under your name. ")
    return alert ("Since we have an empty table your reservation has been added to the list.")
  }

}
} ;

claimReservation()
console.log(reservations)
console.log(name.toLowerCase())