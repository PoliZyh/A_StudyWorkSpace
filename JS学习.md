# JS学习

## 一、知识点

### 1. 数组的操作

#### 1）forEach

```js
var array = ['a', 'b', 'c'];

array.forEach(item => {
  console.log(item);
});
// a b c
//全部参数
arr.forEach(function(value,index,array){
    //。。。。
});
```

#### 2）push()

**将一个或多个元素添加到[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)的末尾，并返回该数组的新长度。此方法修改原有数组**

```js
var arr = ['a','b','c'];
var ele = arr.push('d');
// ele结果为: 4;
// arr数组被修改: ['a','b','c','d'];
```

#### 3）pop()

**从数组中删除最后一个元素，并返回该元素的值。如果数组为空，则返回undefined。此方法修改原有数组。**

```js
var arr = ['a','b','c','d'];
var ele = arr.pop();
// ele结果为: 'd';
// arr数组被修改: ['a','b','c'];
```

#### 4）shift()

**从数组中删除第一个元素，并返回该元素的值。此方法修改原有数组。**

```js
var arr = ['a','b','c','d'];
var ele = arr.shift();
// ele结果为: a;
// arr数组被修改: ['b''c','d'];
```

#### 5）unshift()

**将一个或多个元素添加到数组的开头，并返回该数组的新长度。此方法修改原有数组。**

```js
var arr = ['a','b','c'];
var ele = arr.unshift('d');
// ele结果为: 4;
// arr数组被修改: ['d','a','b','c'];
```

#### 6）slice(begin, end)

**返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。**

```js
var arr = ['a','b','c','d'];
var res = arr.slice(0,2);
// arr数组未被修改: ['a', 'b', 'c', 'd'];
// res数组为: ['a', 'b'];
```

#### 7）splice(start, deleteCount, item1) 

**通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容（如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组）。此方法修改原数组。**

```js
var arr = ['a', 'b', 'c', 'd'];
// 从索引 2 的位置开始删除 0 个元素，插入"e"
var insertOnce = arr.splice(2,0,'e');
insertOnce = []
arr = ['a', 'b', 'e', 'c', 'd']
// 从索引3的位置开始删除一个元素
var delOnce = arr.splice(3,1);
// delOnce数组为: ['c']
// arr数组被修改: ['a', 'b', 'e', 'd']

```

#### 8）concat()

**于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。**

```js
var arr1 = ['a', 'b', 'c', 'd'];
var arr2 = ['e','f']
var arr3 = arr1.concat(arr2);
// arr3数组为: ['a', 'b', 'c', 'd','e','f']

```

#### 9）join()

**将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符(默认使用’,'分隔，如果使用""，则所有元素之间都没有任何字符)。**

```js
var arr = ['a','b','c','d'];
var str = arr.join("-")
// str结果为: "a-b-c-d"

```

#### 10）sort()

**对数组的元素进行排序。此方法修改原数组。**

```js
var arr = [1,5,2,4,3]
arr.sort()
// arr数组被修改: [1,2,3,4,5]

```

#### 11）map(function(currentValue，index?,array?),thisValue?)

**创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。**

```js
// 使用 map 重新格式化数组中的对象
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],

// kvArray 数组未被修改:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]


```

#### 12）filter(function(currentValue,index,arr), thisValue)

**创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。**

```js
// 筛选出字符串数组中长度大于6的字符串
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// log: ["exuberant", "destruction", "present"]

```

#### 13）every(function(currentValue,index,arr), thisValue)

**测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值(若收到一个空数组，此方法在一切情况下都会返回 true)**

```js
// 检查是否数组中的所有数字都小于40
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// log: true


```

#### 14）some(function(currentValue,index,arr), thisValue)

**测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值(如果用一个空数组进行测试，在任何情况下它返回的都是false)**

```js
// 检测数组中是否至少有一个数字大于 18:
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.some(checkAdult);
}

```

#### 15）find(function(currentValue,index,arr), thisValue)

**返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。**

```js
// 获取数组中第一个大于10的值
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

```

#### 16）reverse()

**将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法修改原数组。**

```js
var arr = [1,2,3,4,5];
arr.reverse();
// arr数组被修改: [5,4,3,2,1]

```

#### 17）flat(depth?)

#### 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。此方法不会改变原数组。

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// log: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// log: [0, 1, 2, [3, 4]]

```

#### 18）reduce()

reduce 为数组中的每一个元素依次执行[回调函数](https://so.csdn.net/so/search?q=回调函数&spm=1001.2101.3001.7020)，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

```js
let newItem = Object.keys(tempItem).reduce((prev, key)=>{

             //重写key
             key === 'panel_id' ? prev['id'] = parseInt(tempItem[key])
             : key === 'panel_likeit_nums' ? prev['likeitNums'] = parseInt(tempItem[key])
             : key === 'panel_is_top' ? prev['topPanel'] = parseInt(tempItem[key])
             : key === 'panel_is_essence' ? prev['essencePanels']=parseInt(tempItem[key])
             : key === 'panel_date' ? prev['date'] = tempItem[key].substr(0, 10)
             : key === 'panel_content' ? prev['content'] = tempItem[key]
             : key === 'panel_title' ? prev['title'] = tempItem[key]
             : key === 'user_name' ? prev['user'] = tempItem[key]
             : ''
             return prev;
}, {})
```

```js
var  arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}，0) //注意这里设置了初始值
console.log(arr, sum);
打印结果：
0 1 0
1 2 1
3 3 2
6 4 3
[1, 2, 3, 4] 10
```



### 2.对象的操作

#### 1）删除对象属性

```js
const o = {
    p: 10,
    m: 20
}
 
