# log.js: Improvised Debug Console

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Implements a debug console for use in browsers for which console messages may be inaccessible, like mobile apps and kiosk software.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/log.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/log.js'
], function(log) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {log} from "js/log.js');
```

## How to control the script

### Update

```javascript
useful.log(message, message, message);
```

**message : {string}** - A debug message that will appear in a floating layer.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
