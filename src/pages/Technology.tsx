const GoogleMapPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Location</h1>
      <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160987997!2d72.74109826238341!3d19.082197839746393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f1b09d08b%3A0x1ef59bb5b40d4f3a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapPage;
