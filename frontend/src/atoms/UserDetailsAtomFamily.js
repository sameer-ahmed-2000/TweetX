import { atom, atomFamily } from 'recoil';

export const userStateFamily = atomFamily({
  key: 'userStateFamily',
  default: (param) => ({
    _id: param._id,
    fullName: param.fullName,
    isFollowing: param.isFollowing,
    followingCount: param.followingCount,
  }),
});

export const userUsedIdsAtom = atom({
  key: 'userUsedIdsAtom',
  default: [],
});
