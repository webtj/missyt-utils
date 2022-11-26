# 🥕 常用工具函数

## deepClone
> 深拷贝
```javascript
/**
 * @function deepClone
 * @description 深克隆
 * @param {any} obj 要克隆的对象
 * @returns {any} 克隆后的对象
 */
  let person = { name: 'hello', hobby: { name: '篮球', time: 3 } };
  let _copy = deepClone(person);
  person.hobby.name = '羽毛球';
  console.log(_copy); //{ name: 'hello', hobby: { name: '篮球', time: 3 } }
```
