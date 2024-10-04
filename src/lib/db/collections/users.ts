import type { Collection } from "mongodb";
import { db } from "../mongo"; 
import type { User } from "$lib/data/User";

export const users: Collection<User> = db.collection("users");