import { fileURLToPath } from "url";
import { dirname } from "path";

export const __dirname = meta => {
  if (meta) {
    return dirname(fileURLToPath(meta.url));
  }
};

export default __dirname;
