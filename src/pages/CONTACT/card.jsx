export default function CardSection() {
  return (
    <div className="w-full flex justify-center bg-[#ffffff] lg:py-8 pt-6 sm:py-10">
      <div className="max-w-[1370px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* ABOUT */}
        <div className="bg-[#4BAF47] text-[#ffffff] p-4 sm:p-6 rounded-md text-sm sm:text-base lg:text-[16px] font-semibold">
          <h3 className="text-[#ffffff60] font-bold text-xl sm:text-2xl lg:text-[30px] mb-3">
            About
          </h3>
          <p className="leading-relaxed lg:leading-[26px]">
            Tiamin Group has evolved into one of Nigeria’s leading manufacturing
            and agricultural firms.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-[#C5CE38] text-[#ffffff] p-4 sm:p-6 rounded-md text-sm sm:text-base lg:text-[16px] font-semibold">
          <h3 className="text-[#ffffff60] font-bold text-xl sm:text-2xl lg:text-[30px] mb-3">
            Contact
          </h3>

          <p className="">+234 803 465 0072</p>
          <p className="">+234 803 687 4426</p>
          <p className="">+234 803 205 7724</p>

          <p className="mt-2">info@tiamingroup.com</p>
        </div>

        {/* ADDRESS */}
        <div className="bg-[#EEC044] text-[#ffffff] p-4 sm:p-6 rounded-md text-sm sm:text-base lg:text-[16px] font-semibold">
          <h3 className="text-[#Ffffff60] font-bold text-xl sm:text-2xl lg:text-[30px] mb-3">
            Address
          </h3>

          <p className="leading-relaxed lg:leading-[26px]">
            No. C-15 A.M. Shehu House, Amana City, Zaria Road, Kano, Nigeria 
          </p>
        </div>
      </div>
    </div>
  );
}
