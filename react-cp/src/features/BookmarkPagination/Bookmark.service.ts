import axios from "axios";
export async function getArticleData() {
  try {
    let data = await axios.get("/assets/article.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (e: any) {
    console.log("Unable to fetch data");
    throw new Error(e.message);
  }
}
