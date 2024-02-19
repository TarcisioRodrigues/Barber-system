import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { Header } from "../_components/header/header";
import { Search } from "./_components/Search";

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
    </div>
  </div>
  );
}
