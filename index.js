import { fileURLToPath } from "url";
import { dirname as pathDirname } from "path";

export const dirname = meta => {
  if (meta) {
    return pathDirname(fileURLToPath(meta.url));
  }
};

export default dirname;
