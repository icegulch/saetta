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

  product:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/product' 
      : '',

};