delete o.p
console.log(o) // { m: 20 }
// 删除对象的属性后，在访问返回 undefined
console.log(o.p) // undefined
复制代码
```

#### 2）枚举对象的属性

在JS里面枚举对象属性一共有三种方法：

1. for in: 会遍历对象中所有的可枚举属性（包括自有属性和继承属性）
2. Object.keys(): 会返回一个包括所有的可枚举的自有属性的名称组成的数组
3. Object.getOwnPropertyNames(): 会返回自有属性的名称 （不管是不是可枚举的）

```js
const obj = {
    itemA: 'itemA',
    itemB: 'itemB'
}
 
// 使用Object.create创建一个原型为obj的对象 （模拟继承来的属性）
var newObj = Object.create(obj) 
 
newObj.newItemA = 'newItemA'
newObj.newItemB = 'newItemB'
 
for(i in newObj){
    console.log(i)
}
// newItemA
// newItemB
// itemA
// itemB
 
// 现在我们将其中的一个属性变为不可枚举属性
Object.defineProperty(newObj, 'newItemA', {
    enumerable: false
})
 
for(i in newObj){
    console.log(i)
}
// newItemB
// itemA
// itemB

//如果不想让for...in枚举继承来的属性可以借助Object.prototype.hasOwnProperty()
// 接上例
for(i in newObj){
    if( newObj.hasOwnProperty(i) ) console.log(i)
}
// newItemB

```

```js
// 接上例
const result = Object.keys(newObj)
 
console.log(result) // ["newItemB"]
```

```js
// 接上例
const result = Object.keys(newObj)
 
console.log(result) // ['newItemA','newItemB']
```

#### 3）数据类型检测

**typeof常用于原始类型的判断**

```js
const fn = function(n){
  console.log(n)
}
const str = 'string'
const arr = [1,2,3]
const obj = {
   a:123,
   b:456
}
const num = 1
const b = true
const n = null     
const u = undefined
 
console.log(typeof str) // string
console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof num) // number
console.log(typeof b) // boolean
console.log(typeof n) // object null是一个空的对象
console.log(typeof u) // undefined
console.log(typeof fn) // function
复制代码
```

**通过上面的检测我们发现typeof检测的Array和Object的返回类型都是Object，因此用typeof是无法检测出来数组和对象的。**

**`tostring` 常用** 最实用的检测各种类型

```js
/**
* @description: 数据类型的检测
* @param {any} data 要检测数据类型的变量
* @return {string} type 返回具体的类型名称【小写】
*/
const isTypeOf = (data) => {
    return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$1').toLowerCase()
}
 
console.log(isTypeOf({})) // object
console.log(isTypeOf([])) // array
console.log(isTypeOf("ss")) // string
console.log(isTypeOf(1)) // number
console.log(isTypeOf(false)) // boolean
console.log(isTypeOf(/w+/)) // regexp
console.log(isTypeOf(null)) // null
console.log(isTypeOf(undefined)) // undefined
console.log(isTypeOf(Symbol("id"))) // symbol
console.log(isTypeOf(() => { })) // function

```

#### 4）Object.assign()

**`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。常用来合并对象。**

