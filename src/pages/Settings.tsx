import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import { Sun, Moon, Info, AlertCircle } from 'lucide-react'

export function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your app preferences and learn more about Clinical Chem Master
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the app looks on your device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Theme</div>
              <div className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={toggleTheme}
              className="gap-2"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  Light Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            <CardTitle>About Clinical Chem Master</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Clinical Chem Master is a comprehensive educational platform designed
              to help pathology residents and clinical chemistry fellows master
              the principles of clinical chemistry. Our goal is to bridge the gap
              between laboratory testing and clinical interpretation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li>Comprehensive coverage of clinical chemistry topics</li>
              <li>Interactive case studies and assessments</li>
              <li>Quality management and instrumentation principles</li>
              <li>Offline-capable for learning anywhere</li>
              <li>Session-only assessments with no data tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Target Audience</h3>
            <p className="text-sm text-muted-foreground">
              This app is designed for pathology residents (PGY1-PGY4), clinical
              chemistry fellows, and laboratory professionals seeking to deepen
              their understanding of clinical chemistry principles and practices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">1.0.0</p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-orange-500/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <CardTitle>Important Disclaimers</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-orange-500">
              Educational Use Only
            </h3>
            <p className="text-sm text-muted-foreground">
              This application is designed exclusively for educational purposes.
              It is NOT intended for patient care, clinical decision-making, or
              diagnostic purposes. All content is for training and educational
              use only.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-orange-500">
              No Patient Data
            </h3>
            <p className="text-sm text-muted-foreground">
              All laboratory values, cases, and scenarios presented in this app
              use synthetic data only. No real patient data, protected health
              information (PHI), or identifiable patient information is used or
              stored in this application.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-orange-500">
              No Data Tracking
            </h3>
            <p className="text-sm text-muted-foreground">
              This application does not track or store your assessment scores,
              progress, or any personal data. All assessments are session-only,
              and data is cleared when you close the application.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-orange-500">
              Clinical Responsibility
            </h3>
            <p className="text-sm text-muted-foreground">
              Always consult appropriate clinical resources, guidelines, and
              experienced colleagues for patient care decisions. This app is a
              learning tool and should not replace clinical judgment, laboratory
              protocols, or institutional policies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-orange-500">
              Accuracy of Information
            </h3>
            <p className="text-sm text-muted-foreground">
              While we strive for accuracy in all educational content, clinical
              chemistry is a rapidly evolving field. Always verify information
              with current medical literature, institutional protocols, and
              subject matter experts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-orange-500">
              No Medical Advice
            </h3>
            <p className="text-sm text-muted-foreground">
              The information provided in this app does not constitute medical
              advice and should not be used as a substitute for professional
              medical consultation, diagnosis, or treatment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Copyright Notice */}
      <div className="text-center text-sm text-muted-foreground py-4">
        <p>© 2024 Clinical Chem Master. All rights reserved.</p>
        <p className="mt-1">
          Designed for educational excellence in clinical chemistry.
        </p>
      </div>
    </div>
  )
}
