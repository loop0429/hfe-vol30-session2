<script>
import Page from '../components/page/Page.svelte'
import { pr } from '../constants/pr.js'
</script>

<Page>
  <div class="px-16 py-8 bg-white rounded-lg shadow-xl w-[24rem]">
    <h1 class="font-bold text-3xl text-center">PR</h1>
    <ul class="mt-3 list-disc leading-loose">
      {#each pr as item}
        <li>
          <a class="text-blue-500 underline" href="{ item.link }">{item.text}</a>
        </li>
      {/each}
    </ul>
  </div>
</Page>
