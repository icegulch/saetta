module.exports = {

  favicon:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/favicon' 
      : '',

  opengraph:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/opengraph' 
      : '',

  hero:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/hero' 
      : '',

  products:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/products' 
      : '',

  postcover:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/postcover' 
      : '',

};