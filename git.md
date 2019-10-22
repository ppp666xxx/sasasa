### 版本控制工具(代码管理工具)
git（分布式）/svn（集中式） ·
### git基本指令
git init 初始化本地仓库  v
git add  将工作区的文件添加缓存区   v
git commit  将缓存区的文件提交到本地仓库  v
git log   打印操作信息 （commit提交信息）v
git reflog 打印操作信息（所有操作信息）v
git branch  分支相关  v
git reset --hard 版本id  版本回退   v
git checkout 分支名 切换分支 （*正在使用的当前分支） v
git checkout -b 分支名 新建一个分支并且切换  v
git  merge 分支名（hehe） 将hehe分支合并到当前分支 v

git diff   对比区别
git remote add origin  url  远程仓库相关
git push  origin dev 将本地仓库的文件更新到远程仓库上
git pull origin dev  将远程仓库的文件下拉 跟新本地仓库
### 冲突解决
原因:多人修改同一代码，合并没法区分  需要开发者手动解决冲突
需要的留着  不要的删掉
### git 工具使用
1.官网下载
2.鼠标右键  git bash here指令
3.在窗口运行命令
### 概念
工作区 可以修改代码的地方
暂存区 暂时存储修改的区域
分支   保存所有代码修改的地方
### 远程仓库
1.github
2.码云
3.gitlab（公司自己搭建的git 服务器）

### git flow git工作流
1. 切换分支 
   master  主分支  线上分支（和运行的代码完全一致）
   dev     开发分支 
   bug     线上的代码出现bug
   release 提测分支（和线上分支保持一致）
   Futurre 个人功能分支
  
   [gitflow](https://www.cnblogs.com/wish123/p/9785101.html)
2. 项目的发展 0-1-0
   主程（项目组长）
   1.创建远程仓库
   2.本地仓库和远程仓库关联
   3。切换dev分支  初始化项目 安装公有插件 公有库
   4. 将项目上传到（githup 私有仓库）gitlab

   路人甲乙丙丁
   路人甲
     登录
     1.克隆主程代码
     2.从dev分支上 切换个人分支 
     3.开发自己功能
     4.将自己的分支合并到dev分支
     5.向线上提交代码（git push）先gitpull
     6.群里通知一下  让其他组员更新代码
     7.删除个人分支
   路人乙
     1.克隆主程代码
     2.从dev分支上 切换个人分支 
     3.开发自己功能
     4.将自己的分支合并到dev分支
     5.向线上提交代码（git push）先gitpull
     6.群里通知一下  让其他组员更新代码
     7.删除个人分支
  <!-- 
    master-》dev 只能master合并dev  不能dev合并master
   -->
  #### 项目上线
   1.网页代码
   2.服务器软件
   3.需要一个服务器（电脑） 局域网 外网环境（范围大的局域网）
   192.168.1.7:8080/index.html

  #### 服务器
  阿里云  腾讯云 百度云  .....
  <!-- 全干（栈）工程师  1 1.5  1.1.5  2 -->
  端口号默认不开启  需要去安全组实例自动开启
  1. 网页上线
     nginx 
     html 目录就是www目录
  2. api上线
     postman 
  3. 数据库上线
     1.数据库 能够外网的环境下访问  
     mongod 只允许本地ip访问
     mongod --bind_ip_all 
     robot3t
#### 真机调试

git 地址：https://github.com/fchangjun/1914gitflow.git

####  前端的职责
1. 数据请求  ajax  
   api接口文档 多样化  网页  exect  txt  doc           -1 -2 表示失败 -999 -998 全局错误   0  证书 成功
   接口4要素  1. 地址 2.method 3 params  4. response {err/code:状态码,msg/text:'提示信息',data/list：返回的数据}
2. 渲染界面  vue  react  原生js  jq 
3. 用户交互  点击 触摸 滚动 ...
4. 页面好看点



     