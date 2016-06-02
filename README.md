# vue 在 node 下的配置

### 为什么有这个项目？
vue + webpack + express(ejs)的配置相当繁琐，贡献出来，大家可以结合自己的实际情况自己改下

#### 目录结构说明
f2e：前端开发文件夹

### 使用方法：

#### 先装依赖
```
npm i
```

#### 执行以下命令，打开127.0.0.1:8080/f2e/index.html ， 实现热加载，写完不按F5就生效
```
npm run dev
```

#### 生产环境线上部署使用以下命令， 生成的 CSS/JS 在 ./public ， ejs 在 ./views
```
npm run build
```
