import { atom, atomFamily } from 'recoil';

export const followerStateFamily = atomFamily({
    key: 'followerStateFamily',
    default: (param) => ({
        _id: param._id,
        fullName: param.fullName,
        isFollowing: param.isFollowing,
        followingCount: param.followingCount,
    }),
});

// You need to keep track of which ids are being used
export const followerUsedIdsAtom = atom({
    key: 'followerUsedIdsAtom',
    default: [],
});