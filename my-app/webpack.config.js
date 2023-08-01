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
            options: {
                url: true,
            }
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
                    test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: { 
                            injectType: "styleTag" 
                        },
                    },
                    {loader: 'css-loader',
                    options: { url: true } // tell css-loader to not package images referenced in css. perhaps re-activate this for base64 injection
                    },
                ]
                  },
                  {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/inline',
                  },
                
                  {
                    test: /\.scss$/,
                    use: [
                      { loader: "style-loader" },
                      { loader: "css-loader" },
                      { loader: "sass-loader" }
                    ]
                  },
                ]
            },
            devServer: {
              historyApiFallback: true,
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                    publicPath: '/',
                }),
            ]
        }
}