import formidable from "formidable";
import type { H3Event } from "h3";
import path from "path";
import fs from "node:fs";

export const readFiles = (
  event: H3Event,
): Promise<{
  files: formidable.Files;
  fields: formidable.Fields;
}> => {
  return new Promise((resolve, reject) => {
    const formData = formidable({
      keepExtensions: true,
    });
    formData.parse(
      event.node.req,
      (error, fields, files) => {
        if (error) {
          reject(error);
          return;
        }
        resolve({ files, fields });
      },
    );
  });
};

export const writeFile = async (
  file: formidable.File,
  filename: string,
  kind: string,
) => {
  const extname = path.extname(file.newFilename);
  const filepath = path.join(
    process.cwd(),
    "src",
    "public",
    `${kind}`,
    `${filename + extname}`,
  );
  const reader = fs.createReadStream(file.filepath);
  const writer = fs.createWriteStream(filepath);
  await reader.pipe(writer);
  return {};
};
