import { db } from "@/app/_lib/prisma";
import { BaberShopInfo } from "./_components/babershop-info";

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
  });
  if (!babershop) {
    return null;
  }
  return <BaberShopInfo babershop={babershop} />;
};
export default BarbersShopDetails;
