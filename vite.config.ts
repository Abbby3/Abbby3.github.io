import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Abbby3-page",
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
});