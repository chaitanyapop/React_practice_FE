import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaRedditAlien,
  FaEnvelope,
  FaDiscord,
  FaLink,
} from "react-icons/fa";
import "./SocialShare.css";
import { useState } from "react";
import TosterReusable from "../../components/TosterReusable";
function SocialShare() {
  let shareText = encodeURIComponent("Check this out");
  let [pageUrl, setPageUrl] = useState("");
  let [showToster, setToster] = useState(false);
  let logoArray = [
    { name: "facebook", icon: FaFacebookF },
    { name: "linkedin", icon: FaLinkedinIn },
    { name: "whatsapp", icon: FaWhatsapp },
    { name: "telegram", icon: FaTelegramPlane },
    { name: "reddit", icon: FaRedditAlien },
    { name: "email", icon: FaEnvelope },
    { name: "discord", icon: FaDiscord },
  ];
  const shareUrls: any = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${pageUrl}`,
    telegram: `https://t.me/share/url?url=${pageUrl}&text=${shareText}`,
    reddit: `https://www.reddit.com/submit?url=${pageUrl}&title=${shareText}`,
    email: `mailto:?subject=${shareText}&body=${pageUrl}`,
  };

  function addUrl(e: any) {
    setToster(false);
    setPageUrl(() => {
      let data = encodeURIComponent(e.target.value);
      return data;
    });
  }
  function openWindow(name: any) {
    window.open(
      shareUrls[name],
      "_blank",
      "width=500,height=500,left=200,top=200",
    );
  }
  return (
    <div className="social-share-parent">
      <div className="social-logos-links">
        {logoArray.map(({ name, icon: Icon }, i: any) => {
          return (
            <button
              aria-label={name}
              key={i}
              className={`icon-buttons ${name} `}
              onClick={() => {
                openWindow(name);
              }}
            >
              <Icon></Icon>
            </button>
          );
        })}
      </div>
      <h3>Or copy Link:</h3>
      <div className="copy-link-section">
        <FaLink className="link-icon" />
        <input type="text" value={pageUrl} onChange={addUrl} />
        <button
          onClick={() => {
            setToster(true);
          }}
        >
          Copy Link
        </button>
      </div>
      {showToster && (
        <TosterReusable message="Link copied" color="green"></TosterReusable>
      )}
    </div>
  );
}
export default SocialShare;
