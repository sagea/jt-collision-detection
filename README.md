# JT Collision Detection
Utility functions for detecting collisions between points, lines, circles, rectangles, and polygones

Code Copied (almost verbatim) from [Jeffrey Thompsons Collision Detection](https://www.jeffreythompson.org/collision-detection/index.php) work.


## Installation
### Node
install using npm
```bash
# npm
npm install jt-collision-detection
# yarn
yarn add jt-collision-detection
#pnpm
yarn add jt-collision-detection
```
use in file
```js
import * as cd from 'jt-collision-detection'
cd.polyCircle(...)
```

### Browser ESM
Use unpkg.com to import
```js
import * as cd from 'https://unpkg.com/jt-collision-detection'
cd.polyCircle(...)
```

### Browser Global
TBD

### Deno
use unpkg.com to import
```typescript
import * as cd from 'https://unpkg.com/jt-collision-detection'
cd.polyCircle(...)
```

## Documentation
TBD

## Project Goals
1. Should be able to run in every possible context (Currently Tracked):
 - node cjs
 - node esm
 - deno
 - browser window
 - browser esm
 - web workers global
 - web workers esm
 - iife
2. Browsers should be able to import iife, or esm using https://unpkg.com/ cdn
3. Types should be well defined
4. Source maps should be well defined and high quality
5. Must be able to leverage tree shaking
6. Lightweight NO DEPENDENCIES
