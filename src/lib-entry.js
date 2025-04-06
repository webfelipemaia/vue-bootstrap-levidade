import { app } from './plugins/mainApp';
import Popper from 'vue3-popper';

// Importação de componentes
import LeveButton from './components/LeveButton.vue'
import LeveButtonGroup from './components/LeveButtonGroup.vue'
import LeveToast from './components/LeveToast.vue'
import LeveAlert from './components/LeveAlert.vue'
import LeveTooltip from './components/LeveTooltip.vue'
import LeveBadge from './components/LeveBadge.vue'
import LeveAccordion from './components/accordion/LeveAccordion.vue'
import LeveAccordionItem from './components/accordion/LeveAccordionItem.vue'
import LeveAccordionBody from './components/accordion/LeveAccordionBody.vue'
import LeveAccordionHeader from './components/accordion/LeveAccordionHeader.vue'
import LeveBreadcrumb from './components/breadcrumb/LeveBreadcrumb.vue'
import LeveBreadcrumbItem from './components/breadcrumb/LeveBreadcrumbItem.vue'
import LeveCard from './components/card/LeveCard.vue'
import LeveCardBody from './components/card/LeveCardBody.vue'
import LeveCardHeader from './components/card/LeveCardHeader.vue'
import LeveCardFooter from './components/card/LeveCardFooter.vue'
import LeveCardContent from './components/card/LeveCardContent.vue'
import LeveCardFooterItem from './components/card/LeveCardFooterItem.vue'
import LeveCardOverlay from './components/card/LeveCardOverlay.vue'
import LeveCardImage from './components/card/LeveCardImage.vue'
import LeveDropdown from './components/LeveDropdown.vue'
import LeveImage from './components/image/LeveImage.vue'
import LeveFigure from './components/image/LeveFigure.vue'
import LeveMediaObject from './components/image/LeveMediaObject.vue'

const components = {
  LeveButton,
  LeveButtonGroup,
  LeveToast,
  LeveAlert,
  LeveTooltip,
  LeveBadge,
  LeveAccordion,
  LeveAccordionItem,
  LeveAccordionBody,
  LeveAccordionHeader,
  LeveBreadcrumb,
  LeveBreadcrumbItem,
  LeveCard,
  LeveCardBody,
  LeveCardHeader,
  LeveCardFooter,
  LeveCardContent,
  LeveCardFooterItem,
  LeveCardOverlay,
  LeveCardImage,
  LeveDropdown,
  LeveImage,
  LeveFigure,
  LeveMediaObject,
};

// Plugin de instalação principal
const LevidadePlugin = {
  install(app, options = {}) {
    // Registra todos os componentes
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
    
    // Registra componentes especiais (como Popper)
    app.component('LevePopper', Popper);
    
    // Configuração global (opcional)
    app.provide('levidade-config', options);
  }
};

// Exportação padrão (para app.use())
export default LevidadePlugin;

// Exportações nomeadas (para imports seletivos)
export * from './components';

// Exportação do app instance (se necessário para extensões)
export { app };