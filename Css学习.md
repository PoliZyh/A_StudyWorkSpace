# Css学习



## 一、属性

### 1.animation动画和@keyframes关键帧

**简写**

animation:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状太;

animation:move 1s ease 2s 3 alertnate fowwards

```css
@keyframes animation{
	0%{
	...
	}
	100%{
	...
	}
}

.div{
    animation: animation 4s steps(10) forwards;
}
```

0%是动画的开始，100%是动画的完成。这样的规则就是动画序列
在 @keyframes 中规定某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果
动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式任意多的次数。
请用百分比来规定变化发生的时间，或用关键词"from"和"to",等同于0%和100%

动画的常见属性

| 值                        | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| @keyframes                | 规定动画                                                     |
| animation                 | 所有动画属性的简写属性，除了 animation-play-state属性        |
| animation-name            | 制定需要使用的动画（ 必须的 ）                               |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒( 必须的 )               |
| animation-timing-function | 规定动画的速度曲线，默认是"ease"”                            |
| aniamtion-delay           | 规定动画何时开始，默认是0.                                   |
| animation-iteration-count | 规定动画被播放的次数，默认是1,还有 infinite                  |
| animation-direction       | 规定动画是否在下一周期逆向播放，默认是" normal" alternate逆播放 |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是" running" 还有’ paused 暂停. |
| animation-fill-mode       | 规定动画结束后状态，保持 forwards 回到起始 backwards         |

————————————————
暂停动画： animation-play-state: paused;经常和鼠标经过等其他配合使用
想要动画走回来，而不是直接跳回来： animation- direction: alternate
盒子动画结束后，停在结束位置： animation- fill-mode: forwards

##### aniamtion-direction

动画是否逆向播放

aniamtion-direction: norma | reverse | alternate | alternate-reverse
normal 默认的
reverse 从终点运动向起点 终点=>起点
alternate 到达终点后是否原路返回( 起点=>终点=>起点 ) 当 animation-iteration-count < 2 时无效
alternate-reverse 终点=>起点=>终点 animation-iteration-count < 2 时无效

##### animation-fill-mode

动画结束后状态

- aniamtion-fill-mode:forwards | backwards
  - forwards 保持当前位置
  - backwards 回到初始位置

#####  animation-timing-function

animation-timing- function:规定动画的速度曲线，默认是 ease

| 值          | 描述                                           |
| ----------- | ---------------------------------------------- |
| linear      | 动画从头到尾的速度是相同的。匀速               |
| ease        | 默认。动画以低東开始，然后加快，在结束前变慢。 |
| ease-in     | 动画以低速开始。                               |
| ease-out    | 动画以低速结束。                               |
| ease-in-out | 动画以低速开始和结束。                         |
| steps       | 指定了时间函数中的间隔数量（步长）             |

steps 理解为动画从头到尾，需要多少步来完成。

steps可以实现Sprite拼合图之间切换 关键帧中修改background-position-x

##### 打字效果

注意：`1ch 等于一个 0 的宽度！宽度！宽度！`

ch还有另一个规则：

- 1ch = 1个英文 = 1个数字
- 2ch = 1个中文

```html
<style>
  div {
    font-size: 46px;
    font-family: monospace;
    /* 1ch 代表0的宽度  */
    width: 0ch;
    white-space: nowrap;
    /* animation: move 4s linear  forwards; */
    /* steps 就是分几步来完成动画，有了 steps 不要写ease linear了 */
    animation: move 4s steps(9) forwards;
    overflow: hidden;
  }

  @keyframes move {
    0% {}
    100% {
      width: 18ch;
    }
  }
</style>

<div>我不知道你在想什么</div>

```

### 2.transform 频移、旋转、缩放、3d转换、渐变、动画

#### 平移

transform:translate(水平移动距离，垂直移动距离)

#### 旋转

transform:rotate(角度)   角度单位是deg  取值正负均可  取值为正,顺时针旋转  取值为负,逆时针旋转

默认原点是盒子中心

transform-origin:原点水平位置 原点垂直位置; 改变转换原点

#### 缩放

transform: scale(x轴缩放倍数,y轴缩放倍数); 一般情况下,只为scale设置一个值,表示x轴和ye轴等比例缩放 transform:scale(缩放倍数) scale值大于1 表示放大  scale值小于1 表示缩小

#### 案例 实现开门效果

```html
<!DOCTYPE html>
<html>
  <style>
    *{
      margin:0;
      padding:0;
    }
    .box{
      width: 1366px;
      height: 600px;
      margin: 0 auto;
      background: url(https://img1.imgtp.com/2022/07/04/22uDHSP0.jpg);
      overflow: hidden;
    }

    .box::before,
    .box::after{
      content:"";
      float: left;
      width: 50%;
      height: 600px;
      background-image: url(https://i.bmp.ovh/imgs/2022/07/04/db0bbf5a32f7be92.jpg);
      transition: all 1s;
    }
    .box::after{
      background-position: right 0;
    }

    .box:hover::before{
      transform: translate(-100%);
    }
    .box:hover::after{
      transform: translate(100%);
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>

```





## 二、css小技巧

### 1.联系人首字母行吸附效果（粘性定位）

核心代码

```css
dt{
    position: sticky;/*粘性定位 要配合坐标生效*/
    top: 0;/*相对于第一个设置了overflow的元素 如果没有则是视口窗（一般不设置）*/
}
```

![image-20230415160917446](C:\Users\ZYH\AppData\Roaming\Typora\typora-user-images\image-20230415160917446.png)

### 2.多行文本溢出部分的处理（多出部分省略号）

```css
//单行
p{
    width:200px;
    height:30px;
    white-space:npwrap;//不换行
    overflow:hidden;
    text-overflow:ellipsis;
}
//多行
p{
    width:200px;
    height:150px;
    line-height:30px;//最多显示五行
    overflow:hidden;
    //可能有兼容性问题
    display:-webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient: vertical;//文本排列方向
}
```

