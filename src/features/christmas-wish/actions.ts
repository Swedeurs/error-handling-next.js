"use server";

import { revalidatePath } from "next/cache";
import { christmasWishService } from "./instance";
import { errorHandler } from "@/libs/error-handler";

export const onButtonClickAction = async (formData: FormData) => {
  const name = formData.get("name") as string;

  try {
    await christmasWishService.addName(name);
  } catch (error) {
    errorHandler(error);    
  }

  revalidatePath("/dashboard");
};
