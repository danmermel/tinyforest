module.exports = function(eleventyConfig) {
  // copy static assets straight through to final site
  eleventyConfig.addPassthroughCopy('styles')
  eleventyConfig.addPassthroughCopy('assets')
};