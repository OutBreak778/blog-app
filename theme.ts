import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "rgb(255,255,255,255)",
  "--my-black": "rgb(0,0,0,0.1)",
  "--outbreak-brand": "rgb(255,215,0)",
  "--my-red": "rgb(219,68,55)",
  "--my-yellow": "rgb(244,180,0)",
  "--my-green": "rgb(15,157,88)",
};



export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--outbreak-brand"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--outbreak-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--outbreak-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--outbreak-brand"],
});
