import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  verify: boolean | undefined;
  selectedChat: string | undefined;
  user: any; // Consider defining a specific type for user if possible
  trend: boolean;
  notification: any[]; // Consider defining a specific type for notifications if possible
  chats: any[]; // Consider defining a specific type for chats if possible
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
  user: null,
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
    setVerify: (
      state: AppState,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.verify = action.payload;
    },
    setSelectedChat: (
      state: AppState,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedChat = action.payload;
    },
    setUser: (state: AppState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setTrend: (state: AppState, action: PayloadAction<boolean>) => {
      state.trend = action.payload;
    },
    setNotification: (state: AppState, action: PayloadAction<any[]>) => {
      state.notification = action.payload;
    },
    setChats: (state: AppState, action: PayloadAction<any[]>) => {
      state.chats = action.payload;
    },
    setOnlineUsersCount: (state: AppState, action: PayloadAction<number[]>) => {
      state.onlineUsersCount = action.payload;
    },
    setUserId: (state: AppState, action: PayloadAction<string | undefined>) => {
      state.userId = action.payload;
    },
    setEmail: (state: AppState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state: AppState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPic: (state: AppState, action: PayloadAction<string>) => {
      state.pic = action.payload;
    },
    setRecoverEmail: (
      state: AppState,
      action: PayloadAction<string | undefined>
    ) => {
      state.recoverEmail = action.payload;
    },
    setAds: (state: AppState, action: PayloadAction<boolean>) => {
      state.ads = action.payload;
    },
    setIsCallStarted: (state: AppState, action: PayloadAction<boolean>) => {
      state.isCallStarted = action.payload;
    },
    setLoading: (state: AppState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLogged: (state: AppState, action: PayloadAction<boolean>) => {
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

export default AppSlice.reducer;
