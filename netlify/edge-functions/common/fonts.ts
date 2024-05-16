// Define font attributes
const FONTS = [
  {
    name: "Inter",
    weight: 400,
    style: "normal",
    filePath: "Inter-Regular.ttf",
  },
  {
    name: "Inter",
    weight: 700,
    style: "bold",
    filePath: "Inter-Bold.ttf",
  },
  {
    name: "Inter",
    weight: 900,
    style: "black",
    filePath: "Inter-Black.ttf",
  },
  {
    name: "FiraCode",
    weight: 400,
    style: "normal",
    filePath: "FiraCode-Regular.ttf",
  },
  {
    name: "FiraCode",
    weight: 700,
    style: "bold",
    filePath: "FiraCode-Bold.ttf",
  },
];

// Function to load font data
async function loadFonts() {
  return await Promise.all(
    FONTS.map(async (font) => {
      const { name, weight, style, filePath } = font;
      const url = `https://share.unison-lang.org/static/${filePath}`;
      const fontFileResponse = await fetch(url);
      const data = await fontFileResponse.arrayBuffer();
      return { name, weight, style, data };
    })
  );
}

export default loadFonts;
