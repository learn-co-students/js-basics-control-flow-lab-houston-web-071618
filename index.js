// Write your code in this file!
function scuberGreetingForFeet(x){
  let response
  if (x <= 400){
    return "This one is on me!"
  }
  else if (x > 2000 && x < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (x >= 2500){
    return "No can do."
  }
}

function ternaryCheckCity(y){
  const city = y
  let answer;
  city === "NYC" ? answer = "Ok, sounds good." : answer = "No go.";
  return answer
}


function switchOnCharmFromTip(tip){
  let response;
  switch(tip){
    case 'generous':
      response = "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
  return response
}
