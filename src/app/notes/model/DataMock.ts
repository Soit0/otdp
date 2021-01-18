import {Data} from './Data';

export const DATA_MOCK: Data[] = [
  {
    name: 'General',
    children: [
      {name: 'Note 1'},
      {name: 'Note 2'},
      {name: 'Meeting'},
    ]
  }, {
    name: 'Spec',
    children: [
      {
        name: 'OTDP',
        children: [
          {
            name: 'First note',
            text: 'Iorem Ipsum'
          },
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];
