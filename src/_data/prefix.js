module.exports = {

  optim:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/optim' 
      : '',

  product:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/product' 
      : '',

};