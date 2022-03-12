import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getYouTube } from '../../api/initialApi'
import { youtubeType } from '../../types'

export interface InitialState {
  youtube: youtubeType | null
  isLoading: boolean
  error: string | null
}

const initialState: InitialState = {
  youtube: null,
  isLoading: false,
  error: null,
}

export const fetchYoutube = createAsyncThunk('initial/fetchYoutube', async (_, thunkAPI) => {
  try {
    const response = await getYouTube()
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
})

export const InitialSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchYoutube.fulfilled.type]: (state, action: PayloadAction<youtubeType>) => {
      state.isLoading = false
      state.error = null
      state.youtube = action.payload.reverse()
    },
    [fetchYoutube.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchYoutube.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {} = InitialSlice.actions

export default InitialSlice.reducer
