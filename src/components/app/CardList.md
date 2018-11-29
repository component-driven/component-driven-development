```jsx
import Image from '../core/Image';
const dogs = [
  'dessi',
  'tsiri',
  'twiggy',
  'lulu',
  'jonathan-daniels-416786-unsplash',
  'samantha-scholl-157445-unsplash',
  'yuki-dog-401147-unsplash',
  'murucutu-697904-unsplash'
];
<CardList>
  {dogs.map(dog => (
    <Image src={`images/${dog}.jpg`} alt="" />
  ))}
</CardList>;
```
