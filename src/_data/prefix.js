module.exports = {

  optim:
    process.env.ELEVENTY_ENV === 'production' 
      ? '/optim' 
      : '',

};