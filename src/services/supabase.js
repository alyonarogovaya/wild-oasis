import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qtimoayyrvnxohcjwfdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aW1vYXl5cnZueG9oY2p3ZmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczNTI2NjAsImV4cCI6MjAzMjkyODY2MH0.4tBHqbb1Y8_4CsY7Pcdmfxg4oVHCSLM40gbqvkCbOs8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
