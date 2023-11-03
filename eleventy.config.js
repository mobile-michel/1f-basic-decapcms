module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/assets");
    return {
        dir: {
            input: "src", // Set the source for 11ty
            output: "_site", // This is the default
            includes: "_components", // All UI partials
            layouts: "_layouts" // Base page layouts
        }
    }
}
