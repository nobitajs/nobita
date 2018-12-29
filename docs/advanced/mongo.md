# Mongo
---
> MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

## Mongo 配置
```js
// config.{env}.js
exports.mongo = {
  url: 'mongodb://localhost:27017/数据库',
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

- 配置后，直接ctx.db.{database} 就可以直接使用

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

update - [options]
- safe (boolean)： 默认为true。安全模式。
- upsert (boolean)： 默认为false。如果不存在则创建新记录。
- multi (boolean)： 默认为false。是否更新多个查询记录。
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

