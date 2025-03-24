import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Brain, CheckCircle2, ArrowRight, X, Calculator as CalculatorIcon, ArrowRightCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import Calculator from './Calculator';

interface Example {
  problem: string;
  solution: string;
  explanation: string;
}

interface PracticeProblem {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  optionExplanations?: string[];
}

interface LearningContentProps {
  title: string;
  description: string;
  keyPoints: string[];
  examples: Example[];
  practice?: {
    problems: PracticeProblem[];
  };
  nextTopic?: {
    name: string;
    path: string;
  };
  topicCode: string;
}

export default function LearningContent({ 
  title, 
  description, 
  keyPoints, 
  examples,
  practice,
  nextTopic,
  topicCode
}: LearningContentProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, number>>({});
  const [checkedAnswers, setCheckedAnswers] = React.useState<Record<number, boolean>>({});
  const [showExplanation, setShowExplanation] = React.useState<Record<number, boolean>>({});
  const [showCalculator, setShowCalculator] = React.useState(false);
  const [isCompleted, setIsCompleted] = React.useState(false);

  React.useEffect(() => {
    const loadCompletionStatus = async () => {
      try {
        const { data } = await supabase
          .from('user_progress')
          .select('completed')
          .eq('topic_code', topicCode)
          .eq('user_id', user?.id)
          .single();
        
        setIsCompleted(!!data?.completed);
      } catch (error) {
        console.error('Error loading completion status:', error);
      }
    };

    if (user) {
      loadCompletionStatus();
    }
  }, [topicCode, user]);

  const handleOptionSelect = (problemIndex: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [problemIndex]: optionIndex
    }));
    setCheckedAnswers(prev => ({
      ...prev,
      [problemIndex]: false
    }));
    setShowExplanation(prev => ({
      ...prev,
      [problemIndex]: false
    }));
  };

  const checkAnswer = (problemIndex: number) => {
    const isCorrect = selectedAnswers[problemIndex] === practice?.problems[problemIndex].correctAnswer;
    setCheckedAnswers(prev => ({
      ...prev,
      [problemIndex]: true
    }));
    setShowExplanation(prev => ({
      ...prev,
      [problemIndex]: true
    }));
  };

  const handleMarkComplete = async () => {
    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user?.id,
          topic_code: topicCode,
          completed: true,
          completed_at: new Date().toISOString()
        });

      if (error) throw error;
      setIsCompleted(true);
      toast.success('Topic marked as completed!');
    } catch (error) {
      console.error('Error marking topic as complete:', error);
      toast.error('Failed to mark topic as complete');
    }
  };

  return (
    <div className="py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <CalculatorIcon className="w-5 h-5 mr-2" />
            Calculator
          </button>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">{description}</p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Brain className="w-5 h-5 text-blue-600 mr-2" />
            Key Points to Remember
          </h2>
          <ul className="space-y-3">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
            Examples
          </h2>
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex items-center text-lg font-medium text-gray-900 mb-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                  Example {index + 1}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{example.problem}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mb-2">
                  <p className="font-medium text-blue-900">Solution:</p>
                  <p className="text-blue-800">{example.solution}</p>
                </div>
                <p className="text-gray-600 text-sm">{example.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {practice && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Brain className="w-5 h-5 text-blue-600 mr-2" />
              Practice Problems
            </h2>
            <div className="space-y-8">
              {practice.problems.map((problem, problemIndex) => (
                <div key={problemIndex} className="border-b border-gray-200 last:border-0 pb-8 last:pb-0">
                  <p className="font-medium text-gray-900 mb-4">Problem {problemIndex + 1}:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-700">{problem.question}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    {problem.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleOptionSelect(problemIndex, optionIndex)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors duration-200 ${
                          selectedAnswers[problemIndex] === optionIndex
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        } ${
                          checkedAnswers[problemIndex]
                            ? optionIndex === problem.correctAnswer
                              ? 'bg-green-50 border-green-500'
                              : selectedAnswers[problemIndex] === optionIndex
                              ? 'bg-red-50 border-red-500'
                              : ''
                            : ''
                        }`}
                      >
                        <span className="inline-block w-6">{String.fromCharCode(65 + optionIndex)}.</span>
                        {option}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => checkAnswer(problemIndex)}
                    disabled={selectedAnswers[problemIndex] === undefined || checkedAnswers[problemIndex]}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Check Answer
                  </button>

                  {showExplanation[problemIndex] && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      selectedAnswers[problemIndex] === problem.correctAnswer
                        ? 'bg-green-50'
                        : 'bg-red-50'
                    }`}>
                      <div className={`font-medium mb-2 ${
                        selectedAnswers[problemIndex] === problem.correctAnswer
                          ? 'text-green-800'
                          : 'text-red-800'
                      }`}>
                        {problem.optionExplanations?.[selectedAnswers[problemIndex]] || (
                          selectedAnswers[problemIndex] === problem.correctAnswer
                            ? 'Correct! Well done!'
                            : `Incorrect. The correct answer is ${String.fromCharCode(65 + problem.correctAnswer)}.`
                        )}
                      </div>
                      {problem.explanation && (
                        <div className="mt-2">
                          <p className="font-medium text-gray-900">Additional Explanation:</p>
                          <p className="text-gray-700">{problem.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleMarkComplete}
              className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Mark as completed
            </span>
          </div>
          
          {nextTopic && (
            <button
              onClick={() => navigate(nextTopic.path)}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Next Topic: {nextTopic.name}</span>
              <ArrowRightCircle className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>

        <Calculator isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
      </div>
    </div>
  );
}