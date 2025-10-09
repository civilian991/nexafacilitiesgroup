export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white pt-32 pb-20"
        style={{ background: 'linear-gradient(135deg, oklch(0.35 0.18 250), oklch(0.42 0.16 240))' }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            PRIVACY POLICY
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fadeInUp animate-delay-200">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nexa Facilities Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Information We Collect</h2>
                <h3 className="text-xl font-bold mb-3 text-foreground">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Contact us through our website or phone</li>
                  <li>Request service or information</li>
                  <li>Subscribe to our communications</li>
                  <li>Fill out forms on our website</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This information may include your name, email address, phone number, company name, location, and service details.
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Send you service updates and maintenance schedules</li>
                  <li>Improve our website and services</li>
                  <li>Communicate with you about our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Children&apos;s Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Nexa Facilities Group</strong></p>
                  <p className="text-gray-700 mb-2">4308 Hudson Street</p>
                  <p className="text-gray-700 mb-2">Metairie, LA 70006</p>
                  <p className="text-gray-700 mb-2">Phone: 1-504-688-2541</p>
                  <p className="text-gray-700">Email: info@nexafacilitiesgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
