import { atom } from 'recoil';

export const userProfileAtom = atom({
    key: 'userProfileAtom',
    default: {
        fullName: '',
        postCount: 0,
        followerCount: 0,
        followingCount: 0
    },
});
