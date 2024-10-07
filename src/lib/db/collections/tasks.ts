import type { Collection } from "mongodb";
import { db } from "../mongo"; 
import type { Task } from "$lib/data/Task";

export const tasks: Collection<Task> = db.collection("tasks");