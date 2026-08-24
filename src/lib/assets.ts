import { asset } from './basePath';

export const screenshots = {
  iphone: {
    home: asset('/screenshots/iphone/home.webp'),
    'home-goals': asset('/screenshots/iphone/home-goals.webp'),
    records: asset('/screenshots/iphone/records.webp'),
    'records-analytics': asset('/screenshots/iphone/records-analytics.webp'),
    'records-activity': asset('/screenshots/iphone/records-activity.webp'),
    goals: asset('/screenshots/iphone/goals.webp'),
    modes: asset('/screenshots/iphone/modes.webp'),
    profiles: asset('/screenshots/iphone/profiles.webp'),
    'session-setup': asset('/screenshots/iphone/session-setup.webp'),
    'pay-schedule': asset('/screenshots/iphone/pay-schedule.webp'),
    sessions: asset('/screenshots/iphone/sessions.webp'),
    'income-goal': asset('/screenshots/iphone/income-goal.webp'),
    earnings: asset('/screenshots/iphone/earnings.webp'),
    heatmap: asset('/screenshots/iphone/heatmap.webp'),
    'weekly-chart': asset('/screenshots/iphone/weekly-chart.webp'),
  },
  watch: {
    now: asset('/screenshots/watch/now.webp'),
    'quick-start': asset('/screenshots/watch/quick-start.webp'),
    summary: asset('/screenshots/watch/summary.webp'),
    week: asset('/screenshots/watch/week.webp'),
    sync: asset('/screenshots/watch/sync.webp'),
    home: asset('/screenshots/watch/home.webp'),
    session: asset('/screenshots/watch/session.webp'),
  },
} as const;
