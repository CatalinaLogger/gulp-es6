{
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  }
  let es6={
    o,
    k
  }
  console.log(es5,es6);

  let es5_method={
    hello:function(){
      console.log("hello");
    }
  }
  let es6_method={
    hello(){
      console.log('hello');
    }
  }
  console.log(es5_method,es6_method);
}
{
  let a='b';
  let es5_obj={
    a:'c'
  }
  let es6_obj={
    [a]:'c'
  }
  console.log(es5_obj,es6_obj);
}
{
  console.log(Object.is('abc','abc'),'abc'==='abc');
  console.log(Object.is([],[]),[]===[]);
  console.log(Object.assign({a:'a'},{b:'b'}));
  let test={k:123,o:'abc'};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}
