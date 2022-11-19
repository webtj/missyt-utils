# missyt-utils是什么？

## 请参考[开发文档](https://webtj.github.io/missyt-utils/)

[missyt-utils](https://github.com/webtj/missyt-utils/)是一个`作者自认为`常用js代码工具库，一个`高级前端工程师`不屑写的工具库，不管别人怎么看，但至少方便了自己。

> missyt-utils 目前仍在 `开发中` 状态. 它已经构建好了开箱即用的api，未来可能会对函数内部实现进行优化，已实现的方法（包括方法名、入参、出参）不会变动，但生产环境仍需`谨慎使用`。

## 动机
在日常开发中，经常会封装一些与业务不相关的工具方法，例如：关于数据类型、dom、bom、http请求、浏览器存储、事件等方法。而我们伟大的[lodash](https://www.lodashjs.com/)真的是又大又粗！所以一些小而美的方法，每次使用前要么自己重写，要么从哪儿复制粘贴至项目中，我是一个连百度都嫌麻烦的人，所以就出现了missyt-utils，只为做三件事：`收集、重写、复用`

## 提升
至少让自己多了点思考，少了频繁的百度和到处的cv，汲取一些优秀开源的思路和写法。

## issue
如在使用过程中出现问题，欢迎[提issue](https://github.com/webtj/missyt-utils/issues)尽情嘲讽，只为共同进步、相互学习。

---

# 快速上手

## 安装
```shell
  npm install missyt-utils
```

## 引入
```javascript
import * as mUtils from 'missyt-utils';

import { isBrowser } from 'missyt-utils';

const mUtils = require('missyt-utils');
```

---

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