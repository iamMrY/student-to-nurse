import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { BookOpen, Calculator, FileText, Brain, Heart, FlaskRound } from 'lucide-react';

type ExamType = 'HESI' | 'TEAS';

interface Subject {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const subjects: Record<ExamType, Subject[]> = {
  HESI: [
    { name: 'Mathematics', icon: <Calculator className="w-12 h-12" />, path: '/quiz/hesi/math' },
    { name: 'Reading Comprehension', icon: <BookOpen className="w-12 h-12" />, path: '/quiz/hesi/reading' },
    { name: 'Grammar', icon: <FileText className="w-12 h-12" />, path: '/quiz/hesi/grammar' },
    { name: 'Biology', icon: <Brain className="w-12 h-12" />, path: '/quiz/hesi/biology' },
    { name: 'Chemistry', icon: <FlaskRound className="w-12 h-12" />, path: '/quiz/hesi/chemistry' },
    { name: 'Anatomy & Physiology', icon: <Heart className="w-12 h-12" />, path: '/quiz/hesi/anatomy' }
  ],
  TEAS: [
    { name: 'Reading', icon: <BookOpen className="w-12 h-12" />, path: '/quiz/teas/reading' },
    { name: 'Math', icon: <Calculator className="w-12 h-12" />, path: '/quiz/teas/math' },
    { name: 'Science', icon: <FlaskRound className="w-12 h-12" />, path: '/quiz/teas/science' },
    { name: 'English', icon: <FileText className="w-12 h-12" />, path: '/quiz/teas/english' }
  ]
};

export default function Quiz() {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState<ExamType | null>(null);

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Practice Quiz
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test your knowledge with our comprehensive practice quizzes for HESI A2 and TEAS exams.
            </p>
          </div>

          {!selectedExam ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {(['HESI', 'TEAS'] as ExamType[]).map((exam) => (
                <button
                  key={exam}
                  onClick={() => setSelectedExam(exam)}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <BookOpen className="w-16 h-16 text-purple-600 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{exam} Exam</h2>
                    <p className="text-gray-600 text-center">
                      {exam === 'HESI' 
                        ? 'Practice for the Health Education Systems Incorporated Admission Assessment'
                        : 'Practice for the Test of Essential Academic Skills'}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <>
              <button
                onClick={() => setSelectedExam(null)}
                className="mb-8 text-purple-600 hover:text-purple-700 font-medium"
              >
                ← Back to Exam Selection
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {subjects[selectedExam].map((subject, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(subject.path)}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-purple-600 mb-4">
                        {subject.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}