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
