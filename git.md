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