import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { UserState } from '../models'
import { LocationGeocodedAddress } from 'expo-location'


// Define the initial state using that type
const initialState: UserState = {
  user: null,
  error: null,
  location: null,
}

export const usersSlice = createSlice({
  name: 'User',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateLocationAddress: (state, action: PayloadAction<LocationGeocodedAddress>) => {
      state.location = action.payload
    },
    setError: (state, action: PayloadAction<any>)=>{
      state.error = action.payload;
    }
  },
})

export const { updateLocationAddress, setError } = usersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.users;

export default usersSlice.reducer