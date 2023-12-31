import { app } from './mainApp'
import LeveButton from "@/components/LeveButton"
import LeveButtonGroup from '@/components/LeveButtonGroup'
import LeveToast from '@/components/LeveToast'
import LeveAlert from '@/components/LeveAlert'
import LeveTooltip from '@/components/LeveTooltip'
import LeveBadge from '@/components/LeveBadge'
import LeveAccordion from '@/components/accordion/LeveAccordion'
import LeveAccordionItem from '@/components/accordion/LeveAccordionItem'
import LeveAccordionBody from '@/components/accordion/LeveAccordionBody'
import LeveAccordionHeader from '@/components/accordion/LeveAccordionHeader'
import LeveBreadcrumb from '@/components/breadcrumb/LeveBreadcrumb'
import LeveBreadcrumbItem from '@/components/breadcrumb/LeveBreadcrumbItem'

import Popper from 'vue3-popper'

app.component('LeveButton', LeveButton)
app.component('LeveButtonGroup', LeveButtonGroup)
app.component('LeveToast', LeveToast)
app.component('LeveAlert', LeveAlert)
app.component('LevePopper', Popper)
app.component('LeveTooltip', LeveTooltip)
app.component('LeveBadge', LeveBadge)
app.component('LeveAccordion', LeveAccordion)
app.component('LeveAccordionItem', LeveAccordionItem)
app.component('LeveAccordionBody', LeveAccordionBody)
app.component('LeveAccordionHeader', LeveAccordionHeader)
app.component('LeveBreadcrumb', LeveBreadcrumb)
app.component('LeveBreadcrumbItem', LeveBreadcrumbItem)