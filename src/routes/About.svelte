<script>
import { fade } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { about } from '../constants/about.js'

let list = []
const max = about.length + 1

$: if ($count > 0 && $count < max) {
  const index = $count - 1
  list = [...list, about[index]]
}
</script>

<Page>
  <div class="px-16 py-8 max-w-3xl bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-3xl text-center">Flashについて</h1>
    <ol class="mt-4 w-96 list-decimal list-inside leading-loose text-sm">
      {#each list as item}
        <li>{item.parent}</li>
        {#if item.child}
          <ul class="ml-8 list-disc">
            {#each item.child as child, index}
              <li in:fade={{ delay: 400 * index + 400 }} out:fade={{ duration: 0 }}>{ child }</li>
            {/each}
          </ul>
        {/if}
      {/each}
    </ol>
  </div>
</Page>
