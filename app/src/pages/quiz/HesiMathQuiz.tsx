import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';
import QuizComponent from '../../components/QuizComponent';

export default function HesiMathQuiz() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <QuizComponent 
          examType="HESI"
          subject="Mathematics"
          onBack={() => navigate('/quiz')}
        />
      </div>
    </PageLayout>
  );
}