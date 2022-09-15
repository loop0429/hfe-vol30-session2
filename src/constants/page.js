import Title from '../routes/Title.svelte'
import Agenda from '../routes/Agenda.svelte'
import Profile from '../routes/Profile.svelte'
import Survey from '../routes/Survey.svelte'
import About from '../routes/About.svelte'
import About2 from '../routes/About2.svelte'
import About3 from '../routes/About3.svelte'
import Animate from '../routes/Animate.svelte'
import Summary from '../routes/Summary.svelte'
import Pr from '../routes/Pr.svelte'
import Recruit from '../routes/Recruit.svelte'
import End from '../routes/End.svelte'

export const pages = [
  {
    path: '/',
    component: Title,
    title: 'Flash脳で考えるWebアニメーション'
  },
  {
    path: '/agenda',
    component: Agenda,
    title: 'アジェンダ'
  },
  {
    path: '/profile',
    component: Profile,
    title: '自己紹介'
  },
  {
    path: '/survey',
    component: Survey,
    title: 'アンケート'
  },
  {
    path: '/about',
    component: About,
    title: 'Flashについて'
  },
  {
    path: '/about2',
    component: About2,
    title: 'Flashについて'
  },
  {
    path: '/about3',
    component: About3,
    title: 'Flashについて'
  },
  {
    path: '/animate',
    component: Animate,
    title: 'Adobe Animateを見てみてる'
  },
  {
    path: '/summary',
    component: Summary,
    title: 'まとめ'
  },
  {
    path: '/pr',
    component: Pr,
    title: 'ちょっとPR'
  },
  {
    path: '/recruit',
    component: Recruit,
    title: '採用について'
  },
  {
    path: '/end',
    component: End,
    title: 'ご清聴ありがとうございました'
  },
]

export const routes = {}
pages.forEach(page => {
  routes[page.path] = page.component
})
