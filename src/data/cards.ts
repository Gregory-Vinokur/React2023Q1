import { ICardHomePage } from './../interfaces/ICardHomePage';

const cards: ICardHomePage[] = [
  {
    color: 'lightblue',
    likes: 1,
    comments: 2,
    shares: 1,
    author: 'Jonh Doe',
    date: 'Jan 01, 2023',
  },
  {
    color: 'lightgreen',
    likes: 2,
    comments: 3,
    shares: 1,
    author: 'Milka Hvicka',
    date: 'Jan 12, 2023',
  },
  {
    color: 'lightyellow',
    likes: 3,
    comments: 1,
    shares: 5,
    author: 'Adrian Rabiot',
    date: 'Jan 5, 2023',
  },
  {
    color: 'lightsalmon',
    likes: 3,
    comments: 4,
    shares: 6,
    author: 'Joshua King',
    date: 'Jan 4, 2023',
  },
  {
    color: 'lightgray',
    likes: 6,
    comments: '',
    shares: 2,
    author: 'Mario Weiss',
    date: 'Jan 10, 2023',
  },
  {
    color: 'lightbrown',
    likes: 8,
    comments: 2,
    shares: '',
    author: 'Marco Reus',
    date: 'Jan 7, 2023',
  },
];

export default cards;
