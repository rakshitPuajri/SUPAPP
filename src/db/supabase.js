import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'


const superbaseUrl = process.env.SUPABASE_URL;
const superbaseKey = process.env.SUPABASE_ANON_KEY

// create client 
const supabase = createClient(superbaseUrl,superbaseKey);

if (!superbaseUrl || !superbaseKey) {
  throw new Error('Supabase env variables missing')
}else{
  console.log(`DB conneccted`);
};

export { supabase };