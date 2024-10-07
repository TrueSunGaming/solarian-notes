import type { Collection } from "mongodb";
import { db } from "../mongo"; 
import type { Folder } from "$lib/data/Folder";

export const folders: Collection<Folder> = db.collection("folders");