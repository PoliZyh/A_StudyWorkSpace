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