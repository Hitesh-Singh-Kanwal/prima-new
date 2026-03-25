import Link from "next/link";
import PageShell from "../components/PageShell";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Terms and Conditions | PrimaLabs",
  description:
    "Terms governing your use of the PrimaLabs hardware-in-the-loop AI optimization platform and related services.",
};

export default function TermsPage() {
  return (
    <>
      <PageShell>
        <article className="legal-doc">
        <h1 className="legal-doc-title">Terms and Conditions</h1>
        <p className="legal-doc-effective">Effective Date: January 1, 2025</p>

        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you
            (&quot;you,&quot; &quot;your,&quot; or &quot;User&quot;) and PrimaLabs (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            concerning your access to and use of our hardware-in-the-loop AI optimization platform and
            related services (collectively, the &quot;Services&quot;). By accessing or using the Services, you agree
            to be bound by these Terms and our{" "}
            <Link href="/privacy">Privacy Policy</Link>, which is incorporated by reference. If you do not
            agree to these Terms, you may not access or use the Services.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and have the legal capacity to enter into binding contracts to
            use our Services. By using the Services, you represent and warrant that you meet these eligibility
            requirements and that all information you provide is accurate and truthful. If you are using the
            Services on behalf of an organization, company, or other legal entity, you represent and warrant
            that you have the authority to bind that entity to these Terms, and references to &quot;you&quot; in these
            Terms will refer to that entity.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Account Registration and Security</h2>

          <h3>3.1 Account Creation</h3>
          <p>
            To access certain features of the Services, you may be required to register for an account. When
            creating an account, you agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information to keep it accurate and current</li>
            <li>Maintain the security and confidentiality of your login credentials</li>
            <li>Not share your account credentials with any third party</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>

          <h3>3.2 Account Security</h3>
          <p>
            You are responsible for maintaining the security of your account and password. You must notify us
            immediately at{" "}
            <a href="mailto:security@primalabs.ai">security@primalabs.ai</a> of any unauthorized access,
            use, or security breach involving your account. We will not be liable for any loss or damage
            arising from your failure to comply with these security obligations.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. License Grant and Restrictions</h2>

          <h3>4.1 License Grant</h3>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
            non-transferable, non-sublicensable, and revocable license to access and use the Services for
            your internal business purposes during the term of your subscription. This license does not
            include any right to resell, redistribute, modify, or create derivative works based on the
            Services or any portion thereof.
          </p>

          <h3>4.2 Prohibited Uses</h3>
          <p>You agree not to:</p>
          <ul>
            <li>
              Reverse engineer, decompile, disassemble, or attempt to derive the source code of any component
              of the Services
            </li>
            <li>Use the Services for any unlawful purpose or in violation of any applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems, networks, or any user accounts</li>
            <li>
              Interfere with, disrupt, or impose an unreasonable burden on the integrity or performance of
              the Services
            </li>
            <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Services</li>
            <li>Use the Services to develop, support, or operate competing products or services</li>
            <li>Transmit any viruses, malware, or other malicious code through the Services</li>
            <li>
              Use automated tools, bots, or scrapers to access the Services without our prior written consent
            </li>
            <li>
              Violate any third-party rights, including intellectual property, privacy, or publicity rights
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Intellectual Property Rights</h2>

          <h3>5.1 Our Intellectual Property</h3>
          <p>
            The Services, including all software, algorithms, machine learning models, technology, content,
            user interfaces, visual designs, trademarks, logos, and other intellectual property, are owned
            by PrimaLabs or our licensors and are protected by United States and international copyright,
            trademark, patent, trade secret, and other intellectual property laws. You acknowledge that we
            retain all rights, title, and interest in and to the Services, and you do not acquire any ownership
            rights by using the Services. The PrimaLabs name, logo, and all related names, logos, product and
            service names, designs, and slogans are trademarks of PrimaLabs or our affiliates. You may not use
            these marks without our prior written permission.
          </p>

          <h3>5.2 Feedback</h3>
          <p>
            If you provide us with any feedback, suggestions, or ideas regarding the Services
            (&quot;Feedback&quot;), you grant us a worldwide, perpetual, irrevocable, royalty-free license to use,
            modify, and incorporate such Feedback into our Services without any obligation to compensate you
            or provide attribution.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. User Content and Data</h2>

          <h3>6.1 Your Data</h3>
          <p>
            You retain all ownership rights to any data, content, configurations, or information you submit
            to or through the Services (&quot;Your Data&quot;). By submitting Your Data, you grant us a worldwide,
            non-exclusive, royalty-free, transferable license to use, store, process, copy, modify, and
            analyze Your Data solely to: (a) provide and improve the Services, (b) develop and train our
            machine learning models and algorithms, (c) generate aggregated and anonymized analytics and
            benchmarks, and (d) comply with applicable laws. We will handle Your Data in accordance with our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h3>6.2 Data Accuracy and Compliance</h3>
          <p>
            You represent and warrant that: (a) you have all necessary rights and permissions to submit Your
            Data to the Services, (b) Your Data does not violate any applicable laws or third-party rights, and
            (c) Your Data does not contain any viruses, malware, or other harmful code. You are solely
            responsible for the accuracy, quality, and legality of Your Data.
          </p>

          <h3>6.3 Data Security and Backups</h3>
          <p>
            We implement industry-standard security measures to protect Your Data as described in our{" "}
            <Link href="/privacy">Privacy Policy</Link>. However, you acknowledge that no system is completely
            secure, and we cannot guarantee the absolute security or prevent unauthorized access to Your Data.
            You are responsible for maintaining appropriate security measures for your own systems and creating
            independent backups of Your Data. We are not responsible for any loss, corruption, or unauthorized
            access to Your Data resulting from circumstances beyond our reasonable control.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Fees, Payment, and Subscription Terms</h2>

          <h3>7.1 Subscription Fees</h3>
          <p>
            If you subscribe to a paid tier of the Services, you agree to pay all applicable subscription fees
            and charges according to the pricing and payment terms presented to you at the time of purchase.
            Fees are billed in advance on a recurring basis (monthly, annually, or as otherwise specified)
            and are non-refundable except as expressly provided in these Terms or required by law.
          </p>

          <h3>7.2 Payment Terms</h3>
          <p>You agree to the following payment terms:</p>
          <ul>
            <li>Provide current, complete, and accurate billing and payment information</li>
            <li>Promptly update all payment information to keep it current and valid</li>
            <li>Authorize us to charge your designated payment method for all fees and charges</li>
            <li>Pay all applicable taxes associated with your use of the Services</li>
          </ul>

          <h3>7.3 Price Changes</h3>
          <p>
            We reserve the right to change our pricing at any time. We will provide you with at least 30
            days&apos; advance notice of any price changes that affect your subscription. If you do not agree to
            the price change, you may cancel your subscription before the new price takes effect. Continued use
            of the Services after the price change becomes effective constitutes your acceptance of the new
            pricing.
          </p>

          <h3>7.4 Late Payment and Suspension</h3>
          <p>
            If any fees are past due, we may suspend your access to the Services until payment is received. We
            reserve the right to charge interest on overdue amounts at the rate of 1.5% per month or the
            maximum rate permitted by law, whichever is lower. You remain responsible for all fees incurred
            during any suspension period.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Term and Termination</h2>

          <h3>8.1 Term</h3>
          <p>
            These Terms commence when you first access or use the Services and continue until terminated by
            either party in accordance with this Section.
          </p>

          <h3>8.2 Termination by You</h3>
          <p>
            You may terminate your account and these Terms at any time by discontinuing use of the Services
            and closing your account through your account settings or by contacting us at{" "}
            <a href="mailto:support@primalabs.ai">support@primalabs.ai</a>. Termination does not relieve you
            of any obligation to pay outstanding fees.
          </p>

          <h3>8.3 Termination by Us</h3>
          <p>
            We may suspend or terminate your access to the Services immediately, without prior notice or
            liability, for any reason, including if:
          </p>
          <ul>
            <li>You breach any provision of these Terms</li>
            <li>Your use of the Services poses a security risk or could harm us or third parties</li>
            <li>You fail to pay any fees when due</li>
            <li>We are required to do so by law or regulatory authority</li>
          </ul>

          <h3>8.4 Effect of Termination</h3>
          <p>
            Upon termination of these Terms: (a) your right to use the Services will immediately cease, (b)
            we may delete Your Data in accordance with our data retention policies, and (c) all provisions of
            these Terms that by their nature should survive termination will survive, including ownership
            provisions, warranty disclaimers, indemnification obligations, and limitations of liability.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Warranties and Disclaimers</h2>
          <p className="legal-disclaimer">
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
            EXPRESS, IMPLIED, OR STATUTORY. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT: (A) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE,
            OR ERROR-FREE, (B) ANY DEFECTS OR ERRORS WILL BE CORRECTED, (C) THE SERVICES WILL MEET YOUR
            REQUIREMENTS OR EXPECTATIONS, OR (D) THE RESULTS OBTAINED FROM USE OF THE SERVICES WILL BE ACCURATE,
            COMPLETE, OR RELIABLE. YOU USE THE SERVICES AT YOUR OWN RISK.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Limitation of Liability</h2>
          <p className="legal-disclaimer">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL PRIMALABS, ITS AFFILIATES, OFFICERS,
            DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOST
            PROFITS, LOST REVENUE, LOST DATA, LOST SAVINGS, BUSINESS INTERRUPTION, LOSS OF GOODWILL, OR OTHER
            INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES,
            WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER
            LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE
            LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT
            EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO US FOR THE SERVICES IN THE TWELVE (12) MONTHS
            IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) ONE HUNDRED DOLLARS ($100). SOME
            JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE
            LIMITATIONS MAY NOT APPLY TO YOU.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless PrimaLabs and its affiliates, officers,
            directors, employees, agents, suppliers, and licensors from and against any and all claims,
            liabilities, damages, losses, costs, expenses, fees (including reasonable attorneys&apos; fees), and
            settlements arising out of or related to: (a) your use or misuse of the Services, (b) your
            violation of these Terms, (c) your violation of any applicable laws, regulations, or third-party
            rights, (d) Your Data or any content you submit, or (e) any false or misleading information you
            provide. We reserve the right to assume exclusive control of the defense of any claim subject to
            indemnification, in which case you will cooperate with us in asserting any available defenses.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Confidentiality</h2>
          <p>
            Each party agrees to maintain the confidentiality of any confidential information disclosed by the
            other party in connection with these Terms and to use such confidential information only for
            purposes of fulfilling its obligations under these Terms. Confidential information does not include
            information that: (a) is or becomes publicly available through no breach of these Terms, (b) was
            rightfully known to the receiving party prior to disclosure, (c) is independently developed by the
            receiving party without use of the disclosing party&apos;s confidential information, or (d) is rightfully
            obtained from a third party without confidentiality restrictions. This confidentiality obligation
            survives termination of these Terms for a period of three (3) years.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Export Control and Sanctions Compliance</h2>
          <p>
            You agree to comply with all applicable export control laws and regulations, including the Export
            Administration Regulations maintained by the U.S. Department of Commerce and sanctions programs
            administered by the Office of Foreign Assets Control. You represent and warrant that you are not:
            (a) located in, under the control of, or a national or resident of any country subject to U.S.
            embargo or trade restrictions, (b) identified on any U.S. government list of prohibited or
            restricted parties, including the Specially Designated Nationals List, or (c) otherwise prohibited
            from receiving the Services under applicable law. You may not use the Services to develop or
            produce nuclear, chemical, or biological weapons or missile technology.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Governing Law and Dispute Resolution</h2>

          <h3>14.1 Governing Law</h3>
          <p>
            These Terms and any disputes arising out of or related to these Terms or the Services shall be
            governed by and construed in accordance with the laws of the State of Delaware, United States,
            without regard to its conflict of law provisions. The United Nations Convention on Contracts for the
            International Sale of Goods does not apply to these Terms.
          </p>

          <h3>14.2 Arbitration Agreement</h3>
          <p>
            Any dispute, controversy, or claim arising out of or relating to these Terms or the Services that
            cannot be resolved through good-faith negotiation shall be resolved through binding arbitration
            administered by the American Arbitration Association (AAA) in accordance with its Commercial
            Arbitration Rules. The arbitration shall be conducted by a single arbitrator and shall take place in
            Wilmington, Delaware. The arbitrator&apos;s decision shall be final and binding, and judgment on the
            arbitration award may be entered in any court having jurisdiction. Each party shall bear its own
            costs and expenses, including attorneys&apos; fees, unless the arbitrator determines otherwise. This
            arbitration provision does not preclude either party from seeking injunctive or other equitable
            relief in court to protect its intellectual property rights.
          </p>

          <h3>14.3 Class Action Waiver</h3>
          <p className="legal-disclaimer">
            YOU AND PRIMALABS AGREE THAT ANY ARBITRATION OR LEGAL PROCEEDING SHALL BE CONDUCTED ON AN
            INDIVIDUAL BASIS ONLY AND NOT AS A CLASS ACTION, CONSOLIDATED ACTION, OR REPRESENTATIVE ACTION.
            NEITHER YOU NOR PRIMALABS MAY PARTICIPATE IN A CLASS ACTION OR CLASS-WIDE ARBITRATION FOR ANY CLAIMS
            COVERED BY THESE TERMS.
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Force Majeure</h2>
          <p>
            Neither party shall be liable for any failure or delay in performance under these Terms due to
            circumstances beyond its reasonable control, including acts of God, natural disasters, war,
            terrorism, riots, embargoes, government actions, labor disputes, epidemics, pandemics, internet
            disruptions, or failures of third-party services or suppliers. The affected party shall promptly
            notify the other party of any such force majeure event and shall use commercially reasonable efforts
            to resume performance as soon as practicable.
          </p>
        </section>

        <section className="legal-section">
          <h2>16. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time in our sole discretion. We will provide
            notice of material changes by posting the updated Terms on our website, updating the
            &quot;Effective Date,&quot; and, where required by law, providing additional notice such as through email
            or a prominent notice on the Services. Your continued use of the Services after such changes become
            effective constitutes your acceptance of the modified Terms. If you do not agree to the modified
            Terms, you must discontinue use of the Services and close your account.
          </p>
        </section>

        <section className="legal-section">
          <h2>17. Severability and Waiver</h2>
          <p>
            If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of
            competent jurisdiction, the remaining provisions shall continue in full force and effect. The
            invalid or unenforceable provision shall be replaced with a valid and enforceable provision that
            most closely reflects the intent of the original provision. No waiver of any provision of these
            Terms shall be deemed a further or continuing waiver of such provision or any other provision, and
            our failure to assert any right or provision under these Terms shall not constitute a waiver of such
            right or provision.
          </p>
        </section>

        <section className="legal-section">
          <h2>18. Assignment</h2>
          <p>
            You may not assign, transfer, or delegate these Terms or any rights or obligations hereunder without
            our prior written consent. Any attempted assignment in violation of this provision shall be null and
            void. We may freely assign these Terms without restriction. Subject to the foregoing, these Terms
            shall bind and inure to the benefit of the parties and their respective successors and permitted
            assigns.
          </p>
        </section>

        <section className="legal-section">
          <h2>19. Entire Agreement</h2>
          <p>
            These Terms, together with our <Link href="/privacy">Privacy Policy</Link> and any other agreements
            or policies expressly incorporated by reference herein, constitute the entire agreement between you
            and PrimaLabs regarding the Services and supersede all prior or contemporaneous communications,
            proposals, and agreements, whether oral or written, between you and PrimaLabs relating to the subject
            matter hereof. These Terms may not be amended except as provided in Section 16 or through a
            written agreement signed by both parties.
          </p>
        </section>

        <section className="legal-section">
          <h2>20. Contact Information</h2>
          <p>
            If you have questions, concerns, or notices regarding these Terms, please contact us at:
          </p>
          <address className="legal-address">
            PrimaLabs
            <br />
            Email: <a href="mailto:legal@primalabs.ai">legal@primalabs.ai</a>
          </address>
          <p>We will respond to your inquiry as soon as reasonably possible.</p>
        </section>
      </article>
      </PageShell>
      <SiteFooter />
    </>
  );
}
