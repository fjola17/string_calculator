//calculator.js
function add(numbers){
	if(numbers == ""){
		return 0;
	}
	var clean = numbers;
	if(numbers.startsWith("//")){
		var delimeter =  numbers.charAt(2);
		//make the number start after new line
		clean = numbers.substring(4);
	}
	if(numbers.includes("\n")){
		var ndelimeter = "\n";
	}
	for(let i = 0; i < clean.length; i++){
		if(clean.charAt(i) === delimeter){
			clean = clean.replace(delimeter, ",");
		}
		else if(clean.charAt(i) == ndelimeter){
			clean = clean.replace(ndelimeter, ",");
		}
	}
	numbers = clean;
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
module.exports = add;