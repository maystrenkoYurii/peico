import modules from 'postcss-icss-selectors';
import cssImport from 'postcss-import';
import nested from 'postcss-nested';
import calc from 'postcss-calc';
import url from 'postcss-url';
import properties from 'postcss-custom-properties';
import customMedia from 'postcss-custom-media';
import mediaMinMax from 'postcss-media-minmax';
import mediaQPacker from 'css-mqpacker';
import flexBugsFix from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import reporter from 'postcss-reporter';

export const postCssLoader = () => {
  return {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => {
        return [
          modules({
            mode: 'global',
          }),
          cssImport(),
          nested(),
          calc({ mediaQueries: true, selectors: true }),
          url(),
          properties(),
          customMedia(),
          mediaMinMax(),
          mediaQPacker(),
          flexBugsFix(),
          autoprefixer({
            browsers: 'last 3 versions',
          }),
          cssnano(),
          reporter(),
        ];
      },
    },
  };
};
