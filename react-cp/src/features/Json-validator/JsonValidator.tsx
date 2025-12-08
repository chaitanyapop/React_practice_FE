import { useState } from "react";
import "./JsonValidator.css";
import useJson from "../../hooks/useJson";
function JsonValidator() {
  let [jsonData, setJsonData] = useState("");
  let { data, formatJson, minifyJson, clearJson, jsonValidator } = useJson();
  return (
    <div className="json-validator-container">
      <h2>JSON Validator</h2>
      <div className="json-validator-area">
        <textarea
          placeholder="Enter JSON data"
          className="text-area"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        ></textarea>
        <div className="buttons">
          <button
            onClick={() => {
              jsonValidator(jsonData);
            }}
            className="button"
            name="validate"
          >
            Validate
          </button>
          <button
            className="button"
            onClick={() => {
              minifyJson(jsonData);
            }}
          >
            Minify
          </button>
          <button
            className="button"
            onClick={() => {
              formatJson(jsonData);
            }}
          >
            Format
          </button>
          <button
            className="button"
            onClick={() => {
              setJsonData("");
              clearJson();
            }}
          >
            Clear
          </button>
        </div>
        <div>
          {data?.result && <p className="valid-json-result"> {data.result}</p>}
          {data?.error && <div className="error-result">{data.error}</div>}
        </div>
      </div>
      {data?.formattedString && (
        <div className="json-format">
          <pre>{data?.formattedString}</pre>
        </div>
      )}
    </div>
  );
}
export default JsonValidator;
