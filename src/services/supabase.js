import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://chwuyuowgztqpscswtyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNod3V5dW93Z3p0cXBzY3N3dHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNDM2MDcsImV4cCI6MjA0NTgxOTYwN30.OsW_K4hVGhcUDzzrsxTqJ10qWkaL8CnD_DJZYB358f8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
