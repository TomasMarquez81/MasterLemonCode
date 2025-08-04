const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { type } = require("os");

module.exports = {
    context: path.resolve(__dirname, "./src"),
    //entry: ["./src/students.js", "./src/style.css"],
    entry: {
        //app: "./src/students.js",
        app: "./index.ts",
        appReact: "./index.tsx",
        appReactStyle: "./averageComponentStyles.module.scss",
        // appStyles: "/src/style.css",
        //vendroStyles: ["./node_modules/bootstrap/dist/css/bootstrap.css"],
        vendroStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.module\.scss$/,
                exclude: /node_modules/,
                //use: ["style-loader", "css-loader", "sass-loader"],
                use: [
                    MiniCssExtractPlugin.loader,
                    //"css-loader", "sass-loader"
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.scss$/,
                exclude: [/\.module\.scss$/, /node_modules/],
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                //use: ["style-loader", "css-loader"],
                //use: [MiniCssExtractPlugin.loader, "css-loader"],
                use: ["style-loader", "css-loader"],
            },
            {
                test: /.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /.html$/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            //template: "./src/index.html",
            template: "./index.html",
            scriptLoading: "blocking",
            //hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        //static: path.join(__dirname, "./src"),
        port: 8080,
        open: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "src"),
        },
        devMiddleware: {
            stats: "errors-only",
        },
    },
};
