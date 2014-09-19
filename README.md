# useful.log.js: Improvised Debug Console

Implements a debug console for use in browsers that do not output console.log(), like mobile apps.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-log">demo</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-log.js"></script>
```

## How to control the script

### Update

```javascript
useful.log(message, message, message);
```

**message : {string}** - A debug message that will appear in a floating layer.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
