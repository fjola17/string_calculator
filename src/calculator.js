//calculator.js
function add(numbers){
	if(numbers == ""){
		return 0;
	}
	if(numbers.includes("\n")){
		numbers = numbers.replace("\n", ",")

	}
	if(numbers.includes(",")){
		var numberArray = numbers.split(",");
		var total = 0;
		for(i = 0; i < numberArray.length; i++){
			total += parseInt(numberArray[i]);
			if(Math.sign(numberArray[i]) == -1){
				return "Negatives not allowed: " + numberArray[i];
			}
		}
		return total;
	}
	else{
		return parseInt(numbers);
	}
}

module.exports = add;