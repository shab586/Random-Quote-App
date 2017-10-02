
function genQ(){
	//varibles
	var qouteMsg = document.getElementById('message');
	var randomQNum = (Math.floor(Math.random() * 10) + 1);

	//random messages with if statements
	if(randomQNum === 1){
		qouteMsg.innerHTML = "Love is the only force capable of transforming an enemy into a friend. - Martin Luther King";
	} else if (randomQNum === 2){
		qouteMsg.innerHTML = "Perfection is not attainable, but if we chase perfection we can catch excellence. -Vince Lombardi";
	} else if (randomQNum === 3){
		qouteMsg.innerHTML = "I can accept failure, everyone fails at something. But I can't accept not trying. - Michael Jordan";
	} else if (randomQNum === 4){
		qouteMsg.innerHTML = "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion. - Muhammad Ali";
	} else if (randomQNum === 5){
		qouteMsg.innerHTML = "Success and failure are both part of life. Both are not permanent. - Shahrukh Khan";
	} else if (randomQNum === 6){
		qouteMsg.innerHTML = "Million dollar ideas are a dime a dozen. The determination to see the idea through is what's priceless. -Robert Dieffenbach";
	} else if (randomQNum === 7){
		qouteMsg.innerHTML = "If it wasn't hard, everyone would do it. It's the hard that makes it great. -Tom Hanks";
	} else if (randomQNum === 8){
		qouteMsg.innerHTML = "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela";
	} else if (randomQNum === 9){
		qouteMsg,innerHTML = "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down. - Oprah Winfrey"                                                                                         
	} else if (randomQNum === 10){
		qouteMsg.innerHTML = "You must be the change you wish to see in the world. - Mahatma Gandhi";
	}


}

