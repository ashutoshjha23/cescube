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
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-news-dark dark:text-white mb-3">Contact Us</h1>
            <p className="text-muted-foreground dark:text-gray-300 text-lg">
              Have a question or feedback? Fill out the form below and we'll get back to you.
            </p>
          </div>

          <div className="mb-8 text-center bg-card dark:bg-gray-800 border border-news-border dark:border-gray-700 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-news-dark dark:text-white mb-2">Reach us directly at:</h2>
            <a
              href={`mailto:${contactEmail}`}
              className="text-news-primary dark:text-blue-400 font-medium text-lg hover:underline"
            >
              {contactEmail}
            </a>
          </div>

          <div className="bg-card dark:bg-gray-800 border border-news-border dark:border-gray-700 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-news-dark dark:text-white mb-6 text-center">
              Send us a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-news-dark dark:text-gray-200 mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your full name" 
                  className="h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-news-dark dark:text-gray-200 mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-news-dark dark:text-gray-200 mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Message subject" 
                  className="h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-news-dark dark:text-gray-200 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message..." 
                  rows={6} 
                  className="resize-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg font-medium bg-news-primary hover:bg-news-primary/90 text-white">
                Send Message
              </Button>

              {status && <p className="mt-4 text-center text-news-primary dark:text-blue-400">{status}</p>}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
