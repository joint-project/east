# east

##  关于拉取项目

大家都直接拉这个项目的dev分支，fork的话你们后续做完自己拉

仅一次：走SSH协议克隆

步骤1：每天【早上】或【完成一个任务后】去项目需求管理系统查看新任务 步骤2：切换到本地dev分支拉去最新代码git pull 步骤3：根据需求或需求编号创建分支 步骤4：开发 步骤5：push -> pull request -> wait review(这一步很多公司没用) & merge dev  

## 1px边框解决
@import 'Assets/style/border.scss';

@include border-1px(top,#ccc);

**！！！不能动master分支 用dev分支**

将项目Fork到你的GitHub库中

![img](https://upload-images.jianshu.io/upload_images/10915849-335d85446a9dd533.png?imageMogr2/auto-orient/strip|imageView2/2/w/756/format/webp)

Fork后切换到你的库中,即可看见团队项目的Fork

![img](https://upload-images.jianshu.io/upload_images/10915849-2f21233857619029.png?imageMogr2/auto-orient/strip|imageView2/2/w/300/format/webp)

克隆下来后

- 查看本地分支:`git branch` 
- 查看所有分支(包括远端): `git branch -a` 
- 在本地建立dev分支并将远端dev分支内容放入该分支:`git checkout -b dev origin/dev`会自动进入dev分支,请在dev分支进行后面的操作(`git checkout dev`切换到dev)
- 每个人的分支都是自己的名字（可取名）

#### 三. 设置upstream

- `git remote add upstream '团队项目地址'` 建立连接
- `git fetch upstream`  获取项目的最新版本
- `git merge upstream/dev` 将源分支合并到当前分支

#### 四. Push代码与merge request

有困惑可以参考[Git(一)](https://www.jianshu.com/p/d26963f295b0)/[Git(二)](https://www.jianshu.com/p/e14854fcaac1)
 `git add .`
 `git commit -m '更新了XX'`
 `git push`
 然后再你库中Fork的项目中点击如下图箭头操作,你会看见你的代码与项目代码的不同之处,认真检查后即可提交给项目负责人

![img](https://upload-images.jianshu.io/upload_images/10915849-dc85c952c312b4c3.png?imageMogr2/auto-orient/strip|imageView2/2/w/948/format/webp)

![img](https://upload-images.jianshu.io/upload_images/10915849-0e00591d52d74627.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

## Project setup
```
yarn add
```

### Compiles and hot-reloads for development
```
npm run serve / yarn serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

