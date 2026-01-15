import { useState, useEffect } from "react";
import "./MessageNotification.css";
import { MessageIcon } from "./Icons";

interface MessageNotificationProps {
  message: string;
  onClose?: () => void;
}

const STORAGE_KEY = "message-notification-closed";
const ANIMATION_KEY = "message-notification-animated";

const MessageNotification: React.FC<MessageNotificationProps> = ({
  message,
  onClose,
}) => {
  const [visible, setVisible] = useState(() => {
    const wasClosed = localStorage.getItem(STORAGE_KEY);
    return wasClosed !== "true";
  });

  const [shouldAnimate, setShouldAnimate] = useState(() => {
    const hasAnimated = localStorage.getItem(ANIMATION_KEY);
    return hasAnimated !== "true";
  });

  useEffect(() => {
    if (visible && shouldAnimate) {
      const timer = setTimeout(() => {
        localStorage.setItem(ANIMATION_KEY, "true");
        setShouldAnimate(false);
      }, 2300); 
      return () => clearTimeout(timer);
    }
  }, [visible, shouldAnimate]);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className={`msg ${shouldAnimate ? "msg-animate" : "msg-visible"}`}>
      <div className="msg-header">
        <div className="msg-app">
          <MessageIcon className="msg-icon" />
          <span className="msg-title">MESSAGES</span>
        </div>

        <button
          className="msg-close"
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
      <div className="msg-body">
        {message}
      </div>
    </div>
  );
};

export default MessageNotification;
