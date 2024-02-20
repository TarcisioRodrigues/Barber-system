import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarberShopItemProps {
  babershop: Barbershop;
}
export const BarberShopItem = ({ babershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl ">
      <CardContent className=" py-0 px-1">
        <div className=" relative h-[159px] w-[95%] mx-auto ">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className=" opacity-90 flex items-center top-3 left-3 gap-1"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5.0</span>
            </Badge>
          </div>
          <Image
            src={babershop.imageUrl}
            width={0}
            height={0}
            alt="Image"
            sizes="100vw"
            className="rounded-2xl "
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>
        <div className="px-3 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {babershop.name}
          </h2>
          <p className="text-sm overflow-hidden text-ellipsis text-nowrap">
            {babershop.address}
          </p>
          <Button className="items-center mt-3 w-full " variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
