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

var pizzaAnswer = prompt('Okay, '+ askNameAnswer + '. Does Matt like Pineapple on pizza?');
pizzaAnswer = pizzaAnswer.toLowerCase();

if (pizzaAnswer === 'yes' || pizzaAnswer === 'y' || pizzaAnswer === 'yeah') {
  alert('Ew, no, pineapples on pizza are gross.');
  // console.log('Ew, pineapples are gross');
} else {
  alert('Correct, pineapples on pizza are gross');
  // console.log('Correct, pineapples on pizza are gross');
}

var petAnswer = prompt('Does Matt have any pets?');
petAnswer = petAnswer.toLowerCase();
if (petAnswer === 'yes' || petAnswer === 'y' || petAnswer === 'yeah'){
  alert('I wish! My lease doesn\' allow pets :(');
  // console.log('I wish! My lease doesn\' allow pets :(');
} else {
  alert('Correct :(');
  // console.log('Correct :(');
}

var gamesAnswer = prompt('Does Matt enjoy playing games?');
gamesAnswer = gamesAnswer.toLowerCase();
if (gamesAnswer === 'yes' || gamesAnswer === 'y' || gamesAnswer === 'yeah'){
  alert('Absolutely!');
  // console.log('Absolutely!');
} else {
  alert('What?! Of course I like games!');
  // console.log('What?! Of course I like games!');
}

var daysHaircutAnswer = prompt('How long (in days) has it been since Matt last had a harciut (usually I get a haircut every 28 days)?');
daysHaircutAnswer = parseInt(daysHaircutAnswer);
if (daysHaircutAnswer === 85){
  alert('Yes! How\'d you guess? It\'s been far too long!')
  // console.log('Yes! How\'d you guess? It\'s been far too long!');
} else if (daysHaircutAnswer < 85){
  alert('I wish! Longer!');
  // console.log('I wish! Longer!');
} else {
  alert('You kidding? My hair would be way longer if it had been that long!');
  // console.log('You kidding? My hair would be way longer if it had been that long!');
}

var seasonPreferenceAnswer = prompt('Does Matt prefer Summer, Winter, Fall, or Spring?');
seasonPreferenceAnswer = seasonPreferenceAnswer.toLowerCase();
if (seasonPreferenceAnswer === 'summer'){
  alert('Yes! But usually by the end of it I\'m excited for Fall. I hope you enjoy the Fall, too, ' + askNameAnswer + '!')
  // console.log('Yes! But usually by the end of it I\'m excited for Fall. I hope you enjoy the Fall, too, ' + askNameAnswer + '!');
} else if (seasonPreferenceAnswer === 'fall'){
  alert('Yes! But usually by the end of it I\'m excited for Winter. I hope you enjoy the Winter, too, ' + askNameAnswer + '!')
  // console.log('Yes! But usually by the end of it I\'m excited for Winter. I hope you enjoy the Winter, too, ' + askNameAnswer + '!');
} else if (seasonPreferenceAnswer === 'winter'){
  alert('Yes! But usually by the end of it I\'m excited for Spring. I hope you enjoy the Spring, too, ' + askNameAnswer + '!')
  // console.log('Yes! But usually by the end of it I\'m excited for Spring. I hope you enjoy the Spring, too, ' + askNameAnswer + '!');
} else {
  alert('Yes! But usually by the end of it I\'m excited for Summer. I hope you enjoy the Summer, too, ' + askNameAnswer + '!');
  // console.log('Yes! But usually by the end of it I\'m excited for Summer. I hope you enjoy the Summer, too, ' + askNameAnswer + '!');
}
