import { db } from "@/app/_lib/prisma";
import { BaberShopInfo } from "./_components/babershop-info";
import { ServiceItem } from "./_components/service-item";

interface BarbersShopDetailsPageProps {
  params: {
    id?: string;
  };
}
const BarbersShopDetails = async ({ params }: BarbersShopDetailsPageProps) => {
  if (!params.id) {
    return null;
  }
  const babershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });
  if (!babershop) {
    return null;
  }
  return (
    <div>
      <BaberShopInfo babershop={babershop} />
      <div className="flex flex-col gap-3 py-6">
        {babershop.services.map((item) => (
          <ServiceItem service={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default BarbersShopDetails;
