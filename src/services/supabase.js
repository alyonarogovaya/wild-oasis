import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qzkukktaabbdsorfvsst.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6a3Vra3RhYWJiZHNvcmZ2c3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTc5NzMsImV4cCI6MjA2Njg3Mzk3M30.cWl1PyaP3XXH7KAf6DiXIxx4_yWd6hsUsh9GuNrociw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
