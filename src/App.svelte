<script>
import Router from 'svelte-spa-router'

import { pager } from './utils/pager.js'
import { count } from './stores.js'
import { routes, pages } from './constants/page.js'

let currentPage = 0
let title = ''

const setTitle = (string) => {
  title = string
}

const handleKeydown = (e) => {
  switch (e.keyCode) {
    case 13: // Enter
      count.update(n => n + 1)
      break
    case 37: // ←
      currentPage--
      break
    case 39: // →
      currentPage++
      break
    default:
      return
  }

  // 最小値・最大値を超えないように
  if (currentPage < 0) currentPage = 0
  if (currentPage >= pages.length) currentPage = pages.length - 1

  pager(pages[currentPage].path)
}

// ページ読み込み後
const routeLoaded = (e) => {
  // 現在のrouteの値を元にpagesから現状ページの情報を取得
  const location = e.detail.location

  const target = pages.find((page, index) => {
    if (page.path === location) currentPage = index
    return page.path === location
  })

  count.set(0)

  setTitle(target.title)
}
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
<title>{title}</title>
</svelte:head>

<body>
  <Router {routes} on:routeLoaded={routeLoaded} />
</body>

<style>
body {
  background: linear-gradient(230deg, #a24bcf, #4b79cf, #4bc5cf);
  background-size: 300% 300%;
  animation: bgAnimation 30s ease infinite;
}

@keyframes bgAnimation {
  0% {background-position: 0% 50%}
  50% {background-position: 100% 50%}
  100% {background-position: 0% 50%}
}
</style>
