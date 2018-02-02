{
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function(){
      callback&&callback.call();
    },1000);
  };
  ajax(function(){
    console.log('回调');
  })
}
{
  let ajax=function(){
    console.log('第一步');
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve();
      },1000);
    })
  }
  ajax().then(function(){
    console.log('第二步');
  })
}
{
  let ajax=function(){
    console.log('第一部');
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve()
      },1000);
    })
  }
  ajax().then(function(){
    console.log('第二部');
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve();
      },1000);
    })
  }).then(function(){
    console.log('第三部');
  })
}
{
  let ajax=function(num){
    if(num>5){
      console.log(num);
    }else{
      throw new Error('第一步出错了');
    }
    return new Promise(function(resolve,reject){
      if(num>6){
        console.log(num);
      }else{
        throw new Error('第二步出错了');
      }
    })
  }
  ajax(6).then(function(){
    console.log('6');
  }).catch(function(err){
    console.log(err);
  })
}
{
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }
  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }
  Promise.all([
    loadImg('http://mpic.tiankong.com/b0c/364/b0c3641c32a59a7ab371f262eeee1917/640.jpg'),
    loadImg('http://mpic.tiankong.com/944/595/944595abc2ba2612c8e256e02fb2e570/640.jpg'),
    loadImg('http://mpic.tiankong.com/caf/a19/cafa19387b3321be67dfb9451051de70/640.jpg')
  ]).then(showImgs);
}
{
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }
  function showImgs(img){
      let p=document.createElement('p');
      p.appendChild(img);
      document.body.appendChild(p);
  }
  Promise.race([
    loadImg('http://mpic.tiankong.com/944/595/944595abc2ba2612c8e256e02fb2e570/640.jpg'),
    loadImg('http://mpic.tiankong.com/b0c/364/b0c3641c32a59a7ab371f262eeee1917/640.jpg'),
    loadImg('http://mpic.tiankong.com/caf/a19/cafa19387b3321be67dfb9451051de70/640.jpg')
  ]).then(showImgs);
}
