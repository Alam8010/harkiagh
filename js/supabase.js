const SUPABASE_URL = 'https://gxaxkvptizbplpxzfgfc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4YXhrdnB0aXpicGxweHpmZ2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MjE3NDQsImV4cCI6MjA5MDk5Nzc0NH0.uR1IKYCELkca5Rw-zpVNpYx4xzn2vuwYV59shOkRw9k';
const CLOUDINARY_CLOUD = 'dzpxkndcz';
const CLOUDINARY_PRESET = 'harkiagh';
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);