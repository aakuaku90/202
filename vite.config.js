import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export default defineConfig({
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
});