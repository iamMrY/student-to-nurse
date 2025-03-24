import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

// Import pages
import HesiTeas from './pages/HesiTeas';
import NursingSchools from './pages/NursingSchools';
import StateLicensing from './pages/StateLicensing';
import CgfnsCredentials from './pages/CgfnsCredentials';
import ImmigrationVisa from './pages/ImmigrationVisa';
import SuccessStories from './pages/SuccessStories';
import NclexPrep from './pages/NclexPrep';
import VisaSponsorship from './pages/VisaSponsorship';
import Recommendations from './pages/Recommendations';
import SearchEmployers from './pages/SearchEmployers';
import ShareEmployers from './pages/ShareEmployers';
import RnWithoutBsn from './pages/RnWithoutBsn';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import HomePage from './components/HomePage';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import HesiLearning from './pages/HesiLearning';
import TeasLearning from './pages/TeasLearning';
import Quiz from './pages/Quiz';

// HESI Subject Pages
import HesiMathematics from './pages/hesi/Mathematics';
import HesiReadingComprehension from './pages/hesi/ReadingComprehension';
import HesiGrammar from './pages/hesi/Grammar';
import HesiVocabulary from './pages/hesi/Vocabulary';
import HesiBiology from './pages/hesi/Biology';
import HesiChemistry from './pages/hesi/Chemistry';
import HesiAnatomyPhysiology from './pages/hesi/AnatomyPhysiology';

// TEAS Subject Pages
import TeasReading from './pages/teas/Reading';
import TeasMath from './pages/teas/Math';
import TeasScience from './pages/teas/Science';
import TeasEnglish from './pages/teas/English';

// Mathematics Topic Pages
import BasicOperations from './pages/hesi/mathematics/BasicOperations';
import FractionsDecimals from './pages/hesi/mathematics/FractionsDecimals';
import RatiosProportions from './pages/hesi/mathematics/RatiosProportions';
import Percentages from './pages/hesi/mathematics/Percentages';
import Measurements from './pages/hesi/mathematics/Measurements';
import TimeNumerals from './pages/hesi/mathematics/TimeNumerals';
import DosageCalculations from './pages/hesi/mathematics/DosageCalculations';
import WordProblems from './pages/hesi/mathematics/WordProblems';

// Mathematics Sub Topics Pages
import BasicOfMaths from './pages/hesi/mathematics/learning/basicoperations/BasicOfMaths';
import AdditionSubtraction from './pages/hesi/mathematics/learning/basicoperations/AdditionSubtraction';
import MultiplicationAndDivision from './pages/hesi/mathematics/learning/basicoperations/MultiplicationAndDivision';
import OrderofOperations from './pages/hesi/mathematics/learning/basicoperations/OrderofOperations';
import PropertiesOfNumbers from './pages/hesi/mathematics/learning/basicoperations/PropertiesOfNumbers';


function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hesi-teas" element={<HesiTeas />} />
        <Route path="/hesi-learning" element={<HesiLearning />} />
        <Route path="/teas-learning" element={<TeasLearning />} />
        <Route path="/quiz" element={<Quiz />} />

        {/* HESI Subject Routes */}
        <Route path="/hesi/mathematics" element={<HesiMathematics />} />
        <Route path="/hesi/reading" element={<HesiReadingComprehension />} />
        <Route path="/hesi/grammar" element={<HesiGrammar />} />
        <Route path="/hesi/vocabulary" element={<HesiVocabulary />} />
        <Route path="/hesi/biology" element={<HesiBiology />} />
        <Route path="/hesi/chemistry" element={<HesiChemistry />} />
        <Route path="/hesi/anatomy" element={<HesiAnatomyPhysiology />} />

        {/* Mathematics Topic Routes */}
        <Route path="/hesi/mathematics/basic-operations" element={<BasicOperations />} />
        <Route path="/hesi/mathematics/fractions-decimals" element={<FractionsDecimals />} />
        <Route path="/hesi/mathematics/ratios-proportions" element={<RatiosProportions />} />
        <Route path="/hesi/mathematics/percentages" element={<Percentages />} />
        <Route path="/hesi/mathematics/measurements" element={<Measurements />} />
        <Route path="/hesi/mathematics/time-numerals" element={<TimeNumerals />} />
        <Route path="/hesi/mathematics/dosage" element={<DosageCalculations />} />
        <Route path="/hesi/mathematics/word-problems" element={<WordProblems />} />

        { /* Mathematics Sub Topics Routes */}


        {/* Learning Content Routes */}
        <Route path="/hesi/mathematics/learning/basicoperations/basic-of-maths" element={<BasicOfMaths />} />
        <Route path="/hesi/mathematics/learning/basicoperations/addition-subtraction" element={<AdditionSubtraction />} />
        <Route path="/hesi/mathematics/learning/basicoperations/multiplication-division" element={<MultiplicationAndDivision />} />
        <Route path="/hesi/mathematics/learning/basicoperations/order-operations" element={<OrderofOperations />} />
        <Route path="/hesi/mathematics/learning/basicoperations/number-properties" element={<PropertiesOfNumbers />} />

        {/* TEAS Subject Routes */}
        <Route path="/teas/reading" element={<TeasReading />} />
        <Route path="/teas/math" element={<TeasMath />} />
        <Route path="/teas/science" element={<TeasScience />} />
        <Route path="/teas/english" element={<TeasEnglish />} />

        <Route path="/nursing-schools" element={<NursingSchools />} />
        <Route path="/state-licensing" element={<StateLicensing />} />
        <Route path="/cgfns-credentials" element={<CgfnsCredentials />} />
        <Route path="/immigration-visa" element={<ImmigrationVisa />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/nclex-prep" element={<NclexPrep />} />
        <Route path="/visa-sponsorship" element={<VisaSponsorship />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/search-employers" element={<SearchEmployers />} />
        <Route path="/share-employers" element={<ShareEmployers />} />
        <Route path="/rn-without-bsn" element={<RnWithoutBsn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;