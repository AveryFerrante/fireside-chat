export interface Thread {
    id: string;
    participants: [{ id: string, name: string }];
    userIds: string[];
}
