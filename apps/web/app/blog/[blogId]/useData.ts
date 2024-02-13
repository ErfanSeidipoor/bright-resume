import blogImage from "@assets/image/logo-dark.png";

export const useData = () => {
  const blogDetailSample = {
    title: "Where can I watch?",
    description: "Mauris id nibh eu fermentum mattis purus?",
    content: `<p>Pellentesque habitant morbi tristique senectus 
    et netus et malesuada fames ac turpis egestas. Vestibulum 
    tortor quam, feugiat vitae, ultricies eget, tempor sit amet, 
    ante. <strong>Donec</strong> eu libero sit amet quam egestas semper. Aenean 
    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque 
    sit amet est et sapien ullamcorper pharetra. Vestibulum erat 
    wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. 
    Aenean fermentum, <strong>elit eget tincidunt</strong> condimentum, eros ipsum 
    rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim 
    in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque 
    id cursus faucibus, tortor neque egestas augue, eu vulputate 
    magna eros eu erat. Aliquam erat volutpat. Nam dui mi, 
    tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>`,
    coverImage: blogImage,
    categories: [{ name: "Categories" }, { name: "Categories" }],
  };

  return {
    blogDetailSample,
  };
};
