import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://esystmnnnfzvboqphqxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzeXN0bW5ubmZ6dmJvcXBocXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNTE5NTcsImV4cCI6MjA4NjkyNzk1N30.gghCF6lHWnPOh2A5YQTKwKDycjTSYLjFpweND4co8yE'

export const supabase = createClient(supabaseUrl, supabaseKey)
