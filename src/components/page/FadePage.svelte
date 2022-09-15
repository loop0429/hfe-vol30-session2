<script>
import { fade } from 'svelte/transition'

import Page from './Page.svelte'
</script>

<div in:fade>
  <Page>
    <slot></slot>
  </Page>
</div>
