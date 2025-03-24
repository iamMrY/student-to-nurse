/*
  # Add Option Explanations to Practice Problems

  1. Changes
    - Add option_explanations array column to practice_problems table
    - Update existing records with explanations for each option

  2. Details
    - Each option will have a corresponding explanation
    - Explanations will help users understand why each answer is correct or incorrect
*/

-- Add option_explanations column
ALTER TABLE practice_problems 
ADD COLUMN option_explanations text[] NOT NULL DEFAULT '{}';

-- Update existing practice problems with option explanations
UPDATE practice_problems
SET option_explanations = ARRAY[
  'This is correct! Let''s break it down:
   1. First, add the ones: 5 + 9 = 14, write down 4 and carry 1
   2. Next, add the tens: 4 + 8 + 1 (carried) = 13, write down 3 and carry 1
   3. Then, add the hundreds: 3 + 7 + 1 (carried) = 11, write down 1 and carry 1
   4. Finally, add the thousands: 2 + 6 + 1 (carried) = 9
   So, 2,345 + 6,789 = 9,134',
  'This is incorrect. You may have made a mistake in carrying numbers. Try breaking down the addition step by step.',
  'This is incorrect. Check your addition in the hundreds place. Remember to carry numbers when needed.',
  'This is incorrect. Double-check your work, especially in the tens and hundreds places.'
]
WHERE question = 'Calculate: 2,345 + 6,789';

UPDATE practice_problems
SET option_explanations = ARRAY[
  'This is correct! Let''s solve it step by step:
   1. In the ones place: 0 - 6 requires borrowing from 8,000
   2. After borrowing: 10 - 6 = 4
   3. In the tens: 9 - 5 = 4
   4. In the hundreds: 9 - 4 = 5
   5. In the thousands: 7 - 3 = 4
   So, 8,000 - 3,456 = 4,544',
  'This is incorrect. Check your borrowing process, especially in the hundreds place.',
  'This is incorrect. You may have forgotten to borrow or borrowed incorrectly.',
  'This is incorrect. Review your subtraction process and make sure you''re borrowing correctly.'
]
WHERE question = 'Calculate: 8,000 - 3,456';

UPDATE practice_problems
SET option_explanations = ARRAY[
  'This is incorrect. Check your carrying process in the hundreds place.',
  'This is correct! Let''s break it down:
   1. Add ones: 4 + 7 = 11, write 1, carry 1
   2. Add tens: 3 + 8 + 1 = 12, write 2, carry 1
   3. Add hundreds: 2 + 9 + 1 = 12, write 2, carry 1
   4. Add thousands: 7 + 8 + 1 = 16
   So, 7,234 + 8,987 = 16,221',
  'This is incorrect. Double-check your addition in the thousands place.',
  'This is incorrect. You may have made a mistake in carrying numbers between places.'
]
WHERE question = 'Calculate: 7,234 + 8,987';