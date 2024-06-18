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


export const followerUsedIdsAtom = atom({
    key: 'followerUsedIdsAtom',
    default: [],
});