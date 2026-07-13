"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./SocialIcon";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink("Hello! I'd like to get in touch with The Community.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 left-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
