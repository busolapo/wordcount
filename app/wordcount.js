module.exports = {
	words : function(input){
		var input_arr = input.replace(/\s+/g, ' ').split(" ");
		var result = {};
		input_arr.forEach(function(entry){
			if(Object.keys(result).includes(entry)){
				result[entry] += 1;
			}
			else{
				result[entry] = 1;
			}
		});
		return result;
	}
}