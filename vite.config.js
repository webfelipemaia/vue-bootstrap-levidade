import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isLibBuild = mode === 'library';
  
  return {
    plugins: [vue()],

    build: {
      outDir: isLibBuild ? resolve(__dirname, 'dist/lib') : resolve(__dirname, 'dist/app'),
      emptyOutDir: isLibBuild, // Só limpa no modo lib para evitar apagar builds alternativos
      cssCodeSplit: true, // Habilita geração de CSS em ambos os modos
      
      // Configurações comuns
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) return 'levidade.css';
            return 'assets/[name]-[hash][extname]';
          },
          ...(isLibBuild ? {
            globals: { vue: 'Vue' }
          } : {
            entryFileNames: 'levidade.js',
            format: 'iife',
            name: 'LevidadeApp'
          })
        }
      },

      // Configurações específicas da biblioteca
      ...(isLibBuild && {
        lib: {
          entry: resolve(__dirname, 'src/lib-entry.js'),
          name: 'Levidade',
          formats: ['es', 'umd'],
          fileName: (format) => `levidade.${format}.js`
        },
        rollupOptions: {
          external: ['vue']
        }
      }),

      // Configurações específicas da aplicação
      ...(!isLibBuild && {
        rollupOptions: {
          input: resolve(__dirname, 'src/main.js')
        }
      })
    },
    
    // Restante da configuração...
    define: {
      'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : 'development'),
      __APP_MODE__: JSON.stringify(isLibBuild ? 'library' : 'application')
    },

    server: {
      port: 5173,
    },
    
    base: mode === 'production' ? '/vue-bootstrap-levidade/' : '/',
    
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/custom/_variables.scss";',
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
    
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    }
  };
});