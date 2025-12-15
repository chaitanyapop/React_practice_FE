import { useState } from "react";
import "./MarkDown.css";
import { marked } from "marked"; // this library is used to change the user input text into html so that is user type **hello** then html it will create will be <strong>hello</strong>
import DOMPurify from "dompurify";
function MarkDown() {
  let [markedData, setMarkedData] = useState<any>();

  function handleUserInput(e: any) {
    let dirtyData: any = marked(e.target.value);
    let purifiedData: any = DOMPurify.sanitize(dirtyData); // here we purify user input to prevent XSS attack so that user will not be able to inject malicious JS in textbox
    setMarkedData(purifiedData);
  }
  return (
    <div className="markdown-container">
      <div className="markdown-input-side">
        <h2 className="tab-header">Markdown Input</h2>
        <textarea
          placeholder="Enter content"
          className="user-input"
          onChange={handleUserInput}
        ></textarea>
      </div>
      <div className="markdown-live-preview">
        <h2 className="tab-header">Live Preview</h2>
        <div
          className="user-input"
          dangerouslySetInnerHTML={{ __html: markedData }}
        ></div>
      </div>
    </div>
  );
}
export default MarkDown;

/**
 * XSS (Cross-Site Scripting) is when malicious JavaScript is injected into a 
web page and executed by the victim’s browser.

1) Stored XSS:
   - Malicious script is entered into a web app (e.g., comments)
   - Stored in the database
   - Served to other users and executed in their browsers

2) Reflected XSS:
   - Malicious script is sent in a request (URL / form)
   - Server reflects it back in the response
   - Browser executes it immediately

3) DOM-Based XSS:
   - Malicious script is injected into the browser environment (URL/hash)
   - Client-side JavaScript reads it and writes it to the DOM
   - Browser executes it

   Prevention-
   ✔ React prevents XSS automatically by escaping everything.
✔ XSS happens only when you bypass safety.
✔ Always sanitize HTML before injecting it.
✔ CSP + HttpOnly cookies add strong additional protection.

Rule - 
1) Never inject raw HTML — sanitize it first
2) Prefer textContent over innerHTML
3) Use HttpOnly cookies
4) 4. Implement Content Security Policy (CSP)

CSP tells the browser:

"Do NOT run inline scripts. Only load scripts from allowed domains."

Example header:

Content-Security-Policy: script-src 'self';


This blocks most XSS payloads.

5) 5. Escape user input on backend

Before returning text to frontend, escape characters:

< → &lt;

> → &gt;

" → &quot;

Frameworks like Express, Django, and Rails have built-in escaping.

 */
