import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

interface AppState {
  verify: boolean | undefined;
  selectedChat: string | undefined;
  user: []; // Consider defining a specific type for user if possible
  trend: boolean;
  notification: []; // Consider defining a specific type for notifications if possible
  chats: []; // Consider defining a specific type for chats if possible
  onlineUsersCount: number[];
  userId: string | undefined;
  email: string;
  name: string;
  pic: string;
  recoverEmail: string | undefined;
  ads: boolean;
  isCallStarted: boolean;
  loading: boolean;
  logged: boolean;
}

const initialState: AppState = {
  verify: undefined,
  selectedChat: undefined,
  user: [],
  trend: false,
  notification: [],
  chats: [],
  onlineUsersCount: [],
  userId: undefined,
  email: "",
  name: "",
  pic: "",
  recoverEmail: undefined,
  ads: false,
  isCallStarted: false,
  loading: false,
  logged: false,
};

const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setVerify: (state, action: PayloadAction<boolean | undefined>) => {
      state.verify = action.payload;
    },
    setSelectedChat: (state, action: PayloadAction<string | undefined>) => {
      state.selectedChat = action.payload;
    },
    setUser: (state, action: PayloadAction<[]>) => {
      state.user = action.payload;
    },
    setTrend: (state, action: PayloadAction<boolean>) => {
      state.trend = action.payload;
    },
    setNotification: (state, action: PayloadAction<[]>) => {
      state.notification = action.payload;
    },
    setChats: (state, action: PayloadAction<[]>) => {
      state.chats = action.payload;
    },
    setOnlineUsersCount: (state, action: PayloadAction<number[]>) => {
      state.onlineUsersCount = action.payload;
    },
    setUserId: (state, action: PayloadAction<string | undefined>) => {
      state.userId = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPic: (state, action: PayloadAction<string>) => {
      state.pic = action.payload;
    },
    setRecoverEmail: (state, action: PayloadAction<string | undefined>) => {
      state.recoverEmail = action.payload;
    },
    setAds: (state, action: PayloadAction<boolean>) => {
      state.ads = action.payload;
    },
    setIsCallStarted: (state, action: PayloadAction<boolean>) => {
      state.isCallStarted = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.logged = action.payload;
    },
  },
});

export const {
  setVerify,
  setSelectedChat,
  setUser,
  setTrend,
  setNotification,
  setChats,
  setOnlineUsersCount,
  setUserId,
  setEmail,
  setName,
  setPic,
  setRecoverEmail,
  setAds,
  setIsCallStarted,
  setLoading,
  setLogged,
} = AppSlice.actions;

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
  },
});

// Type for RootState
export type RootState = ReturnType<typeof store.getState>;

// Type for AppDispatch
export type AppDispatch = typeof store.dispatch;

// Selectors
export const selectVerify = (state: RootState) => state.app.verify;
export const selectSelectedChat = (state: RootState) => state.app.selectedChat;
export const selectUser = (state: RootState) => state.app.user;
export const selectTrend = (state: RootState) => state.app.trend;
export const selectNotification = (state: RootState) => state.app.notification;
export const selectChats = (state: RootState) => state.app.chats;
export const selectOnlineUsersCount = (state: RootState) =>
  state.app.onlineUsersCount;
export const selectUserId = (state: RootState) => state.app.userId;
export const selectEmail = (state: RootState) => state.app.email;
export const selectName = (state: RootState) => state.app.name;
export const selectPic = (state: RootState) => state.app.pic;
export const selectRecoverEmail = (state: RootState) => state.app.recoverEmail;
export const selectAds = (state: RootState) => state.app.ads;
export const selectIsCallStarted = (state: RootState) =>
  state.app.isCallStarted;
export const selectLoading = (state: RootState) => state.app.loading;
export const selectLogged = (state: RootState) => state.app.logged;

export default store;
