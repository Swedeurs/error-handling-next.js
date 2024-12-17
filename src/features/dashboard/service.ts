import { Db } from "@/db/db";

export const createService = (db: Db) => {
  return {
    async getAll() {
      return db;
    },
    async getOne() {
        return db[0][Math.floor(Math.random() * db[0].length )]
    },
    async addName(name: string) {
        return db[1].push(name)
    },
    async getLatestName() {
        return db[1][db[1].length - 1]
    }
  };
};