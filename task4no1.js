function reverseString(str) {
//validasi
if (typeof(str) === 'string'){
// deklarasi var penampung
 let newString = '';
//looping
 for (let i = str.length - 1; i >= 0; i--) {
  newString = newString + str[i];
 }
//kondisi
 if (newString === str){
   console.log(`data " ${str} " adalah palindrom`);
 }else{
   console.log(`data " ${str} " bukan palindrom`);
 }
}else{
  console.log('data yang dimasukkan salah');
}
}
//memanggil
reverseString('malam');
reverseString('di');
reverseString(12);