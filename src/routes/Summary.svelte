<script>
import { fade } from 'svelte/transition'

import Page from '../components/page/Page.svelte'
import { count } from '../stores.js'
import { summary } from '../constants/summary.js'

let list = []
const max = summary.length + 1

$: if ($count > 0 && $count < max) {
  const index = $count - 1
  list = [...list, summary[index]]
}
</script>

<Page>
  <div class="px-16 py-8 bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-3xl text-center">まとめ</h1>
    <ol class="mt-4 w-[32rem] list-decimal list-inside leading-loose text-sm">
      {#each list as item}
        <li in:fade out:fade={{ duration: 0 }}>{item}</li>
      {/each}
    </ol>
  </div>
</Page>
