"use client";

import React, { useEffect, useRef } from "react";
import FAQComponent from "@/components/common/FAQComponent";
import Heading5 from "@/components/common/Heading5";
import { GoCheckCircleFill } from "react-icons/go";
import Paragraph from "@/components/common/Paragraph";
import Button from "@/components/common/Button";
import Image from "next/image";
import gsap from "gsap";
import Heading2 from "@/components/common/Heading2";
import Heading4 from "@/components/common/Heading4";
import SubHeading1 from "@/components/common/Subheading1";
import Heading7 from "@/components/common/Heading7";
import { FaDribbble, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { toastError, toastSuccess } from "@/utils/toast";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/form-fields/Input";
import TextArea from "@/components/form-fields/TextArea";
import Select from "@/components/form-fields/Select";
import Checkbox from "@/components/form-fields/Checkbox";

const questions = [
  {
    question: "Is there a minimum order quantity?",
    answer:
      "No. Etarath does not impose any minimum order quantity. Whether you're placing a small retail order or a large bulk purchase, the platform is flexible enough to support transactions of any size.",
  },
  {
    question: "What if my vendor doesn't answer my call?",
    answer:
      "If your vendor is unavailable, you can connect directly with your assigned Etarath sales executive through the platform. Your sales executive will assist you with updates or help place your order.",
  },
  {
    question: "How do I submit a claim?",
    answer: (
      <>
        Submitting a claim on Etarath is straightforward. From your dashboard,
        navigate to the Warranty and Claims section and complete the claim
        request form with all relevant details. For assistance contact{" "}
        <a href="mailto:support@etarath.ai" className="text-primary">
          support@etarath.ai
        </a>
        .
      </>
    ),
  },
  {
    question: "Is Etarath available outside the UAE?",
    answer:
      "Currently Etarath operates within the UAE market. Expansion across GCC is part of our roadmap.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. Etarath is built with strict data security standards ensuring that all business data and transactions remain protected.",
  },
];

const supportSubjects = [
  "Order Inquiry",
  "Warranty Claim",
  "Invoice Request",
  "Product Information",
  "Payment Issue",
  "Delivery Issue",
  "Return / Refund Request",
  "Technical Support",
  "Account Management",
  "Other",
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const heading4Ref = useRef<HTMLDivElement>(null);
  const subHeading1Ref1 = useRef<HTMLDivElement>(null);
  const subHeading1Ref2 = useRef<HTMLDivElement>(null);
  const heading7Ref = useRef<HTMLDivElement>(null);
  const iconRef1 = useRef<HTMLDivElement>(null);
  const iconRef2 = useRef<HTMLDivElement>(null);
  const iconRef3 = useRef<HTMLDivElement>(null);
  const iconRef4 = useRef<HTMLDivElement>(null);
  const fullNameRef = useRef<HTMLDivElement>(null);
  const workingEmailRef = useRef<HTMLDivElement>(null);
  const contactNumberRef = useRef<HTMLDivElement>(null);
  const subjectRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const isAgreedRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef<HTMLDivElement>(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      working_email: "",
      contact_number: "",
      subject: "",
      description: "",
      isAgreed: false,
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("Full name is required"),
      working_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      contact_number: Yup.string().required("Contact number is required"),
      subject: Yup.string().required("Subject is required"),
      description: Yup.string().required("Ticket Description is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        toast.loading("Loading");
        // const res = await submitCustomerRequest(values);
        // if (res) {
        //   toast.dismiss();
        // toastSuccess(res);
        //   formik.resetForm();
        // }
      } catch (error) {
        toast.dismiss();
        console.log(error);
        toastError(error);
      }
    },
  });
  console.log("formik values", formik.values);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        {
          opacity: 1,
          duration: 0.6,
        },
      )
        .from(headingRef.current, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
        })
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
          },
          "-=0.3",
        )
        .fromTo(
          heading4Ref.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.6,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
          }, "-=0.3",
        )
        .fromTo(
          subHeading1Ref1.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.6,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
          }, "-=0.3",
        )
        .fromTo(
          subHeading1Ref2.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.6,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
          }, "-=0.3",
        )
        .fromTo(
          heading7Ref.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.6,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
          }, "-=0.5",
        )
        .fromTo(
          iconRef1.current,
          {
            opacity: 0,
            x: -40,
            scale: 0.9,
            duration: 0.3,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
          },
           "-=0.5",
        )
        .fromTo(
          iconRef2.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.3,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
          },
           "-=0.5",
        )
        .fromTo(
          iconRef3.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.3,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
          },
           "-=0.5",
        )
        .fromTo(
          iconRef4.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
            duration: 0.3,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
          },
          "-=0.3",
        )
        .fromTo(
          fullNameRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.8",
        )
        .fromTo(
          workingEmailRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.6",
        )
        .fromTo(
          contactNumberRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.5",
        )
        .fromTo(
          subjectRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.5",
        )
        .fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.5",
        )
        .fromTo(
          isAgreedRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.5",
        )
        .fromTo(
          submitRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          {
            opacity: 1,
            duration: 0.6,
          },
           "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="opacity-0">
      <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
        <Heading2 ref={headingRef} className="text-center">
          Get in touch with <span className="text-primary">Etarath</span>
        </Heading2>

        <Paragraph ref={paragraphRef} className="text-center max-w-[730px]">
          We'd love to hear from you. Reach out for any inquiries.
        </Paragraph>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 mb-[50px] md:mb-20 lg:mb-[100px]">
        <div className="flex flex-col gap-[30px]">
          <Heading4 ref={heading4Ref} className="font-[600]! font-jakarta!">
            Contact Details
          </Heading4>
          <div>
            <SubHeading1 ref={subHeading1Ref1}>
              Etarath Powered by Vieomi Network FZ LLC <br />
              FDRK8399 Compass Building, Al
              <br /> Shohada Road, AL Hamra Industrial
              <br /> Zone-FZ Ras Al Khaimah,
              <br /> United Arab Emirates
            </SubHeading1>
            <SubHeading1 ref={subHeading1Ref2} className="my-[15px]">
              support@etarath.ai
            </SubHeading1>
            <Heading7 ref={heading7Ref} className="mb-[25px]">
              +971 551721265
            </Heading7>
            <div className="flex items-center  max-md:mt-2 gap-[5px] ">
              <div
                ref={iconRef1}
                className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out"
              >
                <FaFacebookF size={16} />
              </div>
              <div
                ref={iconRef2}
                className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out"
              >
                <FaXTwitter size={16} />
              </div>
              <div
                ref={iconRef3}
                className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out"
              >
                <FaDribbble size={16} />
              </div>
              <div
                ref={iconRef4}
                className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out"
              >
                <IoLogoInstagram size={16} />
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-[10px]">
            <div ref={fullNameRef} className="col-span-2 ">
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-[11px] mt-[2px]">
                  {formik.errors.fullName}
                </p>
              )}
            </div>
            <div
              ref={workingEmailRef}
              className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 "
            >
              <Input
                id="working_email"
                name="working_email"
                type="text"
                placeholder="Work Mail"
                value={formik.values.working_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.working_email && formik.errors.working_email && (
                <p className="text-red-500 text-[11px] mt-[2px]">
                  {formik.errors.working_email}
                </p>
              )}
            </div>
            <div
              ref={contactNumberRef}
              className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1"
            >
              <Input
                id="contact_number"
                name="contact_number"
                type="text"
                placeholder="Contact Number"
                value={formik.values.contact_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.contact_number &&
                formik.errors.contact_number && (
                  <p className="text-red-500 text-[11px] mt-[2px]">
                    {formik.errors.contact_number}
                  </p>
                )}
            </div>
            <div ref={subjectRef} className="col-span-2">
              <Select
                id="subject"
                name="subject"
                options={supportSubjects}
                placeholder="Subject"
                value={formik.values.subject}
                onChange={(values) => formik.setFieldValue("subject", values)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-[11px] mt-[2px]">
                  {formik.errors.subject}
                </p>
              )}
            </div>
            <div ref={descriptionRef} className="col-span-2">
              <TextArea
                id="description"
                name="description"
                placeholder="Ticket Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // labelBg="white"
                rows={7}
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 text-[11px] mt-[2px]">
                  {formik.errors.description}
                </p>
              )}
            </div>
            <div ref={isAgreedRef} className="mt-2 mb-1 col-span-2">
              <Checkbox
                id={"isAgreed"}
                name="isAgreed"
                label={"I agree that my data is collected and stored."}
                checked={formik.values.isAgreed}
                onChange={(e) => {
                  formik.setFieldValue("isAgreed", e.target.checked);
                }}
                labelClassName="font-[400]! text-[14px]!"
              />
              {formik.touched.isAgreed && formik.errors.isAgreed && (
                <p className="text-red-500 text-[11px] mt-[2px]">
                  {formik.errors.isAgreed}
                </p>
              )}
            </div>
          </div>
          <div ref={submitRef} className="md:max-w-[250px] mt-[15px]">
            <Button
              type="submit"
              className="w-full"
              color="primary"
              textColor="black"
              variant="solid"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>

      <FAQComponent questions={questions} />
    </div>
  );
};

export default Contact;
