<template>
<div class="py-32 mx-auto">
<Folio />
<!-- <ServiceItem /> -->
<FeedbackModal />
</div>
</template>

<style lang="postcss">
html {
    @apply dark:bg-zinc-700
}
  body {
    @apply bg-gradient-to-br from-slate-200 to-slate-300;
    @apply dark:bg-gradient-to-br dark:from-gray-700 dark:to-zinc-600;
  }
</style>