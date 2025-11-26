import 'react-native-url-polyfill';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://btvmqyicepsbgvpgbalj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dm1xeWljZXBzYmd2cGdiYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODU1NzEsImV4cCI6MjA3OTc2MTU3MX0.RvXDS8HjX4nvwtwMeKb8Fdei2ICmsXfvh_XJLKv1Nho";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);