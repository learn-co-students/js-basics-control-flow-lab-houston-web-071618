// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let cost
  if (someValue <= 400) {
    cost = 'This one is on me!';
  }
  else if (2000 < someValue && someValue < 2500 ) {
    cost = 'I will gladly take your thirty bucks.';
  }
  else {
    cost = 'No can do.';
  }
  return cost
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
  case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
    break;
  default:
    return 'Bye.';
    break;
}
}
