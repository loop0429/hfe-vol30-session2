<script>
import Page from '../components/page/FadePage.svelte'
import { agenda } from '../constants/agenda.js'
</script>

<Page>
  <div class="px-16 py-8 bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-3xl text-center">アジェンダ</h1>
    <ol class="mt-4 w-96 list-decimal list-inside leading-loose">
      {#each agenda as item, index}
        <li>{item}</li>
      {/each}
    </ol>
  </div>
</Page>
