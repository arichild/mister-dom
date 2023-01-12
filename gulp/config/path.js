// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    popup: `${buildFolder}/popup/`,
    css: `${buildFolder}/css/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    lib: `${buildFolder}/js/`,
    img: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    htaccess: `${buildFolder}/`,
  },

  src: {
    html: `${srcFolder}/*.html`,
    popup: `${srcFolder}/popup/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    css: `${srcFolder}/css/lib.min.css`,
    js: `${srcFolder}/js/*.js`,
    lib: `${srcFolder}/js/lib/*.js`,
    img: `${srcFolder}/images/**/*.*`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
    htaccess: `${srcFolder}/.htaccess`,
  },

  watch: {
    html: `${srcFolder}/**/*.html`,
    popup: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    css: `${srcFolder}/css/**/*.scss`,
    js: `${srcFolder}/js/*.js`,
    lib: `${srcFolder}/js/lib/*.js`,
    img: `${srcFolder}/images/**/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
  },

  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}