```js
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 4, c: 5 }
 
const obj3 = Object.assign(obj1, obj2)
 
const obj4 = Object.assign({}, obj1) // 克隆了obj1对象
 
console.log(obj1) // { a: 1, b: 4, c: 5 } 对同名属性b进行了替换 obj1发生改变是因为obj2赋给了obj1
 
console.log(obj2) // { b: 4, c: 5 }
 
console.log(obj3) // { a: 1, b: 4, c: 5 }
 
console.log(obj4) // { a: 1, b: 4, c: 5 }

Object.assign(target, ...sources)
```

**注意**

- 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。
- `Object.assign` 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
- **assign其实是浅拷贝而不是深拷贝**

也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。同名属性会替换。

```js
const obj5 = {
  name: 'dengke',
    a: 10,
  fn: {
    sum: 10
  }
}
 
const obj6 = Object.assign(obj1, obj5)
console.log(obj6) // { a: 10, b: 2, name: 'dengke', fn: {…}}
console.log(obj1) // {a: 10, b: 2, name: 'dengke', fn: {…}} 对同名属性a进行了替换
```

#### 5）Object.keys() 

**`Object.keys()`** 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。

```js
const arr = ['a', 'b', 'c']
console.log(Object.keys(arr)) // ['0', '1', '2']
 
const obj = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.keys(obj)) // ['0', '1', '2']
 
const obj2 = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.keys(obj2)) // ['2', '7', '100']
```

#### 6）Object.values()

`Object.values()` 方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用`for...in`循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 

```js
const obj1 = { foo: 'bar', baz: 42 }
console.log(Object.values(obj1)) // ['bar', 42]
 
const obj2 = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.values(obj2)) // ['a', 'b', 'c']
复制代码
```

**注意**

- 对象`key`为`number`的话，会从升序枚举返回。

#### 7）Object.entries(obj)

**`Object.entries()`** 方法返回一个给定对象自身可枚举属性的键值对数组。**可使用`Object.fromEntries()`方法，相当于反转了`Object.entries()`方法返回的数据结构。**

```js
const obj1 = {
  name: 'dengke',
  age: 18
};
 
for (const [key, value] of Object.entries(obj1)) {
  console.log(`${key}: ${value}`);
}
// "name: dengke"
// "age: 18"
 
const obj2 = { foo: 'bar', baz: 42 }
console.log(Object.entries(obj2)) // [ ['foo', 'bar'], ['baz', 42] ]
 
const obj3 = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.entries(obj3)) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
 
```

- 将`Object`转换为`Map`，`new Map()`构造函数接受一个可迭代的`entries`。借助`Object.entries`方法你可以很容易的将`Object`转换为`Map`:

```js
const obj = { foo: "bar", baz: 42 }
const map = new Map(Object.entries(obj))
console.log(map) // Map { foo: "bar", baz: 42 }

```

#### 8）Object.fromEntries()

**`Object.fromEntries()`** 方法把键值对列表转换为一个对象。**与`Object.entries()`相反。相当于反转了`Object.entries()`方法返回的数据结构。**

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
 
const obj = Object.fromEntries(entries);
 
console.log(obj);
// Object { foo: "bar", baz: 42 }
```

**补充**

- `Map` 转化为 `Object`

通过 `Object.fromEntries`， 可以将`Map`转换为`Object`:

```js
const map = new Map([ ['foo', 'bar'], ['baz', 42] ])
const obj = Object.fromEntries(map)
console.log(obj)
// { foo: "bar", baz: 42 }
复制代码
```

- `Array` 转化为 `Object`

通过 `Object.fromEntries`， 可以将`Array`转换为`Object`:

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
const obj = Object.fromEntries(arr)
console.log(obj)
// { 0: "a", 1: "b", 2: "c" }
复制代码
```

- 对象转换

`Object.fromEntries` 是与 `Object.entries()`相反的方法，用 *数组处理函数* 可以像下面这样转换对象：

```js
const object1 = { a: 1, b: 2, c: 3 }
 
const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
)
 
// Object.entries(object1) >>> [["a",1],["b",2],["c",3]]
 
console.log(object2) // { a: 2, b: 4, c: 6 }
复制代码
```

#### 9）Object.prototype.hasOwnProperty()

**`hasOwnProperty()`** 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

```js
const obj1 = {};
obj1.property1 = 42
 
console.log(obj1.hasOwnProperty('property1')) // true
console.log(obj1.hasOwnProperty('toString')) // false
console.log(obj1.hasOwnProperty('hasOwnProperty')) // false
复制代码
```

**注意**

- 只会对自身属性进行判断，继承来的一律返回`false`。配合`for...in`使用，可以避免其遍历继承来的属性。

