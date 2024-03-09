export interface ITask {
    id: bigint;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ITaskPayload {
    title: string;
    description?: string;
}