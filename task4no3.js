const devideAndSort = (num) => {
  if(typeof(num) === 'number') {
        let separate = num.toString().split('0');
        let combine = "";
        for (i = 0; i < separate.length; i++) {
              var accommodate = separate[i]
                  .split('')
                  .sort()
                  .join('');
              combine += accommodate;
        }
        console.log(combine);
    }else{
      console.log('inputan salah');
    }
};

devideAndSort(5956560159466056);
