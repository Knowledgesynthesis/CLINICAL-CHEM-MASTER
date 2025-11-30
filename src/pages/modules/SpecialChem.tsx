import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Pill } from 'lucide-react'

export function SpecialChem() {
  const sections = [
    {
      title: 'Cardiac Biomarkers',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Troponin (High-Sensitivity):</h4>
            <p className="text-sm">
              Gold standard for myocardial injury. Highly sensitive and specific
              for cardiac muscle. High-sensitivity assays detect lower
              concentrations.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Troponin I vs Troponin T:</strong> Different cutoffs and
                assays by manufacturer. Not interchangeable. Troponin T has more
                standardization across platforms.
              </p>
              <p className="text-sm mt-2">
                <strong>Kinetics:</strong> Rises 3-4 hours post-MI, peaks 12-48
                hours, remains elevated 7-14 days. Serial measurements (0 and
                3-6 hours) improve sensitivity for acute MI.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-4">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Troponin Elevation ≠ MI:
              </p>
              <p className="text-sm mt-1">
                Also elevated in: Renal failure, PE, myocarditis, sepsis, heart
                failure, cardiac procedures. Magnitude and delta help distinguish
                acute MI from chronic elevation.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">BNP / NT-proBNP:</h4>
            <p className="text-sm">
              Brain natriuretic peptide. Released by ventricles in response to
              stretch. Used for heart failure diagnosis and prognosis.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>BNP:</strong> Active hormone, shorter half-life
              </p>
              <p className="text-sm mt-1">
                <strong>NT-proBNP:</strong> Inactive fragment, longer half-life,
                higher in renal failure
              </p>
              <p className="text-sm mt-2">
                Not interchangeable - different cutoffs. Age, renal function,
                obesity affect interpretation.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Tumor Markers',
      content: (
        <div className="space-y-4">
          <p className="text-sm italic">
            Tumor markers are generally NOT used for screening in asymptomatic
            individuals. Used for monitoring disease burden and treatment
            response in diagnosed malignancies.
          </p>
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold">PSA (Prostate-Specific Antigen):</h4>
              <p className="text-sm">
                Monitoring for prostate cancer. Also elevated in BPH, prostatitis.
                Free PSA/Total PSA ratio helps distinguish benign from malignant.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">CEA (Carcinoembryonic Antigen):</h4>
              <p className="text-sm">
                Monitoring colorectal cancer. Also elevated in other GI
                malignancies, smoking, inflammatory bowel disease.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">CA 19-9:</h4>
              <p className="text-sm">
                Pancreatic and biliary cancers. Absent in Lewis antigen-negative
                individuals (5-10% of population).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">CA 125:</h4>
              <p className="text-sm">
                Ovarian cancer monitoring. Also elevated in other conditions
                (endometriosis, menstruation, liver disease).
              </p>
            </div>
            <div>
              <h4 className="font-semibold">AFP (Alpha-Fetoprotein):</h4>
              <p className="text-sm">
                Hepatocellular carcinoma, germ cell tumors. Also elevated in
                pregnancy, hepatitis.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Proteins & Immunoglobulins',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Total Protein & Albumin:</h4>
            <p className="text-sm">
              Total protein: 6.0-8.0 g/dL. Albumin: 3.5-5.0 g/dL. Globulin
              (calculated) = Total - Albumin.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>A/G Ratio:</strong> Normally &gt;1. Reversed (&lt;1) in
                multiple myeloma, chronic inflammation, cirrhosis.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">SPEP (Serum Protein Electrophoresis):</h4>
            <p className="text-sm">
              Separates proteins into albumin, α1, α2, β, γ regions. Detects
              monoclonal gammopathies (M-spike), inflammatory patterns,
              hypogammaglobulinemia.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>M-Spike:</strong> Narrow spike in γ or β region indicates
                monoclonal protein. Follow-up with immunofixation to identify
                immunoglobulin type (IgG, IgA, IgM, κ, λ).
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Quantitative Immunoglobulins:</h4>
            <p className="text-sm">
              IgG, IgA, IgM measured by nephelometry or turbidimetry. Used to
              quantify monoclonal proteins and assess humoral immunity.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Special Analytes',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Lactate:</h4>
            <p className="text-sm">
              Normal: 0.5-2.2 mmol/L. Marker of tissue hypoxia and sepsis.
              Pre-analytical concerns: Specimen on ice, rapid processing. Fist
              clenching, tourniquet use can elevate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Ammonia:</h4>
            <p className="text-sm">
              Normal: 15-45 μg/dL. Elevated in hepatic encephalopathy, urea
              cycle defects. Extremely pre-analytically sensitive: Ice, rapid
              processing essential. Avoid hemolysis and delay in processing.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Ammonia is highly unstable!
              </p>
              <p className="text-sm mt-1">
                Rises rapidly at room temperature due to amino acid deamination
                and RBC metabolism. Must be on ice and analyzed within 15 minutes.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">CRP (C-Reactive Protein):</h4>
            <p className="text-sm">
              Acute phase reactant. Rises rapidly with inflammation/infection.
              High-sensitivity CRP (hs-CRP) used for cardiac risk stratification.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Procalcitonin:</h4>
            <p className="text-sm">
              Marker of bacterial infection/sepsis. More specific than CRP for
              bacterial vs viral infection. Used to guide antibiotic therapy.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'M-Spike (Monoclonal Spike)',
      definition:
        'Narrow, homogeneous band on SPEP indicating monoclonal protein production (myeloma, MGUS, lymphoma). Requires immunofixation for characterization.',
    },
    {
      term: 'Nephelometry',
      definition:
        'Light scattering technique to measure protein concentration. Used for immunoglobulins, complement, CRP. Measures light scattered at angle.',
    },
    {
      term: 'Turbidimetry',
      definition:
        'Measures decrease in transmitted light due to particle formation. Similar to nephelometry. Used for immunoglobulin quantification.',
    },
    {
      term: 'Hook Effect',
      definition:
        'Falsely low immunoassay results when analyte concentration exceeds assay range, saturating antibodies. Common with hCG, troponin, tumor markers.',
    },
  ]

  const clinicalPearls = [
    'High-sensitivity troponin requires clinical context - small elevations occur in many conditions beyond MI',
    'Serial troponins (0 and 3-6 hr) with rising delta are more specific for acute MI than single value',
    'Ammonia and lactate specimens are extremely time-sensitive - delay causes falsely elevated results',
    'M-spike on SPEP always requires immunofixation to characterize the monoclonal protein',
    'Tumor markers should NOT be used for screening - intended for monitoring known malignancies',
  ]

  const pitfalls = [
    'Assuming any troponin elevation equals MI - consider renal failure, PE, sepsis, chronic elevation',
    'Not ensuring rapid ice-bath processing for ammonia and lactate',
    'Using tumor markers for screening asymptomatic patients',
    'Missing hook effect in very high tumor marker or hCG levels',
    'Interpreting BNP without considering age, renal function, and obesity',
    'Not following up abnormal SPEP with immunofixation',
  ]

  return (
    <ModuleTemplate
      title="Special Chemistry Topics"
      description="Cardiac markers, tumor markers, and specialized testing"
      icon={<Pill className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
