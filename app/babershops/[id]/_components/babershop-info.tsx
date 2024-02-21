"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbersShopPageProps {
  babershop: Barbershop;
}

export const BaberShopInfo = ({ babershop }: BarbersShopPageProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <div>
      <div className="h-[250px] w-full relative ">
        <Button
          onClick={handleBackClick}
          size="icon"
          variant="outline"
          className="z-50 absolute top-4 left-4 "
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="z-50  absolute top-4 right-4 "
        >
          <MenuIcon />
        </Button>

        <Image
          alt={babershop.name}
          src={babershop.imageUrl}
          fill
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold ">{babershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPin size={18} className="text-primary" />
          <p className="text-sm">{babershop.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon size={18} className="text-primary" />
          <p className="text-sm">899 avaliações</p>
        </div>
      </div>
    </div>
  );
};
