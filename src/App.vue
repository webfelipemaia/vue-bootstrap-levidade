<template>
  <!-- <LeveImage :alt="'Vue logo'" :path="image" /> -->
  <div class="levedoc container">
    <section>
      <div class="heading">
        <h2>Notifications</h2>
        <p>System notifications are flexible and don't require much code editing.</p>
      </div>
      <div class="snippet row">
        <h3 class="snippet-title">Simple alert</h3>
        <p>Alerts are simple notifications designed to respond to typical user interaction actions.</p>
        <div class="snippet-item">
          <div class="examples">
            <div class="d-flex flex-column">
              <LeveAlert>Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Default</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert is-dismissible>Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Dismissible</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert is-dismissible icon="heart">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>With icon</span>
            </div>
          </div>
        </div>
        <div class="snippet-code">
          <pre v-highlightjs><code class="javascript">{{ simpleAlertCode }}</code></pre>
        </div>

        <p>Types of alert according to the theme.</p>
        <div class="d-flex my-3 p-2">
          <div class="examples d-flex justify-content-around">
            <div class="d-flex flex-column">
              <LeveAlert :alertType="'primary'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Primary</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'secondary'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Secondary</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'success'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Success</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'danger'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Danger</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'warning'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Warning</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'info'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Info</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'light'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Light</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'dark'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Dark</span>
            </div>
          </div>
        </div>
        <div class="code">
          <pre v-highlightjs><code class="javascript">{{ simpleAlertCodeByTheme }}</code></pre>
        </div>
      </div>
      <div class="row">
        <h3>Alert with additional content</h3>
        <p>Here we explore the use of slots. There are three slots defined for text and one for icon representation. When adding content between the <code>&#60;LeveAlert&#62;</code> and <code>&#60;/LeveAlert&#62;</code> tags, the default slot <code>#default</code> adds the content to the alert or notification. For header, use the <code>#header</code> template. For the footer, use <code>#footer</code>.</p>
        <div class="d-flex justify-content-around my-3 p-2">
          <div class="w-50">
            <LeveAlert is-dismissible>
                <template #header>
                  Header text goes here.
                </template>
                <template #default>
                  A text for the main content.
                </template>
                <template #footer>
                  A little text here in the footer
                </template>
              </LeveAlert>
          </div>
        </div>
        <div class="code">
          <pre v-highlightjs><code class="javascript">{{ slotedAlertCode }}</code></pre>
        </div>
      </div>
    </section>

    <section>
      <div class="heading">
        <h2>Badges</h2>
        <p>Badges that work as small notifiers for highlighted parts of the interface.</p>
      </div>
      <div class="row">
        <h3>Titles</h3>
          <!-- todo: 
                  1. add block buttons; 
                  2. add toggle states
                -->
        <p>Designed to fit the size of the component.</p>
        <div class="d-flex my-3 p-2">
          <div class="examples d-flex flex-column">      
            <h1>Heading h1 <LeveBadge>New</LeveBadge></h1>
            <h2>Heading h2 <LeveBadge>New</LeveBadge></h2>
            <h3>Heading h3 <LeveBadge>New</LeveBadge></h3>
            <h4>Heading h4 <LeveBadge>New</LeveBadge></h4>
            <h5>Heading h5 <LeveBadge>New</LeveBadge></h5>
            <h6>Heading h6 <LeveBadge>New</LeveBadge></h6>
          </div>
        </div>
        <div class="code">
          <pre v-highlightjs><code class="javascript">{{ headingBadgeCode }}</code></pre>
        </div>

        <p>Themes</p>
        <div class="d-flex my-3 p-2">
          <div class="examples d-flex justify-content-around">
            <LeveBadge :constrast="true" :type="'primary'">primary</LeveBadge>
            <LeveBadge :constrast="true" :type="'secondary'">secondary</LeveBadge>
            <LeveBadge :constrast="true" :type="'success'">success</LeveBadge>
            <LeveBadge :constrast="true" :type="'danger'">danger</LeveBadge>
            <LeveBadge :constrast="true" :type="'warning'">warning</LeveBadge>
            <LeveBadge :constrast="true" :type="'info'">info</LeveBadge>
            <LeveBadge :constrast="true" :type="'light'">light</LeveBadge>
            <LeveBadge :constrast="true" :type="'dark'">dark</LeveBadge>
          </div>
        </div>
        <div class="code">
          <pre v-highlightjs><code class="javascript">{{  badgeCodeByTheme }}</code></pre>
        </div>
     
        <h3>Buttons</h3>
        <p>Associeated with buttons or links they may have some uses. For example, as a counter, as a notifier combining with a counter or as a notifier only.</p>
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

      <div class="heading">
        <h2>Buttons</h2>
      <p>Custom buttons are used for actions on forms, dialog boxes, etc. They can have various sizes, states and other features.</p>
      </div>
    <div class="row">
      <h3>Themes</h3>
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
      
      <p>Sizes</p>
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
  <!--
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
     <LeveImage :type="'fluid'" :path="image" :alt="'Image example'" />
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
  <!--  <h4>Accordion</h4>
    <p>Default</p>

    <p>Backgrounds</p>
        
    <div class="d-inline-flex p-2">


 <button type="button" class="btn btn-primary" id="liveToastBtn" @click.prevent="addNotice">Show live toast</button>
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
// import LeveDropdown from "./components/LeveDropdown.vue";
// import LeveImage from "./components/LeveImage.vue";

