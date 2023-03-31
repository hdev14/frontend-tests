import { createSlice, configureStore } from '@reduxjs/toolkit'

export type Repo = { name: string, url: string};

export type InitialState = {
  repos: Array<Repo>;
  profiles: Array<string>;
};

const initialState: InitialState = {
  repos: [
    {
      name: 'clean-code',
      url: 'https://github.com/hdev14/clean-code-example'
    }
  ],
  profiles: ['hdev14'],
}

const slice = createSlice({
  name: 'gitremotehub',
  initialState,
  reducers: {
    setRepos: (state, { payload }: { payload: Repo[] }) => {
      state.repos = payload;
    },
    addProfile: (state, { payload }: { payload: string }) => {
      state.profiles.push(payload) ;
    }
  }
})

export const { setRepos, addProfile } = slice.actions

const store = configureStore({
  reducer: slice.reducer
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

