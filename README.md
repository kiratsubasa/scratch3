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
#### mainPage
{
    footList: [
        {title: '',link:''}
    ],
    menuList: [
        {title: '',link: ''}
    ],
    footMenuList: [
        {title: '',link: ''}
    ]
}
#### newsPage
{
    pageTitle: "",
    searchPlaceholder: "",
    articleList: [
        {
            title: '', 
            link: '',
            src:'',
            type: '',
            content: {
                video:[""],
                link:[''],
                src:[''],
                text: [""]
            }
        }
    ]
}
#### 