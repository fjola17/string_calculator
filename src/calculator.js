//calculator.js
function add(numbers){
	//if string is empty
	if(numbers == ""){
		return 0;
	}
	//if number starts with // a delimeter is found
	if(numbers.startsWith("//")){
		var delimeter =  numbers.charAt(2);
		//make the number start after new line
		numbers = numbers.substring(4);
	}
	//if the number has a new line
	if(numbers.includes("\n")){
		var ndelimeter = "\n";
	}
	//loops through to replace the delimeter
	for(i = 0; i < numbers.length; i++){
		if(numbers.charAt(i) === delimeter){
			numbers = numbers.replace(delimeter, ",");
		}
		else if(numbers.charAt(i) == ndelimeter){
			numbers = numbers.replace(ndelimeter, ",");
		}
	}
	var numberArray = numbers.split(",");
	var total = 0;
	//filter numbers larger than 1000
	numberArray = numberArray.filter(largeNumbers => largeNumbers < 1000);
	//filter negative numbers out
	var negatives = numberArray.filter(negativeNumbers => negativeNumbers < 0);

	//check numbers
	for(i = 0; i < numberArray.length; i++){
		total += parseInt(numberArray[i]);
	}
	//if there are negative numbers this should execute
	if(negatives.length > 0){
		return "Negatives not allowed: " + negatives;
	}
	//returning total sum
	return total;abb5c41b9b6ae426f768340336b1a5d158928fb8

}
module.exports = add;