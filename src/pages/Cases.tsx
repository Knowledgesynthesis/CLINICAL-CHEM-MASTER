import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CaseData {
  id: string
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  presentation: string
  labs: { test: string; result: string; reference: string }[]
  qcStatus: string
  specimenQuality: string
  question: string
  options: string[]
  correct: string
  discussion: string
}

const cases: CaseData[] = [
  {
    id: 'case_1',
    title: 'Unexpected Potassium Elevation',
    difficulty: 'Beginner',
    category: 'Pre-analytical Errors',
    presentation: 'A 45-year-old woman on routine labs. She is asymptomatic, taking no medications. EKG is normal.',
    labs: [
      { test: 'Sodium', result: '138 mEq/L', reference: '135-145' },
      { test: 'Potassium', result: '6.8 mEq/L', reference: '3.5-5.0' },
      { test: 'Chloride', result: '102 mEq/L', reference: '98-107' },
      { test: 'Bicarbonate', result: '24 mEq/L', reference: '22-29' },
    ],
    qcStatus: 'All QC passing',
    specimenQuality: 'Hemolysis index: MODERATE (H-index = 120)',
    question: 'What is the most likely explanation for the elevated potassium?',
    options: [
      'True hyperkalemia requiring urgent treatment',
      'Pseudohyperkalemia from in vitro hemolysis',
      'Laboratory analytical error',
      'Undiagnosed renal failure'
    ],
    correct: 'Pseudohyperkalemia from in vitro hemolysis',
    discussion: 'The moderate hemolysis index explains the elevated potassium. RBCs contain ~140 mEq/L potassium vs. serum ~4 mEq/L. Hemolysis releases intracellular K+, causing falsely elevated results. The patient is asymptomatic with normal EKG, making true hyperkalemia unlikely. This specimen should be rejected and recollected. Always check hemolysis index before reporting elevated potassium.',
  },
  {
    id: 'case_2',
    title: 'Confusing Sodium Result',
    difficulty: 'Intermediate',
    category: 'Analytical Interference',
    presentation: 'A 60-year-old man with poorly controlled diabetes presents with polyuria and polydipsia. He appears clinically dehydrated.',
    labs: [
      { test: 'Sodium (indirect ISE)', result: '122 mEq/L', reference: '135-145' },
      { test: 'Glucose', result: '650 mg/dL', reference: '70-99' },
      { test: 'Measured osmolality', result: '320 mOsm/kg', reference: '275-295' },
      { test: 'Calculated osmolality', result: '285 mOsm/kg', reference: '275-295' },
    ],
    qcStatus: 'All QC passing',
    specimenQuality: 'No hemolysis, lipemia, or icterus',
    question: 'How should this hyponatremia be classified?',
    options: [
      'Hypotonic hyponatremia requiring fluid restriction',
      'Isotonic hyponatremia (pseudohyponatremia)',
      'Hypertonic hyponatremia from osmotic shifts',
      'Laboratory error - sodium is likely normal'
    ],
    correct: 'Hypertonic hyponatremia from osmotic shifts',
    discussion: 'This is TRUE hyponatremia (not pseudo-), but occurring in a hypertonic state. Severe hyperglycemia increases extracellular osmolality, drawing water from cells and diluting sodium. The elevated measured osmolality (320) confirms hypertonicity despite low sodium. Note: If this were pseudohyponatremia from severe hypertriglyceridemia with indirect ISE, the measured osmolality would be normal, not elevated. Calculate expected sodium: Each 100 mg/dL glucose elevation above normal lowers sodium by ~1.6 mEq/L.',
  },
  {
    id: 'case_3',
    title: 'Isolated AST Elevation',
    difficulty: 'Beginner',
    category: 'Pre-analytical Errors',
    presentation: 'A 35-year-old healthy woman presents for routine screening labs.',
    labs: [
      { test: 'AST', result: '280 U/L', reference: '10-40' },
      { test: 'ALT', result: '32 U/L', reference: '7-56' },
      { test: 'ALP', result: '75 U/L', reference: '40-150' },
      { test: 'Bilirubin, total', result: '0.8 mg/dL', reference: '0.1-1.2' },
    ],
    qcStatus: 'All QC passing',
    specimenQuality: 'Hemolysis index: HIGH (H-index = 250)',
    question: 'What is the most likely explanation?',
    options: [
      'Acute hepatitis',
      'Alcoholic liver disease',
      'In vitro hemolysis artifact',
      'Acute myocardial infarction'
    ],
    correct: 'In vitro hemolysis artifact',
    discussion: 'RBCs contain AST but NOT ALT. Hemolysis causes isolated AST elevation without ALT increase. The high hemolysis index confirms this is artifact. ALT is more specific for hepatocellular injury. In true liver disease, both AST and ALT would be elevated (though the ratio varies). Reject specimen and recollect.',
  },
  {
    id: 'case_4',
    title: 'Discordant Thyroid Results',
    difficulty: 'Intermediate',
    category: 'Analytical Interference',
    presentation: 'A 28-year-old woman being evaluated for fatigue. She takes high-dose biotin (10 mg/day) for hair and nail health. Clinically appears euthyroid.',
    labs: [
      { test: 'TSH', result: '0.08 mIU/L', reference: '0.4-4.0' },
      { test: 'Free T4', result: '2.8 ng/dL', reference: '0.8-1.8' },
    ],
    qcStatus: 'All QC passing',
    specimenQuality: 'No hemolysis, lipemia, or icterus',
    question: 'What is the most likely explanation for these results?',
    options: [
      'Overt hyperthyroidism requiring anti-thyroid medication',
      'Subclinical hyperthyroidism',
      'Biotin interference in immunoassays',
      'Central hyperthyroidism'
    ],
    correct: 'Biotin interference in immunoassays',
    discussion: 'High-dose biotin (>5 mg/day) interferes with streptavidin-biotin immunoassays used on many platforms. Biotin causes falsely LOW TSH and falsely HIGH free T4, mimicking hyperthyroidism. The patient is clinically euthyroid and takes high-dose biotin. Stop biotin for 48-72 hours and retest. This interference can also affect troponin (falsely low - dangerous) and other hormone assays.',
  },
  {
    id: 'case_5',
    title: 'QC Pattern Analysis',
    difficulty: 'Advanced',
    category: 'Quality Management',
    presentation: 'You are reviewing the Levy-Jennings chart for serum sodium. The last 10 consecutive QC values have all fallen on the high side of the mean, ranging from +0.5 SD to +1.5 SD.',
    labs: [],
    qcStatus: 'Ten consecutive values above the mean',
    specimenQuality: 'N/A',
    question: 'Which Westgard rule is violated and what is the most likely cause?',
    options: [
      '1₃ₛ rule - Random error from reagent instability',
      'R₄ₛ rule - Increased random error from temperature variation',
      '10ₓ̄ rule - Systematic trend from reagent deterioration',
      '4₁ₛ rule - Shift from calibration error'
    ],
    correct: '10ₓ̄ rule - Systematic trend from reagent deterioration',
    discussion: 'The 10ₓ̄ (10-x-bar) rule detects systematic trends when 10 consecutive QC values fall on the same side of the mean. This indicates progressive systematic error, commonly caused by reagent deterioration, calibration drift, or instrument component aging. Actions: Review reagent lot and expiration, check calibration, inspect instrument components. Patient results should be reviewed and possibly rerun after corrective action.',
  },
  {
    id: 'case_6',
    title: 'TDM Timing Error',
    difficulty: 'Intermediate',
    category: 'Therapeutic Drug Monitoring',
    presentation: 'A patient on digoxin 0.25 mg daily has a digoxin level drawn 1 hour after their morning dose. Result is 3.8 ng/mL (therapeutic range: 0.8-2.0 ng/mL). Patient is asymptomatic.',
    labs: [
      { test: 'Digoxin', result: '3.8 ng/mL', reference: '0.8-2.0' },
      { test: 'Potassium', result: '4.2 mEq/L', reference: '3.5-5.0' },
    ],
    qcStatus: 'All QC passing',
    specimenQuality: 'No hemolysis, lipemia, or icterus',
    question: 'How should this result be interpreted?',
    options: [
      'Digoxin toxicity requiring immediate intervention',
      'Invalid result due to sampling during distribution phase',
      'Therapeutic level - no action needed',
      'Laboratory error - repeat testing indicated'
    ],
    correct: 'Invalid result due to sampling during distribution phase',
    discussion: 'Digoxin levels must be drawn at least 6-8 hours post-dose to avoid the distribution phase. During distribution, digoxin concentrations are transiently high as the drug distributes from plasma to tissues. Drawing too early gives falsely elevated results that do not reflect steady-state or target organ concentrations. This result is meaningless for clinical decision-making. Redraw as trough (just before next dose) after distribution is complete.',
  },
  {
    id: 'case_7',
    title: 'Delta Check Failure',
    difficulty: 'Advanced',
    category: 'Laboratory Errors',
    presentation: 'A hospitalized patient has the following results. Previous results from 12 hours ago are shown for comparison.',
    labs: [
      { test: 'Hemoglobin (current)', result: '14.2 g/dL', reference: '13.5-17.5' },
      { test: 'Hemoglobin (previous)', result: '8.1 g/dL', reference: '13.5-17.5' },
      { test: 'Potassium (current)', result: '4.8 mEq/L', reference: '3.5-5.0' },
      { test: 'Potassium (previous)', result: '4.9 mEq/L', reference: '3.5-5.0' },
    ],
    qcStatus: 'All QC passing',
    specimenQuality: 'Current specimen: No hemolysis. Previous specimen: Moderate hemolysis',
    question: 'What is the most likely explanation for the hemoglobin change?',
    options: [
      'Acute blood loss requiring transfusion',
      'Laboratory analytical error',
      'Specimen mix-up or mislabeling',
      'Correction of previous hemolyzed specimen artifact'
    ],
    correct: 'Specimen mix-up or mislabeling',
    discussion: 'A 6 g/dL increase in hemoglobin in 12 hours is physiologically implausible without massive transfusion. The previous specimen was hemolyzed (which would falsely LOWER hemoglobin due to free hemoglobin interference, not raise it), so that does not explain the discrepancy. Potassium remained stable (both specimens show similar K+), making transfusion unlikely (transfusion would elevate K+). This delta check failure most likely indicates specimen mix-up. Recommend recollection and verification of patient identification.',
  },
]

