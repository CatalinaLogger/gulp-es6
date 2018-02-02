// export let A=123;
// export function test(){
//   console.log('test');
// }
// export class Hello{
//   test(){
//     console.log('classs');
//   }
// }
let A=123;
function test(){
  console.log('test');
}
class Hello{
  test(){
    console.log('classs');
  }
}
export default{
  A,
  test,
  Hello
}
