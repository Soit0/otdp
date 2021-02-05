import {TreeNode} from '../model/TreeNode';

export const TREE_MOCK: TreeNode[] = [
  {
    name: 'General',
    uid: '111',
    children: [
      {
        name: 'Note 1',
        uid: '222'
      },
      {
        name: 'Note 2',
        uid: '333'
      },
      {
        name: 'Meeting',
        uid: '444'
      },
    ]
  }, {
    name: 'Spec',
    uid: '555',
    children: [
      {
        name: 'OTDP',
        uid: '666',
        children: [
          {
            name: 'First note',
            uid: '777'
          },
          {
            name: 'Brussels sprouts',
            uid: '888'
          },
        ]
      }, {
        name: 'Orange',
        uid: '999',
        children: [
          {
            name: 'Pumpkins',
            uid: '1111'
          },
          {
            name: 'Carrots',
            uid: '2222'
          },
        ]
      },
    ]
  },
];
