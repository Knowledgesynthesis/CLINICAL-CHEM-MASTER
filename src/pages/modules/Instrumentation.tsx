import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Microscope } from 'lucide-react'

export function Instrumentation() {
  const sections = [
    {
      title: 'Spectrophotometry',
      content: (
        <div className="space-y-4">
          <p>
            Spectrophotometry measures the amount of light absorbed by a
            solution at specific wavelengths, forming the basis for many
            clinical chemistry assays.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Beer-Lambert Law:</h4>
            <p className="text-sm font-mono">A = ε × c × l</p>
            <p className="text-sm mt-2">
              Where: A = Absorbance, ε = Molar absorptivity, c = Concentration,
              l = Path length
            </p>
          </div>
          <div className="space-y-2 mt-4">
            <h4 className="font-semibold">Applications:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Glucose (hexokinase method)</li>
              <li>Total protein (biuret method)</li>
              <li>Bilirubin (diazo reaction)</li>
              <li>Creatinine (Jaffe reaction)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Ion-Selective Electrodes (ISE)',
      content: (
        <div className="space-y-4">
          <p>
            ISEs measure ion concentrations using selective membranes that
            respond to specific ions, generating a voltage proportional to ion
            activity.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Direct ISE:</h4>
              <p className="text-sm">
                Measures undiluted sample. More accurate in lipemic or
                hyperproteinemic samples. Used for blood gas analyzers and
                some chemistry analyzers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Indirect ISE:</h4>
              <p className="text-sm">
                Sample is diluted before measurement. Susceptible to
                pseudohyponatremia in hyperlipidemia or hyperproteinemia.
                Common on automated chemistry analyzers.
              </p>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg mt-4">
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
              Clinical Note:
            </p>
            <p className="text-sm mt-1">
              In severe hypertriglyceridemia (&gt;1500 mg/dL), indirect ISE may
              report falsely low sodium due to excluded volume effect
              (pseudohyponatremia), while direct ISE will report correct value.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Immunoassays',
      content: (
        <div className="space-y-4">
          <p>
            Immunoassays use antibody-antigen binding to detect and quantify
            analytes. Widely used for hormones, proteins, and drugs.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Competitive Immunoassay:</h4>
              <p className="text-sm">
                Sample antigen competes with labeled antigen for limited
                antibody binding sites. Signal is inversely proportional to
                analyte concentration. Used for small molecules (T4, cortisol,
                drugs).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Sandwich (Non-competitive) Immunoassay:</h4>
              <p className="text-sm">
                Analyte captured between two antibodies. Signal is directly
                proportional to analyte concentration. Used for large molecules
                with multiple epitopes (TSH, troponin, hCG).
              </p>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <h4 className="font-semibold">Detection Methods:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Chemiluminescence (most common)</li>
              <li>Fluorescence (ELISA variants)</li>
              <li>Enzyme-linked (traditional ELISA)</li>
              <li>Electrochemiluminescence (ECL)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Mass Spectrometry',
      content: (
        <div className="space-y-4">
          <p>
            Mass spectrometry (MS) separates and identifies molecules based on
            mass-to-charge ratio. Gold standard for many analytes requiring
            high specificity.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">LC-MS/MS (Liquid Chromatography-Tandem MS):</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Separates analytes by liquid chromatography</li>
              <li>Ionizes molecules in mass spectrometer</li>
              <li>Measures mass-to-charge ratios in tandem</li>
              <li>Provides high sensitivity and specificity</li>
            </ul>
          </div>
          <div className="space-y-2 mt-4">
            <h4 className="font-semibold">Clinical Applications:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Vitamin D (25-OH vitamin D)</li>
              <li>Testosterone (especially in women)</li>
              <li>Immunosuppressants (tacrolimus, sirolimus)</li>
              <li>Confirmatory toxicology testing</li>
              <li>Newborn screening</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Electrophoresis',
      content: (
        <div className="space-y-4">
          <p>
            Electrophoresis separates charged molecules (proteins, lipoproteins)
            based on size and charge when subjected to an electric field.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Serum Protein Electrophoresis (SPEP):</h4>
              <p className="text-sm">
                Separates serum proteins into albumin, α1, α2, β, and γ
                regions. Used to detect monoclonal gammopathies, inflammatory
                states, and protein-losing conditions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Lipoprotein Electrophoresis:</h4>
              <p className="text-sm">
                Separates lipoproteins (chylomicrons, VLDL, LDL, HDL) for
                dyslipidemia phenotyping.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Hemoglobin Electrophoresis:</h4>
              <p className="text-sm">
                Identifies hemoglobin variants for diagnosing hemoglobinopathies
                (sickle cell, thalassemia).
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Point-of-Care Testing (POCT)',
      content: (
        <div className="space-y-4">
          <p>
            POCT brings laboratory testing to the patient's bedside or clinic,
            providing rapid results for immediate clinical decisions.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Common POCT Devices:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Blood gas analyzers (pH, pCO₂, pO₂, electrolytes, lactate)</li>
              <li>Glucose meters (capillary blood glucose)</li>
              <li>Cardiac markers (troponin, BNP)</li>
              <li>Coagulation meters (PT/INR)</li>
              <li>HbA1c analyzers</li>
              <li>Urinalysis dipsticks</li>
            </ul>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Quality Considerations:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Operator training and competency</li>
              <li>Regular quality control</li>
              <li>Environmental conditions (temperature, humidity)</li>
              <li>Connectivity to laboratory information systems</li>
              <li>Regulatory compliance (CLIA-waived vs moderate complexity)</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Analytical Sensitivity',
      definition:
        'The minimum amount of analyte that can be reliably distinguished from zero (limit of detection).',
    },
    {
      term: 'Analytical Specificity',
      definition:
        'The ability of a method to measure only the intended analyte without interference from other substances.',
    },
    {
      term: 'Hook Effect',
      definition:
        'Falsely low results in immunoassays when antigen concentration is extremely high, saturating both capture and detection antibodies.',
    },
    {
      term: 'Matrix Effect',
      definition:
        'Interference caused by components in the sample matrix that affect analyte measurement differently than calibrators.',
    },
  ]

  const clinicalPearls = [
    'Immunoassays are susceptible to cross-reactivity, heterophile antibodies, and biotin interference',
    'Always consider the hook effect when immunoassay results don\'t match clinical picture - dilution studies can reveal this',
    'LC-MS/MS is the gold standard for testosterone measurement in women and children due to superior sensitivity',
    'Direct ISE avoids pseudohyponatremia but indirect ISE is more common on automated analyzers',
    'Hemolysis interferes with spectrophotometric methods by absorbing light in visible spectrum',
  ]

  const pitfalls = [
    'Assuming all immunoassays are equally specific - cross-reactivity varies by manufacturer',
    'Not recognizing biotin interference in streptavidin-biotin immunoassays (many platforms)',
    'Trusting grossly elevated immunoassay results without considering hook effect',
    'Using POCT devices without proper quality control or operator training',
    'Not understanding the difference between direct and indirect ISE when interpreting sodium results',
  ]

  return (
    <ModuleTemplate
      title="Analytic Principles & Instrumentation"
      description="Understanding how laboratory tests are performed"
      icon={<Microscope className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
