const nodePath = require('path');

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

exports.path = {
  build: {
    markup: `${buildFolder}/`,
    styles: `${buildFolder}/assets/styles/`,
    scripts: `${buildFolder}/assets/scripts/`,
    images: `${buildFolder}/assets/img/`,
    sprite: `${buildFolder}/assets/`,
    resources: `${buildFolder}/assets/resources/`,
    fonts: `${buildFolder}/assets/fonts/`,
  },
  src: {
    markup: `${srcFolder}/views/components/**/*.pug`,
    styles: `${srcFolder}/styles/components/**/*.scss`,
    scripts: `${srcFolder}/scripts/components/**/*.js`,
    images: `${srcFolder}/assets/img/**/*.{webp,jpg,jpeg,png,svg,gif}`,
    sprite: `${srcFolder}/assets/icons/**/*.svg`,
    resources: `${srcFolder}/assets/resources/**/*.*`,
  },
  watch: {
    markup: `${srcFolder}/views/**/components/**/*.pug`,
    styles: `${srcFolder}/styles/**/components/**/*.scss`,
    scripts: `${srcFolder}/scripts/components/**/*.js`,
    images: `${srcFolder}/assets/img/**/*.*`,
    sprite: `${srcFolder}/assets/icons/**/*.*`,
    resources: `${srcFolder}/assets/resources/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
};
