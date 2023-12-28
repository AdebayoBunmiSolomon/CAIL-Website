import { Button } from "../ui/button";
import heroImg from "../../assets/images/hero-img.png";

const getStarted = () => {
  return (
    <section className='pt-[60px] 2xl:h-[800px] bg-[#FBF9F9]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* Hero Content Left */}
          <div className='lg:w-[890px] space-y-5'>
            <h1 className='text-[36px] leading-[46px] text-black font-[700] md:text-[60px] md:leading-[70px]'>
              <span className='text-primaryColor'>Insurance solutions</span>{" "}
              crafted to fit your specific needs
            </h1>
            <p className='max-w-[450px] text-[18px]'>
              Discover how our insurance products can provide you with peace of
              mind and security, all while contributing to a profitable and
              sustainable future.
            </p>
            <Button className='w-[200px] h-[50px] font-bold'>Learn more</Button>
          </div>
          <div className=''>
            <figure className='max-w-[720px]'>
              <img className='w-full' src={heroImg} alt='' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default getStarted;
