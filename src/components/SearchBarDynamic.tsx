"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { debounce } from "ts-debounce";
import IconSearchImg from "@/assets/search.png";
import Image from "next/image";

type SearchTerm = {
  key: string;
  value: string;
};

type Props = {
  searchTerms: SearchTerm[];
  customConditionInPath?: string;
};

export const DynamicSearch = ({
  searchTerms,
  customConditionInPath,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [searchValues, setSearchValues] = useState<string[]>(
    searchTerms.map(() => "")
  );

  useEffect(() => {
    const setSearchQuery = debounce(() => {
      const queries = searchTerms
        .map(({ key }, index) => `${key}=${searchValues[index]}`)
        .join("&");
      router.push(`${pathname}?${customConditionInPath}&${queries}`);
    }, 500);

    setSearchQuery();

    return () => setSearchQuery.cancel();
  }, [searchValues, pathname, router, searchTerms, customConditionInPath]);

  const inputElements = searchTerms.map(({ value }, index) => (
    <div className="relative w-full" key={index}>
      <Image
        src={IconSearchImg}
        alt="search"
        className=" h-[20px] w-[20px] absolute top-[17px] left-3"
      />
      <input
        className="h-10 w-full rounded-xl border pl-10 pr-4 mt-2"
        onChange={(e) => {
          const newSearchValues = [...searchValues];
          newSearchValues[index] = e.target.value;
          setSearchValues(newSearchValues);
        }}
        placeholder={`Buscar ${value}`}
        value={searchValues[index]}
      />
    </div>
  ));

  return inputElements;
};
