import { Db } from "@/db/db";

export const createService = (db: Db) => {
  return {
    async getAll() {
      return db[0];
    },
  };
};
