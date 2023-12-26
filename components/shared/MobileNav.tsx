"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const MobileNav = () => {
  // detect md or larger screens
  const [isOpen, setIsOpen] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width: 48em)");

  useEffect(() => {
    // Close the menu when the screen size is at least medium
    if (isMediumScreen) {
      setIsOpen(false);
    }
  }, [isMediumScreen]);

  return (
    <nav className="md:hidden">
      <Sheet
        open={isOpen}
        onOpenChange={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
