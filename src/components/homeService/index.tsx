import React from 'react';
import slash from '@Images/slash.svg';

const ServiceSection = ({
  zhTitle,
  enTitle,
  direction
}: {
  zhTitle: string;
  enTitle: string;
  direction: boolean;
}) => {
  return (
    <>
      {direction ? (
        <div className="mt-8">
          <div className="items-center justify-center md:flex">
            <div className="md:relative md:h-[180px] md:w-[700px]">
              <div className="h-[180px] w-[700px] bg-primary-darkGreen max-md:flex max-md:w-full max-md:items-center max-md:justify-center md:absolute md:left-16">
                <div className="h-[90px] max-md:w-full md:hidden">
                  <div className="top-0 bottom-0 -left-16 my-auto mx-0 h-[90px] w-full bg-primary-beige/50">
                    <div className="relative">
                      <span className="absolute left-1/4 top-2 text-heading_5 text-primary-darkGreen ">
                        {zhTitle}
                      </span>
                      <img
                        src={slash}
                        width="150"
                        alt="Slash"
                        className="absolute left-1/4 top-5"
                      />
                      <span className="absolute left-[35%] top-14  whitespace-nowrap text-heading_5 text-primary-beige">
                        {enTitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[90px] w-[700px] max-md:hidden">
              <div className="absolute top-0 bottom-0 -left-16 my-auto mx-0 h-[90px] w-[700px] bg-primary-beige/50">
                <div className="relative">
                  <span className="absolute left-1/4 top-2 text-heading_4 text-primary-darkGreen">
                    {zhTitle}
                  </span>
                  <img src={slash} width="150" alt="Slash" className="absolute left-1/4 top-5" />
                  <span className="absolute left-[35%] top-14  whitespace-nowrap text-heading_4 text-primary-beige">
                    {enTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <div className="items-center justify-center md:flex">
            <div className="relative md:h-[90px] md:w-[700px]">
              <div className="absolute z-10 my-auto mx-0 h-[90px] w-[700px] bg-primary-beige/50 max-md:top-[45px] max-md:w-full md:top-0 md:bottom-0 md:left-16">
                <div className="relative">
                  <span className="absolute left-[20%] top-2 text-heading_4 text-primary-darkGreen max-md:text-heading_5">
                    {zhTitle}
                  </span>
                  <img src={slash} width="150" alt="Slash" className="absolute left-[20%] top-5" />
                  <span className=" absolute left-[30%] top-14  whitespace-nowrap text-heading_4 text-primary-beige max-md:text-heading_5">
                    {enTitle}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[180px] md:w-[700px]">
              <div className="absolute h-[180px] w-[700px] bg-primary-darkGreen max-md:w-full md:-left-16" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const HomeService = () => {
  return (
    <>
      <div className="container mx-auto max-sm:px-3 flex items-center justify-center gap-3">
        <p className="cursor-pointer whitespace-nowrap text-heading_4 font-bold text-primary-darkGreen ">
          服務項目
        </p>
        <p className="font-Noto_Serif_Display text-heading_4 font-bold text-primary-darkGreen">
          SERVICE
        </p>
        <div className="h-[3px] w-full bg-primary-gary"></div>
      </div>
      <ServiceSection zhTitle="樂器商城" enTitle="Instrumental Store" direction={true} />
      <ServiceSection zhTitle="音樂教育" enTitle="Musical Education" direction={false} />
      <ServiceSection zhTitle="場地租借" enTitle="Facility Rental Services" direction={true} />
    </>
  );
};

export default HomeService;
