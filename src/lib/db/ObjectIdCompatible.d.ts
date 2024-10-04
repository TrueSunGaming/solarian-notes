import type { ObjectIdLike } from "bson";
import type { ObjectId } from "mongodb";

export type ObjectIdCompatible = string | number | ObjectId | ObjectIdLike | Uint8Array