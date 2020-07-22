//Soal No 1
/* build function split kegunaannya adalah untuk memisahkan string dan outputnya menjadi array */
console.log('---------------( 1.Hasil Splite )------------------');


let iniString = 'Aku adalah anak gembala';
let hasilSplit = iniString.split(' ');
console.log(hasilSplit);


console.log('---------------( 2.Hasil Reverse )------------------');


/* build function reverse ada untuk membalikkan urutan array */


let hasilReverse = hasilSplit.reverse();
console.log(hasilReverse);


console.log('---------------( 3.Hasil Join )------------------');

/* build function join berguna untuk menggabungkan array menjadi string */


let hasilJoin = hasilReverse.join();
console.log(hasilJoin);

console.log('---------------( 4.Hasil Filter )------------------');

/* filter berguna untuk memfilter nilai array yang memenuhi kondisi tertentu */

let dataArray = [1,2,3,4,5,6,7,8,9,10];
let hasilFilter = dataArray.filter(item => item % 2 === 0);
console.log(hasilFilter);


console.log('---------------( 5.Hasil Sort )------------------');

/* fungsi ini di gunakan untuk mengsortir atau mengurutkan string */

let hasilSort = dataArray.sort(function(a,b) {return b-a});
console.log (hasilSort);

console.log('---------------( 6.Hasil concat )------------------');

/* concat berfungsi untuk menggabungkan 2 array*/

let hasilConcat = dataArray.concat(hasilSplit);
console.log(hasilConcat);

console.log('---------------( 7.Hasil every )------------------');

/* every berfungsi mengecek apakah semua value array memenuhi suatu kondisi */

let hasilEvery = dataArray.every(item => item % 2 === 0);
console.log(hasilEvery);

console.log('---------------( 8.Hasil to upper case & to lower case )------------------');

/* fungsi touppercase & tolowercase berguna untuk merubah value string menjadi huruf kapital atau huruf kecil */

let hasilUpperCase = iniString.toUpperCase();
console.log(hasilUpperCase);
let hasilLowerCase = hasilUpperCase.toLowerCase();
console.log(hasilLowerCase);

console.log('---------------( 9.Hasil Repeat )------------------');

/* repeat berfungsi mengulang suatu variabel saat di tampilkan
*/
let hasilRepeat= hasilLowerCase.repeat(5);
console.log(hasilRepeat);

console.log('---------------( 10.Hasil Slice )------------------');
/* slice berfungsi untuk mengambil data array pada index tertentu */
let hasilSlice = dataArray.slice(5,7);
console.log(hasilSlice);

// Soal No 2
let searchName = (key,param)=> {
        const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'];

        for(i = 0; i < name.length; i++){
              let regex = 'gi';
              let cek = new RegExp (`${key}`,regex);
                   if(cek.test(name[i]) === true){
                     console.log(name[i]);
          }
        }
};
searchName('an',2);


// Soal No 3
const filterArray = (nilaiAwal,nilaiAkhir,dataArray) => {
 if(dataArray.length < 5) {
         console.log('Jumlah angka dalam array harus lebih dari 5');
}
  else if(nilaiAkhir < nilaiAwal){
         console.log('Nilai akhir harus lebih besar dari nilai awal');
}
  else{
        const filteredArray = dataArray.filter(item => item >= nilaiAwal && item <= nilaiAkhir );
          filteredArray.sort(function(a,b){return a-b});
          console.log(filteredArray);
}
};

filterArray(2,42,[1,2,8,4,7,8,18,20,23,12,42,3,10,15,17]);