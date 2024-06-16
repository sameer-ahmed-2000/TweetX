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

// You need to keep track of which ids are being used
export const followingUsedIdsAtom = atom({
    key: 'followingUsedIdsAtom',
    default: [],
});