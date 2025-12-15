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


does react automatically handles xss ?
Yes — **React automatically protects you from MOST XSS attacks**, but **not all**.
Let’s break this down clearly so you understand exactly what React does and what it does *not* do.

---

# ✅ **YES — React automatically escapes user input**

When you write:

```jsx
<div>{userInput}</div>
```

React automatically converts:

```
<script>alert(1)</script>
```

into:

```
&lt;script&gt;alert(1)&lt;/script&gt;
```

So the browser **shows it as text**, not HTML.

Meaning:

### ✔ No script executes

### ✔ No XSS happens

This is React’s biggest built-in security feature.

---

# 🤝 **React is safe by default because:**

### ✔ It NEVER uses `innerHTML` internally

### ✔ It ALWAYS escapes dangerous characters

### ✔ It sanitizes URLs (like blocking `javascript:` URLs in `<a>` or `<img>`)

### ✔ It prevents event handler injection (like `onerror=`)

---

# ❌ BUT — React does NOT protect you in these cases:

## 1️⃣ **When you use `dangerouslySetInnerHTML`**

This is the **main hole** where XSS can enter.

```jsx
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

If `userInput` contains:

```
<script>alert("hacked")</script>
```

→ React will render it
→ Browser executes it
🔥 XSS happens

React intentionally names it **dangerously** to warn developers.

---

## 2️⃣ **When your own JS inserts HTML using DOM APIs**

React protects React code, not **your manual DOM manipulations**.

Example:

```js
document.body.innerHTML = userInput;
```

This bypasses React and allows XSS.

---

## 3️⃣ **When you expose unsafe endpoints (server-side XSS)**

React cannot protect you from:

* Stored XSS (coming from DB)
* Reflected XSS (coming from server response)
* API returning unsafe HTML

If you fetch HTML from the backend and render it → React cannot stop the XSS.

---

# ⭐ So the correct answer is:

## ❗ React protects you from XSS **unless you bypass its safety**.

React protects you from:

| XSS Type                        | Protected? |
| ------------------------------- | ---------- |
| Inner text                      | ✔ Yes      |
| Attributes                      | ✔ Yes      |
| URL injection                   | ✔ Yes      |
| JSX rendering                   | ✔ Yes      |
| Using `dangerouslySetInnerHTML` | ❌ No       |
| Inserting HTML manually         | ❌ No       |
| Backend sending unsafe HTML     | ❌ No       |

---

# 🧠 Example PROOF: React escaping user input

```jsx
<div>{'<img src=x onerror="alert(1)">'} </div>
```

Output is:

```
<img src=x onerror="alert(1)">
```

AS TEXT — not executed.

---

# ⭐ Conclusion

### ✔ React is safe *by default*

### ❌ React is unsafe when YOU bypass safety

### ✔ Use DOMPurify when rendering HTML

### ✔ Avoid `dangerouslySetInnerHTML` unless absolutely necessary

---

If you want, I can explain exactly **how React escapes HTML internally**, or how modern frameworks like Angular/Vue handle XSS differently.


 */
