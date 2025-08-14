import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-news-dark mb-3">Contact Us</h1>
            <p className="text-muted-foreground text-lg">
              Have a question or feedback? Fill out the form below and we’ll get back to you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-news-border rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-news-dark mb-6 text-center">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-news-dark mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-news-dark mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-news-dark mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-news-dark mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button className="w-full h-12 text-lg font-medium">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
