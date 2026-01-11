import Image from "@11ty/eleventy-img";
export default function (config) {
  // Pass-through images
  config.addPassthroughCopy("./src/images");

  // Add pages collection
  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  config.addShortcode("image", async (src) => {
    return Image(src, {
      widths: [300, 600, 1200],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/img/"
    });
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public"
    },
  };
};
