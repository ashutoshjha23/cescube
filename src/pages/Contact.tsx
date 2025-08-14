import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactEmail = "Contact@cnaws.in";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      "service_lol9hch",    
      "template_2b4tume",   
      formRef.current,
      "dfWjVDQY4S8zsvH__"     
    )
    .then(() => {
      setStatus("Message sent successfully!");
      formRef.current?.reset();
    })
    .catch(() => {
      setStatus("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-news-dark mb-3">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have a question or feedback? Fill out the form below and we’ll get back to you.
            </p>
          </div>

          <div className="mb-8 text-center bg-card border border-news-border rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-news-dark mb-2">Reach us directly at:</h2>
            <a
              href={`mailto:${contactEmail}`}
              className="text-news-primary font-medium text-lg hover:underline"
            >
              {contactEmail}
            </a>
          </div>

          <div className="bg-card border border-news-border rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-news-dark mb-6 text-center">
              Send us a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-news-dark mb-2">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your full name" className="h-12" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-news-dark mb-2">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" className="h-12" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-news-dark mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Message subject" className="h-12" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-news-dark mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={6} className="resize-none" />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-medium">
                Send Message
              </Button>

              {status && <p className="mt-4 text-center text-news-primary">{status}</p>}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
