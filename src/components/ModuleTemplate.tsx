import { ReactNode } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

interface Section {
  title: string
  content: ReactNode
}

interface KeyConcept {
  term: string
  definition: string
}

interface ModuleTemplateProps {
  title: string
  description: string
  icon?: ReactNode
  sections: Section[]
  keyConcepts?: KeyConcept[]
  clinicalPearls?: string[]
  pitfalls?: string[]
}

export function ModuleTemplate({
  title,
  description,
  icon,
  sections,
  keyConcepts,
  clinicalPearls,
  pitfalls,
}: ModuleTemplateProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modules
        </Link>
      </Button>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {icon && <div className="text-primary">{icon}</div>}
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-xl text-muted-foreground mt-2">{description}</p>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              {section.content}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Concepts */}
      {keyConcepts && keyConcepts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Key Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {keyConcepts.map((concept, index) => (
                <div key={index}>
                  <div className="font-semibold text-primary">
                    {concept.term}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {concept.definition}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Clinical Pearls */}
      {clinicalPearls && clinicalPearls.length > 0 && (
        <Card className="border-green-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="secondary">Clinical Pearls</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {clinicalPearls.map((pearl, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{pearl}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Common Pitfalls */}
      {pitfalls && pitfalls.length > 0 && (
        <Card className="border-orange-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="destructive">Common Pitfalls</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pitfalls.map((pitfall, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-orange-500 mt-1">!</span>
                  <span>{pitfall}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
