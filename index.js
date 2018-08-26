// Write your code in this file!
function scuberGreetingForFeet(feet) {
    let result
    if (feet <= 400) {
      result = "This one is on me!"
    } else if (feet > 2000 && feet < 2500) {
      result = "I will gladly take your thirty bucks."
    } else if (feet > 2500) {
      result = "No can do."
    }
      return result
  }
scuberGreetingForFeet(1000)


function ternaryCheckCity(city) {
  // condition ? if condition true return this : if not return this
  let msg;
  city === 'NYC' ? msg = 'Ok, sounds good.' : msg = 'No go.'
  return msg
}
ternaryCheckCity("NYC")

function switchOnCharmFromTip(tip) {
  let greeting;
  switch (tip) {
    case "generous" :
    greeting = "Thank you so much.";
    break;
    case "not as generous" :
    greeting = "Thank you.";
    break;
    default:
    greeting = "Bye.";
    break;
  }
  return greeting
}
switchOnCharmFromTip("generous")

// function addFive(someNumber) {
//   let result
// if (someNumber > 0) {
//   result = someNumber + 5;
// }
// return result
// }
// addFive(5)
