import { ref, onMounted, watch } from 'vue';
import { Analytics, AnalyticsBrowser, Context } from '@june-so/analytics-next';

export function useJune() {
  const analytics = new AnalyticsBrowser();
  analytics.load({ writeKey: "JQVrRGiyoaFl4hQY" });

  return { analytics };
}