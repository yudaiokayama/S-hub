import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  profileImg: string;
  profileName: string;
  profileText: string;
  bio: string;
  phone: string;
  email: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    github: string;
    huggingface: string;
  };
}

const initialState: SettingsState = {
  profileImg: '',
  profileName: '',
  profileText: '',
  bio: '',
  phone: '',
  email: '',
  socialLinks: {
    instagram: '',
    facebook: '',
    linkedin: '',
    github: '',
    huggingface: '',
  },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateSettings: (state, action: PayloadAction<SettingsState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;