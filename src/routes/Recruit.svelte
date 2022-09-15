<script>
import Page from '../components/page/Page.svelte'
import { count } from '../stores.js'
</script>

<Page>
  <div class="p-8 max-w-3xl bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-3xl text-center">採用について</h1>

    <h2 class="mt-4 font-bold text-xl">募集職種</h2>
    <ul class="mt-2 w-96 list-disc list-inside leading-loose text-sm">
      <li>バックエンドエンジニア（PHP:Laravel/Python）</li>
      <li>QAテスター</li>
      <li>Webディレクター</li>
      <li>フロントエンドエンジニア（React・Next.js/Vue）</li>
    </ul>

    <h2 class="mt-4 font-bold text-xl">拠点</h2>
    <ul class="mt-2 w-96 list-disc list-inside leading-loose text-sm">
      <li>東京</li>
      <li>広島</li>
      <li>山口</li>
    </ul>
  </div>
</Page>
