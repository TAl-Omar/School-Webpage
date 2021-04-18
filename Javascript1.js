<<<<<<< HEAD
/*space*/
=======
>>>>>>> 8116ac19838b4a54512354bfd6413e5ce57ee3a5
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


<<<<<<< HEAD
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
=======

>>>>>>> 8116ac19838b4a54512354bfd6413e5ce57ee3a5
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
<<<<<<< HEAD
for(let i= 0; i < pens; i++) {
=======
for(let i= 0; i <= pens; i++) {
>>>>>>> 8116ac19838b4a54512354bfd6413e5ce57ee3a5
 let image= '<img src="parentmeme.png" alt="meme" height= 180 width= auto>'
 document.write(image)
}