```js
const o = new Object()
o.prop = 'exists'
 
console.log(o.hasOwnProperty('prop')) // true
console.log(o.hasOwnProperty('toString')) // false
console.log(o.hasOwnProperty('hasOwnProperty')) // false
复制代码
```

- 即使属性的值是 `null` 或 `undefined`，只要属性存在，`hasOwnProperty` 依旧会返回 `true`。

```js
const o = new Object();
o.propOne = null
o.propTwo = undefined
 
console.log(o.hasOwnProperty('propOne')) // true
console.log(o.hasOwnProperty('propTwo')) // true
复制代码
```

#### 10）Object.getOwnPropertyNames()

**`Object.getOwnPropertyNames()`** 返回一个数组，该数组对元素是 `obj`自身拥有的枚举或不可枚举属性名称字符串。数组中枚举属性的顺序与通过`for...in`循环`Object.keys`迭代该对象属性时一致。数组中不可枚举属性的顺序未定义。

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()) // ["0", "1", "2", "length"]
 
// 类数组对象
const obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()) // ["0", "1", "2"]
 
// 使用Array.forEach输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
})
// 0 -> a
// 1 -> b
// 2 -> c
 
// 不可枚举属性
const my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;
 
console.log(Object.getOwnPropertyNames(my_obj).sort())
// ["foo", "getFoo"]
复制代码
```

**补充**

- `Object.getOwnPropertyNames`和`Object.keys`的区别：`Object.keys`只适用于可枚举的属性，而`Object.getOwnPropertyNames`返回对象的全部属性名称(包括不可枚举的)。

```js
'use strict'
(function () {
    // 人类的构造函数
    const person = function (name, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
        this.sing = () => {
            console.log('sing');
        }
    }
 
    // new 一个ladygaga
    const gaga = new person('ladygaga', 26, 'girl')
    
    // 给嘎嘎发放一个不可枚举的身份证
    Object.defineProperty(gaga, 'id', {
        value: '1234567890',
        enumerable: false
    })
 
    //查看gaga的个人信息
    const arr = Object.getOwnPropertyNames(gaga)
    console.log(arr) // name, age, sex, sing, id
    
    // 注意和getOwnPropertyNames的区别，不可枚举的id没有输出
    const arr1 = Object.keys(gaga)
    console.log(arr1) // name, age, sex, sing
})()
复制代码
```

- 如果你只要获取到可枚举属性，可以用`Object.keys`或用`for...in`循环（`for...in`会获取到原型链上的可枚举属性，可以使用`hasOwnProperty()`方法过滤掉）。
- - 获取不可枚举的属性，可以使用`Array.prototype.filter()`方法，从所有的属性名数组（使用`Object.getOwnPropertyNames()`方法获得）中去除可枚举的属性（使用`Object.keys()`方法获得），剩余的属性便是不可枚举的属性了：

```js
const target = myObject;
const enum_and_nonenum = Object.getOwnPropertyNames(target);
const enum_only = Object.keys(target);
const nonenum_only = enum_and_nonenum.filter(function(key) {
    const indexInEnum = enum_only.indexOf(key);
    if (indexInEnum == -1) {
        // 没有发现在enum_only健集中意味着这个健是不可枚举的,
        // 因此返回true 以便让它保持在过滤结果中
        return true;
    } else {
        return false;
    }
});
 
console.log(nonenum_only);
复制代码
```

#### 11）Object.freeze()

**`Object.freeze()`** 方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()` 返回和传入的参数相同的对象。

```js
const obj = {
  prop: 42
}
 
Object.freeze(obj)
 
obj.prop = 33
 
console.log(obj.prop)
//  42
复制代码
```

**补充**

- 被冻结的对象是不可变的。但也不总是这样。下例展示了冻结对象不是常量对象（浅冻结）。

```js
const obj1 = {
  internal: {}
}
Object.freeze(obj1)
 
obj1.internal.a = 'aValue'
console.log(obj1.internal.a) // 'aValue'
复制代码
```

- 要使对象不可变，需要递归冻结每个类型为对象的属性（深冻结）。

```js
// 深冻结函数.
function deepFreeze(obj) {
  // 取回定义在obj上的属性名
  const propNames = Object.getOwnPropertyNames(obj)
 
  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    const prop = obj[name]
 
    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop)
  })
 
  // 冻结自身
  return Object.freeze(obj);
}
 
const obj2 = {
  internal: {}
}
 
deepFreeze(obj2)
obj2.internal.a = 'anotherValue'
obj2.internal.a // undefined
复制代码
```

#### 12） Object.isFrozen()

