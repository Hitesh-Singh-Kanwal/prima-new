import PageShell from "../components/PageShell";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Privacy Policy | PrimaLabs",
  description:
    "How PrimaLabs collects, uses, and protects your information when you use our Services.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageShell>
        <article className="legal-doc">
        <h1 className="legal-doc-title">Privacy Policy</h1>
        <p className="legal-doc-effective">Effective Date: January 1, 2025</p>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            PrimaLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our hardware-in-the-loop AI optimization platform and related
            services (collectively, the &quot;Services&quot;). Please read this Privacy Policy carefully. If
            you do not agree with the terms of this Privacy Policy, please do not access the Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide to Us</h3>
          <p>We collect information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for an account or request a demo</li>
            <li>Use our Services or interact with our platform</li>
            <li>Contact us for support or inquiries</li>
            <li>Subscribe to our newsletters or marketing communications</li>
          </ul>
          <p>
            This information may include your name, email address, company name, job title, phone
            number, and any other information you choose to provide.
          </p>

          <h3>2.2 Technical and Usage Information</h3>
          <p>
            When you use our Services, we automatically collect certain technical and usage
            information, including:
          </p>
          <ul>
            <li>Hardware configuration data and system specifications</li>
            <li>AI workload parameters and optimization metrics</li>
            <li>Performance benchmarks and efficiency measurements</li>
            <li>IP addresses, browser type, and device information</li>
            <li>Log data, cookies, and similar tracking technologies</li>
          </ul>

          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, and similar tracking technologies to collect information about
            your browsing activities and preferences. You can control cookie settings through your
            browser preferences, but disabling cookies may limit your ability to use certain features
            of our Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our Services</li>
            <li>Optimize AI configurations and improve platform performance</li>
            <li>Process and complete transactions</li>
            <li>Send administrative information, updates, and security alerts</li>
            <li>Respond to customer service requests and provide support</li>
            <li>Analyze usage patterns and improve our Services</li>
            <li>Conduct research and development for new features</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Comply with legal obligations and enforce our terms</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with third-party vendors
              and service providers who perform services on our behalf, such as cloud hosting, data
              analytics, payment processing, and customer support
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with any merger, sale, acquisition,
              or transfer of all or a portion of our business assets
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, subpoena, or other legal
              process, or when necessary to protect our rights, safety, or property, or that of
              others
            </li>
            <li>
              <strong>With Your Consent:</strong> When you provide explicit consent to share your
              information with third parties
            </li>
            <li>
              <strong>Aggregated Data:</strong> We may share aggregated or de-identified information
              that cannot reasonably be used to identify you
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your
            information against unauthorized access, alteration, disclosure, or destruction. These
            measures include encryption in transit and at rest, access controls, secure data centers,
            regular security assessments, and employee training on data protection. However, no method
            of transmission over the internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security. You are responsible for maintaining the security of your
            account credentials.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the purposes outlined in
            this Privacy Policy, unless a longer retention period is required or permitted by law.
            When determining retention periods, we consider factors such as the nature of the
            information, the purposes for which it was collected, and applicable legal requirements.
            When we no longer need your information, we will securely delete or anonymize it in
            accordance with our data retention policies.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information,
            including:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> Request access to and receive a copy of your personal
              information
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal information, subject to
              certain exceptions
            </li>
            <li>
              <strong>Objection:</strong> Object to certain processing activities, including direct
              marketing
            </li>
            <li>
              <strong>Restriction:</strong> Request restriction of processing in certain circumstances
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your information to another service
              provider
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at
              any time
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@primalabs.ai">privacy@primalabs.ai</a>. We will respond to your
            request within the timeframe required by applicable law. You also have the right to lodge
            a complaint with a supervisory authority if you believe we have violated your privacy
            rights.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your
            country of residence, including the United States. These countries may have data
            protection laws that differ from those in your jurisdiction. When we transfer information
            internationally, we implement appropriate safeguards to ensure your information receives
            adequate protection in accordance with this Privacy Policy and applicable law. These
            safeguards may include Standard Contractual Clauses approved by the European Commission
            or other legally recognized transfer mechanisms.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for individuals under the age of 18. We do not knowingly
            collect personal information from children under 18. If you are a parent or guardian and
            believe we have collected information from a child under 18, please contact us immediately
            at <a href="mailto:privacy@primalabs.ai">privacy@primalabs.ai</a>, and we will take steps
            to delete such information.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Third-Party Links and Services</h2>
          <p>
            Our Services may contain links to third-party websites, applications, or services that
            are not operated by us. This Privacy Policy does not apply to such third-party services.
            We encourage you to review the privacy policies of any third-party services before
            providing them with your information. We are not responsible for the privacy practices or
            content of third parties.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have additional rights under the California Consumer
            Privacy Act (CCPA), including:
          </p>
          <ul>
            <li>The right to know what personal information we collect, use, disclose, and sell</li>
            <li>The right to request deletion of your personal information</li>
            <li>
              The right to opt-out of the sale of your personal information (we do not sell personal
              information)
            </li>
            <li>The right to non-discrimination for exercising your CCPA rights</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href="mailto:privacy@primalabs.ai">privacy@primalabs.ai</a> or call us at{" "}
            <span className="legal-placeholder">[phone number]</span>. We will verify your identity
            before processing your request.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. European Privacy Rights (GDPR)</h2>
          <p>
            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland,
            you have additional rights under the General Data Protection Regulation (GDPR), including
            the right to lodge a complaint with your local data protection authority. We process your
            personal information based on legal grounds such as consent, contractual necessity,
            legitimate interests, or compliance with legal obligations. For questions about our GDPR
            compliance or to exercise your rights, please contact{" "}
            <a href="mailto:privacy@primalabs.ai">privacy@primalabs.ai</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements, or other factors. We will notify you of any material
            changes by posting the new Privacy Policy on our website and updating the &quot;Effective
            Date&quot; above. For significant changes, we may provide additional notice, such as through
            email or a prominent notice on our Services. Your continued use of the Services after such
            changes constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy
            practices, please contact us at:
          </p>
          <address className="legal-address">
            PrimaLabs
            <br />
            Email:{" "}
            <a href="mailto:privacy@primalabs.ai">privacy@primalabs.ai</a>
          </address>
          <p>We will respond to your inquiry as soon as reasonably possible.</p>
        </section>
      </article>
      </PageShell>
      <SiteFooter />
    </>
  );
}
