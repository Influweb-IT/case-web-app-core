import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DialogWithoutPayload {
  type: string;
}

export interface LoginDialog {
  type: 'login'
  payload: {
    email: string
    password: string
    rememberMe: boolean
    verificationCode?: string
    preventNavigateOnSuccess?: boolean
  }
}

export interface AlertDialog {
  type: 'alertDialog'
  payload: {
    color: 'danger' | 'warning' | 'success'
    title: string
    content: string
    btn: string
  }
}

export interface DialogState {
  config?: DialogWithoutPayload | LoginDialog | AlertDialog
}

export let initialState: DialogState = {
  config: undefined
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    reset(state) {
      state = { ...initialState };
      return state;
    },
    closeDialog(state) {
      state.config = undefined
    },
    openDialogWithoutPayload(state, action: PayloadAction<string>) {
      state.config = {
        type: action.payload,
      }
    },
    openLoginDialog(state, action: PayloadAction<LoginDialog>) {
      state.config = {
        type: action.payload.type,
        payload: action.payload.payload
      }
    },
    openAlertDialog(state, action: PayloadAction<AlertDialog>) {
      state.config = {
        type: action.payload.type,
        payload: action.payload.payload
      }
    },
  }
})

export const dialogActions = dialogSlice.actions;

export default dialogSlice.reducer
