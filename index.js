// Write your code in this file!

function scuberGreetingForFeet(ride) {
	if (ride < 400) {
		return 'This one is on me!'; 
	}
	else if (2000 < ride && ride < 2500) {
		return 'I will gladly take your thirty bucks.';
	}
	else {
		return 'No can do.';
	}
}

scuberGreetingForFeet(199);

function ternaryCheckCity(city) {
	if (city !== 'NYC') {
		return 'No go.';
	}
	else {
		return 'Ok, sounds good.';
	}
}


function switchOnCharmFromTip(charm) {
	switch(charm) {
		case 'generous':
			return 'Thank you so much.'
			break;
		case 'not as generous':
			return 'Thank you.'
			break;
		default:
			return 'Bye.'
	}
}