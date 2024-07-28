const resolve_image = (path) => {
  let images = require.context("../assets/", false, /\.jpg$|\.png$|\.jpeg$/);
  try {
    return images("./" + path);
  } catch {
    return images("./" + "placeholder.png");
  }
};
export default resolve_image;