export function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelectCase = (caseData: CaseData) => {
    setSelectedCase(caseData)
    setShowAnswer(false)
    setSelectedOption(null)
  }

  const handleSubmit = () => {
    setShowAnswer(true)
  }

  const handleReset = () => {
    setSelectedCase(null)
    setShowAnswer(false)
    setSelectedOption(null)
  }

  if (!selectedCase) {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">Integrated Cases</h1>
          <p className="text-muted-foreground mt-2">
            Work through realistic clinical chemistry cases combining laboratory
            results, QC assessment, and clinical reasoning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((caseData) => (
            <Card
              key={caseData.id}
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => handleSelectCase(caseData)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant={
                      caseData.difficulty === 'Beginner'
                        ? 'secondary'
                        : caseData.difficulty === 'Intermediate'
                        ? 'default'
                        : 'destructive'
                    }
                  >
                    {caseData.difficulty}
                  </Badge>
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle>{caseData.title}</CardTitle>
                <CardDescription>{caseData.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full gap-2">
                  View Case
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 border rounded-lg bg-muted/50">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Educational Cases:</strong> All cases use synthetic data for
            educational purposes only. Not for patient care or clinical decisions.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={handleReset}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Cases
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant={
                selectedCase.difficulty === 'Beginner'
                  ? 'secondary'
                  : selectedCase.difficulty === 'Intermediate'
                  ? 'default'
                  : 'destructive'
              }
            >
              {selectedCase.difficulty}
            </Badge>
            <Badge variant="outline">{selectedCase.category}</Badge>
          </div>
          <CardTitle>{selectedCase.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Presentation */}
          <div>
            <h3 className="font-semibold mb-2">Clinical Presentation:</h3>
            <p className="text-sm">{selectedCase.presentation}</p>
          </div>

          {/* Laboratory Results */}
          {selectedCase.labs.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Laboratory Results:</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3">Test</th>
                      <th className="text-left p-3">Result</th>
                      <th className="text-left p-3">Reference Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCase.labs.map((lab, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-3">{lab.test}</td>
                        <td className="p-3 font-semibold">{lab.result}</td>
                        <td className="p-3 text-muted-foreground">
                          {lab.reference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* QC and Specimen Quality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">QC Status:</h4>
              <p className="text-sm">{selectedCase.qcStatus}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">Specimen Quality:</h4>
              <p className="text-sm">{selectedCase.specimenQuality}</p>
            </div>
          </div>

          {/* Question */}
          <div>
            <h3 className="font-semibold mb-3">{selectedCase.question}</h3>
            <div className="space-y-2">
              {selectedCase.options.map((option) => (
                <button
                  key={option}
                  onClick={() => !showAnswer && setSelectedOption(option)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedOption === option
                      ? showAnswer
                        ? option === selectedCase.correct
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                          : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                        : 'border-primary bg-primary/5'
                      : showAnswer && option === selectedCase.correct
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                      : 'border-border hover:border-primary/50'
                  } ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Answer Discussion */}
          {showAnswer && (
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Discussion:</h3>
              <p className="text-sm leading-relaxed">{selectedCase.discussion}</p>
            </div>
          )}

          {/* Action Button */}
          <div className="flex gap-4">
            {!showAnswer ? (
              <Button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="flex-1"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleReset} className="flex-1">
                View More Cases
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
