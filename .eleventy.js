const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
require('dotenv').config();
const isProduction = process.env.ELEVENTY_ENV === `production`;

module.exports = function (eleventyConfig) {

  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });

  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/pdfs");

  eleventyConfig.addLiquidFilter("cloudinaryPrependDir", function (content) {
    if (isProduction) {

      const cloudinaryDirectory = "/optim";
      const modifiedContent = content.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, function (match, p1, p2, p3) {
        const imageUrl = p2;
        const newUrl = cloudinaryDirectory + imageUrl;
        return `<img alt=""${p1}src="${newUrl}"${p3} loading="lazy">`;
      });
      return modifiedContent;
    } else {
      // Return the content unchanged in non-production environments
      return content;
    }
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // configure markdown-it (and set it as your markdown processor for consistency)
  const md = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("markdownify", (str) => md.render(str));


  // Minify HTML Output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (isProduction && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
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