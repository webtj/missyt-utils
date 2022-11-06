# 邀请共同维护
想办法减少重复的劳动才是提升效率的关键，我们可能要花更多的心思在设计模式和细节优化上。但很显然，对于一些很常用的方法，我们经常做的就是一遍遍的搜索，到处搬运，然后复制粘贴，看起来很忙，但这真的是无效的努力。
所以，邀请各位朋友一起维护，大家常用的或者觉得小而美的方法可以相互分享，一次搞定，做到开箱即用。欢迎fork and merge！！

## 第一步：注册路由
按照我们约定的类目在`docs/.vitepress/theme/config.ts`文件中`sidebarGuide`下创建一级菜单(如果已存在则直接跳过)
然后关联所维护的文档文件，即可开始编写文档
```javascript
{
  text: '本地存储', // 一级目录路由
  items: [
    { text: 'Storage操作', link: '/guide/Storage' }, //二级目录路由
    { text: 'Cookie操作', link: '/guide/Cookie' },
  ]
}
```

## 第二步：编写规范
我们为了减少维护成本，约束代码规范，采用驼峰命名，函数需注释清楚：用途描述、入参、出参、特殊注意点备注、使用样例等
```typescript
// 这是一个完整规范
## observeProxy   //标题
设计一个对象的观测者-proxy方案  //注释
/**
 * @func observeProxy
 * @desc 设计一个对象的观测者-proxy方案
 * @param { Object } obj 对象
 * @return { cal } 观测对象回调方法
 * @github git链接
 * @example  let obj = observeProxy({name:'alex',age:18},callback)
 * @size 插件大小
*/
```

## 第三步：运行检查
运行文档，检查错别字等问题
```
yarn docs:dev
```