**`Object.isFrozen()`** 方法判断一个对象是否被`冻结`。

```js
// 一个对象默认是可扩展的, 所以它也是非冻结的。
Object.isFrozen({}) // false
 
// 一个不可扩展的空对象同时也是一个冻结对象。
var vacuouslyFrozen = Object.preventExtensions({})
Object.isFrozen(vacuouslyFrozen) // true
 
var frozen = { 1: 81 }
Object.isFrozen(frozen) // false
 
// 使用Object.freeze是冻结一个对象最方便的方法.
Object.freeze(frozen)
Object.isFrozen(frozen) // true
复制代码
```

#### 13）Object.create()

创建一个对象

```js
const obj = Object.create({a:1}, {b: {value: 2}})

第一个参数为对象，对象为函数调用之后返回新对象的原型对象，第二个参数为对象本身的实例方法（默认不能修改,不能枚举）
obj.__proto__.a === 1      // true 

obj.b = 3;
console.log(obj.b)      // 2

//创建一个可写的,可枚举的,可配置的属性p
obj2 = Object.create({}, {
  p: {
    value: 2,       // 属性值
    writable: true,     //  是否可以重写值
    enumerable: true,   //是否可枚举
    configurable: true  //是否可以修改以上几项配置
  }
});

obj2.p = 3;
console.log(obj2.p)     // 3

注意： enumerable 会影响以下
for…in  遍历包括对象原型上属性

Object.keys()   只能遍历自身属性

JSON.stringify  只能序列化自身属性


```

#### 14）Object.defineProperty()

Object.defineProperty(object, prop, descriptor)定义对象属性

```
添加数据属性
var obj = {};

// 1.添加一个数据属性
Object.defineProperty(obj, "newDataProperty", {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
});

obj.newDataProperty    // 101

// 2.修改数据属性
Object.defineProperty(obj, "newDataProperty", {
    writable:false
});

//添加访问器属性
var obj = {};

Object.defineProperty(obj, "newAccessorProperty", {
    set: function (x) {
        this.otherProperty = x;
    },
    get: function () {
        return this.otherProperty;
    },
    enumerable: true,
    configurable: true
});

```

注意：
1.第一个参数必须为对象
2.descriptor 不能同时具有 （value 或 writable 特性）（get 或 set 特性）。
3.configurable 为false 时，不能重新修改装饰器

#### 15）Object.defineProperties()

直接在一个对象上定义新的属性或修改现有属性，并返回该对象。Object.defineProperties(object, {prop1 : descriptor1, prop2 : descriptor2, …)

```js
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});


```

#### 16）Object.getPrototypeOf()

获取指定对象的原型（内部[[Prototype]]属性的值）

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);   // true

注意：Object.getPrototypeOf(Object) 不是 Object.prototype
     Object.getPrototypeOf( Object ) === Function.prototype;  // true



```

#### 17）Object.setPrototypeOf()

设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null。

```js
const obj = {a: 1}, proto = {b:2}

Object.setPrototypeOf(obj, proto)

obj.__proto__ === proto     //true


```

#### 18）Object.is()

它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致

```js
Object.is('foo', 'foo')     // true

Object.is({}, {})           // false

不同于 === 之处
+0 === -0                   //true
NaN === NaN                     // false

Object.is(+0, -0)           // false
Object.is(NaN, NaN)         // true


```

#### 19）Object.isExtensible()

让一个对象变的不可扩展，也就是永远不能再添加新的属性&isExtensible 判断一个对象是否可扩展

```js
let empty = {}

Object.isExtensible(empty)    //true
empty.a = 1             //添加成功
//将对象变为不可拓展
Object.preventExtensions(empty)

Object.isExtensible(empty)    //false

empty.b = 2         //静默失败,不抛出错误

empty.a = 5         //修改a属性值为5  修改成功


```

总结：
1.preventExtensions 可以让这个对象变的不可扩展，也就是不能再有新的属性。
2.需要注意的是不可扩展的对象的属性通常仍然可以被删除。
3.尝试给一个不可扩展对象添加新属性的操作将会失败，不过可能是静默失败，也可能会抛出 TypeError 异常（严格模式）。
4.Object.preventExtensions 只能阻止一个对象不能再添加新的自身属性，仍然可以为该对象的原型添加属性。
————————————————

#### 20）Object.seal()

将一个对象密封 isSealed 判断一个对象是否为密封的。密封对象是指那些不能添加新的属性，不能删除已有属性，以及不能修改已有属性的可枚举性、可配置性、可写性，但可能可以修改已有属性的值的对象。

```js


