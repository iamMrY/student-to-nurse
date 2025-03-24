/*
  # Seed recommendations table with initial data

  1. Changes
    - Add sample recommendations for each type
    - Include varied content types and sources
*/

INSERT INTO recommendations (title, description, type, author, link)
VALUES
  (
    'Fundamentals of Nursing',
    'Comprehensive textbook covering essential nursing concepts and skills',
    'TEXTBOOK',
    'Patricia A. Potter',
    'https://example.com/fundamentals-nursing'
  ),
  (
    'Medical-Surgical Nursing',
    'Evidence-based approach to medical-surgical nursing care',
    'TEXTBOOK',
    'Lewis et al.',
    'https://example.com/medsurg-nursing'
  ),
  (
    'Davis''s Drug Guide for Nurses',
    'Essential drug reference for nursing students and professionals',
    'REFERENCE',
    'April Hazard Vallerand',
    'https://example.com/davis-drug-guide'
  ),
  (
    'Nursing Diagnosis Handbook',
    'Guide to nursing diagnosis and care planning',
    'REFERENCE',
    'Betty J. Ackley',
    'https://example.com/diagnosis-handbook'
  ),
  (
    'Premium Stethoscope',
    'High-quality stethoscope with excellent acoustics',
    'SUPPLY',
    NULL,
    'https://example.com/premium-stethoscope'
  ),
  (
    'Nursing Scrub Set',
    'Comfortable and durable nursing uniforms',
    'SUPPLY',
    NULL,
    'https://example.com/scrub-set'
  ),
  (
    'Clinical Calculator Pro',
    'Medical calculations and drug dosage app',
    'DEVICE',
    NULL,
    'https://example.com/clinical-calculator'
  ),
  (
    'Digital Blood Pressure Monitor',
    'Accurate and easy-to-use BP monitoring device',
    'DEVICE',
    NULL,
    'https://example.com/bp-monitor'
  ),
  (
    'Compression Socks Set',
    'Support socks for long shifts',
    'PERSONAL_ITEM',
    NULL,
    'https://example.com/compression-socks'
  ),
  (
    'Nursing Badge Holder',
    'Retractable badge reel with multiple card slots',
    'PERSONAL_ITEM',
    NULL,
    'https://example.com/badge-holder'
  );