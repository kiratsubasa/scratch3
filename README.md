# my-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Data Type
#### App.vue
```
{
    footList: [
        {title: '',link:''}
    ],
    menuList: [
        {title: '',link: ''}
    ],
    footMenuList: [
        {title: '',link: ''}
    ],
    iconSrc: ""
}
```
#### newsPage
```
{
    pageTitle: "最新消息",
            type: ["最新消息"],
            typeList: ['最新消息','跨域薈萃',' 視覺藝術'],
            searchPlaceholder: "關鍵字",
            articleList: [{
                src:"",
                type: ['',''],
                title: '', 
                link: '',
                content: {
                    video:[""],
                    hashTag: ['',''],
                    downloadFile: '',
                    downloadText: '',
                    src:["'],
                    articleContent: '' 
                }
            }]
}
```
#### 