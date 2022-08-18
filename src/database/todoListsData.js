import { v4 as uuidv4 } from 'uuid';

const todoListsData = [
  {
    id: uuidv4(),
    title: 'Learn JavaScript',
    category: 'webDevelopment',
    date: 'Wed Feb 02 2022 00:00:00 GMT+0700 (Indochina Time)',
    location: {
      province: 'Bangkok',
      amphure: 'Khet Phra Nakhon',
      tambon: 'Phra Borom Maha Ratchawang',
    },
  },
  {
    id: uuidv4(),
    title: 'Learn React',
    category: 'webDevelopment',
    date: 'Tue Feb 01 2022 00:00:00 GMT+0700 (Indochina Time)',
    location: {
      province: 'Pathum Thani',
      amphure: 'Mueang Pathum Thani',
      tambon: 'Bang Parok',
    },
  },
  {
    id: uuidv4(),
    title: 'Watch Netflix',
    category: 'entertainment',
    date: 'Mon Aug 22 2022 00:00:00 GMT+0700 (Indochina Time)',
    location: {
      province: 'Chiang Mai',
      amphure: 'Mueang Chiang Mai',
      tambon: 'Phra Sing',
    },
  },
];

export default todoListsData;
