{
  let arr=Array.of(3,4,7,9,22);
  console.log(arr);

  let empty=Array.of();
  console.log(empty);
}
{
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  })
  console.log(Array.from([1,3,5],function(item){return item*2}));
}
{
  console.log([1,'a',undefined].fill(7));
  console.log(['a','b','c','d','e'].fill(7,1,3));
}
{
  for(let index of ['1','a','b',3].keys()){
    console.log(index);
  }
  for(let value of ['a','b',3,'bb'].values()){
    console.log(value);
  }
  for(let [index,value] of ['a','c',3].entries()){
    console.log(index,value);
  }
}
{
  console.log([1,2,3,4,5].copyWithin(0,3,4));
}
{
  console.log([1,2,3,4,5,6,7].find(function(item){return item>3}));
  console.log([1,2,3,4,5,6,7].findIndex(function(item){return item>3}));
}
{
  console.log([1,2,NaN].includes(1));
  console.log([1,2,NaN].includes(NaN));
}
