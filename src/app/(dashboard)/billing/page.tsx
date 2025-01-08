import React from "react";
import { getUser, getProducts, getSubscription } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import PlanSummary from "@/components/billing/PlanSummary";
import { getCredits } from "@/app/actions/credit-actions";
import Pricing from "@/components/billing/Pricing";

const BillingPage = async () => {
  const supabase = await createClient();

  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase),
  ]);

  if (!user) {
    return redirect("/login");
  }

  const { data: credits } = await getCredits();

  return (
    <section className="container mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-light">Plans & BIlling</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>

      <div className="grid gap-10">
        <PlanSummary
          subscription={subscription}
          user={user}
          products={products || []}
          credits={credits}
        />
        {subscription.status === "active" && (
          <Pricing
            user={user}
            products={products ?? []}
            subscription={subscription}
            showInterval={false}
            className="!p-0 max-w-full"
            activeProduct={
              subscription?.prices.product?.name.toLowerCase() || "pro"
            }
          />
        )}
      </div>
    </section>
  );
};

export default BillingPage;
