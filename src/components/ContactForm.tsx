import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkpn";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
    } catch {
      toast({
        title: "Failed to send",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-10 text-center"
      >
        <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
        <p className="text-muted-foreground font-body">
          Your message has been sent. We'll be in touch soon.
        </p>
        <Button
          onClick={() => setSent(false)}
          variant="outline"
          className="mt-6"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-2xl p-8 space-y-5"
    >
      <div>
        <label htmlFor="name" className="block font-body text-sm font-medium text-charcoal mb-1.5">
          Your Name *
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-sm font-medium text-charcoal mb-1.5">
          Email Address *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block font-body text-sm font-medium text-charcoal mb-1.5">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="07799 614 260"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-charcoal mb-1.5">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about what you're interested in…"
          rows={5}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={sending} className="w-full gap-2">
        {sending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
