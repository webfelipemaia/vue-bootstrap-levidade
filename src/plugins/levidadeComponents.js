import { app } from './mainApp'
import LeveButton from "@/components/LeveButton";
import LeveButtonGroup from '@/components/LeveButtonGroup';
import LeveToast from '@/components/LeveToast';
import LeveAlert from '@/components/LeveAlert';
import LeveTooltip from '@/components/LeveTooltip';

import Popper from 'vue3-popper';

app.component('LeveButton',LeveButton)
app.component('LeveButtonGroup',LeveButtonGroup)
app.component('LeveToast',LeveToast)
app.component('LeveAlert', LeveAlert)
app.component('LevePopper',Popper)
app.component('LeveTooltip',LeveTooltip)