import { useState } from "react";

function useJson() {
  //   let [jsonData, setJsonData] = useState("");
  //   let [result, setResult] = useState("");
  //   let [error, setError] = useState("");
  //   let [formattedString, setFormattedString] = useState("");

  let [data, setData] = useState({
    result: "",
    error: "",
    formattedString: "",
  });
  function jsonValidator(jsonData: any) {
    try {
      JSON.parse(jsonData);
      setData({
        ...data,
        result: "Valid JSON",
        error: "",
        formattedString: "",
      });
    } catch (e: any) {
      setData({ error: e.message, result: "", formattedString: "" });
    }
  }

  function formatJson(jsonData: any) {
    try {
      let parsedData = JSON.parse(jsonData);
      setData({
        result: "",
        formattedString: JSON.stringify(parsedData, null, 2),
        error: "",
      });
    } catch (e: any) {
      setData({ error: e.message, formattedString: "", result: "" });
    }
  }

  function minifyJson(jsonData: any) {
    try {
      let parsedData = JSON.parse(jsonData);
      setData({
        result: "",
        formattedString: JSON.stringify(parsedData),
        error: "",
      });
    } catch (e: any) {
      setData({ error: e.message, formattedString: "", result: "" });
    }
  }
  function clearJson() {
    setData({ error: "", result: "", formattedString: "" });
  }
  return { data, formatJson, minifyJson, clearJson, jsonValidator };
}
export default useJson;
