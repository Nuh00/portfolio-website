"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

function Contact() {
  const { ref, inView } = useSectionInView("Contact", 0.3);
  const { pending } = useFormStatus();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb:28 scroll-mt-28
    w-[min(100%,38rem)] text-center
    "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Contact me directly at{" "}
        <a className="underline" href="mailto:">
          noahbarkatwork@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

            toast.success("Message sent!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-3"
          placeholder="Your email"
        />
        <textarea
          className=" h-52 my-3 rounded-lg borderBlack p-3 focusBlack"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>

        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
