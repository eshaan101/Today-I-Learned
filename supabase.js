import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iewuczeshdgldgqeoddw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlld3VjemVzaGRnbGRncWVvZGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NjQ2NTEsImV4cCI6MjAxODI0MDY1MX0.DAaY2V2nsE0Pc4MMIZCY0wTda_AzdbAtGGumM_-QuoM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
