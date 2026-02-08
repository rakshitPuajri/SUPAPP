import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY

// create client 
const supabase = createClient(supabaseUrl, supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase env variables missing')
} else {
  console.log(`DB connected`);
}

export { supabase };