# git-commit-message
一个使用git做开发的码农日报接口。
## 简介
### 初始化项目
  npm install
### 运行
  node ./bin/www
### 预览效果
访问：http://localhost:8080/git
### 配置
config.js中可以修改：
* git本地仓库的相对路径
* 项目用的git用户名
* 需要展示的git log信息
* 是否过滤自动merge的commit message（注意：这里我用的"merge"关键字来区分是否是自动merge的message，主要是我用的ide自动merge的message内容类似这个。）

### 接口实例
![image](https://raw.githubusercontent.com/eternityspring/git-commit-message/master/public/images/api-demo.jpg)
### 先这样了
嗯，目前就是一个接口，一堆数据。没啥好看的。有空再用前端东西玩玩，高点花样来提升逼格。
  
