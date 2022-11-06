# 🥕 常用工具函数

## deepClone
> 深拷贝
```javascript
/**
 * @funcs deepClone
 * @param {object} obj 待复制的对象
 * @param {WeakMap} cache  循环引用内存溢出，使用WeakMap缓存
 * @return {Object} 拷贝后的对象
 */
  let person = { name: 'hello', hobby: { name: '篮球', time: 3 } };
  let _copy = deepClone(person);
  person.hobby.name = '羽毛球';
  console.log(_copy); //{ name: 'hello', hobby: { name: '篮球', time: 3 } }
```
