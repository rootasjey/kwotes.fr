import { ref, onMounted, watch } from 'vue';
import { Analytics, AnalyticsBrowser, Context } from '@june-so/analytics-next';

export function useJune(writeKey: string) {
  const analytics = ref<[Analytics, Context]>();

  const loadAnalytics = async () => {
    let response = await AnalyticsBrowser.load({ writeKey });
    analytics.value = response;
  };

  onMounted(loadAnalytics);
  watch(analytics, loadAnalytics);
  return { analytics };
}