// Write your code in this file!
function scuberGreetingForFeet(numValue){
  //The first 400 feet should be free
  let greeting;

  if (numValue <= 400){
    greeting = "This one is on me!"}
  else if (numValue >= 2000 && numValue <= 2499){
    greeting =  "I will gladly take your thirty bucks."}
  else if (numValue >= 2500){
    greeting =  "No can do."}
  return greeting;
}

function ternaryCheckCity(city){
  city === 'NYC'? "Ok, sounds good.":"No go."
  return city;
}

function switchOnCharmFromTip(tip){
  let response;

  switch (tip){
  case 'generous':
    response = "Thank you so much.";
    break;
  case 'not as generous':
    response =  "Thank you.";
    break;
  default:
    response = "Bye.";
    break;
  }
  return response
}
