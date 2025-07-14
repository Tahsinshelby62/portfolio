import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactText />
      <div className="flex flex-col gap-4">
        <p
          className="text-orange font-bold uppercase text-3xl font-special text-center
          max-w-[300px] mx-auto"
        >
          Contact Me
        </p>
        <p className="text-center text-lightGrey">
          I’m always open to exciting opportunities that challenge my creativity
          and push technical boundaries. With over seven years of hands-on
          experience in front-end development, I specialize in building
          intuitive, accessible, and high-performance user interfaces using
          React, Next.js, TypeScript, and Tailwind CSS. My background also
          includes integrating automation workflows through Power Apps, Power
          BI, and Automation Anywhere. I am actively exploring new horizons in
          AI-driven development and modern architecture. Whether it’s a
          full-time role, contract work, or a freelance project — I’m eager to
          contribute, collaborate, and make an impact. I’m available to join
          immediately and am confident in adapting quickly to team dynamics and
          new environments. Let’s build something meaningful together. You can
          reach me via email, LinkedIn, or WhatsApp anytime. I value every
          conversation that leads to innovation and growth. Looking forward to
          connecting — let us write your next success story together.
        </p>
      </div>
    </div>
  );
};

export default ContactMeLeft;
