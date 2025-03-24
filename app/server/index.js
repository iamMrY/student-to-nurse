import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Supabase client with proper error handling
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase configuration. Please check your .env file.');
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: err.message || 'An unexpected error occurred'
  });
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Nursing Schools Endpoints
app.get('/api/nursing-schools', async (req, res, next) => {
  try {
    const { state } = req.query;
    let query = supabase.from('nursing_schools').select('*');
    
    if (state) {
      query = query.eq('state', state);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/nursing-schools/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('nursing_schools')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Nursing school not found' });
    }
    
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Success Stories Endpoints
app.get('/api/success-stories', async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('success_stories')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/success-stories/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('success_stories')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Success story not found' });
    }
    
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.post('/api/success-stories', async (req, res, next) => {
  try {
    const { name, role, years_experience, success_story } = req.body;
    
    // Validate required fields
    if (!name || !role || !years_experience || !success_story) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const { data, error } = await supabase
      .from('success_stories')
      .insert([{ name, role, years_experience, success_story }])
      .select()
      .single();
    
    if (error) throw error;
    
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

// Employers Endpoints
app.get('/api/employers', async (req, res, next) => {
  try {
    const { state, sponsorship } = req.query;
    let query = supabase.from('employers').select('*');
    
    if (state && state !== 'All Locations') {
      query = query.eq('state', state);
    }
    
    if (sponsorship) {
      query = query.contains('sponsorship_programs', [sponsorship]);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error) throw error;
    
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Apply error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});