import { ModuleTemplate } from '@/components/ModuleTemplate'
import { AlertTriangle } from 'lucide-react'

export function Errors() {
  const sections = [
    {
      title: 'Hemolysis',
      content: (
        <div className="space-y-4">
          <p>
            Hemolysis is the most common pre-analytical error, releasing
            intracellular contents into serum/plasma and causing interference.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Causes of In Vitro Hemolysis:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Traumatic venipuncture (small needle, excessive aspiration)</li>
                <li>Vigorous shaking or mixing of tubes</li>
                <li>Freezing and thawing of whole blood</li>
                <li>Prolonged tourniquet application</li>
                <li>Drawing through IV line</li>
                <li>Delayed separation of serum from cells</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Analytes Falsely Elevated by Hemolysis:</h4>
              <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Potassium (K⁺):</strong> Intracellular [K⁺] = 140 mEq/L vs serum 4 mEq/L</li>
                  <li><strong>LDH:</strong> Very high in RBCs</li>
                  <li><strong>AST:</strong> Present in RBCs (ALT is not)</li>
                  <li><strong>Phosphate:</strong> Higher in RBCs</li>
                  <li><strong>Magnesium:</strong> Intracellular release</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Spectrophotometric Interference:</h4>
              <p className="text-sm">
                Free hemoglobin absorbs light at 415 nm and 540-560 nm,
                interfering with colorimetric assays. Causes falsely elevated
                or decreased results depending on wavelength used.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Hemolysis Index:</h4>
              <p className="text-sm">
                Most analyzers measure and report hemolysis index (H-index).
                Estimates free hemoglobin concentration. Helps assess validity
                of results. Rejection criteria vary by analyte.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Lipemia',
      content: (
        <div className="space-y-4">
          <p>
            Lipemia is turbidity in serum/plasma due to elevated lipids
            (triglycerides &gt;300-400 mg/dL), causing light scattering and
            volume displacement.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Causes:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Non-fasting sample (most common)</li>
                <li>Hypertriglyceridemia (genetic or acquired)</li>
                <li>Propofol infusion (lipid emulsion)</li>
                <li>Total parenteral nutrition (TPN)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Effects on Results:</h4>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  <strong>Spectrophotometric Interference:</strong> Light
                  scattering causes falsely elevated or decreased results in
                  photometric assays.
                </p>
                <p className="text-sm mt-2">
                  <strong>Volume Displacement (Indirect ISE):</strong>
                  Pseudohyponatremia - lipids occupy volume, reducing measured
                  sodium. Direct ISE not affected.
                </p>
                <p className="text-sm mt-2">
                  <strong>Falsely Elevated:</strong> Hemoglobin, bilirubin,
                  proteins by turbidimetry
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Lipemia Index:</h4>
              <p className="text-sm">
                L-index measured and reported by analyzers. Estimates
                triglyceride concentration causing turbidity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Solutions:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Ultracentrifugation to separate lipid layer</li>
                <li>Request fasting sample</li>
                <li>Use alternative methods less affected by turbidity</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Icterus (Hyperbilirubinemia)',
      content: (
        <div className="space-y-4">
          <p>
            Icterus is yellow discoloration of serum due to elevated bilirubin
            (&gt;3 mg/dL), causing spectrophotometric interference.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Spectrophotometric Interference:</h4>
              <p className="text-sm">
                Bilirubin absorbs strongly at 450-460 nm. Interferes with assays
                using nearby wavelengths.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Commonly Affected Analytes:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Creatinine (especially Jaffe method)</li>
                <li>Cholesterol</li>
                <li>Total protein</li>
                <li>Glucose (glucose oxidase method)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Icterus Index:</h4>
              <p className="text-sm">
                I-index measured and reported. Estimates bilirubin concentration.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Paraprotein Interference',
      content: (
        <div className="space-y-4">
          <p>
            Monoclonal proteins can interfere with various laboratory assays
            through multiple mechanisms.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Types of Interference:</h4>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  <strong>Volume Displacement:</strong> Similar to lipemia,
                  paraproteins can cause pseudohyponatremia with indirect ISE.
                </p>
                <p className="text-sm mt-2">
                  <strong>Immunoassay Interference:</strong> Monoclonal
                  antibodies can bind assay components, causing false results.
                </p>
                <p className="text-sm mt-2">
                  <strong>Increased Viscosity:</strong> Affects sample
                  pipetting and flow in some analyzers.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Drug and Supplement Interference',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Biotin (Vitamin B7) Interference:</h4>
            <p className="text-sm">
              High-dose biotin supplements (&gt;5 mg/day) interfere with
              streptavidin-biotin immunoassays. Many platforms use this technology.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Affected Assays:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm mt-1">
                <li>Thyroid tests: Falsely low TSH, falsely high FT4 (mimics hyperthyroidism)</li>
                <li>Troponin: Falsely low (missed MI)</li>
                <li>Vitamin D: Variable effects</li>
                <li>Hormones: Various effects depending on assay design</li>
              </ul>
              <p className="text-sm mt-2">
                <strong>Action:</strong> Stop biotin 48-72 hours before testing.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Other Drug Interferences:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ascorbic acid: Glucose oxidase method for glucose</li>
              <li>Dopamine/dobutamine: Interferes with some catecholamine assays</li>
              <li>N-acetylcysteine: Interferes with some creatinine assays</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Specimen Mix-up and Identification Errors',
      content: (
        <div className="space-y-4">
          <p>
            Patient/specimen misidentification is a critical error with potential
            for serious patient harm.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Detection Methods:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Delta checks (comparison to previous results)</li>
                <li>Blood type discrepancies</li>
                <li>Gender-specific analyte mismatches</li>
                <li>Implausible result patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Prevention:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Two-patient identifier verification</li>
                <li>Bedside labeling of specimens</li>
                <li>Barcode scanning systems</li>
                <li>Electronic verification systems</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'HIL Indices',
      definition:
        'Hemolysis, Icterus, Lipemia indices. Automated measurements of specimen quality that help identify pre-analytical errors and interference.',
    },
    {
      term: 'Pseudohyponatremia',
      definition:
        'Falsely low sodium with indirect ISE due to volume displacement by lipids or proteins. Direct ISE measures true sodium.',
    },
    {
      term: 'Streptavidin-Biotin Immunoassay',
      definition:
        'Common immunoassay format using biotin-streptavidin binding. Susceptible to interference from high-dose biotin supplementation.',
    },
    {
      term: 'Delta Check',
      definition:
        'Automated comparison of current result to previous results. Flags significant changes that may indicate specimen mix-up or acute clinical change.',
    },
  ]

  const clinicalPearls = [
    'Hemolysis is the #1 reason for specimen rejection - always check H-index before reporting elevated potassium',
    'Pseudohyponatremia from lipemia occurs only with indirect ISE, not direct ISE',
    'Biotin interference can mimic hyperthyroidism (low TSH, high FT4) - ask about supplements',
    'AST elevation with normal ALT in hemolyzed specimen suggests in vitro hemolysis, not liver disease',
    'Significant delta check failures should prompt investigation before releasing results',
  ]

  const pitfalls = [
    'Reporting elevated potassium from hemolyzed specimen without recollection',
    'Not recognizing pseudohyponatremia in severe hypertriglyceridemia or hyperproteinemia',
    'Missing biotin interference when thyroid tests don\'t match clinical picture',
    'Assuming all sodium measurements are equally affected by lipemia (indirect vs direct ISE)',
    'Not investigating significant delta check failures - may indicate specimen mix-up',
    'Trusting results from specimens with high HIL indices without considering interference',
  ]

  return (
    <ModuleTemplate
      title="Lab Errors & Interferences"
      description="Identifying and preventing laboratory errors"
      icon={<AlertTriangle className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
