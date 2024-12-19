import { db } from "@/db/db";
import { createService } from "./service";

export const giftsService = createService(db);
