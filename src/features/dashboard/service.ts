import { Db } from "@/db/db";

export const createService = (db: Db) => {
  return {
    async getAll() {
      return db;
    },
    async getOne() {
      return db[0][Math.floor(Math.random() * db[0].length)];
    },
    async addName(name: string) {
      //throw new Error("Error is thrown in addName()");
      return db[1].push(name);
    },
    async getLatestName() {
      return db[1][db[1].length - 1];
    },
    async getAllNames() {
      return db[1];
    },
    async deleteName(name: string) {
      const index = db[1].indexOf(name);
      if (index > -1) {
        return db[1].splice(index, 1);
      }
    },
  };
};
