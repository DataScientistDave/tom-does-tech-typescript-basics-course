## Notes from tutorial

To use typescript in a project need to first add it as a development dependency.

``` yarn add typescript -D ```

Next thing is to add a tsconfig file. Editor will read the tsconfig file and compile code.
``` outDir -> specifies where the typescript file will be compiled to ```

``` lib -> tells typescript to include APIs from this specific version. TypeScript includes a default set of type definitions for built-in JS APIs (like Math), as well as type definitions for things found in browser environments (like document). TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for Map is available if target is ES6 or newer ```

``` esModuleInterop -> With esModuleInterop set to false, TypeScript treats CommonJS/AMD/UMD modules similar to ES6 modules. In doing this, there are two parts in particular which turned out to be flawed. A namespace import like import * as moment from "moment" acts the same as const moment = require("moment"). A default import like import moment from "moment" acts the same as const moment = require("moment").default. Setting it to true fixes this ```

To compile we use tsc and to run we use ts-node. Look at package.json scripts