1. 先讲seal 方法：
var o2 = {b: 1}
o2.d = 2    //添加成功
var obj2 = Object.seal(o2);
obj2 === o2         //true  方法返回原对象，栈指针指向同一块内存
Object.isSealed(o2)   // true

o2.b = 111       //修改b属性值成功


o2.f = 222       //静默失败,属性f没有成功添加
delete o2.b      //静默失败,属性b没有成功删除


2. 讲isSealed 方法：
let o = {};
Object.isSealed(o)    //false

// 之后通过Object.preventExtensions方法将空对象设置为不可扩展。
Object.preventExtensions(o);
Object.isSealed(o)    // true

但是如果为非空对象呢？

let o2 = {a: 1}
Object.preventExtensions(o2);
Object.isSealed(o2)    // false

因为属性 a 是可配置的（configurable为true），所以不是密封的对象，修改方法如下：
let o2 = {a: 1}
Object.preventExtensions(o2);
Object.defineProperty(o2, "a", { configurable: false });
Object.isSealed(o2)    //true



```

总结：
1.密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。
2.属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。
3.但属性的值仍然可以修改。
4.尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError 异常（严格模式）。
————————————————

#### 21）isPrototypeOf()

用于测试一个对象是否存在于另一个对象的原型链上

```js

function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true


```

#### 22）toString toLocalString

```js
区别：
当被转化的值是个时间对象时，toLocaleString会将转化的结果以本地表示。

(new Date).toString(); //"Mon Nov 06 2017 13:02:46 GMT+0800 (China Standard Time)"

(new Date).toLocaleString();  //"2017/11/6 下午1:03:12"

另外当被转化的值是个时间戳时，toLocaleString会把时间戳每三位添加一个逗号，代码如下。

(Date.parse(new Date())).toLocaleString() //"1,509,944,637,000"

(Date.parse(new Date())).toString() //"1509944643000"


Object.length    // 对象的长度
Object.name    //  对象的名称
Object.prototype // 可以为所有 Object 类型的对象添加属性。

```



## 二、小技巧

### 1.无法取消默认行为

##### 1）遮幕效果后取消页面的滚轮效果

```js
function wheelHandle(e){
    e.preventDefault();
}
window.addEventListener('wheel',wheelHandler,{
    passive: false //若为true则代表告诉浏览器我不会对事件进行阻止，避免大量耗时间
    //部分事件如wheel默认为true
    //若不改为false 则违反约定进行报错
})
```

### 2.判断一个元素是否出现再另一个元素/窗口范围内（元素重叠/懒加载）

通过观察者实现

 比如加载东西的时候

```js
var loading = document.querySelector('.loding')//拿到加载动画


/**
 * @function 建立观察者
 * @param {Array} entries 重叠的元素
 */
var ob = new IntersectionObserver(function(entries){
    //重叠达到thresholds所执行的回调
    var entry = entries[0];

    if(entry.isIntersecting){
        //true  进入
        //false 离开
        console.log('加载更多')
    }
},{
    root: null,//观察和哪一个元素重叠 若不写/null则为窗口
    thresholds: 0.1//重叠程度0-1的取值范围
});

//观察
ob.observe(loading)
```

##### 1）案例 在vue中实现懒加载

```vue
<template>
  <div class="warpper">
    <div id="content1" class="content">
      content1
    </div>
    <div id="content2" class="content">
      content2
    </div>
    <div id="content3" class="content">
      content3
    </div>
    <div id="content4" class="content">
      content4
    </div>
    <div id="content5" class="content">
      content5
    </div>
    <div id="content6" class="content">
      content6
    </div>
  </div>
</template>

<script setup>
  import {onMounted, onBeforeUnmount, ref} from 'vue'

  const observer = ref(null)

  onMounted(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) { // 被观察者进入视口
            //intersectionRatio 属性(目标元素与视口的交叉比例) 的取值区间为 [0-1]，为0则目标元素完全               不可见，为1则目标元素完全可见
          console.log(entry.target.id)
        }
      });
    }
    // 初始化观察者实例
    observer.value = new IntersectionObserver(observerCallback)

    // 开始观察目标元素
    observer.value.observe(document.getElementById('content1'))
    observer.value.observe(document.getElementById('content2'))
    observer.value.observe(document.getElementById('content3'))
    observer.value.observe(document.getElementById('content4'))
    observer.value.observe(document.getElementById('content5'))
    observer.value.observe(document.getElementById('content6'))
  })

  onBeforeUnmount(() => {
     // 停止观察目标元素
    observer.value.unobserve(document.getElementById('content1'))
    observer.value.unobserve(document.getElementById('content2'))
    observer.value.unobserve(document.getElementById('content3'))
    observer.value.unobserve(document.getElementById('content4'))
    observer.value.unobserve(document.getElementById('content5'))
    observer.value.unobserve(document.getElementById('content6'))
  })
