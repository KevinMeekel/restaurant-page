// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Your JS entry file
    output: {
      filename: 'main.js', // The output JavaScript bundle
      path: path.resolve(__dirname, 'dist'), // The output directory
      clean: true, // Clean the output directory before every build
    },
    mode: 'development', // Set to 'development' or 'production'
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html', // Use your template.html file
        filename: 'index.html', // Name of the generated HTML file
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'), // Serve files from the dist directory
      port: 8080, // Set the port
      open: true, // Automatically open the browser when starting the server
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },      
        ],
      },
  };
