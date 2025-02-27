import React from "react";

interface ModalProps {
  isOpen: boolean;
  videoUrl: string;
  exerciseTitle: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoUrl, onClose,exerciseTitle }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 md:p-0"
      onClick={onClose}
    >
      <div
        className="bg-white p-2 md:p-4 rounded-lg shadow-lg max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}  // Bu satır modal içindeki tıklamaları engeller
      >
        <div className="flex justify-between items-center mb-0 md:mb-2">
          <h2 className="text-xl font-semibold">{exerciseTitle}</h2>
          <button onClick={onClose} >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#00d172" d="m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"/></svg>
          </button>
        </div>
        <div >
          <iframe
            className="w-full h-96"
            src={videoUrl}
            title="Egzersiz Videosu"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
  
}
