import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const courses = [
  { title: "OSINT - Gathering and Analyses Methodologies", level: "Beginner", price: 999 },
  { title: "Non-Contact Warfare", level: "Beginner", price: 1199 },
  { title: "OSINT for Militancy and Terrorism", level: "Advanced", price: 1499 },
  { title: "Understanding Research Methodology and Techniques for IR", level: "Beginner", price: 899 },
  { title: "A Guide to Geo-Intelligence", level: "Advanced", price: 1299 },
  { title: "Understanding Pakistan's Playbook vis-a-vis India", level: "Beginner", price: 999 },
];

// ✅ Helper to load Razorpay SDK dynamically
const loadRazorpayScript = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState<null | { title: string; price: number }>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openPaymentModal = (course: { title: string; price: number }) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setFormData({ name: "", email: "" });
    setSuccessMessage("");
  };

  const handlePayment = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in your name and email before continuing.");
      return;
    }

    setLoading(true);
    const sdkLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!sdkLoaded) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      setLoading(false);
      return;
    }

    try {
      // ✅ Step 1: Create order from backend PHP API
      const orderResponse = await fetch("https://cnaws.in/payments/create_order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: selectedCourse?.price,
          courseName: selectedCourse?.title,
        }),
      });

      const orderData = await orderResponse.json();
      if (!orderData.orderId) {
        throw new Error("Failed to create order. Try again later.");
      }

      // ✅ Step 2: Configure Razorpay Checkout
      const options = {
        key: "rzp_test_yourkeyhere", // ⚠️ Replace with your Razorpay key
        amount: selectedCourse!.price * 100,
        currency: "INR",
        name: "CNAWS Academy",
        description: `Enrollment for ${selectedCourse!.title}`,
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: { color: "#2563EB" },

        // ✅ Step 3: After successful payment
        handler: async function (response: any) {
          const verifyRes = await fetch("https://cnaws.in/payments/verify_payment.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              name: formData.name,
              email: formData.email,
              course: selectedCourse!.title,
              amount: selectedCourse!.price,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.status === "success") {
            setSuccessMessage(
              `✅ Payment Successful! A confirmation email has been sent to ${formData.email}.`
            );
          } else {
            alert("❌ Payment verification failed. Please contact support.");
          }
        },

        // Optional: Handle payment close without completing
        modal: {
          ondismiss: function () {
            alert("Payment cancelled or closed.");
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong while processing your payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>CNAWS | Courses</title>
      </Helmet>

      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-6 py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-extrabold mb-4 text-news-dark dark:text-white">
            Courses
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore specialized national security and intelligence courses. Enroll securely using Razorpay.
          </p>
        </motion.div>

        {/* ✅ Course Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <span
                className={`inline-block mb-3 px-3 py-1 text-sm font-medium rounded-full ${
                  course.level === "Beginner"
                    ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                    : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                }`}
              >
                {course.level}
              </span>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                {course.level === "Beginner"
                  ? "A foundational course designed for learners new to this domain."
                  : "An advanced course for strategic professionals."}
              </p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                ₹{course.price}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openPaymentModal(course)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* ✅ Payment Modal */}
        <AnimatePresence>
          {selectedCourse && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96 max-w-full"
              >
                {!successMessage ? (
                  <>
                    <h2 className="text-2xl font-bold text-center mb-2 text-news-dark dark:text-white">
                      Enroll in {selectedCourse.title}
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                      Please provide your details to proceed.
                    </p>

                    <div className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="flex justify-between mt-6">
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-400 dark:hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-60"
                      >
                        {loading ? "Processing..." : "Proceed to Payment"}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-green-600">Payment Successful 🎉</h2>
                    <p className="text-gray-700 dark:text-gray-300">{successMessage}</p>
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Course;