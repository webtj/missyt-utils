# 🥕 dom操作

## $ el选择器
> el选择器，返回一个dom元素
```javascript
/**
 * @funcs $
 * @param {String} #id .class tag ..
 * @return {Element} dom元素
 */
  let dom1 = $('#bid');
  let dom2 = $('.class');
  let dom3 = $('input');
  let dom4 = $('input[type="text"]');
  let dom5 = $('ul li'); //即使存在多个也只返回第一个li元素
```

## $$ el选择器集合
> el选择器，返回一个dom元素集合
```javascript
/**
 * @funcs $$
 * @param {String} .class tag ..
 * @return {Array<Element>} dom元素集合
 * @example $$('ul li')
 */
  const lidoms = $$('ul li');
  //给每个li绑定一个click事件
  Array.from(lidoms).forEach(_liItem => {
    _liItem.addEventLinster('click',function(e){});
  })
```

## setStyle
> 设置dom节点的style样式
```javascript
/**
 * @funcs setStyle
 * @param {Element} dom节点
 * @param {Object} style属性对象
 * @return null
 */
  //为id为test的元素设置样式
   setStyle($('#test'),{
     width:'30px',
     height:'40px',
     borderRadius:'5px',
     color:'red'
  })
```

## getStyle
> 获取元素的某个样式属性
```javascript
/**
 * @funcs getStyle
 * @param {Element} el dom节点
 * @param {string} style style样式属性
 * @return 返回元素的制定样式
 */
  getStyle($('#test'),'width'); //获取id为test的元素的width
```

## getClass
> 获取元素的class属性
```javascript
/**
 * @funcs getClass
 * @param {Element} el dom节点
 * @return 返回元素的class属性的值
 */
  const className = getClass($('#id'));
```

## hasClass
> 判断元素中是否有某个class样式
```javascript
/**
 * @funcs hasClass
 * @param {Element} el dom节点
 * @param {String} className
 * @return {Boolean} true/false
 */
  //判断是否有 col-12 class
  hasClass($('#test'),'col-12')  //true or false
```

## removeClass
> 移除元素中某个class样式
```javascript
/**
 * @funcs removeClass
 * @param {Element} el dom节点
 * @param {String} className
 * @return null
 */
  removeClass($('#test'),'col-12'); //移除 col-12 class
```

## setAttr
> 设置元素属性
```javascript
/**
 * @funcs setAttr
 * @param {Element} dom节点
 * @param {Object} 属性对象和值
 * @return null
 */
  //设置id为aa的元素属性
  setAttr($('a'),{
    href:'www.baidu.com',
    target:'_blank'
 })
```

## getAttr
> 获取元素某个属性值
```javascript
/**
 * @funcs getAttr
 * @param {Element} el dom节点
 * @param {String} attrName
 * @return null
 */
 getAttr($('#test'),'name'); //获取test元素name属性值
```

## removeAttr
> 移除元素某个属性
```javascript
/**
 * @funcs removeClass
 * @param {Element} el dom节点
 * @param {String} attrName
 * @return null
 */
  removeAttr($('#test'),'name'); //移除name属性
```

## getAttrList
> 获取元素属性列表
```javascript
/**
 * @funcs getAttrList
 * @param {Element} el dom节点
 * @return {Arrray<string>} 该元素所有属性数组
 */
  // <div class="missyt" name="hello-missyt" aria-readonly="true"></div>
  getAttrList($('.missyt')); //return ['class', 'name', 'aria-readonly']
```

## getAttrKV
> 获取元素属性和值列表
```javascript
/**
 * @funcs getAttrKV
 * @param {Element} el dom节点
 * @return {Arrray<object>} 该元素所有属性和属性值
 * @example 获取元素属性和属性值
 */
  getAttrKV($('#test')); //return [{key:'id',value:'test'}]
```

## elShow
> 元素进入可视区域执行某个动作
```javascript
/**
 * @funcs elShow
 * @param {Element} el dom节点
 * @return {Function} callback 执行的回调方法
 */
  //当img进入可视区域时，动态给src赋值
  elShow(imgEle,()=>{
     console.log('imgEle 进入可视区域了,实现懒加载了');
     imgEle.src = getAttr(imgEle,'data-src');
  })
```

## isShow
> 元素是否进入可视区域
```javascript
/**
 * @funcs isShow
 * @param {Element} el dom节点
 * @return {Boolean} true/false
 */
  //判断image是否进入可视区域
  const _show = isShow(document.getElementById('yimg'));
```


## removeTag
> 去除文本内容中的标签
```javascript
/**
 * @funcs removeTag
 * @param {String} 带有html标签的文本
 * @return {String} 返回去除后的text文本
 */
  removeTag('<h1>dadads</h1><a>sadasd');  //'dadadssadasd'
```