export const allTaskTypes = ["StartUp","Combat"] as const;

export type TaskType = (typeof allTaskTypes)[number];

export const allTaskTypesContent: Record<TaskType, string> = {
    "StartUp": "tasks.startUp",
    "Combat": "tasks.combat"
};

export type TaskState = "Pending" | "Running" | "Completed" | "Failed";

export default interface TaskStatus {
    id?: number;
    taskType: TaskType;
    state: TaskState;
}
