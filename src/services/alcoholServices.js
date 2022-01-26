import baseAPI from "../api/api";

export async function getAlcohols() {
  const response = await baseAPI.get("/api/alcohols");
  console.log(response);
}
