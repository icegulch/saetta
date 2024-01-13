const getBuildInfo = () => {
  const now = new Date();
  const timeZone = 'UTC';
  const buildTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone,
  }).format(now);
  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime} ${timeZone}`,
    }
  };
};

module.exports = {
  title: "Saetta Labs",
  description: "Sapphire-loaded Cavity Oscillators",
  env: process.env.ELEVENTY_ENV,
  domain: process.env.ELEVENTY_ENV === "production" ? "https://saettalabs.com" : "http://localhost:8080",
  og_img: "",
  last_updated: getBuildInfo().time.formatted,
  copyright: getBuildInfo().time.raw.slice(0,4),
};