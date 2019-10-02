let configuration: { menu: ({ link: string; id: number; filters: string[]; title: string } | { link: string; id: number;
title: string } | { link: string; id: number; title: string; outlet: string })[] };
configuration = {
  menu: [
    {
      id: 1,
      title: 'Eat&drink',
      link: '/eat',
      filters: ['Restaurants', 'Cafes', 'Nightlife']
    },
    {
      id: 2,
      title: 'See&do',
      link: '/see',
      filters: ['Activities', 'Attractions', 'Shopping']
    },
    {
      id: 3,
      title: 'Guides',
      link: '/guides',
      filters: ['City', 'Nature', 'Region']
    },
    {
      id: 4,
      title: 'Event',
      link: '/event',
      filters: ['All', 'Exhibitions', 'Music']
    }
]};
