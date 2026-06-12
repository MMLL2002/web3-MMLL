import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return createBrowserClient("https://scooetvgxrhmcfijovsb.supabase.co", "sb_publishable_yMbGT2CS6j8eFRHykr8pjA_EWyQsrFg");
  }
  return createBrowserClient(url, key);
}
