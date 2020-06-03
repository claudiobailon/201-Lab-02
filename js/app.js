'use strict';


/*
About Matt

Does Matt like Pineapple on pizza?
  If answer yes, respond
    Eww, no, pineapples are gross
  If answer no, respond
    Correct, pineapples on pizza are gross.

Does Matt have any pets
  If answer yes, respond
    I wish! My lease doesn't allow pets
  If answer no, respond
    Correct :(

Does Matt enjoy playing games?
  If answer yes, respond
    Absolutely!
  If answer no, respond
    What?! Of course I like games!

How long in days has it been since Matt last had a haircut (usually I get a haircut every 28 days)?
  If answer 85, respond
    Yes! It's been far too long
  If answer less than 85, respond
    I wish! Longer!
  If answer more than 85, respond
    You kidding? My hair would be way longer if it had been that long!

Does Matt prefer Summer, Winter, Fall, or Spring?
  If answer Summer, respond,
    Yes! But usually by the end of it I'm excited for Fall
  If answer Fall, respond,
    Yes! But usually by the end of it I'm excited for Winter
  If answer Winter, respond,
    Yes! But usually by the end of it I'm excited for Spring
  If answer Spring, respond,
    Yes! But usually by the end of it I'm excited for Summer
*/

var askNameAnswer = prompt('What is your name, visitor?');
var answersCorrect = 0;
var pizzaAnswer = prompt('Okay, '+ askNameAnswer + '. Does Matt like Pineapple on pizza?').toLowerCase();
//  question one ============================
if (pizzaAnswer === 'yes' || pizzaAnswer === 'y' || pizzaAnswer === 'yeah') {
  alert('Ew, no, pineapples on pizza are gross.');
  // console.log('Ew, pineapples are gross');
} else {
  alert('Correct, pineapples on pizza are gross');
  // console.log('Correct, pineapples on pizza are gross');
  answersCorrect++;
}
//  question two =============================
var petAnswer = prompt('Does Matt have any pets?');
petAnswer = petAnswer.toLowerCase();
if (petAnswer === 'yes' || petAnswer === 'y' || petAnswer === 'yeah'){
  alert('I wish! My lease doesn\' allow pets :(');
  // console.log('I wish! My lease doesn\' allow pets :(');
} else {
  alert('Correct :(');
  // console.log('Correct :(');
  answersCorrect++;
}
//  question three ===========================
var gamesAnswer = prompt('Does Matt enjoy playing games?');
gamesAnswer = gamesAnswer.toLowerCase();
if (gamesAnswer === 'yes' || gamesAnswer === 'y' || gamesAnswer === 'yeah'){
  alert('Absolutely!');
  // console.log('Absolutely!');
  answersCorrect++;
} else {
  alert('What?! Of course I like games!');
  // console.log('What?! Of course I like games!');
}
// question four =================================
var askMovieAnswer = prompt('Does Matt miss going to the movies?').toLowerCase();
if (askMovieAnswer === 'yes' || askMovieAnswer === 'y' || askMovieAnswer === 'yeah'){
  alert('Yup, I\'m very bummed that I can\'t go to the movie theater.');
  answersCorrect++;
} else {
  alert('Wrong! I never realized I would take movie theaters for granted.');
}


