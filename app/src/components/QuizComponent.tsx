import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft, CheckCircle2, XCircle, BarChart } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import type { QuizQuestion } from '../types/database';

interface QuizComponentProps {
  examType: 'HESI' | 'TEAS';
  subject: string;
  onBack: () => void;
}

export default function QuizComponent({ examType, subject, onBack }: QuizComponentProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ questionId: string; selected: number; correct: boolean }[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, [examType, subject]);

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('exam_type', examType)
        .eq('subject', subject)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      
      // Shuffle questions
      const shuffledQuestions = [...(data || [])].sort(() => Math.random() - 0.5);
      setQuestions(shuffledQuestions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch questions');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = async () => {
    if (selectedAnswer === null) return;

    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQuestionData.correct_answer;

    // Add answer to answers array
    setAnswers(prev => [...prev, {
      questionId: currentQuestionData.id,
      selected: selectedAnswer,
      correct: isCorrect
    }]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed
      const score = answers.filter(a => a.correct).length + (isCorrect ? 1 : 0);
      const totalQuestions = questions.length;

      try {
        // Create quiz attempt
        const { data: attemptData, error: attemptError } = await supabase
          .from('quiz_attempts')
          .insert({
            user_id: user?.id,
            exam_type: examType,
            subject,
            score,
            total_questions: totalQuestions
          })
          .select()
          .single();

        if (attemptError) throw attemptError;

        // Save answers
        const { error: answersError } = await supabase
          .from('quiz_answers')
          .insert(
            answers.map(answer => ({
              attempt_id: attemptData.id,
              question_id: answer.questionId,
              selected_answer: answer.selected,
              is_correct: answer.correct
            }))
          );

        if (answersError) throw answersError;

        setShowResults(true);
      } catch (err) {
        toast.error('Failed to save quiz results');
        console.error('Error saving quiz results:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Brain className="w-12 h-12 text-purple-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const correctAnswers = answers.filter(a => a.correct).length;
    const totalQuestions = questions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    const getPerformanceMessage = () => {
      if (percentage >= 90) return "Excellent! You're well-prepared!";
      if (percentage >= 80) return "Great job! Keep up the good work!";
      if (percentage >= 70) return "Good effort! Focus on the areas you missed.";
      return "Keep practicing! Review the topics you found challenging.";
    };

    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart className="w-6 h-6 text-purple-600 mr-2" />
            Quiz Results
          </h2>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Score</span>
              <span className="text-2xl font-bold text-purple-600">{percentage}%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-purple-600 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-lg font-medium text-gray-900">{getPerformanceMessage()}</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-600 text-2xl font-bold">{correctAnswers}</p>
                <p className="text-green-800">Correct</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-600 text-2xl font-bold">{totalQuestions - correctAnswers}</p>
                <p className="text-red-800">Incorrect</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onBack}
              className="px-6 py-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Back to Subjects
            </button>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setAnswers([]);
                setShowResults(false);
                fetchQuestions();
              }}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-8 text-purple-600 hover:text-purple-700 font-medium"
      >
        <ArrowLeft className="w-5 h-5 inline mr-2" />
        Back to Subjects
      </button>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-purple-600">
            {currentQuestionData.topic}
          </span>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-900 mb-6">{currentQuestionData.question}</p>
          
          <div className="space-y-3">
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors duration-200 ${
                  selectedAnswer === index
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <span className="inline-block w-6">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}