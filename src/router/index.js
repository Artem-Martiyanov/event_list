import { createRouter, createWebHistory } from 'vue-router'
import EventSection from "@/components/EventSection.vue";

const routes = [
  {
    path: '/:sectionId',
    name: 'section',
    component: EventSection
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
