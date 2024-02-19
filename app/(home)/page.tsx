import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import { Header } from "../_components/header/header";

export default function Home() {
  return (
  <div>
    <Header/>
    <div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Olá Tarcisio </h2>
    <p>{format(new Date(),"EEEE, d 'de' MMMM", { locale: ptBR} )}</p>
    </div>
  </div>
  );
}
