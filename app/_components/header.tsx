"use client";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export const Header = () => {
  const { data, status } = useSession();
  return (
    <Card>
      <CardContent className="flex flex-row justify-between p-5 items-center">
        <Image src="/Logo.png" alt="logo" height={22} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="p-2">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader className="p-5 text-left border-b border-solid border-primary">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex justify-between px-5 py-6 items-center">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={data.user?.image ?? ""}
                      alt={data.user.name ?? ""}
                    />
                  </Avatar>
                  <h2 className="font-bold ">{data.user.name}</h2>
                </div>
                <Button
                  onClick={() => signOut()}
                  variant="secondary"
                  size="icon"
                >
                  <LogOutIcon size={25} />
                </Button>
              </div>
            ) : (
              <div className=" flex flex-col px-5 py-6 gap-3">
                <div className="flex items-center gap-3  ">
                  <UserIcon />
                  <h2 className="font-bold">Olá,faça seu login!</h2>
                </div>
                <Button
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={() => signIn()}
                >
                  <LogInIcon className="mr-2" size={15} />
                  Fazer Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Inicio
                </Link>
              </Button>
              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/bookings">
                    <CalendarIcon size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
