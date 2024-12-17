"use server";

import { revalidatePath } from "next/cache";
import { dashboardService } from "./instance";

export const onButtonClickAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  try {
    await dashboardService.addName(name);
  } catch (error) {
    throw error;
  }
  revalidatePath("/dashboard");
};
