import { Thread } from '../../shared/models/thread';

export interface State {
    threads: Thread[];
    selectedThreadId: string;
    isLoading: boolean;
    error: string;
}

export const initialState: State = {
    threads: null,
    selectedThreadId: null,
    isLoading: false,
    error: null
};

export const featureKey = 'threads';
