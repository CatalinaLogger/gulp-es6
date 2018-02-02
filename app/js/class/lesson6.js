{
  function test(x,y='word'){
    console.log(x+' '+y);
  }
  test('hello');
}
{
  let x='test';
  function test1(x,y=x){
    console.log(x,y);
  }
  test1('kill');
  test1();
  function test2(c,y=x){
    console.log(c,y);
  }
  test2('kill');
}
{
  function test3(...arg){
    for(let v of arg){
      console.log(v);
    }
  }
  test3(1,2,3,4)
}
{
  console.log(...[1,2,4]);
}
{
  let arrow=v=>v*2;
  let arrow1=()=>5;
  console.log(arrow(3));
  console.log(arrow1());
}
{
  function tail(x){
    console.log(x);
  }
  function fx(x){
    return tail(x);
  }
  fx(123);
}