// quesiton five ==============================
var seasonPreferenceAnswer = prompt('Does Matt prefer Summer, Winter, Fall, or Spring?').toLowerCase();
if (seasonPreferenceAnswer === 'summer'){
  alert('Yes! But usually by the end of it I\'m excited for Fall. I hope you enjoy the Fall, too, ' + askNameAnswer + '!');
  answersCorrect++;
  // console.log('Yes! But usually by the end of it I\'m excited for Fall. I hope you enjoy the Fall, too, ' + askNameAnswer + '!');
} else if (seasonPreferenceAnswer === 'fall'){
  alert('Yes! But usually by the end of it I\'m excited for Winter. I hope you enjoy the Winter, too, ' + askNameAnswer + '!');
  answersCorrect++;
  // console.log('Yes! But usually by the end of it I\'m excited for Winter. I hope you enjoy the Winter, too, ' + askNameAnswer + '!');
} else if (seasonPreferenceAnswer === 'winter'){
  alert('Yes! But usually by the end of it I\'m excited for Spring. I hope you enjoy the Spring, too, ' + askNameAnswer + '!');
  answersCorrect++;
  // console.log('Yes! But usually by the end of it I\'m excited for Spring. I hope you enjoy the Spring, too, ' + askNameAnswer + '!');
} else {
  alert('Yes! But usually by the end of it I\'m excited for Summer. I hope you enjoy the Summer, too, ' + askNameAnswer + '!');
  answersCorrect++;
  // console.log('Yes! But usually by the end of it I\'m excited for Summer. I hope you enjoy the Summer, too, ' + askNameAnswer + '!');
}

// var daysHaircutAnswer = prompt('How long (in days) has it been since Matt last had a harciut (usually I get a haircut every 28 days)?');
// daysHaircutAnswer = parseInt(daysHaircutAnswer);
// if (daysHaircutAnswer === 85){
//   alert('Yes! How\'d you guess? It\'s been far too long!');
//   // console.log('Yes! How\'d you guess? It\'s been far too long!');
// } else if (daysHaircutAnswer < 85){
//   alert('I wish! Longer!');
//   // console.log('I wish! Longer!');
// } else {
//   alert('You kidding? My hair would be way longer if it had been that long!');
//   // console.log('You kidding? My hair would be way longer if it had been that long!');
// }

// question six ======================================
var haircutAttempts = 0;
var daysHaircut = 85;
var daysHaircutAnswer;
while(haircutAttempts < 4 && daysHaircutAnswer !== daysHaircut){
  daysHaircutAnswer = prompt('How long (in days) has it been since Matt last had a harciut (usually I get a haircut every 28 days)?');
  daysHaircutAnswer = parseInt(daysHaircutAnswer);
  if (daysHaircutAnswer < 85){
    alert('I wish! Longer!');
  } else if (daysHaircutAnswer > 85){
    alert('You kidding? My hair would be way longer if it had been that long!');
  } else if (daysHaircutAnswer === 85){
    alert('Yes! How\'d you guess? It\'s been far too long!');
    answersCorrect++;
  } else {
    alert('Please enter a number!');
  }
  haircutAttempts++;
  console.log(haircutAttempts);

} if(haircutAttempts === 4 && daysHaircutAnswer !== daysHaircut){
  alert('Actually, Matt hasn\'t had a haircut in 85 days!');
}

// question seven =====================================

var favoriteCheeses = ['brie', 'aged cheddar', 'parmesan'];
var cheeseGuess;
var cheeseAttempts = 0;//brie === brie true, brie !== brie false
while(cheeseAttempts < 6 && (cheeseGuess !== favoriteCheeses[0] && cheeseGuess !== favoriteCheeses[1] && cheeseGuess !== favoriteCheeses[2])){
  cheeseGuess = prompt('What is one of Matt\'s favorite kind of cheese?').toLowerCase();
  if (cheeseGuess === favoriteCheeses[0]){
    alert('Yep! I love ' + favoriteCheeses[0] + '!');
    answersCorrect++;
  } else if (cheeseGuess === favoriteCheeses[1]){
    alert ('Yep! I love ' + favoriteCheeses[1] + '!');
    answersCorrect++;
  } else if (cheeseGuess === favoriteCheeses[2]){
    alert ('Yep! I love ' + favoriteCheeses[2] + '!');
    answersCorrect++;
  } else{
    alert ('Nope! Try again!');
    cheeseAttempts++;
  }
} alert('My favorite kinds of cheese are ' + favoriteCheeses[0] + ', ' + favoriteCheeses[1] + ', and ' + favoriteCheeses[2] + '!');


alert('Congratulations! You got ' + answersCorrect + ' questions about Matt right!');

