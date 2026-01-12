import axios from "axios";

export async function fetchQuestion() {
  try {
    let data = await axios.get("./assets/quiz.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (err: any) {
    console.log("Error in fetching data");
    throw new Error("Unable to fetch data", err);
  }
}
