# 🥕 dom操作

## $ el选择器
> el选择器，返回一个dom元素
```js
/**
 * @function $
 * @description 获取dom元素，只返回一个元素
 * @param {string} el 节点选择器
 * @returns {HTMLElement|null}
 * @example 
 * $('body') // => HTMLElement
 * let dom1 = $('#bid');
 * let dom2 = $('.class');
 * let dom3 = $('input');
 * let dom4 = $('input[type="text"]');
 * let dom5 = $('ul li'); //即使存在多个也只返回第一个li元素
 */
```

## $$ el选择器集合
> el选择器，返回一个dom元素集合
```js
/**
 * @function $$
 * @description 获取dom元素，返回一个数组
 * @param {string} el 节点选择器
 * @returns {NodeListOf<HTMLElement>}
 * @example $$('.col') // => NodeListOf<HTMLElement>
 */
```

## setStyle
> 设置dom节点的style样式
```js
/**
 * @function setStyle
 * @description 设置dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {object} style 样式对象
 * @returns {void} 无返回值
 * @example setStyle(document.body, { color: 'red' }) // => void
 */
```

## getStyle
> 获取元素的某个样式属性
```js
/**
 * @function getStyle
 * @description 获取dom元素的样式
 * @param {HTMLElement} el dom元素
 * @param {string} style 样式名称
 * @returns {string} 样式属性值
 * @example getStyle(document.body, 'color') // => 'red'
 */
```

## getClass
> 获取元素的class属性
```js
/**
 * @function getClass
 * @description 获取dom元素的class
 * @param {HTMLElement} el dom元素
 * @returns {string} class属性值
 * @example getClass(document.querySelector('.col')) // => 'span-12'
 */
```

## hasClass
> 判断元素中是否有某个class样式
```js
/**
 * @function hasClass
 * @description 判断dom元素是否有某个class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {boolean} 是否有class
 * @example hasClass(document.querySelector('.col'), 'span-12') // => true
 */
```

## removeClass
> 移除元素中某个class样式
```js
/**
 * @function removeClass
 * @description 移除dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example removeClass(document.querySelector('.col'), 'span-12') // => void
 */
```

## addClass
> 添加元素样式
```js
/**
 * @function addClass
 * @description 添加dom元素的class
 * @param {HTMLElement} el dom元素
 * @param {string} className class名称
 * @returns {void} 无返回值
 * @example addClass(document.querySelector('.col'), 'span-12') // => void
 */
```

## setAttr
> 设置元素属性
```js
/**
 * @function setAttr
 * @description 设置dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {object} attr 属性对象
 * @returns {void} 无返回值
 * @example setAttr(document.querySelector('.col'), { id: 'col' }) // => void
 */
```

## getAttr
> 获取元素某个属性值
```js
/**
 * @function getAttr
 * @description 获取dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {string} 属性值
 * @example getAttr(document.querySelector('.col'), 'id') // => 'col'
 */
```

## removeAttr
> 移除元素某个属性
```js
/**
 * @function removeAttr
 * @description 移除dom元素的属性
 * @param {HTMLElement} el dom元素
 * @param {string} attr 属性名称
 * @returns {void} 无返回值
 * @example removeAttr(document.querySelector('.col'), 'id') // => void
 */
```

## getAttrList
> 获取元素属性列表
```js
/**
 * @function getAttrList
 * @description 获取dom元素的属性列表
 * @param {HTMLElement} el dom元素
 * @returns {Array<string>} 属性列表
 * @example getAttrList(document.querySelector('.col')) // => ['id', 'class']
 */
```

## getAttrKV
> 获取元素属性和值列表
```js
/**
 * @function getAttrKV
 * @description 获取dom元素的属性键值对
 * @param {HTMLElement} el dom元素
 * @returns {object} 属性键值对
 * @example getAttrKV(document.querySelector('.col')) // => { id: 'col', class: 'span-12' }
 */
```

## elShow
> 元素进入可视区域执行某个动作
```js
/**
 * @function elShow
 * @description 显示dom元素时执行某个操作
 * @param {HTMLElement} el dom元素
 * @param {Function} callback 回调函数
 * @returns {void} 无返回值
 * @example elShow(document.querySelector('.col'),()=>{ ... }) // => void
 */
```

## isShow
> 元素是否进入可视区域
```js
/**
 * @function isShow
 * @description 判断dom元素是否在可视区域
 * @param {HTMLElement} el dom元素
 * @returns {boolean} 是否在可视区域
 * @example isShow(document.querySelector('.col')) // => true
 */
```


## removeTag
> 去除文本内容中的标签
```js
/**
 * @function removeTag
 * @description 移除text文本中的标签
 * @param {string} text 文本
 * @returns {string} 移除标签后的文本
 * @example removeTag('<p>hello world</p>') // => 'hello world'
 */
```