
# angular2配合webpack开发应用程序
## npm安装package.json
1. npm 安装好angular2应用需要依赖的库以及开发需要依赖的库 

```
{
  "name": "angular2_start",
  "version": "0.1.0",
  "scripts": {
    "build": "webpack --progress",
    "postinstall": "typings install"
  },
  "dependencies": {
    //应用程序依赖的库
    "@angular/common": "2.0.0-rc.5",
    "@angular/compiler": "2.0.0-rc.5",
    "@angular/core": "2.0.0-rc.5",
    "@angular/forms": "0.3.0",
    "@angular/http": "2.0.0-rc.5",
    "@angular/platform-browser": "2.0.0-rc.5",
    "@angular/platform-browser-dynamic": "2.0.0-rc.5",
    "@angular/router": "3.0.0-rc.1",
    "@angular/router-deprecated": "2.0.0-rc.2",
    "@angular/upgrade": "2.0.0-rc.5",
    "systemjs": "0.19.27",
    "core-js": "^2.4.0",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.6",
    "zone.js": "^0.6.12",
    "angular2-in-memory-web-api": "0.0.15",
    "bootstrap": "^3.3.6"
  },
  "devDependencies": {
    //webpacke打包需要用到的库
    "webpack": "1.13.1",
    "webpack-dev-server": "^1.14.1"
    "angular2-template-loader": "^0.4.0",//webpack解析angular2文件
    "copy-webpack-plugin": "^3.0.1",
    "css-loader": "^0.23.1",
    "style-loader": "^0.13.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "html-loader": "^0.4.3",
    "html-webpack-plugin": "^2.21.0",
    "raw-loader": "^0.5.1",
    "jasmine-core": "^2.4.1",
    //编译文件用到的库
    "typescript": "^1.8.10",
    "typings": "^1.0.4",
  }
}
```

```
$(npm bin)/typings 安装编译依赖的*.d.ts文件
```
---
## mac 安装git 配置vscode 结合github
```python
brew install git
```

```
git init
git remote add origin 
git push -u origin master
```
---
<script type="text/javascript"
   src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
> markdwon显示数学公式 添加
```html
<script type="text/javascript"
   src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
```
$$E=m^2$$