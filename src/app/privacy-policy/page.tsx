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
        <div className='mb-30'>
            <Heading2 ref={heading1Ref} className=" text-center mb-[30px]">
                <span className="text-primary">Etarath </span>
                <br />
                Privacy Policy

            </Heading2>
            <SubHeading1
                ref={subHeading1Ref}
                className="text-center mb-[40px] md:mx-[10%] lg:mx-[16%]"
            >
                This Privacy Policy explains how Etarath collects, uses, and protects
                user information. By using the platform, users agree to the data practices described here.
            </SubHeading1>


            <section ref={policyRef} className="mt-20">
                {/* <Heading4 className="text-3xl font-bold mb-6">
                    ETARATH – PRIVACY POLICY
                </Heading4> */}

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        Overview
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath respects your privacy and is committed to protecting the business
                        and personal information shared on the platform. We believe that trust is
                        essential in every business relationship, and safeguarding your data is a
                        core part of our responsibility.
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        This Privacy Policy explains how Etarath collects, uses, stores, and protects
                        your information when you access or use our website, mobile applications,
                        and services. It also outlines your rights regarding your data and the
                        measures we take to ensure confidentiality, security, and compliance with
                        applicable laws.
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
                        We collect business-related details such as company name, trade license
                        information, VAT details, email address, phone number, and physical address.
                        This information is required to verify businesses, maintain platform
                        integrity, and enable secure B2B transactions.
                    </Paragraph>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        1.2 Account & Login Information
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        Account credentials and role-based access information are collected to
                        authenticate users and manage permissions across different portals. This
                        ensures that only authorized users can access specific features and
                        sensitive business data.
                    </Paragraph>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        1.3 Transaction & Usage Data
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        We collect data related to orders, quotations, warranty claims, and general
                        platform activity. This information helps us process transactions, track
                        service usage, and improve platform functionality and performance.
                    </Paragraph>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        1.4 Uploaded Documents
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        Documents such as product listings, warranty files, inspection photos, and
                        reports are stored on the platform. These documents support order
                        fulfillment, claim verification, audits, and dispute resolution when
                        required.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        2. How We Use Your Information
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        The information we collect is used to operate and improve the Etarath
                        platform. This includes enabling ordering, quotation, and warranty claim
                        workflows, verifying vendors and retailers, providing dashboards and
                        analytics, enhancing user experience, and meeting legal or regulatory
                        requirements.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        3. Data Sharing & Disclosure
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath shares user data only when it is necessary for platform operations.
                        This may include sharing information between vendors and retailers involved
                        in a transaction, with assigned sales executives for inspections, or with
                        legal or regulatory authorities when required by law. Etarath does not sell,
                        rent, or trade user data to third parties.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        4. Data Security Measures
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        We implement industry-standard security measures to protect user data,
                        including secure servers, encrypted data storage, and role-based access
                        controls. While we take strong precautions to safeguard information, no
                        digital system can guarantee complete security.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        5. Data Retention
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        User data is retained only for as long as it is required to operate the
                        platform or fulfill legal and compliance obligations. Once data is no
                        longer needed, it is securely deleted or anonymized to prevent unauthorized
                        access.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        6. User Rights & Choices
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Users have the right to access and update their information at any time
                        through their account settings. They may also request account deactivation
                        or data deletion, subject to applicable legal and regulatory requirements.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        7. Third-Party Services
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath may use trusted third-party services such as payment gateways and
                        notification providers to support platform operations. These third-party
                        providers operate under their own privacy policies and are responsible for
                        protecting data handled through their services.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        8. Changes to This Privacy Policy
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath may update this Privacy Policy from time to time to reflect changes
                        in services, technology, or legal requirements. Continued use of the
                        platform after updates indicates acceptance of the revised policy.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        Conclusion
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath remains committed to maintaining the highest standards of data
                        protection, confidentiality, and transparency across all its services. We
                        continuously review and enhance our security practices to safeguard your
                        business and personal information against unauthorized access, misuse, or
                        disclosure.
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        By using the Etarath platform, you trust us with critical business data, and
                        we take this responsibility seriously. We encourage users to review this
                        Privacy Policy periodically to stay informed about how their information is
                        protected. Our support team is always available to address any
                        privacy-related concerns or requests.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        9. Contact Information
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        For any questions, concerns, or requests related to privacy or data
                        protection, please contact us:
                    </Paragraph>

                </div>


            </section>

        </div>
    )
}

export default PrivacyPolicyPage