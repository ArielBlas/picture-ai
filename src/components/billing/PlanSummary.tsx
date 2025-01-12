import React from "react";
import { Tables } from "@datatypes.types";
import { User } from "@supabase/supabase-js";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import PricingSheet from "./PricingSheet";
import { format } from "date-fns";

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

interface PlanSummaryProps {
  subscription: SubscriptionWithProduct | null;
  user: User | null;
  products: ProductWithPrices[] | null;
  credits: Tables<"credits"> | null;
}

const PlanSummary = ({
  credits,
  subscription,
  user,
  products,
}: PlanSummaryProps) => {
  if (!credits || !subscription || subscription.status !== "active") {
    return (
      <Card className="max-w-5xl">
        <CardContent className="px-5 py-4">
          <h3 className="pb-4 text-base font-semibold flex flex-wrap items-center gap-x-2">
            <span>Plan Summary</span>
            <Badge variant={"secondary"} className="bg-primary/10">
              No plan
            </Badge>
          </h3>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-5 flex flex-col pr-12">
              <div className="flex-1 text-sm font-normal flex w-full justify-between pb-1">
                <span className="font-normal text-muted-foreground ml-1 lowercase">
                  Image Generation credits left
                </span>
                <span className="font-medium">0 remaining</span>
              </div>
              <div className="mb-1 flex items-end">
                <Progress value={0} className="w-full h-2" />
              </div>
            </div>

            <div className="col-span-5 flex flex-col pr-12">
              <div className="flex-1 text-sm font-normal flex w-full justify-between pb-1">
                <span className="font-normal text-muted-foreground ml-1 lowercase">
                  Model training credits left
                </span>
                <span className="font-medium">0 remaining</span>
              </div>
              <div className="mb-1 flex items-end">
                <Progress value={0} className="w-full h-2" />
              </div>
            </div>

            <div className="col-span-full flex flex-col">
              Please upgrade to a plan to continue using the app.
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border px-4 py-3">
          <span className="flex ml-auto flex-row">
            <PricingSheet
              user={user}
              products={products ?? []}
              subscription={subscription}
            />
          </span>
        </CardFooter>
      </Card>
    );
  }

  const {
    products: subscriptionProduct,
    unit_amount,
    currency,
  } = subscription?.prices ?? {};

  const priceString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency!,
    minimumFractionDigits: 0,
  }).format((unit_amount || 0) / 100);

  const imageGenCount = credits.image_generation_count ?? 0;
  const modelTrainCount = credits.model_training_count ?? 0;
  const maxImageGenCount = credits.max_image_generation_count ?? 0;
  const maxModelTrainCount = credits.max_model_training_count ?? 0;

  return (
    <Card className="max-w-5xl">
      <CardContent className="px-5 py-4 pb-8">
        <h3 className="pb-4 text-base font-semibold flex flex-wrap items-center gap-x-2">
          <span>Plan Summary</span>
          <Badge variant={"secondary"} className="bg-primary/10">
            {subscriptionProduct?.name} plan
          </Badge>
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
          <div className="col-span-full xl:col-span-5 flex flex-col xl:pr-12">
            <div className="flex-1 text-sm font-normal flex w-full justify-between items-center">
              <span className="font-normal text-muted-foreground ml-1 lowercase">
                Image Generation credits
              </span>
              <span className="font-semibold text-base">
                {imageGenCount}/{maxImageGenCount}
              </span>
            </div>
            <div className="mb-1 flex items-end">
              <Progress
                value={(imageGenCount / maxImageGenCount) * 100}
                className="w-full h-2"
              />
            </div>
          </div>

          <div className="col-span-full xl:col-span-5 flex flex-col xl:pr-12">
            <div className="flex-1 text-sm font-normal flex w-full justify-between items-center">
              <span className="font-normal text-muted-foreground ml-1 lowercase">
                Model training credits
              </span>
              <span className="font-semibold text-base">
                {modelTrainCount}/{maxModelTrainCount}
              </span>
            </div>
            <div className="mb-1 flex items-end">
              <Progress
                value={(modelTrainCount / maxModelTrainCount) * 100}
                className="w-full h-2"
              />
            </div>
          </div>

          <div className="col-span-full xl:col-span-3 flex flex-row justify-between flex-wrap">
            <div className="flex flex-col pb-0">
              <div className="text-sm font-normal">Price/Month</div>
              <div className="flex-1 pt-1 text-sm font-medium">
                {priceString}
              </div>
            </div>

            <div className="flex flex-col pb-0">
              <div className="text-sm font-normal">Included Credits</div>
              <div className="flex-1 pt-1 text-sm font-medium">
                {maxImageGenCount}
              </div>
            </div>

            <div className="flex flex-col pb-0">
              <div className="text-sm font-normal">Renewal Date</div>
              <div className="flex-1 pt-1 text-sm font-medium">
                {format(
                  new Date(subscription.current_period_end),
                  "MMM d, yyyy"
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanSummary;
