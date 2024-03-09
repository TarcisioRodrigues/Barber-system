"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row justify-between p-5 items-center">
        <Image src="/Logo.png" alt="logo" height={22} width={120} />
        <Button variant="outline" size="icon" className="p-2">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
};
