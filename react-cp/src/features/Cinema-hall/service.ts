import axios from "axios";

export async function getSeatLayoutData() {
  try {
    let response = await axios.get("./assets/seats.json", {
      headers: {
        "content-type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to load seat layout"
    );
  }
}
