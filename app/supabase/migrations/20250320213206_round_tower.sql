/*
  # Add dummy nursing schools data

  1. Changes
    - Insert sample nursing schools data across different states
*/

INSERT INTO nursing_schools (name, address, city, state, zip_code, programs, accreditation, description, website)
VALUES
  (
    'Johns Hopkins School of Nursing',
    '525 N. Wolfe Street',
    'Baltimore',
    'Maryland',
    '21205',
    ARRAY['BSN', 'MSN', 'DNP'],
    'CCNE Accredited',
    'World-renowned nursing education with innovative research opportunities and clinical partnerships.',
    'https://nursing.jhu.edu'
  ),
  (
    'NYU Rory Meyers College of Nursing',
    '433 First Avenue',
    'New York',
    'New York',
    '10010',
    ARRAY['BSN', 'MSN', 'DNP'],
    'CCNE Accredited',
    'Located in the heart of NYC, offering cutting-edge nursing education and research opportunities.',
    'https://nursing.nyu.edu'
  ),
  (
    'UCLA School of Nursing',
    '700 Tiverton Avenue',
    'Los Angeles',
    'California',
    '90095',
    ARRAY['BSN', 'MSN', 'PhD'],
    'CCNE Accredited',
    'Leading nursing research institution with state-of-the-art simulation facilities.',
    'https://nursing.ucla.edu'
  ),
  (
    'University of Texas School of Nursing',
    '1710 Red River Street',
    'Austin',
    'Texas',
    '78701',
    ARRAY['BSN', 'MSN', 'PhD'],
    'CCNE Accredited',
    'Comprehensive nursing education with strong clinical partnerships across Texas.',
    'https://nursing.utexas.edu'
  ),
  (
    'University of Washington School of Nursing',
    '1959 NE Pacific Street',
    'Seattle',
    'Washington',
    '98195',
    ARRAY['BSN', 'MSN', 'DNP'],
    'CCNE Accredited',
    'Recognized for excellence in nursing research and education in the Pacific Northwest.',
    'https://nursing.uw.edu'
  ),
  (
    'Emory University School of Nursing',
    '1520 Clifton Road',
    'Atlanta',
    'Georgia',
    '30322',
    ARRAY['BSN', 'MSN', 'DNP'],
    'CCNE Accredited',
    'Leading nursing education institution in the Southeast with innovative programs.',
    'https://nursing.emory.edu'
  ),
  (
    'Rush University College of Nursing',
    '600 S Paulina Street',
    'Chicago',
    'Illinois',
    '60612',
    ARRAY['BSN', 'MSN', 'DNP'],
    'CCNE Accredited',
    'Integrated academic and clinical environment in the heart of Chicago.',
    'https://nursing.rush.edu'
  ),
  (
    'University of Michigan School of Nursing',
    '426 North Ingalls Street',
    'Ann Arbor',
    'Michigan',
    '48109',
    ARRAY['BSN', 'MSN', 'DNP'],
    'CCNE Accredited',
    'Renowned for research and innovation in nursing education.',
    'https://nursing.umich.edu'
  );