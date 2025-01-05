"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

interface AuthResponse {
  error: null | string;
  success: boolean;
  data: unknown | null;
}

export async function signup(formadata: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  const data = {
    email: formadata.get("email") as string,
    password: formadata.get("password") as string,
    options: {
      data: {
        full_name: formadata.get("full_name") as string,
      },
    },
  };

  const { data: signUpData, error } = await supabase.auth.signUp(data);

  return {
    error: error?.message || "There was an error signing up!",
    success: !error,
    data: signUpData || null,
  };
}

export async function login(formadata: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  const data = {
    email: formadata.get("email") as string,
    password: formadata.get("password") as string,
  };

  const { data: signInData, error } = await supabase.auth.signInWithPassword(
    data
  );

  return {
    error: error?.message || "There was an error logining in!",
    success: !error,
    data: signInData || null,
  };
}

export async function logout(): Promise<void> {
  const supabase = await createClient();

  await supabase.auth.signOut();
  redirect("/login");
}
