import { ModuleTemplate } from '@/components/ModuleTemplate'
import { Cog } from 'lucide-react'

export function Automation() {
  const sections = [
    {
      title: 'Total Laboratory Automation (TLA)',
      content: (
        <div className="space-y-4">
          <p>
            TLA integrates specimen processing, analysis, and storage into a
            single automated system, improving efficiency, reducing errors, and
            standardizing workflows.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Components of TLA Systems:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Specimen receiving and sorting</li>
                <li>Automated centrifugation</li>
                <li>Tube cap removal</li>
                <li>Aliquoting and labeling</li>
                <li>Analytical module integration</li>
                <li>Sample storage and retrieval</li>
                <li>Track/conveyor systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Reduced turnaround time</li>
                <li>Decreased manual handling errors</li>
                <li>Improved sample tracking</li>
                <li>Standardized workflows</li>
                <li>Better ergonomics for staff</li>
                <li>24/7 operation capability</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Laboratory Information Systems (LIS)',
      content: (
        <div className="space-y-4">
          <p>
            LIS manages laboratory data flow from test ordering through result
            reporting, integrating with hospital information systems (HIS) and
            analytical instruments.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Key Functions:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Test ordering and specimen tracking</li>
                <li>Instrument interfacing and result acquisition</li>
                <li>Quality control monitoring</li>
                <li>Auto-verification rule application</li>
                <li>Delta checks and critical value detection</li>
                <li>Result reporting and archiving</li>
                <li>Billing and compliance tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Integration Points:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Electronic Health Record (EHR) bidirectional interface</li>
                <li>Analyzer middleware and instruments</li>
                <li>Automated specimen processors</li>
                <li>Quality management systems</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Auto-verification',
      content: (
        <div className="space-y-4">
          <p>
            Auto-verification automatically validates and releases results
            meeting predefined criteria, reducing manual review time and
            accelerating result reporting.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Auto-verification Criteria:</h4>
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  Results automatically verified when:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                  <li>QC is passing (within acceptable limits)</li>
                  <li>No instrument flags or errors</li>
                  <li>Within analytical measurement range</li>
                  <li>Delta check passes</li>
                  <li>HIL indices within acceptable limits</li>
                  <li>No critical values requiring notification</li>
                  <li>Sample integrity acceptable</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Results Requiring Manual Review:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Critical values</li>
                <li>QC failures</li>
                <li>Delta check failures</li>
                <li>Results outside reportable range</li>
                <li>High HIL indices</li>
                <li>Instrument flags or error codes</li>
                <li>Dilution or repeat testing performed</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Reflex Testing',
      content: (
        <div className="space-y-4">
          <p>
            Reflex testing automatically triggers additional tests based on
            initial results, improving diagnostic efficiency and clinical
            decision-making.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Common Reflex Testing Examples:</h4>
              <div className="space-y-2">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">TSH → FT4</p>
                  <p className="text-sm">
                    If TSH abnormal (low or high), reflex to free T4
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">SPEP → Immunofixation</p>
                  <p className="text-sm">
                    If M-spike detected, reflex to immunofixation for characterization
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">Positive Drug Screen → Confirmatory Testing</p>
                  <p className="text-sm">
                    Positive immunoassay reflex to GC-MS or LC-MS/MS confirmation
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm font-semibold">Abnormal Calcium → PTH</p>
                  <p className="text-sm">
                    High or low calcium reflex to PTH for parathyroid assessment
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Reduced diagnostic delay</li>
                <li>Decreased need for recollection</li>
                <li>Standardized clinical pathways</li>
                <li>Improved appropriateness of testing</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Result Flagging & Critical Values',
      content: (
        <div className="space-y-4">
          <p>
            Automated systems flag abnormal results and critical values,
            ensuring appropriate clinical attention and timely intervention.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Flag Types:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>H (High):</strong> Above reference interval</li>
                <li><strong>L (Low):</strong> Below reference interval</li>
                <li><strong>Critical (Panic):</strong> Life-threatening values</li>
                <li><strong>Delta:</strong> Significant change from previous</li>
                <li><strong>Instrument flags:</strong> Quality/integrity concerns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Critical Value Management:</h4>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Critical Value Workflow:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm mt-2">
                  <li>Automated detection by LIS</li>
                  <li>Verification of result (repeat if needed)</li>
                  <li>Documented notification to provider</li>
                  <li>Read-back verification</li>
                  <li>Time-stamped documentation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const keyConcepts = [
    {
      term: 'Middleware',
      definition:
        'Software layer between LIS and analyzers. Manages data flow, applies rules, handles exceptions, and facilitates auto-verification.',
    },
    {
      term: 'Bidirectional Interface',
      definition:
        'Two-way communication between systems (e.g., LIS and analyzer). Orders sent to analyzer, results returned to LIS automatically.',
    },
    {
      term: 'Turnaround Time (TAT)',
      definition:
        'Time from specimen collection to result availability. Critical quality metric. Automation reduces TAT.',
    },
    {
      term: 'Auto-verification Rate',
      definition:
        'Percentage of results automatically validated without manual review. Higher rates indicate efficient automation and fewer exceptions.',
    },
  ]

  const clinicalPearls = [
    'Auto-verification rules must be carefully validated - balance efficiency with safety',
    'Reflex testing algorithms should align with clinical guidelines and cost-effectiveness',
    'Critical value lists should be evidence-based and periodically reviewed',
    'Track/conveyor systems reduce specimen handling errors and improve workflow',
    'LIS delta checks can catch specimen mix-ups before results reach clinicians',
  ]

  const pitfalls = [
    'Over-reliance on automation without understanding limitations',
    'Auto-verification rules that are too permissive (missing errors) or too restrictive (low efficiency)',
    'Not maintaining and updating reflex testing algorithms based on current evidence',
    'Inadequate training of staff on automated systems and exception handling',
    'Failing to document critical value notifications properly',
    'Not monitoring auto-verification rates and error patterns',
  ]

  return (
    <ModuleTemplate
      title="Automation & Lab Information Systems"
      description="Laboratory automation and information technology"
      icon={<Cog className="h-12 w-12" />}
      sections={sections}
      keyConcepts={keyConcepts}
      clinicalPearls={clinicalPearls}
      pitfalls={pitfalls}
    />
  )
}
