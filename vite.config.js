  import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  // Define o diretório raiz como `src`
  root: resolve(__dirname, 'public'),
  
  // Configurações de build
  build: {
    outDir: resolve(__dirname, 'dist'), // Define a pasta de saída como `dist`
    emptyOutDir: true, // Limpa a saída antes de cada build
    rollupOptions: {
      output: {
        entryFileNames: 'levidade.[name].js', // Nome do arquivo principal
        chunkFileNames: 'levidade.[name].js', // Nome dos chunks
        assetFileNames: 'levidade.[name].[ext]', // Nome dos assets
        format: 'umd', // Gera a saída no formato UMD
        name: 'Levidade', // Nome da biblioteca exportada
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/main.js'), // Entrada principal
      name: 'Levidade', // Nome da biblioteca
      fileName: (format) => `levidade.${format}.js`, // Nome do arquivo
    },
  },
  
  // Configurações do servidor de desenvolvimento
  server: {
    port: 8086, // Porta do servidor
  },
  
  // Define o caminho público com base no ambiente
  base: mode === 'production' ? '/vue-bootstrap-levidade/' : '/',
  
  // Configurações de CSS
  css: {
    preprocessorOptions: {
      scss: {
        // Habilita variáveis globais no SCSS (se necessário)
        additionalData: '@import "./src/styles/_variables.scss";',
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
      },
    },
  },
  
  // Configura alias para os caminhos
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Alias para a pasta src
    },
  },
}));
