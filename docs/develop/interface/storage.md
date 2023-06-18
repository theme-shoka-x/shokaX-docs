# ShokaX storage API
可用区: `page ts`(前端可用)

## $storage系
### $storage.set
向本地存储中设置键值对数据
#### 接收参数
- `key: string`: 设置的键名
- `value: string`: 设置的键值

#### 返回类型
- `void`

### $storage.get
向本地存储中获取键值对数据
#### 接收参数
- `key: string`: 要获取的键名

#### 返回类型
- `string`

### $storage.del
向本地存储中删除键值对数据
#### 接收参数
- `key: string`: 要删除的键名

#### 返回类型
- `void`
