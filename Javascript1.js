/*space*/
var UserName = 'Welcome to ESP'
alert(UserName)


var UserCity = prompt('please enter your city, Irbid or Amman')
console.log(UserCity); 

if(UserCity == 'Irbid' || UserCity == 'irbid'){
  console.log('Irbid');
} 
else if(UserCity == 'Amman' || UserCity == 'amman'){
  console.log('Amman');
}


/* funtion */
 function askUser(pLanguage) {
   var ask = prompt('Do you live in ' + pLanguage + '?');
   return ask;
 }
 var answer1 = askUser('Amman');
  console.log(answer1);
 var answer2 = askUser('Irbid');
  console.log(answer2); 



/*space*/
var Name = prompt('please enter whether your Parent or a Student')
alert('Welcome ' + Name); 

if(Name == 'Parent' || Name == 'parent'){
  console.log('Parent');
} 
else if(Name == 'Student' || Name == 'student'){
  console.log('Student');
}



/*space*/
var UserCity = prompt('please enter your city, Irbid or Amman?').toLowerCase();

while (UserCity !== 'irbid' && UserCity !== 'amman') {
  UserCity = prompt('please enter your city, Irbid or Amman');
}
console.log(UserCity);



/*space*/

var pens= prompt('How many pens do you need?')
for(let i= 0; i < pens; i++) {
 let image= '<img src="parentmeme.png" alt="meme" height= 180 width= auto>'
 document.write(image)
}



