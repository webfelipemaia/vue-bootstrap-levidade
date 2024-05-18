<template>
  <!-- <LeveImage :alt="'Vue logo'" :path="image" /> -->
  <div class="container">
    <section>    
      <div class="row">
        <h3>Badges</h3>
          <!-- todo: 
                  1. add block buttons; 
                  2. add toggle states
                -->
        <p>Badges are components intended for counting and labeling.</p>
        <div class="d-flex my-3 p-2">
          <div class="examples d-flex justify-content-around">      
            <button type="button" class="btn btn-primary"> Notifications <LeveBadge :constrast="true" :type="'warning'">2</LeveBadge></button>
            <LeveButton type="secondary" :class="'position-relative'">Messages <LeveBadge :position="'top'">99+</LeveBadge></LeveButton>        
            <LeveButton type="secondary" class="ms-3" :class="'position-relative'">Messages 
              <LeveBadge :position="'bottom'"  :type="'danger'" badge-hidden-text="'unread messages'">2</LeveBadge>
            </LeveButton>
            <LeveButton type="secondary" class="ms-3" :class="'position-relative'">Messages 
              <LeveBadge is-notification :type="'danger'" badge-hidden-text="'unread messages'"></LeveBadge>
            </LeveButton>
          </div>
        </div>
        <div class="code">
          <pre v-highlightjs><code class="javascript">{{ badgeCode }}</code></pre>
        </div>
      </div>

    <div class="row">
      <h3>Buttons</h3>
      <!-- todo: 
                  1. add block buttons; 
                  2. add toggle states
                -->
      <p>Custom buttons are used for actions on forms, dialog boxes, etc. They can have various sizes, states and other features.</p>
      <div class="d-flex my-3 p-2">
        <div class="examples d-flex justify-content-around">
          <LeveButton type="primary">Primary</LeveButton>
          <LeveButton type="secondary">Secondary</LeveButton>
          <LeveButton type="success">Success</LeveButton>
          <LeveButton type="danger">Danger</LeveButton>
          <LeveButton type="warning">Warning</LeveButton>
          <LeveButton type="info">Info</LeveButton>
          <LeveButton type="light">Light</LeveButton>
          <LeveButton type="dark">Dark</LeveButton>
        </div>
      </div>
      <div class="code">
        <pre v-highlightjs><code class="javascript">{{  buttonCode }}</code></pre>
      </div>
      
      <p>Outline</p>
      <div class="d-flex justify-content-evenly p-2">
        <LeveButton :outline="'primary'">Button</LeveButton>
        <LeveButton :outline="'secondary'">Button</LeveButton>
        <LeveButton :outline="'success'">Button</LeveButton>
        <LeveButton :outline="'danger'">Button</LeveButton>
        <LeveButton :outline="'warning'">Button</LeveButton>
        <LeveButton :outline="'info'">Button</LeveButton>
        <LeveButton :outline="'light'">Button</LeveButton>
        <LeveButton :outline="'dark'">Button</LeveButton>
      </div>
      <div class="code">
        <pre v-highlightjs><code class="javascript">{{  outlineButtonCode }}</code></pre>
      </div>
      
      <p>Outline</p>
      <div class="d-flex justify-content-evenly p-2">
        <LeveButton type="primary" :size="'sm'">Small button</LeveButton>
        <LeveButton type="primary" :size="'md'">Medium button</LeveButton>
        <LeveButton type="primary" :size="'lg'">Large button</LeveButton>
      </div>      
      <div class="code">
        <pre v-highlightjs><code class="javascript">{{  sizeButtonCode }}</code></pre>
      </div>

      <p>Disabled state and loading</p>
      <div class="d-flex justify-content-evenly p-2">
        <LeveButton :outline="'primary'" disabled>Button</LeveButton>
        <LeveButton type="primary"  disabled>Button</LeveButton>
        <LeveButton :outline="'secondary'" loading>Button</LeveButton>
        <LeveButton type="secondary"  loading>Button</LeveButton>
      </div>
      <div class="code">
        <pre v-highlightjs><code class="javascript">{{  disabledAndLoadingButtonCode }}</code></pre>
      </div>
      
      <p>Custom style</p>
      <div class="d-flex justify-content-evenly p-2">
        <LeveButton :outline="'primary'" :style="'--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'">Button</LeveButton>
        <LeveButton type="primary" :style="'background-color:grey;border-color:black;color:black;'">Large button</LeveButton>
        <LeveButton type="primary" :size="'sm'" :style="'background-color:transparent;color:blue;'">Small button</LeveButton>        
      </div>
      <div class="code">
        <pre v-highlightjs><code class="javascript">{{  sizeButtonCode }}</code></pre>
      </div>
      
    </div>
  </section>
    <LeveDropdown :title="'teste'">
      
      <div>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </LeveDropdown>
    <LeveDropdown title="dropdown-menu-lg-end" btn-class="btn-info" dropdown-class="dropdown-menu-end dropdown-menu-lg-start">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </LeveDropdown>
    <!-- <LeveImage :type="'fluid'" :path="image" :alt="'Image example'" />
    <LeveCard :helperStyle="'width: 18rem;color:red;'">
      <LeveCardBody>
          <LeveCardContent type="title" tag="h5">Card Title</LeveCardContent>
          <LeveCardContent type="text" tag="span">Some quick example text to build on the card title and make up the bulk of the card's content.</LeveCardContent>
          <a href="http://google.com" class="btn btn-primary">Go somewhere</a>
        </LeveCardBody>
    </LeveCard>
    <LeveCard>
        <LeveCardHeader>Featured</LeveCardHeader>
        <LeveCardBody>
          <LeveCardContent type="title" tag="h5">Card Title</LeveCardContent>
          <LeveCardContent type="subtitle" tag="h6">Card Subtitle is here</LeveCardContent>
          <LeveCardContent type="text" tag="span">Some quick example text to build on the card title and make up the bulk of the card's content.</LeveCardContent>
        </LeveCardBody>
        <LeveCardFooter type="cardActions">
          <LeveCardFooterItem :link="'http://google.com'">Save</LeveCardFooterItem>
          <LeveCardFooterItem :link="'http://google.com'">Edit</LeveCardFooterItem>
          <LeveCardFooterItem :link="'http://google.com'">Delete</LeveCardFooterItem>
        </LeveCardFooter>
    </LeveCard> -->
    <!-- <LeveBreadcrumb divider='&spades;'>
      <LeveBreadcrumbItem :link="'http://google.com'">Home</LeveBreadcrumbItem>
      <LeveBreadcrumbItem :link="'http://google.com'">Library</LeveBreadcrumbItem>
      <LeveBreadcrumbItem icon="cart" is-active current>Cart</LeveBreadcrumbItem>
    </LeveBreadcrumb>
    <LeveAccordion multiple accordion-flush></LeveAccordion> -->
  </div>
  <div class="d-flex flex-column mb-3">
    <h4>Accordion</h4>
    <p>Default</p>

    
    <br>
    <h4>Badge</h4>
    <p>Headings</p>
    <!-- <h1>Example heading h1 <LeveBadge>New</LeveBadge></h1>
    <h4>Example heading h4 <LeveBadge>New</LeveBadge></h4>
    <h6>Example heading h6 <LeveBadge>New</LeveBadge></h6> -->
    
    <!-- <p>Backgrounds</p>
        
    <div class="d-inline-flex p-2">
      <LeveBadge :constrast="true" :type="'primary'">primary</LeveBadge>
      <LeveBadge :constrast="true" :type="'secondary'">secondary</LeveBadge>
      <LeveBadge :constrast="true" :type="'success'">success</LeveBadge>
      <LeveBadge :constrast="true" :type="'danger'">danger</LeveBadge>
      <LeveBadge :constrast="true" :type="'warning'">warning</LeveBadge>
      <LeveBadge :constrast="true" :type="'info'">info</LeveBadge>
      <LeveBadge :constrast="true" :type="'light'">light</LeveBadge>
      <LeveBadge :constrast="true" :type="'dark'">dark</LeveBadge>
    </div> -->


    <!-- <button type="button" class="btn btn-primary" id="liveToastBtn" @click.prevent="addNotice">Show live toast</button>
    <br />
    <LeveAlert is-dismissible :timeout="20000" icon="heart"></LeveAlert>
    <LeveToast :type="primary" :position="['middle','left']">Teste</LeveToast>
    <LeveTooltip placement="bottom" text="This is the Popper content 🍿" hover=false><a href="!#">Ok Trigger element</a></LeveTooltip>
    <br> -->

    <!-- <LeveButton tag="button" outline="primary" type="lg" disabled>Shadow</LeveButton>
    <LeveButton type="primary" icon="app">Carregando</LeveButton>
    <br />
    <LeveButtonGroup type="vertical" role="group">
      <LeveButton type="primary" icon="cart">Left</LeveButton>
      <LeveButton type="secondary" icon="cart">Middle</LeveButton>
      <LeveButton type="success" icon="cart">Right</LeveButton>
    </LeveButtonGroup>
    <br/>    
    <LeveButton type="close"></LeveButton>
    <LeveButton type="primary" class="hvr-float-shadow">Float Shadow</LeveButton>
    <LeveButton type="primary" class="hvr-grow-shadow">Grow Shadow</LeveButton>
    <LeveButton type="button" class="btn btn-success">Success</LeveButton>
    <LeveButton type="button" class="btn btn-danger">Danger</LeveButton>
    <LeveButton type="button" class="btn btn-warning">Warning</LeveButton>
    <LeveButton type="button" class="btn btn-info">Info</LeveButton>
    <LeveButton type="button" class="btn btn-light">Light</LeveButton>
    <LeveButton type="button" class="btn btn-dark">Dark</LeveButton>
    <LeveButton type="button" class="btn btn-link">Link</LeveButton> -->
  </div>

