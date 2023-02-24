import axios from "@/lib/axios";

export async function getCategory() {
  return await axios.get("/api/categories")
}
