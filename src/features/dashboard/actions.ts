"use server";

import { revalidatePath } from "next/cache";
import { dashboardService } from "./instance";

export const onButtonClickAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);
  dashboardService.addName(name);
  revalidatePath("/dashboard");
};
