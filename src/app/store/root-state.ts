export interface State {
    applicationData: ApplicationData;
    clientState: ClientState;
}

export interface ApplicationData {
    // This will grow as I create more application data types
    error: string;
}

export interface ClientState {
    userId: string;
}
