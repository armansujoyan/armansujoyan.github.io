const encBtn = document.getElementById('encrypt');
const decBtn = document.getElementById('decrypt');
const encIn = document.getElementById('cypherIn');
const encOut = document.getElementById('cypherOut');
const amount = document.getElementById('amount');

function encrypt(){
    const amn = amount.value;
    const output = encryptFn(encIn.value,amn);
    encOut.value = output;
};

function decrypt(){
    const amn = amount.value;
    const output = encrypt(encOut.value,amn);
    encIn.value = output;
};

const encryptFn = function(str, amount) {

	if (amount < 0)
		return caesarShift(str, amount + 26);
	var output = '';
	for (var i = 0; i < str.length; i ++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		output += c;
	}

	return output;
};