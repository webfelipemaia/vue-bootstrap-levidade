<template>
  <leve-wrapper>
    <template #content-top>

      <section id="introduction">
        <h3>Image</h3>
        <p>O componente <strong>LeveImage</strong> é uma solução flexível e reutilizável para trabalhar com imagens,
          utilizando com
          facilidade a estilização e responsividade. Ele suporta as principais opções de utilização que o
          Bootstrap oferece.</p>
      </section>

    </template>
    <template #content-middle>

      <section id="how-to-use">
      
        <br />
        <h4 class="mt-5">Como usar</h4>
      
        <div class="sidebar-separator"></div>
      
        <h5 id="alert-basic">Uso básico</h5>


        <div class="howto-use">
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

          <leve-image :src="image" alt="Descrição" :responsive="true"></leve-image>

        </div>

        <br />        
        <h5 class="mt-5" id="image-thumbnail">Thumbnail</h5>

        <div class="howto-use">
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

          <div class="example-box">
            <leve-image :src="image" alt="Descrição" :thumbnail="true" thumbnailSize="sm"></leve-image>
            <leve-image :src="image" alt="Descrição" :thumbnail="true" thumbnailSize="md"></leve-image>
            <leve-image :src="image" alt="Descrição" :thumbnail="true" thumbnailSize="lg"></leve-image>
            <leve-image :src="image" alt="Descrição" :thumbnail="true" thumbnailSize="xl"></leve-image>
            <leve-image :src="image" alt="Descrição" :thumbnail="true" thumbnailSize="xxl"></leve-image>
          </div>
        </div>

        <br />        
        <h5 class="mt-5" id="image-custom-thumbnail">Tumbnail com tamanho personalizado</h5>


        <div class="howto-use">
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>
          
          <leve-image 
            :src="image" 
            alt="Descrição" 
            :thumbnail="true"
            :thumbnailWidth="150"
            :thumbnailHeight="100">
          </leve-image>
        </div>

        <h5 class="mt-5" id="image-responsive-image">Imagem responsiva</h5>
        <p>Modifique o tamanho da tela para ver o efeito.</p>
        <div class="howto-use">
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

          <leve-image :src="image" alt="Descrição" :responsive="true"></leve-image>

        </div>
        <br />

        <h5 class="mt-5" id="image-position">Posicionamento da imagem</h5>

        <div class="howto-use">
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>
          
          <div class="d-block lock p-2 border" style="height: 110px;">
            <leve-image :src="image" alt="Descrição" alignment="start" :style="{ width: '90px', height: '90px', }"></leve-image>
            <leve-image :src="image" alt="Descrição" alignment="end" :style="{ width: '90px', height: '90px', }"></leve-image>
          </div>
        </div>

        <br />
        <h5 class="mt-5" id="image-stiles">Estilos personalizados</h5>

        <div class="howto-use">
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs><code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

            <div class="example-box text-center">
              <div class="col flex-column d-flex align-items-start">
                <p>Estilo como objeto</p>
                <leve-image :src="image" alt="Descrição" alignment="start" :style="{ width: '200px', height: '150px', borderRadius: '10px' }"></leve-image>
              </div>
              <div class="col flex-column d-flex align-items-start">
                <p>Estilo como string</p>
                <leve-image :src="image" alt="Descrição" alignment="start" style="width: 200px; height: 150px; border-radius: 10px;"></leve-image>
              </div>
            </div>
          </div>

        <br />
        <div class="sidebar-separator"></div>

        <br />
        <h5 class="mt-5" id="image-picture">Picture</h5>

        <div class="howto-use">

          <br />
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs="sourcecode">
          <code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

          <leve-image 
            :src="image" 
            alt="Usando picture" 
            style="width: 200px; height: 150px; border-radius: 10px;"
            picture>
          </leve-image>


        </div>


        <br />
        <div class="sidebar-separator"></div>

        <br />
        <h5 class="mt-5" id="leve-mediaobject">LeveMediaObject</h5>
        
        <div class="howto-use" id="leve-mediaobject-basic">
          <p>O componente <strong>LeveMediaObject</strong> foi criado para exibir um layout de mídia comum, onde uma imagem é alinhada ao 
            lado de um conteúdo textual ou qualquer outro conteúdo personalizado. Como em um post de um blog, por exemplo. Ele utiliza as 
            classes utilitárias do Bootstrap para criar um layout flexível (<code>d-flex</code>) e permite controlar o alinhamento vertical 
            dos itens de forma opcional.</p>
          <br />

          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs="sourcecode">
          <code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>
          
          <div class="d-block lock p-2 border" style="height: 118px;">
            <leve-media-object
              :imageSrc="image"
              imageAlt="Description"
              :alignCenter="true"
              :imageSize="{ width: '100px', height: '100px' }"
            >
              This is some content from a media component. You can replace this with any
              content and adjust it as needed.
            </leve-media-object>
          </div>
        </div>        

      </section>

      <br />

      <section id="leve-mediaobject-description">
        <h4>Descrição</h4>
        <div class="sidebar-separator"></div>
        <h5 class="mt-5">Propriedades (props)</h5>

        <h3>Props</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Tipo</th>
              <th>Valor Padrão</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>src</code></td>
              <td>String</td>
              <td>obrigatório</td>
              <td>Caminho da imagem a ser exibida.</td>
            </tr>
            <tr>
              <td><code>alt</code></td>
              <td>String</td>
              <td>"Image"</td>
              <td>Texto alternativo para a imagem.</td>
            </tr>
            <tr>
              <td><code>responsive</code></td>
              <td>Boolean</td>
              <td>false</td>
              <td>Se <code>true</code>, aplica a classe <code>img-fluid</code> para tornar a imagem responsiva.</td>
            </tr>
            <tr>
              <td><code>thumbnail</code></td>
              <td>Boolean</td>
              <td>false</td>
              <td>Se <code>true</code>, aplica a classe <code>img-thumbnail</code> para exibir a imagem como um
                thumbnail.</td>
            </tr>
            <tr>
              <td><code>align</code></td>
              <td>String</td>
              <td>-</td>
              <td>Alinha a imagem à esquerda (<code>"start"</code>) ou à direita (<code>"end"</code>).</td>
            </tr>
            <tr>
              <td><code>picture</code></td>
              <td>Boolean</td>
              <td>false</td>
              <td>Se <code>true</code>, usa a tag <code>&lt;picture&gt;</code> para múltiplas fontes de imagem.</td>
            </tr>
            <tr>
              <td><code>srcset</code></td>
              <td>String</td>
              <td>""</td>
              <td>Caminho da imagem alternativa para a tag <code>&lt;source&gt;</code> (usado com <code>picture</code>).
              </td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>String</td>
              <td>"image/svg+xml"</td>
              <td>Tipo de imagem para a tag <code>&lt;source&gt;</code> (usado com <code>picture</code>).</td>
            </tr>
          </tbody>
        </table>

        <br />

        <h5 class="mt-5">Métodos e Eventos</h5>
        <br />
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Métodos</strong></td>
              <td>-</td>
              <td>Este componente não possui métodos internos.</td>
            </tr>
            <tr>
              <td><strong>Eventos</strong></td>
              <td>-</td>
              <td>Este componente não emite eventos personalizados.</td>
            </tr>
          </tbody>
        </table>

      </section>

      <br />
        
    <div class="sidebar-separator"></div>

    <section id="how-to-use-2">
        <br />
        <h4 class="mt-5">LeveFigure</h4>
        <br />


        <div class="howto-use">
          <h5 id="leve-figure-basic">Como usar</h5>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-code-slash"></i> code</span></div>

          <pre v-highlightjs="sourcecode">
          <code class="javascript">
          </code></pre>

          <br />
          <div class="howto-use__title"><span><i class="bi bi-eye"></i> preview</span></div>

          <div class="example-box">
            <leve-figure
              :imageSrc="image"
              imageAlt="Placeholder image"
              captionText="left-aligned caption"
              captionPosition="left"
            ></leve-figure>

            <leve-figure
              :imageSrc="image"
              imageAlt="Placeholder image"
              captionText="center-aligned caption"
              captionPosition="center"
              :rounded="false"
            ></leve-figure>

            <leve-figure
              :imageSrc="image"
              imageAlt="Placeholder image"
              captionText="right-aligned caption"
              captionPosition="right"
            ></leve-figure>

          </div>        
        </div>
        <br />        

      </section>

      <br />

      <section id="leve-figuredescription">
        <h4>Descrição</h4>
        <div class="sidebar-separator"></div>
        <h5 class="mt-5">Propriedades (props)</h5>

        <h3>Props</h3>
        <table class="table">

        </table>

        <br />

        <h5 class="mt-5">Métodos e Eventos</h5>
        <br />
        <table class="table">

        </table>
      </section>    

    
    </template>
    <template #content-bottom>
    </template>
    <template #aside-right>
      <leve-fixednav>
        <template #list-links>
          <li class="detail-entry detail-h2">
            <a href="#introduction">Introdução</a>
          </li>
          <li class="detail-entry detail-h2"><a href="#how-to-use">Como usar</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#image-thumbnail">Thumbnail</a></li>
              <li class="detail-entry detail-h2"><a href="#image-custom-thumbnail">Tumbnail com tamanho personalizado</a></li>
              <li class="detail-entry detail-h2"><a href="#image-responsive-image">Imagem responsiva</a></li>
              <li class="detail-entry detail-h2"><a href="#image-position">Posicionamento da imagem</a></li>
              <li class="detail-entry detail-h2"><a href="#image-stiles">Estilos personalizados</a></li>
              <li class="detail-entry detail-h2"><a href="#image-picture">Picture</a></li>
            </ul>
          </li>
          <li class="detail-entry detail-h2"><a href="#leve-mediaobject">LeveMediaObject</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#leve-mediaobject-basic">Uso básico</a></li>
              <li class="detail-entry detail-h2"><a href="#leve-mediaobject-description">Descrição</a></li>
            </ul>
          </li>
          <li class="detail-entry detail-h2"><a href="#leve-figure">LeveFigure</a>
            <ul>
              <li class="detail-entry detail-h2"><a href="#leve-figure-basic">Uso básico</a></li>
              <li class="detail-entry detail-h2"><a href="#leve-figure-description">Descrição</a></li>
            </ul>
          </li>
        </template>
      </leve-fixednav>
    </template>
  </leve-wrapper>
</template>

<script setup>
import LeveWrapper from '@/views/layout/LeveWrapper.vue';
import LeveFixednav from '@/components/LeveFixednav.vue';
import image from "@/assets/img/sample-img.jpg"
</script>
<style scoped>
#how-to-use,
#how-to-use-2,
#how-to-use-3 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.howto-use {
  margin-bottom: 2rem;
}


@media (min-width: 768px) {
  .example-box > .figure {
    width: 320px;    
  }
}
</style>