import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { Header } from "../_components/header";
import { Search } from "./_components/Search";
import { BookingItem } from "../_components/booking-item";

export default function Home() {
  return (
  <div>
    <Header/>
    <div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Olá Tarcisio </h2>
    <p className="capitalize text-sm">{format(new Date(),"EEEE, d 'de' MMMM", { locale: ptBR} )}</p>
    <div className="px-5 mt-6">
    <Search/>
    </div>
    <div className="mt-5">
      <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
      <BookingItem/>
    </div>
    </div>
  </div>
  );
}
