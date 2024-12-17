"use server";

import { revalidatePath } from "next/cache";
import { dashboardService } from "./instance";

export const onButtonClickAction = async (formData: FormData) => {
    const name = formData.get("name") as string;
    try {
        dashboardService.addName(name);
        throw new Error("Something went wrong");
    } catch (error) {
        console.error("fångar fel" + error);
        throw new Error("Something went wrong again" + error);
    }
  revalidatePath("/dashboard");
};
