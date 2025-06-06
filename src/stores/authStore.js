import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import MMKVStorage from 'zustand-storage-mmkv';

// Setup MMKV
const storage = new MMKVStorage();

export const useAuthStore = create()(
  persist(
    set => ({
      token: null,
      setToken: token => set({token}),
      logout: () => set({token: null}),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => storage),
    },
  ),
);
