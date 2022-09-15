<script>
import { fly } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { profile } from '../constants/profile.js'

import profilePhoto from '../assets/profile.png'
</script>

<Page>
  <div class="px-16 py-8 bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-3xl text-center">自己紹介</h1>
    <div class="flex justify-between gap-10 mt-5">
      <div class="w-96">
      {#if $count > 0}
        <ul class="list-disc list-inside leading-loose">
          {#each profile as item, index}
            <li in:fly={{ x: 50, delay: 400 * index }} out:fly={{ duration: 0 }}>{item}</li>
          {/each}
        </ul>
        {/if}
      </div>
      <div>
        <img class="rounded-3xl" src={profilePhoto} alt="" width="320">
      </div>
    </div>
  </div>
</Page>
