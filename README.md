# gulp-babel-simple-transpile #
### Use it like this
```javascript
.pipe(babel({
	sourceMaps: true,
	presets: [
		['es2015', { modules: false }],
		'es2016',
	],
}))
```