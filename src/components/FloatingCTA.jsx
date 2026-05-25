import { Link } from "react-router-dom";
import { MessageCircle, FileText } from "lucide-react";

function FloatingCTA() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:flex sm:flex-col sm:gap-3">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft sm:px-5 sm:text-base"
      >
        <MessageCircle size={18} aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        to="/contact#consultation"
        className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white shadow-soft sm:px-5 sm:text-base"
      >
        <FileText size={18} aria-hidden="true" />
        Get Quote
      </Link>
    </div>
  );
}

export default FloatingCTA;
