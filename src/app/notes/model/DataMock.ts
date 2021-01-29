import {Data} from './Data';

export const DATA_MOCK: Data[] = [
  {
    name: 'General',
    uuid: 111,
    children: [
      {
        name: 'Note 1',
        uuid: 222,
        text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"1"}}],"version":"2.19.1"}'
      },
      {
        name: 'Note 2',
        uuid: 333,
        text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"2"}}],"version":"2.19.1"}'
      },
      {
        name: 'Meeting',
        uuid: 444,
        text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"3"}}],"version":"2.19.1"}'
      },
    ]
  }, {
    name: 'Spec',
    uuid: 555,
    children: [
      {
        name: 'OTDP',
        uuid: 666,
        children: [
          {
            name: 'First note',
            uuid: 777,
            text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"efesfs"}}],"version":"2.19.1"}'
          },
          {
            name: 'Brussels sprouts',
            uuid: 888,
            text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"efesfs"}}],"version":"2.19.1"}'
          },
        ]
      }, {
        name: 'Orange',
        uuid: 999,
        children: [
          {
            name: 'Pumpkins',
            uuid: 1111,
            text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"efesfs"}}],"version":"2.19.1"}'
          },
          {
            name: 'Carrots',
            uuid: 2222,
            text: '{"time":1611948305548,"blocks":[{"type":"paragraph","data":{"text":"efesfs"}}],"version":"2.19.1"}'
          },
        ]
      },
    ]
  },
];
