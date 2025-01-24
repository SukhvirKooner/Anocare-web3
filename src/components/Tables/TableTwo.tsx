import { BRAND } from "@/types/brand";
import Image from "next/image";
import Link from 'next/link';


const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Sukhvir",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Shivam",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Mayank",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Shikhar",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Nandu",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.0 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 w-80 justify-center">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white text-center">
        Top Influencers
      </h4>

      <div className="flex flex-col">
        <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4 "></div>

        {brandData.map((brand, key) => (
          <Link href="/tables" key={key}>
            <div
              className={` sm:grid-cols-5 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
            >
              <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">

                </div>
                <p className="hidden text-black dark:text-white sm:block text-center">
                  {brand.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TableTwo;
