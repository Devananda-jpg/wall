import { createClient } from
"https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://zoocttggpubqmngkznrn.supabase.co";

const supabaseKey = "sb_publishable_sduCO_l-psSjc3aYSMhq7g_q_r7KOFv";

export const supabase =
    createClient(supabaseUrl, supabaseKey);