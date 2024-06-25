import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Resume from '../views/ResumeView.vue';
import Project from '../views/ProjectView.vue';
import Testimonial from '../views/TestimonialView.vue';
import ReachMe from '../views/ReachMe.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/project', name: 'Project', component: Project },
  { path: '/testimonial', name: 'Testimonial', component: Testimonial },
  { path: '/reach-me', name: 'ReachMe', component: ReachMe }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;