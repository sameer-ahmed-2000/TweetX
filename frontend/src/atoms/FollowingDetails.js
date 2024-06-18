import { atom, atomFamily } from 'recoil';

export const followingStateFamily = atomFamily({
    key: 'followingStateFamily',
    default: (param) => ({
        _id: param._id,
        fullName: param.fullName,
        isFollowing: param.isFollowing,
        followingCount: param.followingCount,
    }),
});

export const followingUsedIdsAtom = atom({
    key: 'followingUsedIdsAtom',
    default: [],
});