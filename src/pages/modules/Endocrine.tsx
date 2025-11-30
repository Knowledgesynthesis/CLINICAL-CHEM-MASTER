import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Dna } from 'lucide-react'

export function Endocrine() {
  const sections = [
    {
      title: 'Thyroid Function Testing',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">TSH (Thyroid-Stimulating Hormone):</h4>
            <p className="text-sm">
              Normal: 0.4-4.0 mIU/L. Best screening test for thyroid function.
              Inverse relationship with thyroid hormone levels (log-linear).
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Primary Hypothyroidism:</strong> High TSH, Low FT4
              </p>
              <p className="text-sm mt-1">
                <strong>Primary Hyperthyroidism:</strong> Low TSH, High FT4/FT3
              </p>
              <p className="text-sm mt-1">
                <strong>Subclinical Hypothyroidism:</strong> High TSH, Normal FT4
              </p>
              <p className="text-sm mt-1">
                <strong>Subclinical Hyperthyroidism:</strong> Low TSH, Normal FT4
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Free T4 (FT4):</h4>
            <p className="text-sm">
              Normal: 0.8-1.8 ng/dL. Metabolically active fraction. Immunoassay
              measurement can be affected by binding protein abnormalities.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Total T4 and T3:</h4>
            <p className="text-sm">
              Affected by thyroid-binding globulin (TBG) levels. Pregnancy,
              estrogen, and acute illness alter TBG. Free hormone measurements
              preferred.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-4">
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
              Biotin Interference:
            </p>
            <p className="text-sm mt-1">
              High-dose biotin supplements can interfere with many thyroid
              immunoassays (especially those using streptavidin-biotin), causing
              falsely low TSH and falsely high FT4, mimicking hyperthyroidism.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Adrenal Function',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Cortisol:</h4>
            <p className="text-sm">
              AM (8 AM): 5-25 μg/dL. PM (4 PM): 3-16 μg/dL. Exhibits diurnal
              variation (highest in morning). Bound to cortisol-binding globulin
              (CBG).
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Dynamic Testing:</strong>
              </p>
              <p className="text-sm mt-1">
                <strong>ACTH Stimulation Test:</strong> Tests adrenal reserve.
                Cortisol should rise &gt;18-20 μg/dL after cosyntropin.
              </p>
              <p className="text-sm mt-1">
                <strong>Dexamethasone Suppression:</strong> Tests for Cushing
                syndrome. Normal: cortisol suppresses to &lt;1.8 μg/dL after
                overnight dexamethasone.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">ACTH (Adrenocorticotropic Hormone):</h4>
            <p className="text-sm">
              Normal: 10-60 pg/mL. Pre-analytical concerns: Requires EDTA tube,
              immediate ice bath, rapid processing due to peptide degradation.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                ACTH is extremely unstable!
              </p>
              <p className="text-sm mt-1">
                Specimen must be collected in pre-chilled EDTA tube, placed on
                ice immediately, centrifuged refrigerated, and plasma frozen
                within 30 minutes. Degradation causes falsely low results.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Calcium & Parathyroid',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Total Calcium:</h4>
            <p className="text-sm">
              Normal: 8.5-10.5 mg/dL. Approximately 40% bound to albumin, 10%
              complexed, 50% ionized (physiologically active).
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Albumin Correction:</strong>
              </p>
              <p className="text-sm mt-1 font-mono">
                Corrected Ca = Measured Ca + 0.8 × (4.0 - Albumin)
              </p>
              <p className="text-sm mt-2">
                Use when albumin is low. Corrects for protein binding. Not needed
                if ionized calcium measured directly.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Ionized Calcium:</h4>
            <p className="text-sm">
              Normal: 4.6-5.3 mg/dL (1.15-1.32 mmol/L). Measured by ISE. More
              physiologically relevant than total calcium. pH-dependent
              (alkalosis increases protein binding, lowers ionized Ca).
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">PTH (Parathyroid Hormone):</h4>
            <p className="text-sm">
              Normal: 10-65 pg/mL. Intact PTH immunoassay. Interpret in context
              of calcium level.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Primary Hyperparathyroidism:</strong> High Ca, High or
                inappropriately normal PTH
              </p>
              <p className="text-sm mt-1">
                <strong>Secondary Hyperparathyroidism:</strong> Low/Normal Ca,
                High PTH (response to hypocalcemia)
              </p>
              <p className="text-sm mt-1">
                <strong>Hypoparathyroidism:</strong> Low Ca, Low PTH
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Reproductive Hormones',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Testosterone:</h4>
            <p className="text-sm">
              Adult male: 300-1000 ng/dL. Adult female: 15-70 ng/dL. Immunoassay
              adequate for adult males, but LC-MS/MS preferred for women and
              children due to low concentrations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Estradiol:</h4>
            <p className="text-sm">
              Varies by menstrual cycle phase and menopause status. Immunoassays
              common but can have specificity issues.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">hCG (Human Chorionic Gonadotropin):</h4>
            <p className="text-sm">
              Pregnancy test. Sandwich immunoassay. Positive: &gt;5 mIU/mL.
              Doubles every 48-72 hours in early normal pregnancy.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-2">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                Hook Effect Warning:
              </p>
              <p className="text-sm mt-1">
                Extremely high hCG (molar pregnancy, choriocarcinoma) can cause
                falsely low or negative results due to hook effect in sandwich
                immunoassays. If clinical suspicion high despite negative result,
                perform dilution study.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Vitamin D',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">25-OH Vitamin D:</h4>
            <p className="text-sm">
              Best marker of vitamin D status. Normal: &gt;30 ng/mL. Insufficiency:
              20-30 ng/mL. Deficiency: &lt;20 ng/mL.
            </p>
            <div className="bg-muted p-3 rounded-lg mt-2">
              <p className="text-sm">
                <strong>Methodology:</strong> Immunoassay or LC-MS/MS. LC-MS/MS
                preferred as it measures both D2 and D3 forms separately and has
                fewer interference issues.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">1,25-OH Vitamin D (Calcitriol):</h4>
            <p className="text-sm">
              Active form. NOT used to assess vitamin D status. Used in specific
              clinical scenarios (granulomatous disease, CKD-MBD, vitamin D
              metabolism disorders).
            </p>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Diurnal Variation',
      definition:
        'Time-dependent fluctuation in hormone levels. Critical for cortisol, ACTH, testosterone. Timing of collection affects interpretation.',
    },
    {
      term: 'Free vs Total Hormone',
      definition:
        'Free hormone is biologically active; total includes protein-bound fraction. Free measurements preferred when binding proteins are abnormal.',
    },
    {
      term: 'Dynamic Testing',
      definition:
        'Stimulation or suppression tests that assess endocrine gland reserve or autonomous function. Examples: ACTH stim, dexamethasone suppression.',
    },
    {
      term: 'Peptide Hormone Stability',
      definition:
        'Many peptide hormones (ACTH, PTH, insulin) are unstable and require specific pre-analytical handling (ice, rapid processing).',
    },
  ]

  const clinicalPearls = [
    'Low TSH with normal FT4 may indicate subclinical hyperthyroidism, but also seen in critical illness (euthyroid sick syndrome)',
    'Always correct total calcium for albumin, or better yet, measure ionized calcium directly',
    'ACTH specimen handling is critical - improper collection/processing causes falsely low results',
    'LC-MS/MS is gold standard for testosterone in women and children due to immunoassay cross-reactivity at low levels',
    'Biotin interference affects many immunoassays - ask about supplements when thyroid results don\'t match clinical picture',
  ]

  const pitfalls = [
    'Using immunoassay testosterone results in women without understanding cross-reactivity limitations',
    'Not considering time of day when interpreting cortisol results',
    'Measuring 1,25-OH vitamin D instead of 25-OH vitamin D for nutritional assessment',
    'Missing hook effect in hCG assays by not performing dilutions in high clinical suspicion cases',
    'Interpreting total calcium without considering albumin level',
    'Not ensuring proper pre-analytical handling for ACTH (ice, rapid processing)',
  ]

  return (
    <ModuleTemplate
      title="Endocrine Testing"
      description="Hormone testing and endocrine function assessment"
      icon={<Dna className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
