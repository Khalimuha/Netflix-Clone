// import react from "@vitejs/plugin-react";

// vite.config.js
// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "Netflix-Clone/"
// });

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Netflix-Clone/", // 🚨 Missing slash at the beginning
  plugins: [react()] // ✅ React plugin is required for React to work properly
});
