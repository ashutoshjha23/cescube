import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-news-dark mb-2">Contact Us</h1>
            <p className="text-muted-foreground">Get in touch with our editorial team</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-news-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-news-dark mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-news-dark mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-news-dark mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-news-dark mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-news-dark mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={6} />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card border border-news-border rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-news-dark mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-news-primary" />
                    <div>
                      <p className="font-medium text-news-dark">Email</p>
                      <p className="text-muted-foreground">contact@CNAWS.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-news-primary" />
                    <div>
                      <p className="font-medium text-news-dark">Phone</p>
                      <p className="text-muted-foreground">+91 8278652404</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-news-primary" />
                    <div>
                      <p className="font-medium text-news-dark">Address</p>
                      <p className="text-muted-foreground">no. 23<br />mera ghar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-news-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-news-dark mb-4">Editorial Guidelines</h3>
                <p className="text-muted-foreground mb-4">
                  We welcome story tips, press releases, and news submissions. Please ensure all submissions include:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Accurate and verifiable information</li>
                  <li>• Contact details for follow-up</li>
                  <li>• Relevant supporting documents</li>
                  <li>• Clear and concise writing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;