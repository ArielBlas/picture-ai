import Pricing from "@/components/landing-page/Pricing";
import { getUser, getProducts } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const [user, products] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
  ]);

  // if (user) {
  //   return redirect("/dashboard");
  // }

  return (
    <main className="flex flex-co min-h-screen items-center justify-center">
      <Pricing products={products ?? []} />
    </main>
  );
}
