import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-700 tracking-tight">
            About UsedPhones.com
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Your trusted marketplace for quality pre-owned mobile devices in Bangladesh.
          </p>
          <div className="mt-6 h-1.5 w-24 bg-teal-500 mx-auto rounded-full"></div>
        </header>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {/* Our Mission Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 text-left">
              Our Mission
            </h2>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-left">
              At UsedPhones.com, our mission is to create a secure, transparent, and user-friendly platform
              that connects buyers and sellers of pre-owned mobile phones. We aim to make high-quality
              smartphones accessible and affordable for everyone in Bangladesh, while promoting sustainability
              by giving devices a second life. We strive to empower our users with reliable information and
              a seamless trading experience.
            </p>
          </section>

          {/* Our Story Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 text-left">
              Our Story
            </h2>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-3 text-left">
              Founded in 2023, UsedPhones.com was born out of a simple observation:
              many people had perfectly good smartphones they no longer needed, while others were looking for
              reliable devices at a fair price. We saw an opportunity to bridge this gap, creating a dedicated
              marketplace that prioritizes trust and convenience for the Bangladeshi market.
            </p>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-left">
              Starting with a small team of passionate individuals based in Dhaka, we've grown into a leading platform,
              thanks to our commitment to customer satisfaction and continuous improvement. We are constantly
              innovating to make buying and selling used phones easier and safer for our community across all districts.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-left">
              Why Choose UsedPhones.com?
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Vast Selection in Bangladesh</h3>
                <p className="text-slate-700 leading-relaxed">
                  Find a wide range of brands and models, from budget-friendly options to high-end smartphones,
                  all available from sellers across Bangladesh.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Focus on Local Sellers</h3>
                <p className="text-slate-700 leading-relaxed">
                  We encourage seller verification and provide tools for safe local meetups to build trust and ensure a safer trading environment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Secure Trading Tips</h3>
                <p className="text-slate-700 leading-relaxed">
                  Our platform offers comprehensive guidelines and tips for safe transactions, emphasizing cash-on-delivery or secure local exchanges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Easy to Use Interface</h3>
                <p className="text-slate-700 leading-relaxed">
                  With intuitive navigation and powerful search filters, finding or listing a phone is quick and hassle-free, even on mobile data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Dedicated Support Team</h3>
                <p className="text-slate-700 leading-relaxed">
                  Our customer support team, fluent in Bangla and English, is here to assist you with any queries or issues you may encounter.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">Community Focused Growth</h3>
                <p className="text-slate-700 leading-relaxed">
                  We are committed to building a strong community of buyers and sellers in Bangladesh, fostering fair trade and clear communication.
                </p>
              </div>
            </div>
          </section>

          {/* Get in Touch Section */}
          <section className="text-center bg-teal-600 p-8 md:p-10 rounded-xl shadow-lg mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join Our Growing Community!
            </h2>
            <p className="text-teal-100 text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
              Whether you're looking to buy your next phone or sell an old one, UsedPhones.com is your go-to platform in Bangladesh.
              Explore our listings or post your ad today!
            </p>
            <div className="space-x-4">
                <a href="/allphones" className="inline-block bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-slate-100 transition-colors">
                    Browse Phones
                </a>
                {/* Assuming you have a route/page for adding a phone */}
                <a href="/dashboard/addproduct" className="inline-block bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-slate-700 transition-colors">
                    Sell Your Phone
                </a>
            </div>
          </section>
        </div>
        <div className="pb-10"></div> {/* Extra padding at the bottom */}
      </div>
    </div>
  );
};

export default About;
