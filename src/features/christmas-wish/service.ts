import { Db } from "@/db/db";
import { nameSchema } from "./validation";
import { UnauthorizedError } from "@/libs/errors";

export const createService = (db: Db) => {
  return {
    async getAll() {
      return db[0];
    },
    async getOne() {
      return db[0][Math.floor(Math.random() * db[0].length)];
    },
    async addName(rawData: string) {
      //throw "Carloz"
      //throw new Error("Throws a new error")
      throw new UnauthorizedError("You are an intruder!! Go home!");
      const { name } = nameSchema.parse({ name: rawData });
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
