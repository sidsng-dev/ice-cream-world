import { Check, X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <div className="fixed right-5 top-24 z-[100] flex w-[calc(100%-2.5rem)] max-w-sm items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow-xl">

      {/* Success Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100">
        <Check
          size={18}
          className="text-green-600"
        />
      </div>

      {/* Message */}
      <p className="flex-1 text-sm font-semibold text-gray-800">
        {message}
      </p>

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
        aria-label="Close notification"
      >
        <X size={17} />
      </button>

    </div>
  );
};

export default Toast;