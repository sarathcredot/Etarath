
import Heading2 from '@/components/common/Heading2'
import Heading4 from '@/components/common/Heading4'
import Paragraph from '@/components/common/Paragraph'
import SubHeading1 from '@/components/common/Subheading1'
import React from 'react'

function TermsAndConditionsPage() {
    return (
        <div>

            <section className="">
                <Heading4 className="text-3xl font-bold mb-6">
                    ETARATH – TERMS & CONDITIONS
                </Heading4>

                {/* 1. Introduction */}
                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        1. Introduction & Acceptance of Terms
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath is a digital B2B tyre marketplace designed to facilitate
                        business transactions between verified vendors and retailers. These
                        Terms & Conditions govern access to and use of the Etarath website,
                        mobile applications, and related services (“Platform”).
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        By registering an account, logging in, or using any feature of the
                        Platform, users confirm that they have read, understood, and agreed to
                        be legally bound by these Terms. If a user does not agree with any part
                        of these Terms, they must immediately discontinue use of the Platform.
                        This agreement constitutes a legally binding contract between Etarath
                        and its users.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        2. About the Platform
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath operates solely as a technology-enabled marketplace that connects
                        tyre vendors, retailers, and sales executives. The platform enables
                        product discovery, price comparison, quotation creation, order
                        placement, and warranty claim management. Etarath does not sell,
                        manufacture, stock, transport, or deliver tyres and does not act as a
                        distributor or reseller. All commercial transactions occur directly
                        between vendors and retailers. This distinction limits Etarath’s
                        responsibility in product quality, delivery, or pricing disputes.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        3. Definitions
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        To ensure clarity and consistency, this section defines key terms used
                        throughout these Terms & Conditions. A “Vendor” refers to a tyre
                        wholesaler or seller, while a “Retailer” refers to a buyer or reseller
                        using the platform. A “Sales Executive” is an authorized individual
                        responsible for inspections and claim verification, and an “Admin”
                        refers to Etarath’s internal management team. These definitions prevent
                        misinterpretation and are critical during audits, disputes, or
                        compliance reviews.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        4. Eligibility to Use the Platform
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath is intended exclusively for legally registered businesses
                        operating within the United Arab Emirates. Users must hold valid trade
                        licenses and may be required to submit supporting business documentation
                        for verification. Individual consumers or B2C usage of the platform is
                        strictly prohibited. Etarath reserves the right to approve, deny, or
                        revoke access to the platform at its sole discretion, without obligation
                        to provide reasons. This ensures platform credibility and regulatory
                        compliance.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        5. Account Registration & Verification
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        To access Etarath, users must create an account using accurate and
                        complete business information. Etarath may conduct manual or automated
                        verification of vendor and retailer accounts before granting full
                        access. Any false, misleading, or outdated information may result in
                        account suspension or termination. Accounts are role-based, meaning
                        access permissions differ for retailers, vendors, sales executives, and
                        administrators. This ensures secure and structured platform usage.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        6. Account Security & Responsibility
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Users are solely responsible for maintaining the confidentiality of
                        their login credentials and account information. Any activity conducted
                        through a registered account is considered authorized by the account
                        holder. Etarath is not responsible for losses or damages caused by
                        unauthorized access resulting from user negligence. Users must promptly
                        notify Etarath of any suspected security breach. This clause is essential
                        for protecting against fraud and misuse.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        7. User Roles & Responsibilities
                    </SubHeading1>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        7.1 Retailer Responsibilities
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        Retailers must use the platform in good faith and for legitimate
                        business purposes only. They are expected to place genuine orders and
                        quotation requests and use price comparison tools fairly. Retailers must
                        submit accurate documentation for warranty claims and refrain from
                        misusing vendor pricing, data, or analytics. Any abuse of platform
                        features may result in restricted access.
                    </Paragraph>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        7.2 Vendor Responsibilities
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        Vendors are responsible for maintaining accurate product listings,
                        inventory levels, pricing, and availability at all times. Orders must be
                        fulfilled within agreed timelines, and warranty claims must be handled
                        transparently and professionally. Vendors are required to comply with
                        all applicable UAE trade, tax, and consumer protection laws. Failure to
                        meet these responsibilities may impact vendor status on the platform.
                    </Paragraph>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        7.3 Sales Executive Responsibilities
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        Sales Executives may access the platform only for assigned inspections
                        and claim-related activities. They must conduct physical inspections
                        fairly and upload accurate reports, images, and supporting comments. All
                        business data accessed during inspections must remain confidential. Any
                        misuse of information or inaccurate reporting may lead to access
                        revocation.
                    </Paragraph>

                    <Paragraph className="text-white leading-relaxed font-medium">
                        7.4 Admin Rights
                    </Paragraph>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath administrators have full authority to manage platform
                        operations, including user approvals, suspensions, content moderation,
                        subscription management, and analytics access. Admins ensure compliance
                        with platform policies and maintain system stability and security.
                        Administrative actions are taken to protect the integrity and trust of
                        the marketplace.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        8. Product Listings & Content
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Vendors are solely responsible for the accuracy and completeness of all
                        product listings, including descriptions, images, specifications,
                        pricing, and warranty terms. Etarath does not independently verify
                        product information and does not guarantee its accuracy. Any errors,
                        misrepresentations, or omissions are the responsibility of the vendor.
                        This clause protects Etarath from liability arising from incorrect
                        listings.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        9. Pricing & Quotes
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        All prices displayed on Etarath are determined by vendors and may vary
                        across sellers. Price comparisons provided on the platform are for
                        informational purposes only. Quotations generated through the platform
                        do not constitute a binding contract unless formally accepted and
                        confirmed by the vendor. Etarath does not guarantee the lowest prices or
                        best commercial terms.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        10. Orders & Fulfillment
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Once an order is accepted by a vendor, it becomes binding between the
                        vendor and retailer. Orders involving multiple vendors may result in
                        separate shipments and delivery schedules. Vendors are fully responsible
                        for logistics, packaging, delivery timelines, and order fulfillment.
                        Etarath is not liable for delays, damages, shortages, or delivery
                        failures.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        11. Subscriptions & Payments
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Certain platform features are accessible only through paid subscription
                        plans. Subscription fees are billed as per the selected plan and are
                        non-refundable unless explicitly stated otherwise. Etarath may revise
                        subscription pricing or features with prior notice. Abuse or misuse of
                        subscription benefits may result in suspension or termination of access.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        12. Warranty Claims & Inspections
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Retailers may submit warranty claims digitally through the platform along
                        with required documentation. Sales Executives may be assigned to inspect
                        products and upload inspection reports. Vendors are responsible for
                        reviewing and approving or rejecting warranty claims. Etarath facilitates
                        the workflow but does not guarantee claim approval or resolution
                        outcomes.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        13. Platform Analytics & Insights
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath provides analytics dashboards to offer insights into orders,
                        sales performance, and usage trends. These insights are indicative and
                        may be based on system-generated data. Etarath does not guarantee the
                        accuracy or completeness of analytics. Users remain solely responsible
                        for business decisions made based on these insights.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        14. Intellectual Property Rights
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        All platform software, user interface designs, logos, trademarks, and
                        content are the exclusive property of Etarath. Users may not copy,
                        reproduce, modify, or resell any part of the platform without prior
                        written consent. Business data uploaded by users remains their property
                        but may be used by Etarath to operate and improve the platform.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        15. Confidentiality
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Users must treat all non-public information accessed through the
                        platform as confidential. This includes pricing, analytics, competitor
                        data, and business communications. Unauthorized disclosure or misuse of
                        confidential information is strictly prohibited and may result in legal
                        action or account termination.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        16. Prohibited Activities
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Users must not engage in activities that harm the platform or other
                        users, including uploading false claims, scraping data, manipulating
                        pricing, or attempting to bypass security mechanisms. Any attempt to
                        disrupt platform operations or gain unauthorized access is strictly
                        prohibited. Violations may result in immediate suspension or
                        termination.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        17. Suspension & Termination
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath reserves the right to suspend or terminate user accounts at any
                        time for violations of these Terms or misuse of the platform. Such
                        actions may be taken without prior notice or explanation. This ensures
                        platform safety, fairness, and operational integrity.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        18. Limitation of Liability
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath is not responsible for product quality, financial losses,
                        vendor-retailer disputes, warranty outcomes, or logistics failures. To
                        the maximum extent permitted by law, Etarath’s liability is limited and
                        excludes indirect or consequential damages. This clause protects
                        Etarath from excessive legal exposure.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        19. Governing Law & Jurisdiction
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        These Terms & Conditions are governed by the laws of the United Arab
                        Emirates. Any disputes arising out of or related to the use of the
                        platform shall be subject to the exclusive jurisdiction of UAE courts.
                        This ensures legal clarity and compliance.
                    </Paragraph>
                </div>

                <div className="space-y-3 mb-8">
                    <SubHeading1 className="text-xl font-semibold">
                        20. Changes to Terms
                    </SubHeading1>
                    <Paragraph className="text-white leading-relaxed">
                        Etarath may update these Terms & Conditions periodically to reflect
                        changes in services, technology, or legal requirements. Updated Terms
                        will be published on the platform. Continued use of Etarath after such
                        updates constitutes acceptance of the revised Terms.
                    </Paragraph>
                </div>
            </section>


        </div>
    )
}

export default TermsAndConditionsPage