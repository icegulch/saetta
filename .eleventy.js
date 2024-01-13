const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
require('dotenv').config();
const isProduction = process.env.ELEVENTY_ENV === `production`;

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addLiquidFilter("cloudinaryPrependDir", function (content) {
    if (isProduction) {

      const cloudinaryDirectory = "/products";
      const modifiedContent = content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, function (match, p1, p2, p3) {
        const imageUrl = p2;
        const newUrl = cloudinaryDirectory + imageUrl;
        return `<img${p1}src="${newUrl}"${p3}>`;
      });
      return modifiedContent;
    } else {
      // Return the content unchanged in non-production environments
      return content;
    }
  });

  // Minify HTML Output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( isProduction && outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};