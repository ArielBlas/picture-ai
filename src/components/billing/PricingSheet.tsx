import React from "react";
import { Tables } from "@datatypes.types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Pricing from "./Pricing";
import { User } from "@supabase/supabase-js";

type Product = Tables<"products">;
type Price = Tables<"prices">;
type Subscrition = Tables<"subscriptions">;

interface ProductWithPrices extends Product {
  prices: Price[];
}

interface PriceWithProducts extends Price {
  products: Product | null;
}

interface SubscriptionWithProduct extends Subscrition {
  prices: PriceWithProducts | null;
}

interface PricingSheetProps {
  subscription: SubscriptionWithProduct | null;
  user: User | null;
  products: ProductWithPrices[] | null;
}

const PricingSheet = ({ user, products, subscription }: PricingSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>upgrade</Button>
      </SheetTrigger>
      <SheetContent className="max-w-full sm:max-w-[90vw] lg:max-w-[70vw] text-left w-full">
        <SheetHeader>
          <SheetTitle>Change subscription plan</SheetTitle>
          <SheetDescription>
            Choose a plan that fits your needs and budgeet to continue using our
            service.
          </SheetDescription>
        </SheetHeader>

        <Pricing
          user={user}
          products={products ?? []}
          subscription={subscription}
          mostPopularProduct="pro"
        />
      </SheetContent>
    </Sheet>
  );
};

export default PricingSheet;
