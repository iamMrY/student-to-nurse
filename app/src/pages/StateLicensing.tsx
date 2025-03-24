import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Globe2, 
  Clock, 
  FileCheck,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function StateLicensing() {
  const [selectedState, setSelectedState] = useState('');

  const resources = {
    official: [
      {
        name: "NCSBN - Nurse Licensure Compact",
        url: "https://www.ncsbn.org/nurse-licensure-compact.htm",
        description: "Official NLC information and updates from the National Council of State Boards of Nursing"
      },
      {
        name: "NCSBN - License Verification",
        url: "https://www.nursys.com/",
        description: "Official nurse license verification system"
      },
      {
        name: "NCSBN - State Boards of Nursing",
        url: "https://www.ncsbn.org/contact-bon.htm",
        description: "Directory of all state boards of nursing"
      }
    ],
    compactStates: [
        {
          "state": "Alabama",
          "url": "https://www.abn.alabama.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Arizona",
          "url": "https://www.azbn.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Arkansas",
          "url": "https://www.arsbn.org/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Colorado",
          "url": "https://dpo.colorado.gov/Nursing",
          "requirements": "Multistate license available"
        },
        {
          "state": "Delaware",
          "url": "https://dpr.delaware.gov/boards/nursing/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Florida",
          "url": "https://floridasnursing.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Georgia",
          "url": "https://sos.ga.gov/georgia-board-nursing",
          "requirements": "Multistate license available"
        },
        {
          "state": "Idaho",
          "url": "https://ibn.idaho.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Indiana",
          "url": "https://www.in.gov/pla/professions/nursing/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Iowa",
          "url": "https://nursing.iowa.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Kansas",
          "url": "https://ksbn.kansas.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Kentucky",
          "url": "https://kbn.ky.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Louisiana",
          "url": "https://www.lsbn.state.la.us/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Maine",
          "url": "https://www.maine.gov/boardofnursing/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Maryland",
          "url": "https://mbon.maryland.gov/Pages/default.aspx",
          "requirements": "Multistate license available"
        },
        {
          "state": "Mississippi",
          "url": "https://www.msbn.ms.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Missouri",
          "url": "https://pr.mo.gov/nursing.asp",
          "requirements": "Multistate license available"
        },
        {
          "state": "Montana",
          "url": "http://boards.bsd.dli.mt.gov/nur",
          "requirements": "Multistate license available"
        },
        {
          "state": "Nebraska",
          "url": "http://dhhs.ne.gov/licensure/Pages/Nurse-Licensing.aspx",
          "requirements": "Multistate license available"
        },
        {
          "state": "New Hampshire",
          "url": "https://www.oplc.nh.gov/board-nursing",
          "requirements": "Multistate license available"
        },
        {
          "state": "North Carolina",
          "url": "https://www.ncbon.com/",
          "requirements": "Multistate license available"
        },
        {
          "state": "North Dakota",
          "url": "https://www.ndbon.org/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Ohio",
          "url": "https://nursing.ohio.gov/",
          "requirements": "Multistate license available (implementation date: January 1, 2023)"
        },
        {
          "state": "Oklahoma",
          "url": "https://nursing.ok.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "South Carolina",
          "url": "https://llr.sc.gov/nurse/",
          "requirements": "Multistate license available"
        },
        {
          "state": "South Dakota",
          "url": "https://doh.sd.gov/boards/nursing/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Tennessee",
          "url": "https://www.tn.gov/health/health-program-areas/health-professional-boards/nursing-board.html",
          "requirements": "Multistate license available"
        },
        {
          "state": "Texas",
          "url": "https://www.bon.texas.gov/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Utah",
          "url": "https://dopl.utah.gov/nurse/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Vermont",
          "url": "https://sos.vermont.gov/nursing/",
          "requirements": "Multistate license available"
        },
        {
          "state": "Virginia",
          "url": "https://www.dhp.virginia.gov/Boards/Nursing/",
          "requirements": "Multistate license available"
        },
        {
          "state": "West Virginia",
          "url": "https://wvrnboard.wv.gov/",
          "requirements": "Multistate license available (RNs and LPNs only)"
        },
        {
          "state": "Wisconsin",
          "url": "https://dsps.wi.gov/Pages/Professions/RN/Default.aspx",
          "requirements": "Multistate license available"
        },
        {
          "state": "Wyoming",
          "url": "https://nursing-online.state.wy.us/",
          "requirements": "Multistate license available"
        }

    ],
    nonCompactStates: [
      {
        "state": "Alaska",
        "url": "https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/BoardofNursing.aspx",
        "requirements": "Individual state license required"
      },
      {
        "state": "California",
        "url": "https://www.rn.ca.gov/",
        "requirements": "Individual state license required"
      },
      {
        "state": "Hawaii",
        "url": "https://cca.hawaii.gov/pvl/boards/nursing/",
        "requirements": "Individual state license required"
      },
      {
        "state": "Illinois",
        "url": "https://www.idfpr.com/profs/nursing.asp",
        "requirements": "Individual state license required"
      },
      {
        "state": "Massachusetts",
        "url": "https://www.mass.gov/orgs/board-of-registration-in-nursing",
        "requirements": "Individual state license required"
      },
      {
        "state": "Michigan",
        "url": "https://www.michigan.gov/lara/bureau-list/bpl/health/hp-lic-health-prof/nursing",
        "requirements": "Individual state license required"
      },
      {
        "state": "Minnesota",
        "url": "https://mn.gov/boards/nursing/",
        "requirements": "Individual state license required"
      },
      {
        "state": "Nevada",
        "url": "https://nevadanursingboard.org/",
        "requirements": "Individual state license required"
      },
      {
        "state": "New Jersey",
        "url": "https://www.njconsumeraffairs.gov/nur",
        "requirements": "Individual state license required"
      },
      {
        "state": "New York",
        "url": "http://www.op.nysed.gov/prof/nurse/",
        "requirements": "Individual state license required"
      },
      {
        "state": "Oregon",
        "url": "https://www.oregon.gov/osbn/Pages/index.aspx",
        "requirements": "Individual state license required"
      },
      {
        "state": "Pennsylvania",
        "url": "https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/Nursing/Pages/default.aspx",
        "requirements": "Individual state license required"
      },
      {
        "state": "Rhode Island",
        "url": "https://health.ri.gov/licenses/detail.php?id=231",
        "requirements": "Individual state license required"
      },
      {
        "state": "Washington",
        "url": "https://www.doh.wa.gov/LicensesPermitsandCertificates/NursingCommission",
        "requirements": "Individual state license required"
      },
      {
        "state": "Washington, D.C.",
        "url": "https://dchealth.dc.gov/service/nursing-licensing",
        "requirements": "Individual state license required"
      }
    ],
    pendingStates: [
      {
        state: "Massachusetts",
        status: "Legislation pending",
        expectedDate: "2025"
      },
      {
        state: "Michigan",
        status: "Legislation in progress",
        expectedDate: "2025"
      }
    ]
  };

  const filteredCompactStates = selectedState 
    ? resources.compactStates.filter(state => state.state === selectedState)
    : resources.compactStates;

  const filteredNonCompactStates = selectedState
    ? resources.nonCompactStates.filter(state => state.state === selectedState)
    : resources.nonCompactStates;

    const filteredPendingStates = selectedState 
    ? resources.pendingStates.filter(state => state.state === selectedState)
    : resources.pendingStates;


  const compactBenefits = [
    {
      title: "Multi-State Practice",
      description: "Practice physically, electronically and/or telephonically in all NLC states"
    },
    {
      title: "Mobility",
      description: "Quick transition to practice in different states without additional licenses"
    },
    {
      title: "Cost Savings",
      description: "Single license fee instead of multiple state license fees"
    },
    {
      title: "Disaster Response",
      description: "Easier deployment of nurses during disasters and emergencies"
    }
  ];

  const compactRequirements = [
    {
      title: "Primary State of Residence",
      description: "Must declare a compact state as primary residence"
    },
    {
      title: "Background Check",
      description: "Must meet federal and state criminal background check requirements"
    },
    {
      title: "Education Standards",
      description: "Must graduate from approved nursing education program"
    },
    {
      title: "English Proficiency",
      description: "Must meet English proficiency requirements"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              State Licensing Requirements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the licensing requirements for each state and start your nursing career with confidence.
            </p>
          </div>

           {/* General Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe2 className="w-6 h-6 mr-2 text-blue-600" />
              Nurse Licensure Compact (NLC)
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                The Nurse Licensure Compact (NLC) allows nurses to have one multistate license with the ability to practice in all NLC states. This agreement between states enables nurses to provide care across state borders without obtaining additional licenses.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {compactBenefits.map((benefit, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900">{benefit.title}</h3>
                    <p className="text-blue-700 mt-1 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileCheck className="w-6 h-6 mr-2 text-blue-600" />
              NLC Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compactRequirements.map((req, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{req.title}</h3>
                    <p className="text-gray-600 mt-1">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe2 className="w-6 h-6 mr-2 text-blue-600" />
              Official Resources
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {resources.official.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <ExternalLink className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{resource.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* State Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="max-w-md mx-auto">
              <label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select a State
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All States</option>
                {US_STATES.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Nursing licensure requirements vary by state and are subject to change. Always verify current requirements directly with your state board of nursing.
                </p>
              </div>
            </div>
          </div>

          {/* State Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Compact States */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                Compact States
              </h2>
              <div className="space-y-4">
                {filteredCompactStates.map((state, index) => (
                  <a
                    key={index}
                    href={state.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <p className="text-gray-600 text-sm">{state.requirements}</p>
                      </div>
                    </div>
                  </a>
                ))}
                {filteredCompactStates.length === 0 && (
                  <p className="text-gray-600 text-center py-4">No compact states found for the selected state.</p>
                )}
              </div>
            </div>

            {/* Non-Compact States */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                Non-Compact States
              </h2>
              <div className="space-y-4">
                {filteredNonCompactStates.map((state, index) => (
                  <a
                    key={index}
                    href={state.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{state.state}</h3>
                        <p className="text-gray-600 text-sm">{state.requirements}</p>
                      </div>
                    </div>
                  </a>
                ))}
                {filteredNonCompactStates.length === 0 && (
                  <p className="text-gray-600 text-center py-4">No non-compact states found for the selected state.</p>
                )}
              </div>
            </div>
          </div>
          

         

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help with Licensing?</h2>
              <p className="text-lg mb-8">
                Get personalized guidance through the licensing process for your state.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}