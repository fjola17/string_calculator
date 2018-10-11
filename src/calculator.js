//calculator.js
function add(numbers){
	if(numbers == ""){
		return 0;
	}
	if(numbers.includes("\n")){
		var number = numbers.split("\n");
		var total = 0;
		for(i = 0; i < number.length; i++){
			if(number[i].includes(",")){
				var numberArray = number[i].split(",");
				for(j = 0; j < numberArray.length; j++){
					total += parseInt(numberArray[j]);
				}
			}
			else{
				total += parseInt(number[i]);
			}			
		}
		return total;

	}
	if(numbers.includes(",")){
		var numberArray = numbers.split(",");
		var total = 0;
		for(i = 0; i < numberArray.length; i++){
			total += parseInt(numberArray[i]);
		}
		return total;
	}
	else{
		return parseInt(numbers);
	}
}

module.exports = add;