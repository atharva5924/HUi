import React from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      title: "All in one solution for my crypto needs",
      quote:
        "This app makes managing my portfolio so easy. I love the real-time updates and seamless transactions. It's the best crypto app I've ever used!",
      name: "Sophia Tia",
      role: "Crypto Enthusiast",
      image: "https://via.placeholder.com/50", // Replace with real image URL
    },
    {
      id: 2,
      title: "A must-have for serious investors",
      quote:
        "As someone who actively trades and invests in cryptocurrencies, I needed a platform that could keep up with my pace. This app delivers in every way.",
      name: "Ethan Robert",
      role: "Professional Trader",
      image: "https://via.placeholder.com/50", // Replace with real image URL
    },
    {
      id: 3,
      title: "Secure and beginner-friendly",
      quote:
        "As someone new to crypto, I was intimidated at first, but this app made everything straightforward. The tutorials helped me start trading with confidence.",
      name: "Emma Lindsay",
      role: "First-Time Trader",
      image: "https://via.placeholder.com/50", // Replace with real image URL
    },
  ];

  return (
    <section className=" text-white  py-16">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-lg text-blue-400 uppercase">Testimonials</p>
          <h2 className="text-3xl font-bold">
            Trusted by Crypto Enthusiasts
          </h2>
          <p className="mt-4 text-gray-400">
            Join thousands of users who trust us to manage their online
            Shopping.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex border-solid border-white">
  {testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="border border-red-900 p-6 mx-3 rounded-xl shadow-xl" // Add border and border-white classes here
    >
      <h3 className="text-xl font-bold mb-4">
        {testimonial.title}
      </h3>
      <p className="text-gray-400 italic mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center space-x-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
