import type { DataReferenceData } from "./DataReferenceData";
import type { DataType } from "./DataType";
import type { SubtaskCompletionRequirement } from "./SubtaskCompletionRequirement";

type BaseTask = WithCreator<{
    title: string;
    description: string;
    subtasks: DataReferenceData<DataType.Task>[];
}>;

interface SomeRequiredTask extends BaseTask {
    subtaskRequirement: SubtaskCompletionRequirement.SomeComplete;
    minimumSubtasks: number;
    requiredSubtasks: string[];
}

interface OtherRequiredTask extends BaseTask {
    subtaskRequirement: Exclude<SubtaskCompletionRequirement, SubtaskCompletionRequirement.SomeComplete>;
}

export type Task = SomeRequiredTask | OtherRequiredTask;