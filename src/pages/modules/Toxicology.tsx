import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Syringe } from 'lucide-react'

export function Toxicology() {
  const sections = [
    {
      title: 'Therapeutic Drug Monitoring (TDM) Principles',
      content: (
        <div className="space-y-4">
          <p>
            TDM optimizes drug therapy by measuring drug concentrations to
            ensure therapeutic efficacy while avoiding toxicity.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">When TDM is Useful:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Narrow therapeutic index</li>
              <li>Variable pharmacokinetics between patients</li>
              <li>Non-linear dose-response relationship</li>
              <li>Toxicity difficult to distinguish from disease symptoms</li>
              <li>Therapeutic effect not easily measurable</li>
            </ul>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Key Concepts:</h4>
            <p className="text-sm">
              <strong>Trough:</strong> Minimum concentration, drawn just before
              next dose. Most common for monitoring.
            </p>
            <p className="text-sm mt-1">
              <strong>Peak:</strong> Maximum concentration, drawn at specific
              time after dose (drug-dependent). Used for some antibiotics.
            </p>
            <p className="text-sm mt-1">
              <strong>Steady State:</strong> Achieved after 4-5 half-lives.
              Required for accurate TDM interpretation.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Common TDM Drugs',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Vancomycin:</h4>
            <p className="text-sm">
              Target trough: 10-20 μg/mL (varies by indication). Area under
              curve (AUC) monitoring increasingly preferred. Nephrotoxic at high
              levels. Half-life ~6 hours (prolonged in renal impairment).
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Gentamicin/Tobramycin (Aminoglycosides):</h4>
            <p className="text-sm">
              Peak-and-trough monitoring. Peak: 5-10 μg/mL (gentamicin),
              4-8 μg/mL (tobramycin). Trough: &lt;2 μg/mL. Nephrotoxic and
              ototoxic. Extended-interval dosing increasingly common.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Phenytoin:</h4>
            <p className="text-sm">
              Therapeutic: 10-20 μg/mL (total), 1-2 μg/mL (free). Non-linear
              kinetics (saturable metabolism). Free phenytoin preferred in
              hypoalbuminemia or renal failure.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Michaelis-Menten Kinetics:
              </p>
              <p className="text-sm mt-1">
                Small dose increases can cause large concentration increases
                near therapeutic range due to saturable metabolism. Requires
                careful dose adjustments.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Valproic Acid:</h4>
            <p className="text-sm">
              Therapeutic: 50-100 μg/mL. Highly protein-bound. Free fraction
              increases in hypoalbuminemia and overdose.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Digoxin:</h4>
            <p className="text-sm">
              Therapeutic: 0.8-2.0 ng/mL. Sample timing critical: Wait 6-8
              hours post-dose (avoid distribution phase). Toxicity potentiated
              by hypokalemia, hypomagnesemia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Immunosuppressants:</h4>
            <p className="text-sm">
              Tacrolimus: 5-15 ng/mL. Sirolimus: 4-12 ng/mL. Cyclosporine:
              100-300 ng/mL. Require LC-MS/MS for specificity. Trough levels.
              Critical for transplant management.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Toxicology Screens',
      content: (
        <div className="space-y-4">
          <p>
            Toxicology testing identifies and quantifies drugs and toxic
            substances. Screening vs confirmatory testing distinction is critical.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Immunoassay Screens:</h4>
              <p className="text-sm">
                Initial screening. Rapid, relatively inexpensive. Subject to
                cross-reactivity and false positives. Common drug classes:
                amphetamines, benzodiazepines, cannabinoids, cocaine, opiates.
              </p>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Cross-Reactivity Examples:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-1">
                  <li>Amphetamine screen: Positive with bupropion, trazodone</li>
                  <li>Opiate screen: May miss synthetic opioids (fentanyl, oxycodone)</li>
                  <li>PCP screen: Positive with dextromethorphan, tramadol</li>
                  <li>Benzodiazepine: Variable sensitivity to different benzos</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Confirmatory Testing (GC-MS, LC-MS/MS):</h4>
              <p className="text-sm">
                Gold standard. Highly specific. Identifies specific drugs and
                quantifies concentrations. Required for legal/forensic purposes.
                More expensive and time-consuming.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Common Toxidromes',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Acetaminophen:</h4>
            <p className="text-sm">
              Hepatotoxic in overdose. Level interpretation requires time since
              ingestion (Rumack-Matthew nomogram). Therapeutic: 10-30 μg/mL.
              Toxic: &gt;150 μg/mL at 4 hours post-ingestion.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Salicylates (Aspirin):</h4>
            <p className="text-sm">
              Therapeutic: 150-300 μg/mL (anti-inflammatory). Toxic: &gt;300 μg/mL.
              Can cause high anion gap metabolic acidosis and respiratory
              alkalosis. Serial levels needed in chronic toxicity.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Ethanol:</h4>
            <p className="text-sm">
              Legal limit (driving): 80 mg/dL (0.08%). Measured by enzymatic
              assay or headspace GC. Note osmolal gap if measuring other
              alcohols (methanol, ethylene glycol).
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Toxic Alcohols (Methanol, Ethylene Glycol):</h4>
            <p className="text-sm">
              Cause elevated osmolal gap early, then high anion gap metabolic
              acidosis as metabolites accumulate. Require specialized testing
              (GC or enzymatic). Toxic metabolites (formic acid, glycolic acid)
              cause organ damage.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Heavy Metals',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Lead:</h4>
            <p className="text-sm">
              Whole blood specimen (EDTA tube). Neurotoxic, especially in
              children. Reference: &lt;5 μg/dL. Action level in adults: &gt;25 μg/dL.
              Measured by atomic absorption spectroscopy or ICP-MS.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Mercury:</h4>
            <p className="text-sm">
              Whole blood or 24-hour urine. Forms: elemental, inorganic, organic
              (methylmercury). Different toxicity profiles. Neurotoxic.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Steady State',
      definition:
        'Equilibrium when drug input equals elimination. Reached after 4-5 half-lives. Required for accurate TDM interpretation.',
    },
    {
      term: 'Half-Life (t½)',
      definition:
        'Time required for drug concentration to decrease by 50%. Determines dosing interval and time to steady state.',
    },
    {
      term: 'Osmolal Gap',
      definition:
        'Difference between measured and calculated osmolality. Elevated in presence of unmeasured osmoles (ethanol, methanol, ethylene glycol).',
    },
    {
      term: 'Cross-Reactivity',
      definition:
        'Immunoassay detection of structurally similar compounds as target analyte. Causes false positives in drug screens.',
    },
  ]

  const clinicalPearls = [
    'TDM is only valid at steady state (4-5 half-lives) - early levels can be misleading',
    'Trough levels are most commonly used for TDM - drawn just before next dose',
    'Immunoassay drug screens are presumptive only - always confirm positive results with GC-MS or LC-MS/MS',
    'Phenytoin has non-linear kinetics - small dose increases can cause large level changes near therapeutic range',
    'Free phenytoin should be measured in hypoalbuminemia or renal failure',
    'Digoxin levels are meaningless if drawn during distribution phase (need 6-8 hours post-dose)',
  ]

  const pitfalls = [
    'Drawing drug levels before steady state is reached',
    'Not considering timing of sample collection (peak vs trough)',
    'Assuming immunoassay drug screen is confirmatory - it\'s screening only',
    'Missing cross-reactivity in immunoassays (e.g., bupropion causing positive amphetamine screen)',
    'Not recognizing that standard opiate screens may miss synthetic opioids (fentanyl, oxycodone)',
    'Interpreting total drug levels without considering protein binding in critically ill patients',
    'Drawing digoxin during distribution phase (too early)',
  ]

  return (
    <ModuleTemplate
      title="Toxicology & Therapeutic Drug Monitoring"
      description="Drug monitoring and toxicology testing principles"
      icon={<Syringe className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
