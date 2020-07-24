// SOAL NO 1
const workdayCheck = (day) =>{
    return new Promise( (resolve, reject)=>{
    setTimeout(()=>{
     const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item)=>{
        return item === day
      })
          if(cek){
                resolve(cek)
          }else{
                reject(new Error('Hari ini bukan hari kerja'))
               }
        },3000)
    })
}

workdayCheck('senin')
  .then((res)=>{
    console.log(res)
  })
  .catch ((err)=>{
    console.log(err.message)
  })

workdayCheck('minggu')
const getData = async () => {
  try {
    let res = await promise()
    console.log(res)
  } catch (err) {
    console.log(error.message)
  }
}