export const onInitialClientRender = () => {
  try {
    setTimeout(() => {
      const loader = document.getElementById("___loader");
      const gatsbyRoot = document.getElementById("___gatsby");

      if (loader) {
        loader.style.display = "none"; // Ensure loader is hidden
      } else {
        console.warn("Loader not found");
      }

      if (gatsbyRoot) {
        gatsbyRoot.style.display = "block"; // Ensure main content is visible
      } else {
      }
    }, 1000); // Adjust timing if necessary
  } catch (error) {
    console.error("Error in onInitialClientRender:", error);
  }
};
