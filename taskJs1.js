//soal 1
let bioData = {
  name : "Deni Irawan Nugraha",
  age : 19,
  hobbies : ["game",
             "Swimming", 
             "Wibu"
  ],
  isMarried : false,
  schoolList : [
    {
       name : "SMAN 1 CILILIN",
       yearIn : 2016,
       yearOut : 2019
    },
    {
        name : "SMPN 1 CILILIN",
        yearIn: 2013,
        yearOut: 2016
    },
    {
       namaSekolah : "SDN 3 RANCAPANGGUNG",
       yearIn: 2007,
       yearOut: 2013
    }
  ],
  skill : [
    {
      skillName : "html & css",
      level : "advance"
    },
    {
      skillName : "javaScript",
      level : "beginner"
    },
    {
      skillName : "node.js",
      level : "beginner"
    },
    {
      skillName : "mySql",
      level : "beginner"
    }
 ],
  interestedInCoding : true
};

//soal 2
let gradeCheck = (math,indonesian,english,biology) => {
    if (math,indonesian,english,biology === undefined){
        console.log ('data yang anda masukan belum lengkap, mohon periksa kembali !. Jika memang nilai belum/tidak ada maka masukkan angka 0 (nol)');
    }else{
          if (typeof math !== 'number' || math > 100){
              console.log( `ada data yang salah di nilai matematika anda menginput => ${math}`);
          }else if(typeof indonesian !== 'number' || indonesian > 100){
              console.log( `ada data yang salah di nilai bahasa indonesia anda menginput => ${indonesian}`);
          }else if(typeof english !== 'number' || english > 100){
              console.log( `ada data yang salah di nilai bahasa inggris anda menginput => ${english}`);
          }else if(typeof biology !== 'number' || biology > 100){
              console.log( `ada data yang salah di nilai biologi anda menginput => ${biology}`);
          }else{
                let value = math + indonesian + english + biology;
                let average = value / 4;
                      if (average <= 59){
                          console.log (`rata-rata nilai anda ${average} masuk dalam grade E`);
                     }else if(average <= 69){
                          console.log (`rata-rata nilai anda ${average} masuk dalam grade D`);
                     }else if(average <= 79){
                           console.log (`rata-rata nilai anda ${average} masuk dalam grade C`);
                     }else if(average <= 89){
                          console.log (`rata-rata nilai anda ${average} masuk dalam grade B`);
                     }else{
                          console.log (`Selamat rata-rata nilai anda ${average} masuk dalam grade A`);
                     } 
                  }
          }
 };

gradeCheck(100,100,90,80);

//Soal No 3
let printSegitiga = (num)=> {
 if (typeof num !== 'number'){
   console.log('data harus berupa angka');
 }else{
  for (let i = 0; i <= num ; i++){
     let bintang = '';
        for (let j = i + 1 ;j <= num ;j++){
           bintang +=  j - i + ' ';
           }
    console.log (bintang);
     }
 }
};

printSegitiga(9);

// Soal No 4
//No 4A
data = {...data, name : "Deni Irawan Nugraha", email : "deni.Irawan40563@gmail.com", hobby : ["gaming","Swimming","Wibu"]};
console.log (data);

//No 4B
let {street, city} = data.address;
console.log(`Kota ${city} Jalan ${street}`);