# gulp-babel-simple-transpile #

### Installation
`npm install --save-dev gulp-babel-simple-transpile`

### Usage
```javascript
.pipe(babel({
    sourceMaps: true,
    presets: [
        ['es2015', { modules: false }],
        'es2016',
    ],
}))
```

### Allowed presets
* `es2015`
* `es2016`

These can be installed with `npm install --save-dev babel-preset-es2015 babel-preset-es2016`.
