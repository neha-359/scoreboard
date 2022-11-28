
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const REACTCOUNTDOWN_PATH = path.resolve(
    __dirname,
    "./node_modules/react-countdown-simple/dist/esm/styles.css"
);



module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },
            resolve: {
                alias: {
                  components: path.resolve(__dirname, '/src/components')
                },
                extensions: ['.js', '.jsx'],
              },
              
            module: {
                rules: [
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    // {
                    //     test: /\.css$/,
                    //     include: [REACTCOUNTDOWN_PATH],
                    //     use: ["style-loader","css-loader"],
                    // },
        
                    { 
                        test: /\.css$/,
                        exclude: /node_modules/,
                         use: ["style-loader","css-loader"]
                         
                         

                    },
                    { 
                        test: /\.svg$/,
                        exclude: /node_modules/,
                         use: ["react-svg-loader"]
                     },
                     { 
                        test: /\.css$/,
                        include : [REACTCOUNTDOWN_PATH],
                         use: ["file-loader"]
                     }

                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ]
        }
};