</template>

<script>
//import LeveBadge from './components/LeveBadge.vue';
import image from "./assets/img/ian-schneider-TamMbr4okv4-unsplash.jpg"
import LeveDropdown from "./components/LeveDropdown.vue";
// import LeveImage from "./components/LeveImage.vue";

export default {
    name: 'App',
    //   components: {
    //     LeveBadge
    // },
    data() {
        return {
          image: image,
          badgeCode: `
          <button type="button" class="btn btn-primary"> Notifications <LeveBadge :constrast="true" :type="'warning'">2</LeveBadge></button>
          <LeveButton type="secondary" :class="'position-relative'">Messages <LeveBadge :position="'top'">99+</LeveBadge></LeveButton>
          <LeveButton type="secondary" class="ms-3" :class="'position-relative'">Messages <LeveBadge :position="'bottom'"  :type="'danger'" badge-hidden-text="'unread messages'">2</LeveBadge></LeveButton>
          <LeveButton type="secondary" class="ms-3" :class="'position-relative'">Messages <LeveBadge is-notification :type="'danger'" badge-hidden-text="'unread messages'"></LeveBadge></LeveButton>`,
          buttonCode: `
          <LeveButton type="primary">Primary</LeveButton>
          <LeveButton type="secondary">Secondary</LeveButton>
          <LeveButton type="success">Success</LeveButton>
          <LeveButton type="danger">Danger</LeveButton>
          <LeveButton type="warning">Warning</LeveButton>
          <LeveButton type="info">Info</LeveButton>
          <LeveButton type="light">Light</LeveButton>
          <LeveButton type="dark">Dark</LeveButton>`,
          outlineButtonCode: `
          <LeveButton :outline="'primary'">Button</LeveButton>
          <LeveButton :outline="'secondary'">Button</LeveButton>
          <LeveButton :outline="'success'">Button</LeveButton>
          <LeveButton :outline="'danger'">Button</LeveButton>
          <LeveButton :outline="'warning'">Button</LeveButton>
          <LeveButton :outline="'info'">Button</LeveButton>
          <LeveButton :outline="'light'">Button</LeveButton>
          <LeveButton :outline="'dark'">Button</LeveButton>          
          `,
          sizeButtonCode: `
          <LeveButton :outline="'primary'">Button</LeveButton>
          <LeveButton type="primary" :size="'lg'">Large button</LeveButton>
          <LeveButton type="primary" :size="'sm'">Small button</LeveButton>          
          `,
          disabledAndLoadingButtonCode: `
          <LeveButton :outline="'primary'" disabled>Button</LeveButton>
          <LeveButton type="primary"  disabled>Button</LeveButton>
          <LeveButton :outline="'secondary'" loading>Button</LeveButton>
          <LeveButton type="secondary"  loading>Button</LeveButton>          
          `,
          customStyleButtonCode: `
          <LeveButton :outline="'primary'" :style="'--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'">Button</LeveButton>
          <LeveButton type="primary" :style="'background-color:grey;border-color:black;color:black;'">Large button</LeveButton>
          <LeveButton type="primary" :size="'sm'" :style="'background-color:transparent;color:blue;'">Small button</LeveButton>  
          `,
        };
    },
    components: { LeveDropdown }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  padding: 2rem 1rem 2rem;
}

section .row {
  border: 1px solid #eee;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin: 1rem 0;
}

section .row h3 {
  margin-top: 0.25rem;
  padding: 0.5rem;
}

section .row p {
  font-size: 110%;
  margin-top: 1.25rem;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid #eee;
}

section .row .d-flex {
  padding: 2rem 0 !important;
}

.d-flex.flex-column {
  max-width: 100%;
  align-items: center;
}
.d-flex.flex-column button {
    margin: 0.125em;
}
.examples {
    align-items: center;
    display: flex;
    flex: 1 auto;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: flex-start;
}

.code {
  background-color: #eee;
  padding-top: 1rem;
}

.code pre code { background-color: transparent;}


@media (max-width: 992px) {

  section .row .d-flex {
    flex-direction: column;
  }
  
}
</style>