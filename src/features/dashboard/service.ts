import { Db } from "@/db/db";

export const createService = (db: Db) => {
  return {
    async getAll() {
      return db;
    },
    async getOne() {
        return db[Math.floor(Math.random() * db.length )]
    }
  };
};
