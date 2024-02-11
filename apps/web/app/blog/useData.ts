import blogImage from "@assets/image/logo-dark.png";

export const useData = () => {
  const blogsSample = {
    title: "Where can I watch?",
    description: "Mauris id nibh eu fermentum mattis purus?",
    shortDescription:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.",
    coverImage: blogImage,
    categories: [{ name: "Categories" }, { name: "Categories" }],
  };

  const blogsData = Array(5)
    .fill(5)
    .map((_, index) => blogsSample);

  return {
    blogsData,
  };
};
