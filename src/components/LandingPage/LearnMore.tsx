import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi2";

const LearnMore = () => {
  return (
    <>
      <section className='pt-[60px] pb-[220px] 2xl:h-[800px] bg-[#F5F5F5]'>
        <div className='container space-y-10'>
          <div className='container space-y-6 px-10'>
            <h2 className='text-[48px] leading-[58px] font-bold text-[#900000]'>
              What we do
            </h2>
            <div className='max-w-[650px] space-y-4'>
              <p className='text-[16px] leading-7'>
                Custodian & Allied Insurance is a wholly owned Nigerian Company.
                CAIL's sole purpose is to develop, package and deliver
                innovative insurance products that best satisfy customer needs,
                whilst operating a highly profitable, efficient, resourceful and
                ethical organization that will survive well into the future and
                be a valuable asset to its shareholders.
              </p>
              <p className='text-[16px] leading-7'>
                CAIL's Board compromises individuals who have proven track
                records records in their various fields of endeavors, thereby
                bringing several years of experience to bear upon the Board.
              </p>
            </div>
            <Button className='bg-[#D39999] text-[#900000] hover:text-[#f5f5f5]'>
              <span>Learn more</span>
              <span className='ml-2'>
                <HiArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
