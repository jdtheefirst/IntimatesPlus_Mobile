import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
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
}

const initialState: ChatState = {
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
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setVerify: (
      state: ChatState,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.verify = action.payload;
    },
    setSelectedChat: (
      state: ChatState,
      action: PayloadAction<string | undefined>
    ) => {
      state.selectedChat = action.payload;
    },
    setUser: (state: ChatState, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setTrend: (state: ChatState, action: PayloadAction<boolean>) => {
      state.trend = action.payload;
    },
    setNotification: (state: ChatState, action: PayloadAction<any[]>) => {
      state.notification = action.payload;
    },
    setChats: (state: ChatState, action: PayloadAction<any[]>) => {
      state.chats = action.payload;
    },
    setOnlineUsersCount: (
      state: ChatState,
      action: PayloadAction<number[]>
    ) => {
      state.onlineUsersCount = action.payload;
    },
    setUserId: (
      state: ChatState,
      action: PayloadAction<string | undefined>
    ) => {
      state.userId = action.payload;
    },
    setEmail: (state: ChatState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state: ChatState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPic: (state: ChatState, action: PayloadAction<string>) => {
      state.pic = action.payload;
    },
    setRecoverEmail: (
      state: ChatState,
      action: PayloadAction<string | undefined>
    ) => {
      state.recoverEmail = action.payload;
    },
    setAds: (state: ChatState, action: PayloadAction<boolean>) => {
      state.ads = action.payload;
    },
    setIsCallStarted: (state: ChatState, action: PayloadAction<boolean>) => {
      state.isCallStarted = action.payload;
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
} = chatSlice.actions;

export default chatSlice.reducer;
