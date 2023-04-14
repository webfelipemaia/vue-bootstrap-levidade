import { app } from './mainApp'
import LeveButton from "@/components/LeveButton";
import LeveButtonGroup from '@/components/LeveButtonGroup';
import LeveToast from '@/components/LeveToast';
import LeveAlert from '@/components/LeveAlert';

app.component('LeveButton',LeveButton)
app.component('LeveButtonGroup',LeveButtonGroup)
app.component('LeveToast',LeveToast)
app.component('LeveAlert', LeveAlert)