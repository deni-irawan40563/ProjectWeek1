// SOAL NO 3
/*
 const studentCheck = (name) =>{
    return new Promise( (resolve, reject)=>{
    setTimeout(()=>{
     const dataStudent = ['ifad', 'ismi', 'reza', 'sri', 'tazki','aurin'];
     const nameLow = name.toLowerCase();
      let cek = dataStudent.find((item)=>{
        return item === nameLow
      })
          if(cek){
                resolve( cek + ' terdaftar sebagai siswa di SMA arwana')
          }else{
                reject(new Error('Data tidak ditemukan'))
               }
        },1000)
    })
}

studentCheck('xxx')
  .then((res)=>{
    console.log(res)
  })
  .catch ((err)=>{
    console.log(err.message)
  }) */
 
// SOAL NO 3B

 const sum = (name1 , name2) => {
   console.log('mohon tunggu data anda sedang di proses...')
  return new Promise( (resolve, reject)=> {
    if (typeof(name1, name2) === 'string'){
      const firstName = name1.toLowerCase();
    const lastName = name2.toLowerCase();
      setTimeout(() => {
        resolve (`hai ${firstName} ${lastName} selamat datang di arkademy`)
      }, 5000)
    }else {
      setTimeout(() => {
        reject ("mohon masukan data yang valid")
    },2000)
    }
   })
}


sum ('Deni','Irawan')
  .then((res)=>{
    console.log(res)
  })
  .catch ((err)=>{
    console.log(err.message)
  })
  