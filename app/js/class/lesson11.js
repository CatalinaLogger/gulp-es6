{
  class Parent{
    constructor(name='德莱文'){
      this.name=name;
    }
  }
  let v_parent=new Parent('文森特');
  console.log(v_parent);
}
{
  class Parent{
    constructor(name='德莱文'){
      this.name=name;
    }
  }
  class Child extends Parent{
    constructor(name='文森特'){
      super(name);
      this.type='子类';
    }
  }
  console.log(new Child('德莱厄斯'));
}
{
  class Parent{
    constructor(name='德莱文'){
      this.name=name;
    }
    get longName(){
      return this.name;
    }
    set longName(value){
      this.name=value;
    }
  }

  let v=new Parent();
  console.log(v.longName);
  v.longName='文森特';
  console.log(v.longName);
}
{
  class Parent{
    constructor(name='德莱文'){
      this.name=name;
    }
    static tell(){
      console.log('欢迎来到德莱联盟!');
    }
  }
  Parent.tell();
}
{
  class Parent{
    constructor(name='德莱文'){
      this.name=name;
    }
  }
  Parent.type='欢迎来到德莱联盟!';
  console.log(Parent.type);
}
