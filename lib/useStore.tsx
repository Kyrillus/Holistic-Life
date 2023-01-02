import create from 'zustand'

interface UserState {
    user: string,
    userState: () => string,
    login: (user: string) => void,
    logout: () => void
}

const useUserStore = create<UserState>((set, get) => ({
    user: "",
    userState: () => get().user,
    login: (jwt: string) => set({user: jwt}),
    logout: () => set({user: ""})
}));

export default useUserStore;