import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Calculator, BookOpen, GraduationCap, Brain, FlaskRound, Heart, FileText, BookOpenCheck } from 'lucide-react';

interface NavItem {
  name: string;
  path?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const hesiNavigation: NavItem[] = [
  {
    name: 'Mathematics',
    path: '/hesi/mathematics',
    icon: <Calculator className="w-5 h-5" />,
    children: [
      { name: 'Basic Operations', 
        path: '/hesi/mathematics/basic-operations',
        icon: <Calculator className="w-5 h-5" />,
        children: [
          { name: 'Adding and Subtraction', path: '/hesi/mathematics/learning/basicoperations/addition-subtraction' },
          { name: 'Multiplication and Division', path: '/hesi/mathematics/learning/basicoperations/multiplication-division' },
          { name: 'Order of Operations', path: '/hesi/mathematics/learning/basicoperations/order-operations' },
          { name: 'Properties of Numbers', path: '/hesi/mathematics/learning/basicoperations/number-properties' }
        ]
       },
      { name: 'Fractions and Decimals', path: '/hesi/mathematics/fractions-decimals' },
      { name: 'Ratios and Proportions', path: '/hesi/mathematics/ratios-proportions' },
      { name: 'Percentages', path: '/hesi/mathematics/percentages' },
      { name: 'Measurements', path: '/hesi/mathematics/measurements' },
      { name: 'Time and Roman Numerals', path: '/hesi/mathematics/time-numerals' },
      { name: 'Dosage Calculations', path: '/hesi/mathematics/dosage' },
      { name: 'Word Problems', path: '/hesi/mathematics/word-problems' }
    ]
  },
  {
    name: 'Reading Comprehension',
    path: '/hesi/reading',
    icon: <BookOpen className="w-5 h-5" />,
    children: [
      { name: 'Main Ideas and Details', path: '/hesi/reading/main-ideas' },
      { name: 'Reading Strategies', path: '/hesi/reading/strategies' },
      { name: 'Comprehension Skills', path: '/hesi/reading/skills' },
      { name: 'Critical Analysis', path: '/hesi/reading/analysis' },
      { name: 'Vocabulary in Context', path: '/hesi/reading/vocabulary' }
    ]
  },
  {
    name: 'Grammar',
    path: '/hesi/grammar',
    icon: <FileText className="w-5 h-5" />,
    children: [
      { name: 'Parts of Speech', path: '/hesi/grammar/parts-of-speech' },
      { name: 'Sentence Structure', path: '/hesi/grammar/sentence-structure' },
      { name: 'Punctuation', path: '/hesi/grammar/punctuation' },
      { name: 'Common Errors', path: '/hesi/grammar/common-errors' },
      { name: 'Writing Style', path: '/hesi/grammar/writing-style' }
    ]
  },
  {
    name: 'Vocabulary',
    path: '/hesi/vocabulary',
    icon: <BookOpenCheck className="w-5 h-5" />,
    children: [
      { name: 'Medical Terminology', path: '/hesi/vocabulary/medical' },
      { name: 'Nursing Vocabulary', path: '/hesi/vocabulary/nursing' },
      { name: 'Word Analysis', path: '/hesi/vocabulary/analysis' },
      { name: 'Word Relationships', path: '/hesi/vocabulary/relationships' },
      { name: 'Practical Applications', path: '/hesi/vocabulary/applications' }
    ]
  },
  {
    name: 'Biology',
    path: '/hesi/biology',
    icon: <Brain className="w-5 h-5" />,
    children: [
      { name: 'Cell Biology', path: '/hesi/biology/cells' },
      { name: 'Genetics', path: '/hesi/biology/genetics' },
      { name: 'Metabolism', path: '/hesi/biology/metabolism' },
      { name: 'Human Systems', path: '/hesi/biology/systems' },
      { name: 'Ecology', path: '/hesi/biology/ecology' }
    ]
  },
  {
    name: 'Chemistry',
    path: '/hesi/chemistry',
    icon: <FlaskRound className="w-5 h-5" />,
    children: [
      { name: 'Atomic Structure', path: '/hesi/chemistry/atomic-structure' },
      { name: 'Chemical Bonding', path: '/hesi/chemistry/bonding' },
      { name: 'Chemical Reactions', path: '/hesi/chemistry/reactions' },
      { name: 'Solutions', path: '/hesi/chemistry/solutions' },
      { name: 'Biochemistry', path: '/hesi/chemistry/biochemistry' }
    ]
  },
  {
    name: 'Anatomy & Physiology',
    path: '/hesi/anatomy',
    icon: <Heart className="w-5 h-5" />,
    children: [
      { name: 'Body Organization', path: '/hesi/anatomy/organization' },
      { name: 'Cardiovascular System', path: '/hesi/anatomy/cardiovascular' },
      { name: 'Respiratory System', path: '/hesi/anatomy/respiratory' },
      { name: 'Nervous System', path: '/hesi/anatomy/nervous' },
      { name: 'Musculoskeletal System', path: '/hesi/anatomy/musculoskeletal' }
    ]
  }
];

const teasNavigation: NavItem[] = [
  {
    name: 'Reading',
    path: '/teas/reading',
    icon: <BookOpen className="w-5 h-5" />,
    children: [
      { name: 'Key Ideas and Details', path: '/teas/reading/key-ideas' },
      { name: 'Craft and Structure', path: '/teas/reading/craft-structure' },
      { name: 'Integration of Knowledge', path: '/teas/reading/integration' }
    ]
  },
  {
    name: 'Math',
    path: '/teas/math',
    icon: <Calculator className="w-5 h-5" />,
    children: [
      { name: 'Numbers and Algebra', path: '/teas/math/numbers-algebra' },
      { name: 'Measurement and Data', path: '/teas/math/measurement-data' }
    ]
  },
  {
    name: 'Science',
    path: '/teas/science',
    icon: <FlaskRound className="w-5 h-5" />,
    children: [
      { name: 'Human Anatomy & Physiology', path: '/teas/science/anatomy' },
      { name: 'Life & Physical Sciences', path: '/teas/science/life-physical' },
      { name: 'Scientific Reasoning', path: '/teas/science/reasoning' }
    ]
  },
  {
    name: 'English',
    path: '/teas/english',
    icon: <FileText className="w-5 h-5" />,
    children: [
      { name: 'Conventions of English', path: '/teas/english/conventions' },
      { name: 'Knowledge of Language', path: '/teas/english/knowledge' },
      { name: 'Vocabulary Acquisition', path: '/teas/english/vocabulary' }
    ]
  }
];

interface NavItemProps {
  item: NavItem;
  level?: number;
}

const NavItemComponent: React.FC<NavItemProps> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;
  const isChildActive = hasChildren && item.children.some(child => location.pathname === child.path);

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    if (item.path) {
      navigate(item.path);
    }
  };

  React.useEffect(() => {
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [isChildActive]);

  return (
    <div>
      <div
        className={`flex items-center px-4 py-2 cursor-pointer transition-colors duration-200 ${
          isActive || isChildActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
        }`}
        style={{ paddingLeft: `${level * 1}rem` }}
        onClick={handleClick}
      >
        {level === 0 && item.icon && (
          <span className="mr-2">{item.icon}</span>
        )}
        {hasChildren && (
          <span className="mr-2">
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        )}
        <span className="flex-1">{item.name}</span>
      </div>
      {hasChildren && isOpen && (
        <div className="ml-4">
          {item.children.map((child, index) => (
            <NavItemComponent key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  const location = useLocation();
  const isTEAS = location.pathname.startsWith('/teas');
  const navigation = isTEAS ? teasNavigation : hesiNavigation;

  return (
    <div className="w-64 bg-white border-r h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">
            {isTEAS ? 'TEAS Exam Learning Center' : 'HESI A2 Learning Center'}
          </h2>
        </div>
      </div>
      <nav className="py-4">
        {navigation.map((item, index) => (
          <NavItemComponent key={index} item={item} />
        ))}
      </nav>
    </div>
  );
}