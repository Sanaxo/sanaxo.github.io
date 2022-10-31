const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mergeJSON = require('handlebars-webpack-plugin/utils/mergeJSON');
const projectData = mergeJSON(path.join(__dirname, 'src/pages/**/*.json'));
console.log('projectData: ', projectData);

module.exports = {
  entry: {
    index: './src/pages/index/index.js',
    sketches: './src/pages/sketches/sketches.js',
    twodimages: './src/pages/twodimages/twodimages.js',
    blender: './src/pages/blender/blender.js',
    javascript: './src/pages/javascript/javascript.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.join(process.cwd(), 'src', 'helpers', '*.helper.js'),
          precompileOptions: {
            knownHelpersOnly: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HandlebarsPlugin({
      htmlWebpackPlugin: {
        enabled: true, // register all partials from html-webpack-plugin, defaults to `false`
        prefix: 'html', // where to look for htmlWebpackPlugin output. default is "html"
        HtmlWebpackPlugin, // optionally: pass in HtmlWebpackPlugin if it cannot be resolved
      },

      entry: path.join(process.cwd(), 'src', 'pages', '*', '*.hbs'),
      output: path.join(process.cwd(), 'dist', '[name].html'),

      data: projectData,

      partials: [
        path.join(
          process.cwd(),
          'html',
          /* <-- this should match htmlWebpackPlugin.prefix */ '*',
          '*.hbs'
        ),
        path.join(process.cwd(), 'src', 'partials', '*', '*.hbs'),
      ],
      // register custom helpers. May be either a function or a glob-pattern
      helpers: {
        nameOfHbsHelper: Function.prototype,
        projectHelpers: path.join(process.cwd(), 'src', 'helpers', '*.helper.js'),
      },
    }),

    /*new HandlebarsPlugin({
      // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
      entry: path.join(process.cwd(), 'src', 'pages', '*', '*.hbs'),
      // output path and filename(s). This should lie within the webpacks output-folder
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), 'dist', '[name].html'),
      // you can also add a [path] variable, which will emit the files with their relative path, like
      // output: path.join(process.cwd(), "build", [path], "[name].html"),

      // data passed to main hbs template: `main-template(data)`
      data: projectData,

      // globbed path to partials, where folder/filename is unique
      partials: [path.join(process.cwd(), 'src', 'partials', '*', '*.hbs')],

      // register custom helpers. May be either a function or a glob-pattern
      helpers: {
        nameOfHbsHelper: Function.prototype,
        projectHelpers: path.join(process.cwd(), 'src', 'helpers', '*.helper.js'),
      },

      // hooks
      // getTargetFilepath: function (filepath, outputTemplate) {},
      // getPartialId: function (filePath) {}
      onBeforeSetup: function (Handlebars) {},
      onBeforeAddPartials: function (Handlebars, partialsMap) {},
      onBeforeCompile: function (Handlebars, templateContent) {},
      onBeforeRender: function (Handlebars, data, filename) {},
      onBeforeSave: function (Handlebars, resultHtml, filename) {},
      onDone: function (Handlebars, filename) {},
    }),*/
  ],
};
