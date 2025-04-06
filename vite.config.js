import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isLibBuild = mode === 'library';
  
  return {
    plugins: [vue()],

    build: {
      outDir: isLibBuild ? resolve(__dirname, 'dist/lib') : resolve(__dirname, 'dist/app'),
      emptyOutDir: true,
      
      // Modo Biblioteca
      ...(isLibBuild && {
        lib: {
          entry: resolve(__dirname, 'src/lib-entry.js'),
          name: 'Levidade',
          formats: ['es', 'umd'],
          fileName: (format) => `levidade.${format}.js`
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      }),

      // Modo Aplicação
      ...(!isLibBuild && {
        rollupOptions: {
          input: resolve(__dirname, 'src/main.js'),
          output: {
            entryFileNames: 'levidade.js',
            assetFileNames: 'levidade.[ext]',
            format: 'iife',
            name: 'LevidadeApp',
            globals: {
              vue: 'Vue'
            }
          }
        }
      })
    },
    
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