import { Question } from '@/store/assessmentStore'

export const questions: Question[] = [
  // Foundations
  {
    id: 'found_1',
    question: 'Which phase of laboratory testing accounts for the majority (60-70%) of laboratory errors?',
    options: [
      'Pre-analytical phase',
      'Analytical phase',
      'Post-analytical phase',
      'All phases contribute equally'
    ],
    correct: 'Pre-analytical phase',
    rationale: 'The pre-analytical phase (specimen collection, handling, processing) accounts for 60-70% of all laboratory errors, making it the most error-prone phase of laboratory testing.',
    category: 'Foundations'
  },
  {
    id: 'found_2',
    question: 'A patient\'s potassium is reported as 6.2 mEq/L. The hemolysis index is markedly elevated. What is the most appropriate next step?',
    options: [
      'Report the result immediately as a critical value',
      'Reject the specimen and request recollection',
      'Dilute the specimen and retest',
      'Report the result with a comment about hemolysis'
    ],
    correct: 'Reject the specimen and request recollection',
    rationale: 'Hemolysis causes release of intracellular potassium (RBC K+ ≈140 mEq/L), falsely elevating measured potassium. Hemolyzed specimens for potassium should be rejected and recollected.',
    category: 'Foundations'
  },

  // Instrumentation
  {
    id: 'inst_1',
    question: 'A patient with severe hypertriglyceridemia (TG = 1800 mg/dL) has a sodium of 128 mEq/L measured by indirect ISE. What is the most likely explanation?',
    options: [
      'True hyponatremia requiring urgent treatment',
      'Pseudohyponatremia due to volume displacement',
      'Laboratory error - repeat testing needed',
      'Dilutional hyponatremia from IV fluids'
    ],
    correct: 'Pseudohyponatremia due to volume displacement',
    rationale: 'Severe hypertriglyceridemia causes pseudohyponatremia with indirect ISE due to volume displacement by lipids. Direct ISE would measure normal sodium. No treatment needed for pseudohyponatremia.',
    category: 'Instrumentation'
  },
  {
    id: 'inst_2',
    question: 'Which immunoassay format is most appropriate for measuring large molecules with multiple epitopes (e.g., hCG, TSH)?',
    options: [
      'Competitive immunoassay',
      'Sandwich immunoassay',
      'Either format works equally well',
      'Neither format is suitable'
    ],
    correct: 'Sandwich immunoassay',
    rationale: 'Sandwich immunoassays use two antibodies binding different epitopes on the same molecule, making them ideal for large molecules. Signal is directly proportional to analyte concentration.',
    category: 'Instrumentation'
  },

  // Quality Management
  {
    id: 'qual_1',
    question: 'A Levy-Jennings chart shows 4 consecutive QC values on the same side of the mean, all exceeding +1 SD. Which Westgard rule is violated?',
    options: [
      '1₃ₛ (Warning Rule)',
      '2₂ₛ (Precision Rule)',
      'R₄ₛ (Random Error Rule)',
      '4₁ₛ (Shift Rule)'
    ],
    correct: '4₁ₛ (Shift Rule)',
    rationale: 'The 4₁ₛ rule detects systematic shifts when four consecutive QC values fall on the same side of the mean beyond ±1 SD. This indicates a systematic error or shift in the assay.',
    category: 'Quality'
  },
  {
    id: 'qual_2',
    question: 'What is the primary difference between accuracy and precision in method validation?',
    options: [
      'Accuracy measures reproducibility; precision measures closeness to true value',
      'Precision measures reproducibility; accuracy measures closeness to true value',
      'They are synonymous terms',
      'Accuracy is for qualitative tests; precision is for quantitative tests'
    ],
    correct: 'Precision measures reproducibility; accuracy measures closeness to true value',
    rationale: 'Precision (reproducibility) is measured by CV% and reflects random error. Accuracy (trueness) reflects systematic error and how close measured values are to the true value.',
    category: 'Quality'
  },

  // Chemistry Panels
  {
    id: 'chem_1',
    question: 'A patient with diabetic ketoacidosis has glucose 600 mg/dL, sodium 122 mEq/L, and measured osmolality 310 mOsm/kg. What type of hyponatremia is this?',
    options: [
      'Hypotonic hyponatremia',
      'Isotonic hyponatremia (pseudohyponatremia)',
      'Hypertonic hyponatremia',
      'Not truly hyponatremic - laboratory error'
    ],
    correct: 'Hypertonic hyponatremia',
    rationale: 'Marked hyperglycemia causes osmotic water shift from intracellular to extracellular space, diluting measured sodium. This is true hyponatremia (not pseudo-) but occurring in a hypertonic state.',
    category: 'Chemistry Panels'
  },
  {
    id: 'chem_2',
    question: 'AST is elevated to 250 U/L while ALT is normal at 30 U/L. The hemolysis index is high. What is the most likely explanation?',
    options: [
      'Acute hepatitis',
      'Alcoholic liver disease',
      'In vitro hemolysis',
      'Acute myocardial infarction'
    ],
    correct: 'In vitro hemolysis',
    rationale: 'RBCs contain AST but not ALT. Hemolysis causes isolated AST elevation without ALT elevation. The high hemolysis index confirms this is artifact, not liver disease.',
    category: 'Chemistry Panels'
  },

  // Endocrine
  {
    id: 'endo_1',
    question: 'A patient on high-dose biotin supplements has TSH 0.05 mIU/L and FT4 3.2 ng/dL, but is clinically euthyroid. What is the most likely explanation?',
    options: [
      'Subclinical hyperthyroidism',
      'Overt hyperthyroidism requiring treatment',
      'Biotin interference in immunoassays',
      'Central hypothyroidism'
    ],
    correct: 'Biotin interference in immunoassays',
    rationale: 'High-dose biotin interferes with streptavidin-biotin immunoassays, causing falsely low TSH and falsely high FT4, mimicking hyperthyroidism. Stop biotin 48-72 hours before retesting.',
    category: 'Endocrine'
  },
  {
    id: 'endo_2',
    question: 'When measuring total calcium, which adjustment should be made for a patient with albumin of 2.5 g/dL?',
    options: [
      'Add 0.8 mg/dL for every 1 g/dL albumin is below 4.0',
      'Subtract 0.8 mg/dL for every 1 g/dL albumin is below 4.0',
      'Multiply by 1.2',
      'No adjustment needed'
    ],
    correct: 'Add 0.8 mg/dL for every 1 g/dL albumin is below 4.0',
    rationale: 'Corrected Ca = Measured Ca + 0.8 × (4.0 - Albumin). With albumin 2.5, add 0.8 × 1.5 = 1.2 mg/dL. Better yet, measure ionized calcium directly.',
    category: 'Endocrine'
  },

  // Special Chemistry
  {
    id: 'spec_1',
    question: 'A troponin result of 0.08 ng/mL (high-sensitivity assay, 99th percentile = 0.04) most likely indicates:',
    options: [
      'Acute myocardial infarction requiring immediate intervention',
      'Myocardial injury that may or may not be acute MI',
      'Laboratory error',
      'Normal variant requiring no action'
    ],
    correct: 'Myocardial injury that may or may not be acute MI',
    rationale: 'High-sensitivity troponin elevations indicate myocardial injury but can occur in many conditions (renal failure, PE, sepsis, heart failure). Serial values with rising delta are more specific for acute MI.',
    category: 'Special Chemistry'
  },
  {
    id: 'spec_2',
    question: 'An ammonia specimen was drawn 45 minutes ago and has been sitting at room temperature. What effect does this have on the result?',
    options: [
      'No effect - ammonia is stable',
      'Falsely decreased ammonia',
      'Falsely elevated ammonia',
      'Specimen is acceptable if tested within 1 hour'
    ],
    correct: 'Falsely elevated ammonia',
    rationale: 'Ammonia is extremely unstable and rises rapidly at room temperature due to amino acid deamination and RBC metabolism. Must be on ice and analyzed within 15 minutes. This specimen should be rejected.',
    category: 'Special Chemistry'
  },

  // Toxicology & TDM
  {
    id: 'tox_1',
    question: 'For accurate therapeutic drug monitoring, when should most trough levels be drawn?',
    options: [
      'Immediately after dose administration',
      'At peak concentration (1-2 hours post-dose)',
      'Just before the next scheduled dose',
      'Anytime during the dosing interval'
    ],
    correct: 'Just before the next scheduled dose',
    rationale: 'Trough levels represent minimum drug concentration and should be drawn just before the next dose. This is the standard for most TDM. Must be at steady state (4-5 half-lives).',
    category: 'Toxicology'
  },
  {
    id: 'tox_2',
    question: 'A urine drug screen is positive for amphetamines. The patient denies illicit drug use but takes bupropion for depression. What is the most appropriate next step?',
    options: [
      'Report as positive for amphetamine use',
      'Perform confirmatory testing with GC-MS or LC-MS/MS',
      'Repeat the immunoassay',
      'Test a different specimen'
    ],
    correct: 'Perform confirmatory testing with GC-MS or LC-MS/MS',
    rationale: 'Immunoassay drug screens have cross-reactivity. Bupropion can cause false-positive amphetamine screens. Always confirm positive immunoassay screens with specific GC-MS or LC-MS/MS.',
    category: 'Toxicology'
  },

  // Errors & Interferences
  {
    id: 'err_1',
    question: 'Which of the following analytes is most affected by hemolysis?',
    options: [
      'Sodium',
      'Potassium',
      'Chloride',
      'Calcium'
    ],
    correct: 'Potassium',
    rationale: 'Intracellular potassium concentration (~140 mEq/L) is much higher than serum (~4 mEq/L). Hemolysis releases intracellular K+, causing significant false elevation. This is the most common cause of pseudohyperkalemia.',
    category: 'Errors'
  },
  {
    id: 'err_2',
    question: 'Pseudohyponatremia from severe hypertriglyceridemia occurs with which type of sodium measurement?',
    options: [
      'Direct ISE only',
      'Indirect ISE only',
      'Both direct and indirect ISE',
      'Neither - this is true hyponatremia'
    ],
    correct: 'Indirect ISE only',
    rationale: 'Indirect ISE dilutes the sample before measurement. Lipids occupy volume, reducing the aqueous phase containing sodium, causing falsely low results. Direct ISE measures undiluted sample and reports correct sodium.',
    category: 'Errors'
  },

  // Automation
  {
    id: 'auto_1',
    question: 'Which of the following would typically prevent auto-verification of a laboratory result?',
    options: [
      'Result within reference interval',
      'No previous result for delta check comparison',
      'Result is a critical value',
      'Specimen received during night shift'
    ],
    correct: 'Result is a critical value',
    rationale: 'Critical values require manual review, verification, and documented physician notification. They cannot be auto-verified. Other common reasons for manual review: QC failure, delta check failure, instrument flags.',
    category: 'Automation'
  },
  {
    id: 'auto_2',
    question: 'What is the primary purpose of reflex testing in laboratory automation?',
    options: [
      'Reduce turnaround time by running all tests simultaneously',
      'Automatically perform follow-up tests based on initial results',
      'Verify QC status before releasing results',
      'Calculate derived values from measured analytes'
    ],
    correct: 'Automatically perform follow-up tests based on initial results',
    rationale: 'Reflex testing automatically triggers additional tests when initial results meet predefined criteria (e.g., TSH abnormal → reflex to FT4). Improves efficiency and reduces delays.',
    category: 'Automation'
  },

  // Clinical Consultation
  {
    id: 'cons_1',
    question: 'A clinician orders 1,25-OH vitamin D to assess nutritional vitamin D status. What is the appropriate laboratory response?',
    options: [
      'Process the order as requested',
      'Recommend 25-OH vitamin D instead',
      'Order both 1,25-OH and 25-OH vitamin D',
      'Cancel the test as inappropriate'
    ],
    correct: 'Recommend 25-OH vitamin D instead',
    rationale: '25-OH vitamin D is the correct test for nutritional vitamin D status. 1,25-OH vitamin D (calcitriol) is the active form used only for specific indications (granulomatous disease, CKD-MBD, not nutritional assessment).',
    category: 'Clinical Consultation'
  },
  {
    id: 'cons_2',
    question: 'How soon after a dose change should TSH be rechecked to assess thyroid medication adjustment?',
    options: [
      '1-2 weeks',
      '3-4 weeks',
      '6-8 weeks',
      '3-6 months'
    ],
    correct: '6-8 weeks',
    rationale: 'TSH takes 6-8 weeks to reach new steady state after thyroid medication change due to long half-life of T4 and feedback loop kinetics. Earlier testing may not reflect the full effect of dose adjustment.',
    category: 'Clinical Consultation'
  },
]
