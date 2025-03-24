import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../../../../../components/PageLayout';
import LearningContent from '../../../../../components/LearningContent';
import { api } from '../../../../../api';
import type { PracticeProblem } from '../../../../../types/database';

export default function MultiplicationAndDivision() {
  const [practiceProblems, setPracticeProblems] = useState<PracticeProblem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPracticeProblems();
  }, []);

  const fetchPracticeProblems = async () => {
    try {
      const problems = await api.getPracticeProblems('addition-subtraction', 3);
      setPracticeProblems(problems);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch practice problems');
    } finally {
      setLoading(false);
    }
  };

  const content = {
    title: "Addition and Subtraction",
    description: "Master the fundamentals of adding and subtracting whole numbers, including mental math strategies and estimation techniques.",
    keyPoints: [
      "When adding numbers, the order doesn't matter (commutative property)",
      "When subtracting, order matters - always start with the larger number",
      "Line up place values carefully when working with multiple digits",
      "Remember to carry over or borrow when necessary",
      "Use estimation to check if your answer makes sense"
    ],
    examples: [
      {
        problem: "Add: 1,234 + 5,678",
        solution: "1,234 + 5,678 = 6,912",
        explanation: "Start from the right and work left. 4+8=12 (write 2, carry 1), 3+7+1=11 (write 1, carry 1), 2+6+1=9, 1+5=6."
      },
      {
        problem: "Subtract: 5,000 - 1,234",
        solution: "5,000 - 1,234 = 3,766",
        explanation: "When borrowing is needed, remember that borrowing from a zero requires borrowing from the next non-zero digit."
      }
    ],
    practice: loading ? undefined : {
      problems: practiceProblems.map(p => ({
        question: p.question,
        options: p.options,
        correctAnswer: p.correct_answer,
        explanation: p.explanation,
        optionExplanations: p.option_explanations
      }))
    },
    nextTopic: {
      name: "Multiplication and Division",
      path: "/hesi/mathematics/learning/multiplication-division"
    },
    topicCode: 'addition-subtraction'
  };

  if (error) {
    return (
      <PageLayout>
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/hesi/mathematics/basic-operations"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 pt-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Basic Operations
          </Link>
          
          <LearningContent {...content} />
        </div>
      </div>
    </PageLayout>
  );
}