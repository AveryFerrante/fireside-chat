import { AuthenticationState } from './authentication';

export interface State {
    authenticationState: AuthenticationState.State;
    clientState: ClientState;
}

export interface ClientState {
    userId: string;
}
