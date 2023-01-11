import type {
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";

export type RootStackParamList = {
  Landing: { user: string } | undefined;
  Home: undefined;
};

export type LandingScreenProps = StackScreenProps<
  RootStackParamList,
  "Landing"
>;

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export type LandingNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Landing"
>;
export type HomeNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Landing"
>;
