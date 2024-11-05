// types/userTypes.ts

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  // Add more fields as necessary
}

export interface UserState {
  profile: UserProfile | null;
  error: string | null;
}
