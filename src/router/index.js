// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import TypographyExample from "../examples/TypographyExample.vue";
import IndexExample from "../examples/IndexExample.vue";
import AccordionExample from "../examples/AccordionExample.vue";
import AlertExample from "../examples/AlertExample.vue";
import BadgeExample from "../examples/BadgeExample.vue";
import BreadcrumbExample from "../examples/BreadcrumbExample.vue";
import ButtonExample from "../examples/ButtonExample.vue";
import ButtonGroupExample from "../examples/ButtonGroupExample.vue";
import CardExample from "../examples/CardExample.vue";
import DropdownExample from "../examples/DropdownExample.vue";
import ImageExample from "../examples/ImageExample.vue";
import NotificationExample from "../examples/NotificationExample.vue";
import OffcanvasExample from "../examples/OffcanvasExample.vue";
import ToastExample from "../examples/ToastExample.vue";
import TooltipExample from "../examples/TooltipExample.vue";
import CustomizeExample from "../examples/CustomizeExample.vue";

const routes = [
  { path: "/", name: "Home", component: IndexExample },
  { path: "/doc", name: "Index", component: IndexExample },
  { path: "/doc/accordion", name: "Accordion", component: AccordionExample },
  { path: "/doc/alert", name: "Alert", component: AlertExample },
  { path: "/doc/badge", name: "Badge", component: BadgeExample },
  { path: "/doc/breadcrumb", name: "Breadcrumb", component: BreadcrumbExample },
  { path: "/doc/button", name: "Button", component: ButtonExample },
  { path: "/doc/button-group", name: "ButtonGroup", component: ButtonGroupExample },
  { path: "/doc/card", name: "Card", component: CardExample },
  { path: "/doc/dropdown", name: "Dropdown", component: DropdownExample },
  { path: "/doc/image", name: "Image", component: ImageExample },
  { path: "/doc/notification", name: "Notification", component: NotificationExample },
  { path: "/doc/offcanvas", name: "Offcanvas", component: OffcanvasExample },
  { path: "/doc/toast", name: "Toast", component: ToastExample },
  { path: "/doc/tooltip", name: "Tooltip", component: TooltipExample },
  { path: "/doc/typography", name: "Typography", component: TypographyExample },
  { path: "/doc/customize", name: "Customize", component: CustomizeExample },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router
