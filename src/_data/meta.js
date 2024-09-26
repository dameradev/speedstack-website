// Located in _data/meta.js
module.exports = {
  // NOTE: `process.env.URL` is provided by Netlify, and may need
  // adjusted pending your host
  url: process.env.URL || "https://speedstack.dev",
  siteName: "SpeedStack - Custom Web Development and Design",
  siteDescription:
    "Custom coded websites with great peformance and high ranking SEO, serving small businesses in Austria",
  authorName: "",
  twitterUsername: "", // no `@`
  primaryNavigation: [
    {
      route: "/",
      text: "Home",
    },
    {
      route: "/about",
      text: "About",
    },
    {
      route: "/rooms",
      text: "Rooms",
    },
  ],
};
