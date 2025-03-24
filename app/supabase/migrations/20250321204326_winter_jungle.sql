/*
  # Add Sample Quiz Questions

  1. New Data
    - Sample questions for HESI and TEAS exams
    - Questions cover all major subjects
    - Each question includes:
      - Multiple choice options
      - Correct answer
      - Explanation
      - Difficulty level

  2. Subjects Covered
    HESI:
    - Mathematics
    - Reading Comprehension
    - Grammar
    - Vocabulary
    - Biology
    - Chemistry
    - Anatomy & Physiology

    TEAS:
    - Reading
    - Math
    - Science
    - English
*/

-- Insert HESI Math Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'HESI',
    'Mathematics',
    'Basic Operations',
    'What is the result of 1,234 + 5,678?',
    ARRAY['6,912', '7,912', '6,812', '7,012'],
    0,
    'Add digits from right to left: 4+8=12 (write 2, carry 1), 3+7+1=11 (write 1, carry 1), 2+6+1=9, 1+5=6. So 1,234 + 5,678 = 6,912',
    'medium'
  ),
  (
    'HESI',
    'Mathematics',
    'Fractions',
    'Simplify the fraction: 24/36',
    ARRAY['2/3', '3/4', '1/2', '3/5'],
    0,
    'To simplify, divide both numerator and denominator by their greatest common divisor (12): 24÷12/36÷12 = 2/3',
    'easy'
  );

-- Insert HESI Reading Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'HESI',
    'Reading',
    'Main Ideas',
    'The main idea of a passage is:',
    ARRAY[
      'The central thought that the author wants to communicate',
      'The first sentence of each paragraph',
      'The longest paragraph in the text',
      'All the details in the passage'
    ],
    0,
    'The main idea is the central message or point that the author is trying to convey throughout the passage.',
    'easy'
  );

-- Insert HESI Grammar Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'HESI',
    'Grammar',
    'Subject-Verb Agreement',
    'Select the correct form: The group of students ___ to the lecture.',
    ARRAY['listen', 'listens', 'are listening', 'is listening'],
    1,
    'When a collective noun (group) is considered as one unit, use a singular verb (listens).',
    'medium'
  );

-- Insert HESI Biology Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'HESI',
    'Biology',
    'Cell Structure',
    'Which organelle is responsible for protein synthesis in the cell?',
    ARRAY['Ribosomes', 'Mitochondria', 'Golgi apparatus', 'Nucleus'],
    0,
    'Ribosomes are the cellular structures responsible for protein synthesis through the process of translation.',
    'medium'
  );

-- Insert HESI Chemistry Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'HESI',
    'Chemistry',
    'Chemical Bonds',
    'What type of bond is formed when electrons are shared between atoms?',
    ARRAY['Covalent bond', 'Ionic bond', 'Hydrogen bond', 'Van der Waals force'],
    0,
    'A covalent bond is formed when atoms share electrons to achieve a stable electron configuration.',
    'medium'
  );

-- Insert HESI Anatomy Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'HESI',
    'Anatomy',
    'Cardiovascular System',
    'Which chamber of the heart pumps blood to the lungs?',
    ARRAY['Right ventricle', 'Left ventricle', 'Right atrium', 'Left atrium'],
    0,
    'The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery.',
    'medium'
  );

-- Insert TEAS Reading Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'TEAS',
    'Reading',
    'Key Ideas',
    'What is the purpose of a topic sentence?',
    ARRAY[
      'To introduce the main idea of a paragraph',
      'To provide supporting details',
      'To conclude a paragraph',
      'To transition between paragraphs'
    ],
    0,
    'A topic sentence introduces the main idea or focus of a paragraph, helping readers understand what the paragraph will be about.',
    'easy'
  );

-- Insert TEAS Math Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'TEAS',
    'Math',
    'Algebra',
    'Solve for x: 3x + 7 = 22',
    ARRAY['5', '7', '8', '15'],
    0,
    'Subtract 7 from both sides: 3x = 15. Then divide both sides by 3: x = 5',
    'medium'
  );

-- Insert TEAS Science Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'TEAS',
    'Science',
    'Human Anatomy',
    'Which system is responsible for protecting the body against disease?',
    ARRAY['Immune system', 'Digestive system', 'Respiratory system', 'Circulatory system'],
    0,
    'The immune system is a complex network of cells, tissues, and organs that work together to defend the body against pathogens.',
    'medium'
  );

-- Insert TEAS English Questions
INSERT INTO quiz_questions (exam_type, subject, topic, question, options, correct_answer, explanation, difficulty)
VALUES
  (
    'TEAS',
    'English',
    'Grammar',
    'Identify the correct sentence:',
    ARRAY[
      'The patient, who was admitted yesterday, is responding well to treatment.',
      'The patient who was admitted yesterday is, responding well to treatment.',
      'The patient who was admitted yesterday, is responding well to treatment.',
      'The patient who was admitted, yesterday is responding well to treatment.'
    ],
    0,
    'The first option uses commas correctly to set off the non-restrictive clause "who was admitted yesterday."',
    'medium'
  );

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS quiz_questions_exam_topic_idx ON quiz_questions(exam_type, subject, topic);
CREATE INDEX IF NOT EXISTS quiz_questions_difficulty_idx ON quiz_questions(difficulty);