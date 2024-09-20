import React from "react";

export const OurStyle: React.FC<{}> = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-8 lg:gap-10 items-start justify-start pt-10'>
      <p className='font-bold text-2xl md:text-3xl lg:text-4xl'>Our Style</p>
      <p className='text-gray-500 font-medium text-left'>
        Insurance companies, like most financial institutions, operate in an
        increasingly competitive environment.
      </p>
      <p className='text-gray-500 font-medium text-left'>
        At CAIL however, the techniques of our service delivery lie in our
        ability to provide fast, efficient, and highly professional service to
        the market in which we operate. This we are able to achieve through the
        automation of our various lines of operation, thereby reducing
        processing time and ultimately gaining the much-desired competitive
        edge.
      </p>
      <p className='text-gray-500 font-medium text-left'>
        In addition, our products and operations are essentially market-driven
        with an emphasis on providing a wide menu of options on policies, having
        paid due regard to production processes employed in various industries.
      </p>
      <p className='text-gray-500 font-medium text-left'>
        Our total commitment and focus is to strike a fine balance between sound
        underwriting, cost control, and service investment for our various
        clients. The Company is an efficient and fully automated company with a
        sharp focus on the wholesale corporate client market.
      </p>
    </div>
  );
};
