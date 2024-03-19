module.exports = {

  favicon:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/favicon' 
      : '',

  opengraph:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/opengraph' 
      : '',

  optim:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/optim' 
      : '',

  product:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/product' 
      : '',

};