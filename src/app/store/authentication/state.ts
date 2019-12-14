import { User } from 'src/app/shared/models/user';


export interface State {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

export const initialState: State = {
    user: null,
    isLoading: false,
    error: null
};

export const featureKey = 'user';
