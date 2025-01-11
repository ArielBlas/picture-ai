import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
// import { Logo } from "../Logo";

const NavItems = () => {
  return (
    <>
      <Link
        href="#features"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        Features
      </Link>
      <Link
        href="#pricing"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        Pricing
      </Link>
      <Link
        href="#faqs"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        FAQs
      </Link>
      <Link
        href="/login?state=signup"
        className="text-sm font-medium hover:underline underline-offset-4"
      >
        <Button>Sign up</Button>
      </Link>
    </>
  );
};

const Navigation = () => {
  return (
    <div className="w-full bg-background/60 backdrop-blur-md fixed top-0 px-8 py-4 z-50 shadow-xl overflow-hidden">
      <header className="container mx-auto flex items-center">
        {/* <Logo /> */}
        <nav className="ml-auto hidden md:flex items-center justify-center gap-6">
          <NavItems />
        </nav>
        {/* mobile navigation */}
        <div className="ml-auto md:hidden overflow-hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu calcMode={"h-6 2-6"} strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-4 mt-12">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Navigation;