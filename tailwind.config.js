module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        colors: {
          primary: "#FF0000",
          secondary: "#333",
        },
      },
    },
    variants: {},
    plugins: [],
  };