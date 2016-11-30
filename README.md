在已有的Git库中搭建新库，并且将本地的git仓库，上传到远程服务器的git库中，从而开始一个新的项目

首先，在本地新建文件夹abc，进入到abc里面，然后git init。这样就在本地初始化了一个git项目abc。
然后，登录到远程的git服务器上，到gitrepo目录下面，mkdir abc.git。然后进入abc.git目录。git  --bare init。这样就在服务器端建立了一个空的git项目。
之后，在本地，进入到abc目录里面，增加远程仓库。git remote -v 显示项目目前的远程仓库，因为是新建项目，所以结果为空。git remote add origin https://github.com/purple-net/react-native-purple.git这样就增加了远程仓库
最后，commit提交本地代码，git push origin master这样就把本地的git库上传到了远程git服务器的git库中了

也可以不登陆远程直接本地操作
1. git init
2. git add .
3. git commit -am "描述"      -------以上3步只是本地提交
4.git remote add origin https://github.com/purple-net/react-native-purple.git
5.git push origin master ------git push origin 本地分支:远程分支

#如何解决failed to push some refs to git

>在使用git 对源代码进行push到gitHub时可能会出错，信息如下
　　此时很多人会尝试下面的命令把当前分支代码上传到master分支上。
　　$ git push -u origin master
　　但依然没能解决问题
　　出现错误的主要原因是github中的README.md文件不在本地代码目录中
　　可以通过如下命令进行代码合并【注：pull=fetch+merge]
　　git pull --rebase origin master
　　执行上面代码后可以看到本地代码库中多了README.md文件

#
