"use server";

import { revalidatePath } from "next/cache";
import { christmasWishService } from "./instance";
import { errorHandler } from "@/libs/error-handler";
import type { CustomError } from "@/libs/types";

export const onButtonClickAction = async (formData: FormData) => {
  const name = formData.get("name") as string;

  try {
    await christmasWishService.addName(name);
  } catch (error) {
    errorHandler(error as CustomError);    
  }

  revalidatePath("/dashboard");
};
