import { useState } from "react";
import "./MessageNotification.css";
import { MessageIcon } from "./Icons";

interface MessageNotificationProps {
  message: string;
  onClose?: () => void;
}

const MessageNotification: React.FC<MessageNotificationProps> = ({
  message,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className="message-notification">
      <div className="message-notification__header">
        <div className="message-notification__app">
          <MessageIcon className="message-icon" />
          <span className="message-notification__title">MESSAGES</span>
        </div>

        <button
          className="message-notification__close"
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
      <div className="message-notification__body">
        {message}
      </div>
    </div>
  );
};

export default MessageNotification;
