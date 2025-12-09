import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function Roadmap() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold font-serif text-foreground">Implementation Roadmap</h1>
        <p className="text-muted-foreground max-w-2xl">
          From "The Egg" (Pilot) to "The Chicken" (Full System). A phased approach to deployment.
        </p>
      </div>

      <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12 py-4">
        {/* Phase 1: Now */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-sm" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold font-serif text-foreground">Phase 1: The Start</h2>
            <Badge variant="default" className="w-fit bg-primary text-primary-foreground">Current Status</Badge>
          </div>
          
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Immediate Actions</CardTitle>
              <CardDescription>Setting the foundation for the pilot.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Data Access & Audit</p>
                  <p className="text-sm text-muted-foreground">Secure access to historical test data (3,000+ records).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Role Integration</p>
                  <p className="text-sm text-muted-foreground">Formalizing the Data Science role within the coaching staff.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase 2: Pilot */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-background border-4 border-border shadow-sm" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold font-serif text-foreground">Phase 2: The Pilot</h2>
            <Badge variant="outline" className="w-fit border-primary/30 text-primary bg-primary/5">3-6 Months</Badge>
          </div>
          
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">"The Egg" (MVP)</CardTitle>
              <CardDescription>First tangible results with 1-2 teams.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Deliverables</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <Circle className="h-2 w-2 fill-primary text-primary" />
                    <span>Unified Database Structure</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Circle className="h-2 w-2 fill-primary text-primary" />
                    <span>Age-Specific Norms (Percentiles)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Circle className="h-2 w-2 fill-primary text-primary" />
                    <span>First Player Profiles (v1.0)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/30 p-4 rounded-xl border border-border">
                <p className="text-sm italic text-muted-foreground">
                  "This is realistic to launch in the coming months. We validate the model on a small scale before expanding."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase 3: System */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-background border-4 border-border shadow-sm" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold font-serif text-foreground">Phase 3: The System</h2>
            <Badge variant="outline" className="w-fit">6-18 Months</Badge>
          </div>
          
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">"The Chicken" (Full Scale)</CardTitle>
              <CardDescription>Automation, deep analytics, and scientific recognition.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Coach's Dashboard</p>
                  <p className="text-sm text-muted-foreground">Automated reports and progress tracking for all age groups.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Advanced Line Matching</p>
                  <p className="text-sm text-muted-foreground">Algorithms to suggest optimal line combinations based on profile balance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Scientific Publications</p>
                  <p className="text-sm text-muted-foreground">Positioning the Academy as an innovation hub (Q1/Q2 Journals).</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