export default {
    name: 'App',
    //   components: {
    //     LeveBadge
    // },
    data() {
        return {
          image: image,
          singleAlert: { 
            id: 0, 
            text: 'Lorem ipsum dolor sit amet',
            comment: 'Sample comment text here',
            type: 'primary',
            notificationTime: 'just now',
            createdAt: new Date()
          },
          headingBadgeCode:`
            <h1>Heading h1 <LeveBadge>New</LeveBadge></h1>
            <h2>Heading h2 <LeveBadge>New</LeveBadge></h2>
            <h3>Heading h3 <LeveBadge>New</LeveBadge></h3>
            <h4>Heading h4 <LeveBadge>New</LeveBadge></h4>
            <h5>Heading h5 <LeveBadge>New</LeveBadge></h5>
            <h6>Heading h6 <LeveBadge>New</LeveBadge></h6>
          `,
          badgeCode: `
          <button type="button" class="btn btn-primary"> Notifications <LeveBadge :constrast="true" :type="'warning'">2</LeveBadge></button>
          <LeveButton type="secondary" :class="'position-relative'">Messages <LeveBadge :position="'top'">99+</LeveBadge></LeveButton>
          <LeveButton type="secondary" class="ms-3" :class="'position-relative'">Messages <LeveBadge :position="'bottom'"  :type="'danger'" badge-hidden-text="'unread messages'">2</LeveBadge></LeveButton>
          <LeveButton type="secondary" class="ms-3" :class="'position-relative'">Messages <LeveBadge is-notification :type="'danger'" badge-hidden-text="'unread messages'"></LeveBadge></LeveButton>`,
          badgeCodeByTheme:`
          <LeveButton type="primary">Primary</LeveButton>
          <LeveButton type="secondary">Secondary</LeveButton>
          <LeveButton type="success">Success</LeveButton>
          <LeveButton type="danger">Danger</LeveButton>
          <LeveButton type="warning">Warning</LeveButton>
          <LeveButton type="info">Info</LeveButton>
          <LeveButton type="light">Light</LeveButton>
          <LeveButton type="dark">Dark</LeveButton>`,
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
          simpleAlertCode: `
            <div class="d-flex flex-column">
              <LeveAlert>Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Default</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert is-dismissible>Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Dismissible</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert is-dismissible icon="heart">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>With icon</span>
            </div>          
          `,
          simpleAlertCodeByTheme: `
            <div class="d-flex flex-column">
              <LeveAlert :alertType="'primary'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Primary</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'secondary'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Secondary</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'success'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Success</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'danger'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Danger</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'warning'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Warning</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'info'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Info</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'light'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Light</span>
            </div>
            <div class="d-flex flex-column">
              <LeveAlert  :alertType="'dark'">Lorem ipsum dolor sit amet.</LeveAlert>
              <span>Dark</span>
            </div>          
          `,
          slotedAlertCode: `
            <LeveAlert is-dismissible>
              <template #header>
                Header text goes here.
              </template>
              <template #default>
                A text for the main content.
              </template>
              <template #footer>
                A little text here in the footer
              </template>
            </LeveAlert>
          `,
        };
    },
    components: { /*LeveDropdown*/ }
}
</script>

<style lang="scss">
.levedoc {

  section {

    padding: 2rem 1rem 2rem;

    h2 {
      margin-bottom: 2rem;
      font-weight: bold;
    }
    .snippet {

      border: 1px solid #eee;
      border-radius: 12px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      margin: 1rem 0;

      .snippet-title {
        margin-top: 0.25rem;
        padding: 0.5rem;
      }

      p {
        font-size: 110%;
        margin-top: 1.25rem;
        padding: 1.25rem 1rem;
        border-bottom: 1px solid #eee;
      }

      .snippet-item {

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

          pre {
            code { 
              background-color: transparent;
            }
          }

        }
        
      }

    }
    
  }

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.d-flex.flex-column {
  max-width: 100%;
  align-items: center;
}

.d-flex.flex-column button {
    margin: 0.125em;
}



@media (max-width: 992px) {

  section .row .d-flex {
    flex-direction: column;
  }
  
}
</style>