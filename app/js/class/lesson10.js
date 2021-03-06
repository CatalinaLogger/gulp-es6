{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  }
  let monitor=new Proxy(obj,{
    get(target,key){
       return target[key].replace('2017','2018');
    },
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    has(target,key){
      if(key==='name'){
        return target[key];
      }else{
        return false;
      }
    },
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key];
      }
    },
    ownKeys(target){
      return Object.keys(target).filter(item=>item!='time');
    }
  });
  console.log(monitor.time);
  monitor.time='2019';
  monitor.name='德莱文';
  console.log(monitor);
  console.log('name' in monitor,'time' in monitor);
  delete monitor.time;
  console.log(monitor);
  delete monitor._r;
  console.log(monitor);
  console.log(Object.keys(monitor));
}
{
  let obj={
    time:'2017-10-10',
    name:'娜美',
    _r:123
  }
  console.log(Reflect.get(obj,'time'));
  Reflect.set(obj,'name','赵信');
  console.log(obj);
  console.log(Reflect.has(obj,'name'));
}
{
  function validator(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let va=this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
            throw Error(`不能设置${key}到${value}`);
          }
        }else{
          throw Error(`${key}不存在`);
        }
      }
    })
  }

  const personValidators={
    name(val){
      return typeof val==='string';
    },
    age(val){
      return typeof val==='number' && val>18;
    }
  }

  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      return validator(this,personValidators)
    }
  }
  const person=new Person('奥巴马',40);
  console.info(person);
  // person.name='普金';
  person.age=19;
  console.info(person);
}
