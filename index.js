// Write your code in this file!

function scuberGreetingForFeet(num) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let note;

  if (num<= 400){
    note = "This one is on me!";
  }

  else if (num >2000 && num < 2500){
    note ="I will gladly take your thirty bucks.";
  }

  else {
    note= "No can do.";
  }
  return note;
}


function ternaryCheckCity(string){
  let status
  if (string ==="NYC"){
    status = "Ok, sounds good.";
  }
  else{
    status = "No go.";
  }
  return status;
}


function switchOnCharmFromTip(string){
  let response
  switch (string){
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
    default:
      response = 'Bye.'
  }
  return response;
}
