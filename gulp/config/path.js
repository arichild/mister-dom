// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    htaccess: `${buildFolder}/`,
  },

  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/images/**/*.*`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
    htaccess: `${srcFolder}/.htaccess`,
  },

  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/images/**/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
  },

  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}