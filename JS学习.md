# JS学习

## 一、知识点



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

