import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {


	return {
		plugins: [react(), tailwindcss()], 
		
		server: {
			watch: {
				usePolling: true,
			},
			host: true,
			strictPort: true,
			port: 5173,
		},
	};
});