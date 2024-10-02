import { startMongo } from "$lib/db/mongo";

startMongo().then(() => console.log("Mongo started."));