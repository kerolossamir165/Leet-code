/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */


var addStrings = function(num1, num2) {
    let str = "";
	let holder = 0;
	let num1End = num1.length - 1;
	let num2End = num2.length - 1;
	while(num1End >=0 || num2End >=0){
		let sum = holder + (num1[num1End]- '0' || 0) + (num2[num2End] - '0' || 0);
		holder = sum > 9 ? 1 : 0;
		sum %= 10;
		str = `${sum}` + str;
		num1End--;
		num2End--;
	}
	if(holder === 1) { str = "1" + str;}
	return str;;

};