import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
  service: Service;
}
export const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex gap-4 items-center ">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              style={{ objectFit: "contain" }}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-sm">{service.name}</h2>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex items-center justify-between mt-2">
            <p className="font-bold text-primary text-sm">
              {Intl.NumberFormat("pt-BR", { currency: "BRL" }).format(
                Number(service.price)
              )}
            </p>
            <Button variant="secondary">Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
