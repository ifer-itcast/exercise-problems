## 效果参考

<img src="./xxxf.png"/>

## 接口地址

```javascript
https://photo.sina.cn/aj/index?page=1&cate=recommend&jsoncallback=__onGetData__

请求地址：https://photo.sina.cn/aj/index
请求参数：
    page: 页码
    cate: 分类，固定“recommend”
    jsoncallback: 回调函数名字，固定“__onGetData__”
```

## 功能需求

- 点击页码请求并渲染对应的数据
- 刷新时保留当前页数据
- 请求每页数据时显示 loading 效果
- 支持 history 前进/后退，并和页码同步（难点拔高/选做）

## 运用知识点

- 能使用 jQuery 或原生 JS，利用 JSONP 原理请求数据（50分）
- 刷新时保留当前页数据，location API 的使用（20分）
- 请求数据时支持 loading 效果的显示隐藏（20分）
- 支持 history 前进/后退（10分）

