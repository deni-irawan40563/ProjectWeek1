function reverseString(str) {
	//Validasi
	if (typeof str === 'string') {
		// deklarasi var penampung
		let newString = str.split(' ');
		reverse = '';
		//looping untuk membalikan array
		for (let i = newString.length - 1; i >= 0; i--) {
			reverse = reverse + newString[i] + ' ';
		}
		console.log(reverse);
	} else {
		console.log('data yang anda inputkan salah');
	}
}
//memanggil
reverseString('aku adalah anak gembala');
reverseString(12)
