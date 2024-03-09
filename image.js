import sharp from "sharp";
const directory = "./src/assets/images";

sharp(`${directory}/logo1.png`)
  .webp({ lossless: true })
  .toFile(`${directory}/logo.webp`);
