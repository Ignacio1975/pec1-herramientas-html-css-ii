export default {
  extends: ["stylelint-config-standard-scss"],

  plugins: ["stylelint-selector-bem-pattern"],

  rules: {
    "selector-class-pattern": null,

    "plugin/selector-bem-pattern": {
      preset: "bem",
      componentName: "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$",
      componentSelectors: {
        initial: "^\\.{componentName}(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
        combined: "^\\.({componentName})(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
      },
    },
  },
};
