<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { useJune } from './hooks/useJune';
import { AnalyticsBrowser } from '@june-so/analytics-next';
const analytics = new AnalyticsBrowser();
analytics.load({ writeKey: "JQVrRGiyoaFl4hQY" });
analytics.track("page_view", { path: "/" });
analytics.track('active users, retention, plan purchased, app downloaded, unique visitors')
// console.log("Analytics", analytics);
// const analytics = useJune("JQVrRGiyoaFl4hQY");
</script>