export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white pt-32 pb-20"
        style={{ background: 'linear-gradient(135deg, oklch(0.35 0.18 250), oklch(0.42 0.16 240))' }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            TERMS OF SERVICE
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fadeInUp animate-delay-200">
            Please read these terms carefully before using our services
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
                <h2 className="text-3xl font-bold mb-4 text-primary">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Nexa Facilities Group (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Services Provided</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nexa Facilities Group provides professional HVAC/R maintenance, repair, and installation services for commercial facilities. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>HVAC system maintenance and repair</li>
                  <li>Refrigeration system services</li>
                  <li>Emergency repair services</li>
                  <li>System installation and project support</li>
                  <li>Preventive maintenance programs</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Service Agreements</h2>
                <h3 className="text-xl font-bold mb-3 text-foreground">Scheduling and Access</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to provide reasonable access to your facilities during scheduled service times. We will make reasonable efforts to arrive within scheduled time windows, but delays may occur due to emergency calls or unforeseen circumstances.
                </p>

                <h3 className="text-xl font-bold mb-3 text-foreground">Service Authorization</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You authorize us to perform services as requested and agreed upon. Additional work discovered during service may require separate authorization and pricing.
                </p>

                <h3 className="text-xl font-bold mb-3 text-foreground">Emergency Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Emergency service rates apply to after-hours, weekend, and holiday service calls. Emergency service is provided on a best-effort basis and subject to technician availability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Payment is due upon completion of service unless other arrangements have been made</li>
                  <li>We accept major credit cards, checks, and electronic payments</li>
                  <li>Past due invoices may be subject to late fees and interest charges</li>
                  <li>Prices quoted are valid for 30 days unless otherwise specified</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Warranties and Guarantees</h2>
                <h3 className="text-xl font-bold mb-3 text-foreground">Service Warranty</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We warrant that our services will be performed in a professional and workmanlike manner. If you are not satisfied with our service, please notify us within 30 days.
                </p>

                <h3 className="text-xl font-bold mb-3 text-foreground">Parts Warranty</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Parts installed by us are covered by the manufacturer&apos;s warranty. We will assist in warranty claims for defective parts.
                </p>

                <h3 className="text-xl font-bold mb-3 text-foreground">Limitation of Warranty</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not warrant against issues caused by misuse, neglect, unauthorized modifications, or normal wear and tear. Our liability is limited to the cost of the specific service performed.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We shall not be liable for any indirect, incidental, special, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid for the specific service in question</li>
                  <li>We are not responsible for pre-existing conditions or damage caused by third parties</li>
                  <li>We maintain appropriate insurance coverage for our operations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Service appointments may be cancelled or rescheduled with at least 24 hours notice. Cancellations with less than 24 hours notice may be subject to a cancellation fee. Emergency service calls cannot be cancelled once a technician has been dispatched.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Safety and Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We comply with all applicable safety regulations and industry standards. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide a safe working environment for our technicians</li>
                  <li>Disclose any known hazards or special conditions</li>
                  <li>Comply with any safety recommendations we provide</li>
                  <li>Ensure proper ventilation and access to equipment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of Nexa Facilities Group and protected by copyright and trademark laws. You may not use our content without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  We will maintain the confidentiality of your business information and facility access codes. You agree to keep confidential any proprietary information we share about our processes, pricing, or business operations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Nexa Facilities Group from any claims, damages, or expenses arising from your violation of these Terms or any applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms or our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the laws of Louisiana.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Louisiana, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Nexa Facilities Group</strong></p>
                  <p className="text-gray-700 mb-2">4308 Hudson Street</p>
                  <p className="text-gray-700 mb-2">Metairie, LA 70006</p>
                  <p className="text-gray-700 mb-2">Phone: 1-504-688-2541</p>
                  <p className="text-gray-700">Email: info@nexafacilitiesgroup.com</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Important:</strong> By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
