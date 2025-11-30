import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Activity } from 'lucide-react'

export function ChemPanels() {
  const sections = [
    {
      title: 'Electrolytes',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Sodium (Na⁺):</h4>
              <p className="text-sm">
                Normal: 135-145 mEq/L. Major extracellular cation. Regulates
                water balance and osmolality.
              </p>
              <div className="bg-muted p-3 rounded-lg mt-2">
                <p className="text-sm">
                  <strong>Hyponatremia:</strong> Consider osmolality (hypotonic,
                  isotonic, hypertonic), volume status, and urine sodium/osmolality.
                  Pseudohyponatremia with indirect ISE in hyperlipidemia/hyperproteinemia.
                </p>
                <p className="text-sm mt-2">
                  <strong>Hypernatremia:</strong> Always hypertonic. Usually
                  indicates water deficit relative to sodium.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Potassium (K⁺):</h4>
              <p className="text-sm">
                Normal: 3.5-5.0 mEq/L. Major intracellular cation. Critical for
                cardiac and neuromuscular function.
              </p>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Hemolysis elevates measured potassium!
                </p>
                <p className="text-sm mt-1">
                  In vitro hemolysis releases intracellular K⁺. Check hemolysis
                  index. Pseudohyperkalemia also from thrombocytosis,
                  leukocytosis, delayed processing.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Chloride (Cl⁻):</h4>
              <p className="text-sm">
                Normal: 98-107 mEq/L. Major extracellular anion. Follows sodium
                in most conditions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Bicarbonate (HCO₃⁻/CO₂):</h4>
              <p className="text-sm">
                Normal: 22-29 mEq/L. Reflects metabolic component of acid-base
                balance. "CO₂" on chemistry panel = total CO₂ ≈ HCO₃⁻.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Anion Gap:</h4>
            <p className="text-sm">AG = Na⁺ - (Cl⁻ + HCO₃⁻). Normal: 8-12 mEq/L.</p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Elevated AG acidosis:</strong> MUDPILES - Methanol, Uremia,
                DKA, Propylene glycol, Iron/Isoniazid, Lactic acidosis, Ethylene
                glycol, Salicylates
              </p>
              <p className="text-sm mt-2">
                <strong>Normal AG acidosis:</strong> GI bicarbonate loss (diarrhea),
                RTA, early renal failure
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Renal Function',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Creatinine:</h4>
            <p className="text-sm">
              Normal: 0.7-1.3 mg/dL (varies by muscle mass, age, sex). Product
              of muscle metabolism. Filtered by glomerulus, minimal tubular
              secretion.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Jaffe reaction:</strong> Alkaline picrate method.
                Subject to interference from ketones, bilirubin, proteins.
              </p>
              <p className="text-sm mt-1">
                <strong>Enzymatic methods:</strong> More specific, less interference.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Blood Urea Nitrogen (BUN):</h4>
            <p className="text-sm">
              Normal: 7-20 mg/dL. End product of protein metabolism. Affected
              by protein intake, hydration, GI bleeding.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>BUN/Creatinine ratio:</strong> Normal 10-20:1.
              </p>
              <p className="text-sm mt-1">
                Elevated ratio (&gt;20): Prerenal azotemia, GI bleeding, high protein
                intake, catabolic states
              </p>
              <p className="text-sm mt-1">
                Low ratio (&lt;10): Liver disease, malnutrition, overhydration
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Estimated GFR (eGFR):</h4>
            <p className="text-sm">
              Calculated from creatinine, age, sex, race. CKD-EPI and MDRD
              equations most common. Stages CKD from 1-5 based on eGFR.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Liver Function',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Aminotransferases:</h4>
            <div className="space-y-2 mt-2">
              <p className="text-sm">
                <strong>AST (Aspartate Aminotransferase):</strong> Normal 10-40 U/L.
                Found in liver, heart, muscle, kidney, RBCs. Less specific for liver.
              </p>
              <p className="text-sm">
                <strong>ALT (Alanine Aminotransferase):</strong> Normal 7-56 U/L.
                More specific for hepatocellular injury.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Hemolysis falsely elevates AST!
              </p>
              <p className="text-sm mt-1">
                RBCs contain AST but not ALT. Hemolyzed specimen will show
                elevated AST with normal or mildly elevated ALT.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Alkaline Phosphatase (ALP):</h4>
            <p className="text-sm">
              Normal: 40-150 U/L. Found in liver (biliary epithelium), bone,
              intestine, placenta. Elevated in cholestatic liver disease and
              bone disorders.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Bilirubin:</h4>
            <div className="space-y-2 mt-2">
              <p className="text-sm">
                <strong>Total Bilirubin:</strong> Normal 0.1-1.2 mg/dL
              </p>
              <p className="text-sm">
                <strong>Direct (Conjugated):</strong> Normal 0-0.3 mg/dL.
                Water-soluble, excreted in bile.
              </p>
              <p className="text-sm">
                <strong>Indirect (Unconjugated):</strong> Total - Direct.
                Lipid-soluble, bound to albumin.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">GGT (Gamma-Glutamyl Transferase):</h4>
            <p className="text-sm">
              Normal: 9-48 U/L. Confirms hepatic source of elevated ALP.
              Sensitive to alcohol use.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Hepatic Injury Patterns:</h4>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm">
                <strong>Hepatocellular:</strong> AST/ALT &gt;&gt; ALP (ALT
                predominance)
              </p>
              <p className="text-sm mt-1">
                <strong>Cholestatic:</strong> ALP &gt;&gt; AST/ALT (ALP/GGT elevated)
              </p>
              <p className="text-sm mt-1">
                <strong>Mixed:</strong> Both AST/ALT and ALP elevated proportionally
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Lipids',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Total Cholesterol:</h4>
            <p className="text-sm">
              Desirable: &lt;200 mg/dL. Measured enzymatically. Requires fasting
              for accurate interpretation with other lipids.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">HDL Cholesterol:</h4>
            <p className="text-sm">
              Desirable: &gt;40 mg/dL (men), &gt;50 mg/dL (women). "Good
              cholesterol." Can be measured directly (non-fasting OK).
            </p>
          </div>
          <div>
            <h4 className="font-semibold">LDL Cholesterol:</h4>
            <p className="text-sm">
              Optimal: &lt;100 mg/dL. Typically calculated (Friedewald equation)
              or measured directly.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm font-mono">
                LDL = Total Chol - HDL - (TG/5)
              </p>
              <p className="text-sm mt-2">
                <strong>Note:</strong> Friedewald invalid if TG &gt;400 mg/dL or
                non-fasting. Use direct LDL in these cases.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Triglycerides:</h4>
            <p className="text-sm">
              Normal: &lt;150 mg/dL. Requires fasting (12-14 hours). Elevated
              in metabolic syndrome, diabetes, alcohol use.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Glucose Metabolism',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Glucose:</h4>
            <p className="text-sm">
              Fasting: 70-99 mg/dL. Random: &lt;140 mg/dL. Diabetes: Fasting ≥126
              or random ≥200 mg/dL.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Hexokinase method:</strong> Reference method, highly specific.
              </p>
              <p className="text-sm mt-1">
                <strong>Glucose oxidase:</strong> Common alternative, subject to
                interference from ascorbic acid.
              </p>
              <p className="text-sm mt-1">
                <strong>Gray-top tube:</strong> Contains fluoride (glycolysis
                inhibitor) and oxalate (anticoagulant). Prevents glucose consumption
                by cells during storage.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Hemoglobin A1c (HbA1c):</h4>
            <p className="text-sm">
              Normal: &lt;5.7%. Prediabetes: 5.7-6.4%. Diabetes: ≥6.5%. Reflects
              average glucose over 2-3 months (RBC lifespan).
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Interference Alert:
              </p>
              <p className="text-sm mt-1">
                Hemoglobin variants (HbS, HbC), hemolytic anemia, blood transfusion,
                iron deficiency can affect HbA1c results. Consider alternative
                glycemic markers (fructosamine, glycated albumin) in these situations.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Osmolality',
      definition:
        'Concentration of osmotically active particles. Calculated: 2(Na) + Glucose/18 + BUN/2.8. Normal: 275-295 mOsm/kg.',
    },
    {
      term: 'Osmolal Gap',
      definition:
        'Difference between measured and calculated osmolality. Elevated in presence of unmeasured osmoles (ethanol, methanol, ethylene glycol).',
    },
    {
      term: 'Delta-Delta',
      definition:
        'In high anion gap acidosis, compares change in anion gap to change in bicarbonate to identify mixed acid-base disorders.',
    },
    {
      term: 'Friedewald Equation',
      definition:
        'Calculates LDL cholesterol: LDL = Total Chol - HDL - (TG/5). Invalid if TG >400 mg/dL.',
    },
  ]

  const clinicalPearls = [
    'Always check hemolysis index before interpreting potassium - hemolysis is the most common cause of pseudohyperkalemia',
    'AST elevation out of proportion to ALT suggests non-hepatic source or alcoholic liver disease (AST:ALT ratio >2)',
    'Isolated ALP elevation requires fractionation or GGT to determine if hepatic or bone source',
    'Marked hypertriglyceridemia (>1500 mg/dL) can cause pseudohyponatremia with indirect ISE',
    'HbA1c unreliable in hemolytic anemia, hemoglobinopathies, or recent transfusion',
  ]

  const pitfalls = [
    'Reporting elevated potassium from hemolyzed specimen without retest',
    'Using Friedewald equation when triglycerides >400 mg/dL',
    'Not recognizing that non-fasting samples affect triglycerides and calculated LDL',
    'Assuming all hyponatremia is hypotonic - always consider osmolality',
    'Missing pseudohyperkalemia from thrombocytosis or leukocytosis',
    'Interpreting BUN alone without creatinine and clinical context',
  ]

  return (
    <ModuleTemplate
      title="Core Chemistry Panels"
      description="Essential chemistry tests and their clinical interpretation"
      icon={<Activity className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
