# gulp-babel-simple-transpile #
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