</script>

```

但这样会导致多次加载   解决方案 map判断只加载一次

```vue
<script>
    const hasLoadedData = ref({
    'content1':false,
    'content2':false,
    'content3':false,
    'content4':false,
    'content5':false,
    'content5':false,
  })

const loadData = (target) => {
   console.log(target)
   // 具体的请求逻辑
   // ...
 }

const oberverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) { // 被观察者进入视口
          switch (entry.target.id) {
            case 'content1':
              {
                if (!hasLoadedData.value['content1']) { // 第一次加载
                  loadData('content1') // 加载数据
                  hasLoadedData.value['content1'] = true  // 加载完数据后，把其标记为已加载
                }
              }
            break
            case 'content2':
              {
                if (!hasLoadedData.value['content2']) { 
                  loadData('content2')
                  hasLoadedData.value['content2'] = true
                }
              }
            break
            case 'content3':
              {
                if (!hasLoadedData.value['content3']) { 
                  loadData('content3')
                  hasLoadedData.value['content3'] = true
                }
              }
            break
            case 'content4':
              {
                if (!hasLoadedData.value['content4']) {
                  loadData('content4')
                  hasLoadedData.value['content4'] = true
                }
              }
            break
            case 'content5':
              {
                if (!hasLoadedData.value['content5']) { 
                  loadData('content5')
                  hasLoadedData.value['content5'] = true
                }
              }
            break
            case 'content6':
              {
                if (!hasLoadedData.value['content6']) { 
                  loadData('content6')
                  hasLoadedData.value['content6'] = true
                }
              }
            break
            default:
              break
          }
          
        }
      });
    }

</script>
```

##### 2）在v-for下 观察动态生成的目标元素

方法1.直接在子组件中设置观察器

父组件

```vue
<template>
  <div v-for="contentData in data" class="warpper">
   <Content :content-data="contentData"/>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import Content from './components/Content.vue'

  const data = computed(() => {
    const res = []
    for (let i=0; i<15; i++) {
      res.push({
        id: `content${i+1}`,
        content: `content${i+1}`
      })
    }
    return res
  })

</script>

```

子组件

```vue
<template>
    <div :id="props.contentData.id" class="dataItem">
          {{props.contentData.content}}
    </div>
</template>

<script setup>

 import { ref,onMounted, onBeforeUnmount } from 'vue'

 const observer = ref(null)
 const hasLoadedData = ref(false)

  const props = defineProps({
    contentData: {
      type: Object,
      require: true
    }
  })

  const loadData = (target) => {
    console.log(target)
    // 具体的请求逻辑
    // ...
  }

  onMounted(() => {
    const observerCallBack = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0 && !hasLoadedData.value) {
          hasLoadedData.value = true // 当前 content数据 记录为已加载
          loadData(entry.target.id)
        }
      })
    }

    // 初始化观察者实例
    observer.value = new IntersectionObserver(observerCallBack)

    // 开始观察目标元素
    observer.value.observe(document.getElementById(`${props.contentData.id}`))
  })

  onBeforeUnmount(() => {
    // 停止观察目标元素
    observer.value.unobserve(document.getElementById(`${props.contentData.id}`))
  })

</script>

```

方法2.**使用一个高阶组件包住子组件，然后在高阶组件中设置观察器即可**

这样做的好处是：

- 其一：子组件只管渲染内容，不涉及任何自身的状态的管理，即子组件是无状态组件
- 其二：逻辑可复用，任何其他地方需要用到观察器，则只需要使用高阶组件包住即可

高阶组件

```vue

<template>
  <div ref="warpperRef">
    <slot name="content"></slot>
  </div>
</template>

<script setup>
  import {ref, onMounted, onBeforeUnmount } from 'vue'

  const warpperRef = ref(null)
  const oberver = ref(null)
  const hasLoadedData = ref(false)

  const loadData = (target) => {
    console.log(target)
    // ...这里需要传递状态给该高阶组件的父组件，让父组件去执行请求，拿到数据后传递给 content 子组件
  }

  onMounted(() => {
    const oberverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && !hasLoadedData.value) { // 被观察者进入视口
          hasLoadedData.value = true
          loadData(entry.target)
        }
      });
    }
    // 初始化观察者实例
    oberver.value = new IntersectionObserver(oberverCallback)

    // 开始观察目标元素
    oberver.value.observe(warpperRef.value)
  })

  onBeforeUnmount(() => {
    // 停止观察目标元素
    oberver.value.unobserve(warpperRef.value)
  })
