# esm-dirname

This is a quick cludge almost entirely copied from [here](https://nodejs.org/api/esm.html#esm_no_code_require_code_code_exports_code_code_module_exports_code_code_filename_code_code_dirname_code)
intended to help facilitate migration from CJS to ESM.

## Usage:

```js
import { dirname } from "esm-dirname";
const __dirname = dirname(import.meta);
```
