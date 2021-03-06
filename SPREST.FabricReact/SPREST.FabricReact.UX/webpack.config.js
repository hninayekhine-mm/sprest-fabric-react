﻿var path = require('path');

module.exports = {
    // Target the output of the typescript compiler
    context: path.join(__dirname, "src"),

    // File(s) to target in the 'build' directory
    entry: './index.tsx',

    // Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },

    // Resolve the file extensions
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    // Module to define what libraries with the compiler
    module: {
        // Rules
        rules: [
            {
                // Target the sass files
                test: /\.scss?$/,
                // Define the compiler to use
                use: [
                    // Create style nodes from the CommonJS code
                    { loader: "style-loader" },
                    // Translate css to CommonJS
                    { loader: "css-loader" },
                    // Compile sass to css
                    { loader: "sass-loader" }
                ]
            },
            {
                // Target the .ts and .tsx files
                test: /\.tsx$/,
                // Exclude the node modules folder
                exclude: /node_modules/,
                // Define the compiler to use
                use: {
                    // Use the 'ts-loader' library
                    loader: "ts-loader",
                    // Options
                    options: {
                        // Use the 'babel-preset-es2015' library
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }
};