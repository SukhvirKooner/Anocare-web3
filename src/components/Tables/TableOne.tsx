import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.0 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 w-80 justify-center ">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white text-center">
        Top Influencers
      </h4>

      <div className="flex flex-col">
        <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4 ">
        
        </div>


        {brandData.map((brand, key) => (
          <div
          className={` sm:grid-cols-5 ${
            key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <Image src={brand.logo} alt="Brand" width={48} height={48} />
            </div>
            <p className="hidden text-black dark:text-white sm:block text-center">
              {brand.name}
            </p>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default TableOne;
