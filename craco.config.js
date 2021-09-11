const CracoAntDesignMobilePlugin = require("@w3ctech-editorial-department/craco-antd-mobile");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignMobilePlugin,
      options: {
        customizeTheme: {
          "@brand-primary": "#00eaa9",
        },
      },
    },
  ],
};