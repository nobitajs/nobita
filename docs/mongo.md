# Mongo
---
> MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

## Mongo 配置
```js
// config.{env}.js
exports.mongo = {
  url: 'mongodb://[location]:[port]/[dbName]',
  option: {
    user: 'user',
    pass: 'password',
    authSource: 'admin'
  },
  tables: {
    database: {
      age: Number,
      name: {
        type: String,
        unique: true
      }               
    }
  }
}
```
- [option] 非必填
- user/ pass - 身份验证的用户名和密码。这些选项是特定于mongoose的，它们等同于MongoDB驱动程序
- authSource - 用来表明验证身份的来源数据库

- 配置后，直接ctx.db.{database} 就可以直接使用

## Schema
- type: 字段类型
   - String      字符串
   - Number      数字    
   - Date        日期
   - Buffer      二进制
   - Boolean     布尔值
   - Mixed       混合类型
   - ObjectId    对象ID    
   - Array       数组
- required: 是否必填
- default: 默认值
- validate: 自定义匹配
- min: 最小值(只适用于数字)
- max: 最大值(只适用于数字)
- match: 正则匹配(只适用于字符串)
- enum:  枚举匹配(只适用于字符串)
- unique: 是否唯一

## 查询条件

| 名称 | 说明 |
|:----|:----|
|$or|或关系|
|$nor|或关系取反|
|$gt|大于|
|$gte|大于等于|
|$lt|小于|
|$lte|小于等于|
|$ne|不等于|
|$in|在多个值范围内|
|$nin|不在多个值范围内|
|$all|匹配数组中多个值|
|$regex|正则，用于模糊查询|
|$size|匹配数组大小|
|$maxDistance|范围查询，距离（基于LBS）|
|$mod|取模运算|
|$near|邻域查询，查询附近的位置（基于LBS）|
|$exists|字段是否存在|
|$elemMatch|匹配内数组内的元素|
|$within|范围查询（基于LBS）|
|$box|范围查询，矩形范围（基于LBS）|
|$center|范围醒询，圆形范围（基于LBS）|
|$centerSphere|范围查询，球形范围（基于LBS）|
|$slice|查询字段集合中的元素（比如从第几个之后，第N到第M个元素|

## find
- 查询数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.find({ name: 'Nobita' }, [options]);
    ctx.body = res;
  }
}
```

find - [options]
- limit (number)： 默认为20。查询条数。
- page  (number)： 默认为0。查询页码。
- sort  (object)： 排序条件
- filter (object)：过滤输出字段

## findOne
- 查询一条数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.findOne({ name: 'Nobita' });
    ctx.body = res;
  }
}
```

## insert
- 插入数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.insert({ name: 'Nobita' });
    ctx.body = res;
  }
}
```

## insertMany
- 插入多条数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.insertMany([
    { name: 'Nobita' },
    { name: 'Koa' }
  ]);
    ctx.body = res;
  }
}
```

## update
- 修改数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.update({ name: 'Nobita' }, { author: 'JJ' }, [options]);
    ctx.body = res;
  }
}
```

## updateOne
- 修改单条数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.updateOne({ name: 'Nobita' }, { author: 'JJ' }, [options]);
    ctx.body = res;
  }
}
```

update - [options]
- safe (boolean)： 默认为true。安全模式。
- upsert (boolean)： 默认为false。如果不存在则创建新记录。
- runValidators： 如果值为true，执行Validation验证。
- setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
- strict (boolean)： 以strict模式进行更新。
- overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。

## remove
- 删除指定所有数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.remove({ name: 'Nobita' });
    ctx.body = res;
  }
}
```

## removeOne
- 删除指定第一条数据
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    const res = await ctx.db.database.removeOne({ name: 'Nobita' });
    ctx.body = res;
  }
}
```

## aggregate
- 关联查询
```js
// app/controllers/test.js
module.exports = {
 async get() {
   const ctx = this;
   const res = await await ctx.db.database.aggregate(data);
   ctx.body = res;
 }
}
```
详情请看 [API](https://mongoosejs.com/docs/api.html#aggregate_Aggregate)

## 链接多数据库
```js
exports.mongo = {
  clients: {
    db1: {
      url: 'mongodb://localhost:27017/db1',
      tables: {
        database: {
          age: Number,
          name: {
            type: String,
            unique: true
          }               
        }
      }
    },

    db2: {
      url: 'mongodb://localhost:27017/db2',
      tables: {
        database: {
          age: Number,
          name: {
            type: String,
            unique: true
          }               
        }
      }
    }
  }
}
```

使用方式
```js
// app/controllers/test.js
module.exports = {
  async get() {
    const ctx = this;
    // db1
    const data1 = await ctx.db.db1.database.find({ name: 'Nobita' });
    // db2
    const data2 = await ctx.db.db2.database.find({ name: 'Nobita' });
    ...
  }
}
```

