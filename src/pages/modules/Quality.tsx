import { ModuleTemplate } from '@/components/ModuleTemplate'
import { ShieldCheck } from 'lucide-react'

export function Quality() {
  const sections = [
    {
      title: 'Quality Control Fundamentals',
      content: (
        <div className="space-y-4">
          <p>
            Quality control (QC) ensures that analytical methods perform
            consistently and accurately over time, detecting errors before
            patient results are reported.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Internal Quality Control (IQC):</h4>
              <p className="text-sm">
                Daily analysis of control materials with known concentrations
                to monitor test performance. Typically run at multiple levels
                (low, normal, high).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">External Quality Assessment (EQA):</h4>
              <p className="text-sm">
                Proficiency testing where external samples are analyzed and
                compared to peer laboratories. Required by CLIA and other
                regulatory bodies.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Levy-Jennings Charts',
      content: (
        <div className="space-y-4">
          <p>
            Levy-Jennings (LJ) charts plot QC results over time to visualize
            test performance and identify trends, shifts, or random errors.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Chart Components:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Mean line (target value)</li>
              <li>±1 SD, ±2 SD, ±3 SD limits</li>
              <li>QC results plotted chronologically</li>
              <li>Date/time on x-axis</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Statistical Expectations:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>68% of values within ±1 SD</li>
              <li>95% of values within ±2 SD</li>
              <li>99.7% of values within ±3 SD</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Westgard Rules',
      content: (
        <div className="space-y-4">
          <p>
            Westgard rules are a set of decision criteria for interpreting QC
            data, helping to distinguish random error from systematic error.
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                1₃ₛ (Warning Rule)
              </h4>
              <p className="text-sm mt-1">
                One control exceeds ±3 SD. Triggers evaluation of other rules.
                May indicate random error or beginning of systematic problem.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                2₂ₛ (Precision Rule)
              </h4>
              <p className="text-sm mt-1">
                Two consecutive controls exceed the same ±2 SD limit. Indicates
                random error or increased imprecision.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                R₄ₛ (Random Error Rule)
              </h4>
              <p className="text-sm mt-1">
                One control exceeds +2 SD and another exceeds -2 SD within same
                run. Indicates increased random error (poor precision).
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                4₁ₛ (Shift Rule)
              </h4>
              <p className="text-sm mt-1">
                Four consecutive controls exceed same ±1 SD limit. Indicates
                systematic error or shift in mean.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                10ₓ̄ (Trend Rule)
              </h4>
              <p className="text-sm mt-1">
                Ten consecutive controls fall on same side of mean. Indicates
                systematic trend (reagent deterioration, calibration drift).
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Method Validation Concepts',
      content: (
        <div className="space-y-4">
          <p>
            Before implementing a new assay, laboratories must validate that
            the method performs adequately for its intended use.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Accuracy:</h4>
              <p className="text-sm">
                How close measured values are to true values. Assessed by
                analyzing reference materials or recovery studies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Precision:</h4>
              <p className="text-sm">
                Reproducibility of measurements. Includes within-run (repeatability)
                and between-run (reproducibility) precision. Expressed as
                coefficient of variation (CV%).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Linearity:</h4>
              <p className="text-sm">
                Range over which measured values are proportional to analyte
                concentration. Assessed by dilution or mixing studies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Limit of Detection (LOD):</h4>
              <p className="text-sm">
                Lowest concentration that can be reliably distinguished from
                zero (typically 3 SD above blank).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Limit of Quantitation (LOQ):</h4>
              <p className="text-sm">
                Lowest concentration that can be reliably quantified with
                acceptable precision (typically 10 SD above blank).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Analytical Measurement Range (AMR):</h4>
              <p className="text-sm">
                Span of concentrations over which the assay has been validated
                for accuracy, precision, and linearity.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Calibration & Drift',
      content: (
        <div className="space-y-4">
          <p>
            Calibration establishes the relationship between instrument response
            and analyte concentration. Drift is the gradual change in this
            relationship over time.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Calibration Strategies:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Multi-point calibration (6-8 calibrators covering range)</li>
              <li>Two-point calibration (common for immunoassays)</li>
              <li>Single-point recalibration</li>
              <li>Blank calibration</li>
            </ul>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Causes of Drift:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Reagent deterioration or lot changes</li>
              <li>Environmental changes (temperature, humidity)</li>
              <li>Instrument component aging (lamp intensity, detector sensitivity)</li>
              <li>Systematic buildup of contaminants</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Delta Checks',
      content: (
        <div className="space-y-4">
          <p>
            Delta checks compare current patient results to previous results,
            flagging significant changes that may indicate errors or acute
            clinical changes.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Types of Delta Checks:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Absolute difference (e.g., sodium change &gt;10 mEq/L)</li>
              <li>Percent change (e.g., calcium change &gt;20%)</li>
              <li>Rate of change (change per time interval)</li>
            </ul>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
              Common Delta Check Failures:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Specimen mix-up or mislabeling</li>
              <li>Transfusion effect (hemoglobin, hematocrit, potassium)</li>
              <li>Acute clinical changes (electrolyte shifts, renal failure)</li>
              <li>Different specimen types (serum vs plasma, arterial vs venous)</li>
              <li>Dilution or concentration effects</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Coefficient of Variation (CV%)',
      definition:
        'Standard deviation divided by mean, expressed as percentage. Measures relative precision: CV% = (SD/Mean) × 100.',
    },
    {
      term: 'Systematic Error',
      definition:
        'Consistent, reproducible bias in one direction. Affects accuracy. Detected by shift and trend rules.',
    },
    {
      term: 'Random Error',
      definition:
        'Unpredictable variation in measurements. Affects precision. Detected by increased scatter of QC values.',
    },
    {
      term: 'Total Allowable Error',
      definition:
        'Maximum acceptable difference between measured and true value, combining bias and imprecision. Based on clinical requirements.',
    },
  ]

  const clinicalPearls = [
    'Never interpret or report patient results when QC fails - investigate and resolve first',
    'A trend on LJ chart (10ₓ̄ rule) often indicates reagent lot change or deterioration',
    'Sudden shifts (4₁ₛ rule) may indicate calibration issues or new reagent lot',
    'Increased scatter (R₄ₛ rule) suggests temperature fluctuation, mixing problems, or reagent instability',
    'Delta checks can catch specimen mix-ups before wrong results reach clinicians',
  ]

  const pitfalls = [
    'Accepting QC failure as "close enough" rather than investigating root cause',
    'Not recognizing that precision (CV%) requirements vary by analyte and concentration',
    'Ignoring trends because individual values are still within ±2 SD limits',
    'Failing to document QC investigations and corrective actions',
    'Not adjusting delta check criteria for different patient populations (e.g., ICU vs outpatient)',
    'Assuming all delta check failures are errors - some represent real clinical changes',
  ]

  return (
    <ModuleTemplate
      title="Quality Management & Method Evaluation"
      description="Ensuring accuracy and reliability of laboratory testing"
      icon={<ShieldCheck className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
