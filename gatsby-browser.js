export const onInitialClientRender = () => {
  try {
    console.log("onInitialClientRender triggered");
    setTimeout(() => {
      const loader = document.getElementById("___loader");
      const gatsbyRoot = document.getElementById("___gatsby");

      if (loader) {
        console.log("Hiding loader");
        loader.style.display = "none"; // Ensure loader is hidden
      } else {
        console.warn("Loader not found");
      }

      if (gatsbyRoot) {
        console.log("Showing main content");
        gatsbyRoot.style.display = "block"; // Ensure main content is visible
      } else {
        console.warn("Gatsby root not found");
      }
    }, 1000); // Adjust timing if necessary
  } catch (error) {
    console.error("Error in onInitialClientRender:", error);
  }
};
