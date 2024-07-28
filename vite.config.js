import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   base:
//     process.env.NODE_ENV === "production"
//       ? "/Alisher_Final_Project_React/"
//       : "/",
//   plugins: [react()],
// });

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
  };

  if (command !== "serve") {
    config.base = "/Alisher_Final_Project_React/";
  }

  return config;
});
