# Vue原理



## 一、Vue原理

### 1.proxy代理（数据单向绑定）简单实现

首先，HTML 中有一个 `div` 标签，它的 `id` 属性为 `app`，表示这个 `div` 是我们要渲染的目标区域。在这个 `div` 中，有两个文本区域和一个按钮。

接下来，JavaScript 代码中定义了一个名为 `_data` 的对象，其中包含了一个名为 `name` 和一个名为 `age` 的属性。`data` 对象则是 `_data` 对象的代理对象，代理的作用是在修改 `_data` 对象时自动调用渲染函数 `render()` 来更新视图。

在 `render()` 函数中，首先使用 `innerHTML` 属性获取 `div` 标签的内容，然后使用正则表达式将其中的 `{{name}}` 和 `{{age}}` 等模板字符串替换为 `_data` 对象中对应的属性值，最后将渲染后的内容重新设置回 `div` 标签中。同时，在 `render()` 函数中也会调用 `onBtnClick()` 函数来绑定按钮的点击事件，这样当按钮被点击时就会自动调用代理对象的 `set()` 方法，从而触发数据更新和视图渲染。

在 `onBtnClick()` 函数中，首先使用 `getElementById()` 方法获取按钮元素，并使用 `addEventListener()` 方法给按钮绑定一个 `click` 事件监听器。当按钮被点击时，代理对象的 `age` 属性就会加 1，从而触发数据更新和视图渲染。这样就完成了一个简单的数据绑定示例。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        姓名：{{name}} <br>
        <div>
            年龄：{{age}}
        </div>
        <button id="btn">老了一岁</button>
    </div>
    <!-- <button id="btn"></button> -->
</body>



<script>

let app = document.getElementById('app');
let template = app.innerHTML
let _data = {
    name:'张张',
    age: 18
}

let data = new Proxy(_data,{
    set(obj, name, value){
        obj[name] = value
        render();
    }
})
function render(){
    app.innerHTML = template.replace(/\{\{\w+\}\}/g, (str)=>{
        str = str.substring(2, str.length - 2);
        return _data[str];
    })
    onBtnClick()
}
function onBtnClick(){
    let btn = document.getElementById('btn')
    btn.addEventListener('click',()=>{
        data.age +=1
    })
}
render();
// console.log(app)


</script>
</html>
```

### 2.proxy和defineProperty的区别

`Proxy` 和 `Object.defineProperty` 都可以用来拦截并监听对象属性的变化，但它们之间还是存在一些区别的。

1. 功能不同

`Object.defineProperty` 可以监听对象的属性访问、修改和删除，但是需要对每个属性单独定义，比较繁琐。

`Proxy` 可以监听对象的任意属性的访问、修改和删除，而且在属性访问时，可以通过捕获器函数实现自定义逻辑。

​	2.兼容性不同

`Object.defineProperty` 兼容性较好，从 ES5 开始就被广泛支持，但是只能监听对象的已有属性，无法监听新增的属性。

`Proxy` 从 ES6 开始引入，对浏览器的兼容性要求比较高，不能用于 IE11 等旧版本浏览器中。但是可以监听对象的任意属性，包括新增属性。

​	3.性能不同

由于 `Object.defineProperty` 是对每个属性单独定义，所以在定义大量属性时，会占用较多的内存。而 `Proxy` 是基于整个对象进行代理的，所以在性能方面可能更有优势。

​	4.使用场景不同

`Object.defineProperty` 适用于需要监听对象的已有属性，并且不需要监听对象的新增属性时使用，比如 Vue.js 2.x 版本使用的数据响应式系统就是基于 `Object.defineProperty` 实现的。

`Proxy` 适用于需要监听对象的任意属性，或者需要自定义属性的访问、修改逻辑时使用。

```js
let target = {}
Object.defineProperty(target,"name",{
    get(){
        //get操作
    },
    set(){
        //set操作
    }
})
target.name = "张三"

```



## 二、面试题

