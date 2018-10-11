//calculator.js
function add(numbers){
	if(numbers == ""){
		return 0;
	}
	if(numbers.startsWith("//")){
		var delimeter =  numbers.charAt(2);
		//make the number start after new line
		var clean = numbers.substring(4);
		for(let i = 0; i < clean.length; i++){
			if(clean.charAt(i) === delimeter){
				clean = clean.replace(delimeter, ",");
			}
		}
		numbers = clean;
	}
	if(numbers.includes("\n")){
		var number;
		for(let i = 0; i < numbers.length; i++){
			if(numbers.charAt(i) === "\n"){
				numbers = numbers.replace("\n", ",");
			}
		}
	}

	if(numbers.includes(",")){
		var numberArray = numbers.split(",");
		var total = 0;
		var negatives = "Negatives not allowed:";
		var negativeNumbers = 0;
		for(i = 0; i < numberArray.length; i++){
			if(parseInt(numberArray[i]) > 1000){
				continue;
			}
			total += parseInt(numberArray[i]);
			if(Math.sign(numberArray[i]) == -1){
				negatives += " " +numberArray[i];
				negativeNumbers++;
			}
		}
		if(negativeNumbers > 0){
			return negatives;
		}
		return total;
	}
	else{
		return parseInt(numbers);
	}
}
module.exports = add;