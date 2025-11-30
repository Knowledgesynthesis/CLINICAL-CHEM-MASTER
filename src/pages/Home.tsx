import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Beaker,
  Microscope,
  ShieldCheck,
  Pill,
  Activity,
  Dna,
  Syringe,
  AlertTriangle,
  Cog,
  UserCheck,
  FileText,
  ClipboardCheck,
} from 'lucide-react'

interface Module {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  path: string
  color: string
}

const modules: Module[] = [
  {
    id: 'foundations',
    title: 'Foundations of Clinical Chemistry',
    description: 'Pre-analytical, analytical, and post-analytical phases',
    icon: <Beaker className="h-8 w-8" />,
    path: '/foundations',
    color: 'text-blue-500',
  },
  {
    id: 'instrumentation',
    title: 'Analytic Principles & Instrumentation',
    description: 'Spectrophotometry, immunoassays, mass spectrometry',
    icon: <Microscope className="h-8 w-8" />,
    path: '/instrumentation',
    color: 'text-purple-500',
  },
  {
    id: 'quality',
    title: 'Quality Management',
    description: 'QC, Westgard rules, method evaluation',
    icon: <ShieldCheck className="h-8 w-8" />,
    path: '/quality',
    color: 'text-green-500',
  },
  {
    id: 'chem-panels',
    title: 'Core Chemistry Panels',
    description: 'Electrolytes, renal, liver, lipids, glucose',
    icon: <Activity className="h-8 w-8" />,
    path: '/chem-panels',
    color: 'text-red-500',
  },
  {
    id: 'endocrine',
    title: 'Endocrine Testing',
    description: 'TSH, cortisol, PTH, calcium physiology',
    icon: <Dna className="h-8 w-8" />,
    path: '/endocrine',
    color: 'text-pink-500',
  },
  {
    id: 'special-chem',
    title: 'Special Chemistry Topics',
    description: 'Cardiac markers, tumor markers, proteins',
    icon: <Pill className="h-8 w-8" />,
    path: '/special-chem',
    color: 'text-indigo-500',
  },
  {
    id: 'toxicology',
    title: 'Toxicology & TDM',
    description: 'Therapeutic drug monitoring and toxicology screens',
    icon: <Syringe className="h-8 w-8" />,
    path: '/toxicology',
    color: 'text-orange-500',
  },
  {
    id: 'errors',
    title: 'Lab Errors & Interferences',
    description: 'Hemolysis, lipemia, interferences',
    icon: <AlertTriangle className="h-8 w-8" />,
    path: '/errors',
    color: 'text-yellow-500',
  },
  {
    id: 'automation',
    title: 'Automation & Lab Systems',
    description: 'Total lab automation, LIS, auto-verification',
    icon: <Cog className="h-8 w-8" />,
    path: '/automation',
    color: 'text-cyan-500',
  },
  {
    id: 'consults',
    title: 'Clinical Consultation',
    description: 'Test utilization and clinical stewardship',
    icon: <UserCheck className="h-8 w-8" />,
    path: '/consults',
    color: 'text-teal-500',
  },
  {
    id: 'cases',
    title: 'Integrated Cases',
    description: 'Complex case-based learning',
    icon: <FileText className="h-8 w-8" />,
    path: '/cases',
    color: 'text-violet-500',
  },
  {
    id: 'assessment',
    title: 'Assessment',
    description: 'Test your knowledge (session-only)',
    icon: <ClipboardCheck className="h-8 w-8" />,
    path: '/assessment',
    color: 'text-emerald-500',
  },
]

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Clinical Chem Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Understand the lab behind the numbers. Master clinical chemistry
          from measurement to interpretation.
        </p>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <Link key={module.id} to={module.path} className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className={`mb-4 ${module.color}`}>{module.icon}</div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {module.title}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-6 border rounded-lg bg-muted/50">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Educational Only:</strong> This application is designed for
          educational purposes for pathology residents and clinical chemistry
          fellows. It is not intended for patient care or clinical
          decision-making.
        </p>
      </div>
    </div>
  )
}
