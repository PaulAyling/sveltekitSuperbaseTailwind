import { createClient } from '@supabase/supabase-js'



const apiUrl =  import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = __api.apiUrl
const supabaseAnonKey = __api.anonKey

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
console.log('supabase:',supabase)
