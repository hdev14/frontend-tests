import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'

export type Repo = { name: string, url: string };

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
      state.profiles.push(payload);
    }
  }
})

export const { setRepos, addProfile } = slice.actions

const store = configureStore({
  reducer: slice.reducer
})

export const registerProfile = createAsyncThunk<void, { username: string }>(
  '@registerProfile',
  async ({ username }, { dispatch }) => {
    const response = await fetch('http://localhsot:3000/users/profiles', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    if (response.status >= 400) {
      throw new Error(`HTTP Error => ${response.status}`);
    }

    const body = response.json();

    console.log(body);
  }
);

export const fetchProfiles = createAsyncThunk(
  '@fetchProfiles',
  async (args, { dispatch }) => {
    const response = await fetch('http://localhsot:3000/users/profiles', {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status >= 400) {
      throw new Error(`HTTP Error => ${response.status}`);
    }

    const body = response.json();

    console.log(body);
  }
);

export const fetchProfile = createAsyncThunk<void, { username: string }>(
  '@fetchProfile',
  async ({ username }, { dispatch }) => {
    const response = await fetch(`http://localhsot:3000/users/profiles/${username}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status >= 400) {
      throw new Error(`HTTP Error => ${response.status}`);
    }

    const body = response.json();

    console.log(body);
  }
);

export const fetchRepos = createAsyncThunk<void, { username: string }>(
  '@fetchRepos',
  async ({ username }, { dispatch }) => {
    const response = await fetch(`http://localhsot:3000/repos/${username}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status >= 400) {
      throw new Error(`HTTP Error => ${response.status}`);
    }

    const body = response.json();

    console.log(body);
  }
);


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

