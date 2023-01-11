import { LocationGeocodedAddress } from "expo-location";

export interface UserModel{
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

export interface UserState{
  user: UserModel | null;
  location: LocationGeocodedAddress | null;
  error: string | null;
}