</script>


```

父组件

```vue
<template>
  <div v-for="contentData in data" class="warpper">
    <ContentWrapper>
      <template #content>
        <Content :content-data="contentData"/>
      </template>
    </ContentWrapper>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import Content from './components/Content.vue'
  import ContentWrapper from './components/ContentWrapper.vue'

  const data = computed(() => {
    const res = []
    for (let i=0; i<15; i++) {
      res.push({
        id: `content${i+1}`,
        content: `content${i+1}`
      })
    }
    return res
  })

</script>

```

子组件

```vue
<template>
    <div :id="props.contentData.id" class="dataItem">
          {{props.contentData.content}}
    </div>
</template>

<script setup>

  const props = defineProps({
    contentData: {
      type: Object,
      require: true
    }
  })
  
</script>

```

方法3.使用hook

```vue
import { onBeforeUnmount, ref } from 'vue'

/**
 * @param dom 要观察的目标元素
 */
export const useIntersectionObserver = (dom) => {
  const isInViewPort = ref(false)

  const observerCallback = (entries:any) => {
    entries.forEach((entry:any) => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0) { // 被观察者进入视口
          isInViewPort.value = true
        }
      } 
    })
  }

  const observer = new IntersectionObserver(observerCallback)
  observer.observe(dom)

  onBeforeUnmount(() => observer.unobserve(dom))

  return {
    isInViewPort,
  }
}


```

在我们上述的代码示例中，我们用的是原生的 IntersectionObserver API，但目前它的兼容性还不够友好，所以在实际的业务场景中，我们一般使用[intersection-observer](https://www.npmjs.com/package/intersection-observer) 这个 npm 包。

我们在 观察动态生成的目标元素 示例中动态生成了 15 个 Content，那如果是 100 个 Content 甚至更多呢？而且在实际的业务场景中，我们的 Content 组件的 DOM 结构要复杂得多，可能会有深层嵌套，如果我们把所有的 Content 都渲染出来，那么页面可能会崩掉。

解决办法是使用**虚拟列表**，不管用户滚动加载了多少条数据，我始终取其中的 n(n不可太大) 条来渲染在页面上。
————————————————

### 3.图片懒加载的两种方法

这两种方式都需要在JS操作前，将<img>标签中的src属性本该对应的值存在自定义的一个属性(比如data-src)中，因为最开始我们不需要让请求到的图片资源直接加载出来，只是先将其随便存在一个属性当中，在后续的懒加载操作中再将其修改为src

```
<img data-src="./img_test/xn3.jpg" width="400" height="800" />
```

##### 1）窗口滚动事件监听图片位置

```js
window.addEventListener("scroll", (e) => { // 为window加入滚动监听事件
  IMGS.forEach(ele => { // 遍历获取到的img标签，为每个都添加监听
      const imgTop = ele.getBoundingClientRect().top; // 获取每一个img图片上方距离浏览器顶部的距离
      // 判断图片上方距离浏览器可视窗口顶部的距离是否小于浏览器高度
      if (imgTop < window.innerHeight) { // 如果小于的话, 说明图片已经在页面中能够被看到, 那么获取
          const data_url = ele.getAttribute("data-src"); // 获取data-src中存放的真实图片url地址
          ele.setAttribute("src", data_url); // 将真实图片url地址给到src路径中
      }
  })
})
```



##### 2）IntersectionObserver构造函数

```js
const IMGS = document.querySelectorAll("img"); // 获取所有图片
const callback = entries => { // 设置构造函数中接收到的参数中的操作事项
  entries.forEach(enntry => { // 因为entries里面放着所有被观察的节点，所有需要遍历判断
      if (enntry.isIntersecting) { // 判断当前节点是否在可视区域能被看到
          const image = enntry.target; // 通过事件对象拿到这个元素
          const data_url = image.getAttribute("data-src"); // 获取该元素data-src中存放的路径
          image.setAttribute("src", data_url); // 赋值给真实路径
          Observer.unobserve(image); // 停止观察
      }
  })
}
const Observer = new IntersectionObserver(callback); // 生成实例
IMGS.forEach(img => Observer.observe(img)) // 通过遍历对所有Img元素都进行观察
```

