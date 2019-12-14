import { User } from '../shared/models/user';

export interface State {
    user: User;
    clientState: ClientState;
}

export interface ClientState {
    userId: string;
}
