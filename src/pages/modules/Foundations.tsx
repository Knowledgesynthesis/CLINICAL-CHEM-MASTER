import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Beaker } from 'lucide-react'

export function Foundations() {
  const sections = [
    {
      title: 'Pre-analytical Phase',
      content: (
        <div className="space-y-4">
          <p>
            The pre-analytical phase encompasses all steps before laboratory
            analysis begins. This phase accounts for 60-70% of all laboratory
            errors.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Key Components:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Test ordering and patient identification</li>
              <li>Patient preparation (fasting, medication timing)</li>
              <li>Specimen collection (phlebotomy technique, timing)</li>
              <li>Specimen handling (mixing, temperature, light protection)</li>
              <li>Transportation and storage</li>
              <li>Specimen processing (centrifugation, aliquoting)</li>
            </ul>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="text-sm font-semibold">Example:</p>
            <p className="text-sm mt-2">
              Potassium elevation due to hemolysis from traumatic venipuncture
              or prolonged tourniquet application.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Analytical Phase',
      content: (
        <div className="space-y-4">
          <p>
            The analytical phase involves the actual measurement of analytes
            using various laboratory instruments and methods.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Critical Elements:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Calibration and quality control</li>
              <li>Reagent integrity and storage</li>
              <li>Instrument maintenance and performance</li>
              <li>Method validation and verification</li>
              <li>Interfering substances detection</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Post-analytical Phase',
      content: (
        <div className="space-y-4">
          <p>
            The post-analytical phase includes result validation, reporting,
            and interpretation after analysis is complete.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Key Activities:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Result review and validation</li>
              <li>Delta checks (comparing to previous results)</li>
              <li>Critical value identification and notification</li>
              <li>Result reporting and documentation</li>
              <li>Clinical interpretation and consultation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Specimen Types & Handling',
      content: (
        <div className="space-y-4">
          <p>
            Different specimen types have specific handling requirements to
            ensure accurate results.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Serum vs Plasma:</h4>
              <p className="text-sm">
                Serum: Blood allowed to clot, then centrifuged (red/gold top
                tubes). Plasma: Anticoagulated blood, centrifuged (various
                anticoagulants).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Common Anticoagulants:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>EDTA (purple top): Hematology, some chemistry</li>
                <li>Heparin (green top): Many chemistry tests</li>
                <li>Citrate (blue top): Coagulation studies</li>
                <li>Fluoride/oxalate (gray top): Glucose preservation</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Reference Intervals',
      content: (
        <div className="space-y-4">
          <p>
            Reference intervals represent the range of values expected in a
            healthy population, typically encompassing 95% of values (mean ±
            2 SD).
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Factors Affecting Reference Intervals:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Age (especially pediatric vs adult)</li>
              <li>Sex (hormones, muscle mass)</li>
              <li>Race/ethnicity</li>
              <li>Time of day (cortisol, hormones)</li>
              <li>Diet and fasting status</li>
              <li>Pregnancy</li>
              <li>Analytical method and instrumentation</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Turnaround Time & Critical Values',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Turnaround Time (TAT):</h4>
            <p className="text-sm">
              Time from specimen collection to result availability. Critical
              for emergency department and ICU settings.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Critical Values:</h4>
            <p className="text-sm">
              Results indicating potentially life-threatening conditions
              requiring immediate physician notification.
            </p>
            <div className="bg-muted p-4 rounded-lg mt-2">
              <p className="text-sm font-semibold">Examples:</p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Glucose: &lt;40 or &gt;500 mg/dL</li>
                <li>Potassium: &lt;2.5 or &gt;6.0 mEq/L</li>
                <li>Sodium: &lt;120 or &gt;160 mEq/L</li>
                <li>Calcium: &lt;6.0 or &gt;13.0 mg/dL</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'CLIA Complexity Levels',
      definition:
        'Clinical Laboratory Improvement Amendments categorize tests as waived, moderate, or high complexity based on difficulty and risk.',
    },
    {
      term: 'Delta Check',
      definition:
        'Comparison of current result to previous result for the same patient to detect significant changes that may indicate error.',
    },
    {
      term: 'Hemolysis Index',
      definition:
        'Measure of free hemoglobin in serum/plasma, indicating red blood cell lysis that can interfere with many assays.',
    },
    {
      term: 'Order of Draw',
      definition:
        'Standardized sequence for filling blood collection tubes to prevent cross-contamination of additives.',
    },
  ]

  const clinicalPearls = [
    'Always check QC before interpreting lab values - never trust a result from an assay with failing QC',
    'Hemolysis is the most common pre-analytical error, elevating potassium, LDH, and AST',
    'A normal result does not necessarily mean no disease - consider test sensitivity and reference intervals',
    'Delta checks can catch specimen mix-ups and transfusion-related errors',
    'Critical values must be verified with repeat analysis before reporting',
  ]

  const pitfalls = [
    'Ignoring specimen rejection criteria can lead to inaccurate results',
    'Prolonged tourniquet application can cause hemoconcentration and falsely elevated protein/cell-bound analytes',
    'Underfilled tubes can lead to incorrect blood-to-anticoagulant ratio',
    'Not considering patient position (sitting vs supine) can affect some analytes',
    'Assuming all reference intervals are universal across laboratories and methods',
  ]

  return (
    <ModuleTemplate
      title="Foundations of Clinical Chemistry"
      description="Understanding the complete testing process from collection to interpretation"
      icon={<Beaker className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
