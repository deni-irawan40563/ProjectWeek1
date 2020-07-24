//SOAL NO 2
const getMonth = (callback) => {
  setTimeout(()=>{
    let error = false;
    let month = ['january','february','march','april','may','juni','july','august','september','october','november','desember'];
    if(!error){
      callback (null, month)
    }else{
      callback (new error('Sorry Data Not Found', []))
    }
  },4000)
}; 

const allMonth = (error , month) => {
  if(error === null){
    month.map((item) => {
      console.log(item);
    })
  }else{
    console.log(error);
  }
}

getMonth(allMonth);