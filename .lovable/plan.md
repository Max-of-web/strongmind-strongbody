## Update YouTube videos on coaching page

Replace the three video IDs in `src/components/sections/YouTubeSection.tsx` with the new ones provided.

### Change

In `src/components/sections/YouTubeSection.tsx`, update the `VIDEOS` array:

```ts
const VIDEOS = [
  { id: 'HLXoiRo6Gt8', title: 'Workout 1' },
  { id: 'k7rjrqNNxuI', title: 'Workout 2' },
  { id: '8uBRPxEpwy0', title: 'Workout 3' },
];
```

Thumbnails (`https://img.youtube.com/vi/{id}/hqdefault.jpg`) and watch links update automatically. Playlist button below remains unchanged.

### Files
- Edit `src/components/sections/YouTubeSection.tsx`
