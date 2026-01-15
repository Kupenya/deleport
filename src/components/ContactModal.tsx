import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      const subject = `Contact from ${formData.name}`;
      const body = `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
      
      // Open default mail client
      window.location.href = `mailto:thefirepage1.0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setIsSubmitting(false);
      onClose();
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-150"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-151 pointer-events-none p-4"
          >
            <div className="bg-zinc-900 border border-white/10 w-full max-w-lg p-8 rounded-sm pointer-events-auto shadow-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Get in Touch</h3>
              <p className="text-secondary text-sm mb-8">Send me a message and I'll get back to you.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-secondary font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-white/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent/80 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
