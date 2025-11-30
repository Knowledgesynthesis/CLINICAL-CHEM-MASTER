import { ModuleTemplate } from '@/components/ModuleTemplate'
import { UserCheck } from 'lucide-react'

export function Consults() {
  const sections = [
    {
      title: 'Laboratory Test Utilization',
      content: (
        <div className="space-y-4">
          <p>
            Appropriate test utilization ensures clinical value while controlling
            costs and minimizing patient burden. Laboratory professionals play
            a key role in test stewardship.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Principles of Appropriate Testing:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Right test for the right clinical question</li>
                <li>Proper timing and frequency</li>
                <li>Understanding pre-test probability</li>
                <li>Avoiding unnecessary repeat testing</li>
                <li>Considering cost-effectiveness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Common Over-utilization Scenarios:</h4>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Daily electrolytes in stable patients</li>
                  <li>Routine comprehensive metabolic panels without indication</li>
                  <li>Tumor marker screening in asymptomatic patients</li>
                  <li>Vitamin D testing in everyone</li>
                  <li>Excessive TDM without dose changes or clinical indication</li>
                  <li>Repeat testing within hours without intervention</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Test Selection Guidance',
      content: (
        <div className="space-y-4">
          <p>
            Clinical laboratories can guide appropriate test selection through
            consultation and educational initiatives.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Common Consultation Scenarios:</h4>
              <div className="space-y-2">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">
                    "Which test should I order for vitamin D status?"
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Answer:</strong> 25-OH vitamin D, not 1,25-OH vitamin D.
                    The latter is for specific clinical scenarios (granulomatous
                    disease, CKD-MBD), not nutritional assessment.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">
                    "Should I order total or free testosterone in this woman?"
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Answer:</strong> LC-MS/MS total testosterone preferred
                    in women and children. Immunoassays lack sensitivity and
                    specificity at low concentrations.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">
                    "The Friedewald LDL calculation failed. Why?"
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Answer:</strong> Likely triglycerides &gt;400 mg/dL
                    or non-fasting sample. Order direct LDL measurement instead.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">
                    "When should I draw peak and trough levels?"
                  </p>
                  <p className="text-sm mt-1">
                    <strong>Answer:</strong> Drug-dependent. Most TDM uses trough
                    (just before next dose) at steady state (4-5 half-lives).
                    Aminoglycosides may need peak/trough depending on protocol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Repeat Testing Guidelines',
      content: (
        <div className="space-y-4">
          <p>
            Establishing appropriate repeat testing intervals prevents
            unnecessary testing while ensuring clinically relevant monitoring.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Biological Variation Considerations:</h4>
              <p className="text-sm">
                Tests with high biological variation (e.g., glucose, triglycerides)
                may show significant day-to-day fluctuation. Tests with low
                biological variation (e.g., creatinine, electrolytes in stable
                patients) rarely change significantly without clinical intervention.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Suggested Minimum Intervals (Stable Patients):</h4>
              <div className="bg-muted p-3 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Electrolytes:</strong> 24 hours minimum unless acute changes expected</li>
                  <li><strong>Renal function:</strong> 24-48 hours unless AKI</li>
                  <li><strong>Liver enzymes:</strong> Weekly unless acute hepatitis</li>
                  <li><strong>Lipids:</strong> 6-12 weeks after therapy change</li>
                  <li><strong>HbA1c:</strong> 3 months (reflects 2-3 month average)</li>
                  <li><strong>TSH:</strong> 6-8 weeks after thyroid medication change</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Interpreting Abnormal Results',
      content: (
        <div className="space-y-4">
          <p>
            Laboratory consultation helps clinicians interpret complex or
            unexpected results and avoid common misinterpretations.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Systematic Approach to Abnormal Results:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Verify result is real (not pre-analytical error)</li>
                <li>Check specimen quality (HIL indices)</li>
                <li>Review QC status for the assay</li>
                <li>Compare to previous results (delta check)</li>
                <li>Consider patient factors (medications, supplements)</li>
                <li>Assess for analytical interference</li>
                <li>Correlate with clinical picture</li>
                <li>Consider confirmatory or reflex testing if needed</li>
              </ol>
            </div>
            <div className="bg-muted p-3 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Example Consultation:</h4>
              <p className="text-sm italic">
                "Potassium is 6.8 mEq/L, but patient is asymptomatic and EKG normal."
              </p>
              <p className="text-sm mt-2">
                <strong>Consultation approach:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm mt-1">
                <li>Check hemolysis index (likely hemolyzed specimen)</li>
                <li>Review specimen collection details</li>
                <li>Recommend recollection if hemolyzed</li>
                <li>Consider pseudohyperkalemia (thrombocytosis, leukocytosis)</li>
                <li>Compare to previous values</li>
              </ol>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Cost-Effective Testing Strategies',
      content: (
        <div className="space-y-4">
          <p>
            Laboratory professionals can promote high-value care by guiding
            cost-effective testing strategies.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">High-Value Practices:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Use reflex testing algorithms to avoid unnecessary follow-up tests</li>
                <li>Implement appropriate order sets and clinical pathways</li>
                <li>Restrict or guide use of expensive specialized tests</li>
                <li>Provide education on test interpretation to reduce repeats</li>
                <li>Monitor and provide feedback on ordering patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Examples of Cost-Effective Approaches:</h4>
              <div className="bg-muted p-3 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>TSH alone for thyroid screening (reflex to FT4 if abnormal)</li>
                  <li>Basic metabolic panel vs comprehensive when appropriate</li>
                  <li>Calculated LDL instead of direct LDL when TG &lt;400</li>
                  <li>Immunoassay screening before expensive confirmatory testing</li>
                  <li>Point-of-care testing for time-critical tests only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Test Utilization Management',
      definition:
        'Systematic approach to ensuring appropriate, cost-effective laboratory testing while maintaining quality of care.',
    },
    {
      term: 'Biological Variation',
      definition:
        'Natural fluctuation of analyte levels within an individual over time. Determines how much change is clinically significant.',
    },
    {
      term: 'Reference Change Value (RCV)',
      definition:
        'Minimum difference between sequential results needed to be considered clinically significant, accounting for analytical and biological variation.',
    },
    {
      term: 'Clinical Decision Limit',
      definition:
        'Concentration threshold that triggers clinical action. May differ from reference interval boundaries.',
    },
  ]

  const clinicalPearls = [
    'Most over-utilization occurs with daily routine testing in stable patients - question the need',
    'Unexpected results should trigger pre-analytical review (specimen quality, collection timing) before clinical interpretation',
    'Tumor markers should never be used for screening - they are for monitoring known disease',
    'Free hormone measurements (FT4, free testosterone) are preferred when binding proteins may be abnormal',
    'Serial testing should occur at steady state for accurate interpretation (4-5 half-lives for drugs)',
  ]

  const pitfalls = [
    'Reflexively ordering comprehensive panels when targeted testing would suffice',
    'Repeating tests too frequently without allowing time for meaningful change',
    'Not considering pre-test probability when ordering tests',
    'Ordering expensive specialized tests when routine tests would answer the clinical question',
    'Failing to investigate unexpected results for pre-analytical or analytical errors',
    'Using tumor markers for screening rather than disease monitoring',
  ]

  return (
    <ModuleTemplate
      title="Clinical Consultation & Stewardship"
      description="Guiding appropriate test utilization and result interpretation"
      icon={<UserCheck className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
