```jsx
<DogFinder
  dogs={[
    {
      image: 'tsiri.jpg',
      id: 'tsiri',
      name: 'Tsiri',
      breed: 'Saluki',
      location: 'Berlin',
      rating: 6
    },
    {
      image: 'dessi.jpg',
      id: 'dessi',
      name: 'Dessi',
      breed: 'Dachshund',
      location: 'Berlin',
      rating: 6
    },
    {
      image: 'twiggy.jpg',
      id: 'twiggy',
      name: 'Twiggy',
      breed: 'Sheltie',
      location: 'Berlin',
      rating: 6
    }
  ]}
  filters={{ location: 'Berlin', size: 3, rating: 3 }}
  filterOptions={[]}
  onFilterUpdate={() => {}}
/>
```
