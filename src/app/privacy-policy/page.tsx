"use client";

import React, { useEffect, useRef } from 'react'
import Heading4 from '@/components/common/Heading4'
import SubHeading1 from '@/components/common/Subheading1'
import Paragraph from '@/components/common/Paragraph'
import Heading2 from '@/components/common/Heading2'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

function PrivacyPolicyPage() {

    const heading1Ref = useRef<HTMLDivElement>(null);
    const subHeading1Ref = useRef<HTMLDivElement>(null);
    const policyRef = useRef<HTMLElement>(null);


    useEffect(() => {
        const mySplitText = new SplitText(heading1Ref.current, { type: "lines" }),
            headingLines = mySplitText.lines;
        const mySplitText2 = new SplitText(subHeading1Ref.current, { type: "lines" }),
            subLines = mySplitText2.lines;

        const mySplitText3 = new SplitText(policyRef.current, { type: "lines" }),
            policyLines = mySplitText3.lines;

        const tl = gsap.timeline({ duration: 1, ease: "power2.out" });

        tl.fromTo(
            headingLines,
            { opacity: 0, y: 100, scale: 0.5, rotateX: 45 },
            { opacity: 1, y: 0, scale: 1, rotateX: 0, stagger: 0.1 }
        ).fromTo(
            subLines,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, stagger: 0.1 }
        ).fromTo(
            policyLines,
            { opacity: 0, y: 100, scale: 0.5, rotateX: 45 },
            { opacity: 1, y: 0, scale: 1, rotateX: 0, stagger: 0.1 }
        );
        return () => {
            tl.kill();
        };
    }, []);

    return (
      <div className="mb-30">
        <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
          <Heading2 ref={heading1Ref} className=" text-center ">
            <span className="text-primary">Etarath </span>
            <br />
            Privacy Policy
          </Heading2>
          <Paragraph
            ref={subHeading1Ref}
            className="text-center  max-w-[730px]"
          >
            This Privacy Policy explains how Etarath collects, uses, and
            protects user information. By using the platform, users agree to the
            data practices described here.
          </Paragraph>
        </div>

        <section ref={policyRef} className="mt-20">
          {/* <Heading4 className="text-3xl font-bold mb-6">
                    ETARATH – PRIVACY POLICY
                </Heading4> */}

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              Overview
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              At Etarath, we take your privacy seriously. Please read this
              Privacy Policy to learn how we treat your personal data. By using
              or accessing our Services in any manner, you acknowledge that you
              accept the practices and policies outlined below, and you hereby
              consent that we will collect, use and disclose your information as
              described in this Privacy Policy.
            </Paragraph>
          </div>

          {/* <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        1. Purpose of This Privacy Policy
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        This Privacy Policy explains how Etarath collects, uses, stores, and protects
                        business and personal information when users access or use the platform. It
                        is designed to help users understand what data is collected and how it is
                        handled responsibly. By using Etarath, users agree to the practices
                        described in this policy.
                    </Paragraph>
                </div> */}

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              1. Information We Collect
            </SubHeading1>

            <Paragraph className="text-white leading-relaxed font-medium">
              1.1 Business & Contact Information
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              We collect business-related information such as company name,
              trade license details, VAT information, email address, phone
              number, and physical address. This information is required to
              verify businesses, maintain platform integrity, and enable secure
              B2B transactions.
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              All credit and debit card details and personally identifiable
              information will NOT be stored, sold, shared, rented, or leased to
              any third parties.
            </Paragraph>

            <Paragraph className="text-white leading-relaxed font-medium">
              1.2 Account & Login Information
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              We collect account credentials and role-based access information
              to authenticate users and manage permissions across different
              platform portals. This ensures that only authorized users can
              access specific features, functions, and sensitive business data.
            </Paragraph>

            <Paragraph className="text-white leading-relaxed font-medium">
              1.3 Transaction & Usage Data
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              We collect data related to orders, quotations, warranty claims,
              and general platform activity. This information helps us process
              transactions, track service usage, and improve platform
              functionality and performance.
            </Paragraph>

            <Paragraph className="text-white leading-relaxed font-medium">
              1.4 Uploaded Documents
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              Documents such as product listings, warranty files, inspection
              photos, and reports are stored on the platform. These documents
              support order fulfillment, claim verification, audits, and dispute
              resolution when required.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              2. How we use your personal information.
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              Etarath processes Personal Data only where a lawful basis exists,
              in accordance with applicable data protection laws and user
              consent. The information collected is used to operate, manage, and
              improve the Etarath platform, including enabling ordering,
              quotation, and warranty claim workflows; verifying vendors and
              retailers; providing dashboards and analytics; enhancing user
              experience; and meeting applicable legal and regulatory
              requirements.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              3. Data Sharing & Disclosure
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              Etarath shares user data only when necessary to operate the
              platform. This may include sharing information between vendors and
              retailers involved in a transaction, with assigned sales
              executives for verifying orders and conduct claim inspections, or
              with legal and regulatory authorities as required by law. Etarath
              does not sell, rent, or trade user data to any third parties. All
              data sharing is strictly limited to fulfill operational, legal, or
              regulatory obligations and to maintain the integrity and security
              of the platform.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              4. Data Security Measures
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              We implement industry-standard security measures to protect user
              data, including secure servers, encrypted data storage, and
              role-based access controls. We ensure strong precautions to
              safeguard information.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              5. Data Retention
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              User data is retained only as long as necessary to operate the
              platform, provide our services, or fulfill legal, regulatory, and
              compliance obligations. Once the data is no longer required, it is
              securely deleted or anonymized to prevent unauthorized access.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              6. User Rights & Choices
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              Users have the right to access and update their information at any
              time through their account settings. They may also request account
              deactivation or data deletion, subject to applicable legal and
              regulatory requirements.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              7. Third-Party Services
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              Etarath may use trusted third-party services such as payment
              gateways and notification providers to support platform
              operations. These third-party providers operate under their own
              privacy policies and are responsible for protecting data handled
              through their services.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              8. Cookies
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              Etarath uses browser cookies to enhance user experience and
              platform functionality. A cookie is a small file placed on your
              computer that helps us understand how users interact with the
              website. Cookies do not collect personal information such as your
              name or identity unless you voluntarily provide such details to
              us.
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              Cookies allow Etarath to track site usage, manage transactions,
              and analyze traffic patterns so we can improve our services and
              offerings. No personal information can be identified solely
              through cookies.
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              Most web browsers allow you to accept, reject, or manage cookie
              preferences. Please note that disabling cookies may limit your
              ability to access certain features or functionality of the Etarath
              platform.
            </Paragraph>
          </div>

          <div className="space-y-3 mb-8">
            <SubHeading1 className="text-xl font-semibold">
              9. Changes to This Privacy Policy
            </SubHeading1>
            <Paragraph className="text-white leading-relaxed">
              Etarath may update this Privacy Policy from time to time to
              reflect changes in services, technology, or legal requirements.
              Continued use of the platform after any updates constitutes
              acceptance of the revised policy. This policy was last updated in
              December 2025 and is subject to change at the sole discretion of
              Etarath.
            </Paragraph>
            <Paragraph className="text-white leading-relaxed">
              When modifications are made, the updated policy will be posted on
              our website, and users are encouraged to review this section
              regularly to stay informed about any changes. All modifications
              take effect immediately on the date they are posted.
            </Paragraph>
          </div>
        </section>
      </div>
    );
}

export default PrivacyPolicyPage