{
  let list = new Set();
  list.add(5);
  list.add(6);
  console.log(list.size);
}
{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);
  console.log(list);
}
{
  let list = new Set();
  list.add('a');
  list.add('a');
  console.log(list);
}
{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);
  console.log(list.has('add'));
  list.clear();
  console.log(list);
}
{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);
  for(let key of list.keys()){
    console.log(key);
  }
  for(let value of list.values()){
    console.log(value);
  }
  list.forEach(function(item){console.log(item);})
}
{
  let weakList = new WeakSet();
  let arg = {};
  weakList.add(arg);
  console.log(weakList);
}
{
  let map = new Map();
  let arr = ['123'];
  map.set(arr,456);
  console.log(map);
}
{
  let map = new Map([['a',123],['b',345]]);
  console.log(map);
  console.log(map.size);
  console.log(map.delete('a'),map);
  console.log(map.clear(),map);
}
{
  let weakMap = new WeakMap();
  let o = {};
  weakMap.set(o,123);
  console.log(weakMap.get(o));
}
{
  let map = new Map();
  let set = new Set();
  let arr = [];
  map.set('k',1);
  let obj = {'k':1};
  set.add(obj)
  arr.push({'k':1});
  console.info('add'.map,set,arr);

  let map_exist=map.has('k');
  let set_exist1=set.has({'K':1})
  let set_exist2=set.has(obj)
  let arr_exist=arr.find(item=>item.k);
  console.info('has',map_exist,set_exist1,set_exist2,arr_exist);

  map.set('k',2);
  set.forEach(item=>item.k?item.k=2:'');
  arr.forEach(item=>item.k?item.k=2:'');
  console.info('update',map,set,arr);

  map.delete('k');
  set.forEach(item=>item.k?set.delete(item):'');
  let index=arr.findIndex(item=>item.k);
  arr.slice(index,1);
  console.info('delete',map,set,arr);
}
{
  let item={m:1};
  let map=new Map();
  let set=new Set();
  let obj={};

  map.set('m',1);
  set.add(item);
  obj['m']=1;

  console.info(map,set,obj);
  console.info({
    map_exist:map.has('m'),
    set_exist:set.has(item),
    obj_exist:'m' in obj
  })

  map.set('m',2);
  item.m=2;
  obj['m']=2;
  console.info(map,set,obj);

  map.delete('m');
  set.delete(item);
  delete obj['m'];
  console.info(map,set,obj);
}
