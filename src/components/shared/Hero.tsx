import React from "react";
interface Props {
  title: string;
  subtitle: string;
  description: string;
}
const Hero: React.FC<Props> = ({ title, description, subtitle }) => {
  return (
    <section className="pt-[60px] 2xl:h-[800px] bg-[#FBF9F9]">
      <div className="container flex flex-col items-center justify-center pb-[60px]">
        <h1 className="heading md:text-[60px] md:leading-[70px]">{title}</h1>
        <h1 className="heading text-primaryColor md:text-[60px] md:leading-[70px]">
          {subtitle}
        </h1>
        <p className="text__para text-center max-w-[600px]">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
