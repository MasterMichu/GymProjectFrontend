const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$|jsx/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
            
    
    ]
    }
    
    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
              },
              module: {
                rules: [
                  {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                  },
                  {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                  },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ]
        }
}