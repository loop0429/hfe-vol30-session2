<script>
import { scale } from 'svelte/transition'

import Page from './Page.svelte'
</script>

<div in:scale>
  <Page>
    <slot></slot>
  </Page>
</div>
