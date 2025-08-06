// vue.config.js
module.exports = {
  // Configure Vue to use the runtime-only build
  // This helps avoid CSP issues related to template compilation at runtime.
  runtimeCompiler: true, // This line is for Vue 2. If it's Vue 3, this isn't usually needed
  // unless you're explicitly using compiler-runtime, which is less common.

  // For Vue 3, typically the setup does this by default if you're using SFCs (Single File Components).
  // The issue might stem from the PWA plugin's interaction or an explicit CSP header from CodeSandbox.

  // Let's add this config anyway, sometimes it helps
  chainWebpack: (config) => {
    config.resolve.alias.set("vue$", "vue/dist/vue.esm-bundler.js");
  },
};
