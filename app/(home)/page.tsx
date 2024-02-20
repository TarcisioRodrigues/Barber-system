import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header } from "../_components/header";
import { Search } from "./_components/Search";
import { BookingItem } from "../_components/booking-item";
import { db } from "../_lib/prisma";
import { BarberShopItem } from "./_components/BarberShopItem";

export default async function Home() {
  const babershops = await db.barbershop.findMany({});
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá Tarcisio </h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}
        </p>
        <div className="px-5 mt-6">
          <Search />
        </div>
        <div className="mt-5">
          <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
            Agendamentos
          </h2>
          <BookingItem />
        </div>
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 mt-4 ">
          Recomendados
        </h2>
        <div className="mt-6 flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {babershops.map((barbershop) => (
            <BarberShopItem babershop={barbershop} key={barbershop.id} />
          ))}
        </div>
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 mt-4 ">
          Poupulares
        </h2>
        <div className="mt-6 mb-[4.5rem] flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {babershops.map((barbershop) => (
            <BarberShopItem babershop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
