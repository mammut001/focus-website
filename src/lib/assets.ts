import { asset } from './basePath';

export const screenshots = {
  iphone: {
    home: asset('/screenshots/iphone/home.webp'),
    goals: asset('/screenshots/iphone/goals.webp'),
    sessions: asset('/screenshots/iphone/sessions.webp'),
    'income-goal': asset('/screenshots/iphone/income-goal.webp'),
    modes: asset('/screenshots/iphone/modes.webp'),
    earnings: asset('/screenshots/iphone/earnings.webp'),
    heatmap: asset('/screenshots/iphone/heatmap.webp'),
    'weekly-chart': asset('/screenshots/iphone/weekly-chart.webp'),
  },
  watch: {
    home: asset('/screenshots/watch/home.webp'),
    session: asset('/screenshots/watch/session.webp'),
  },
} as const;
