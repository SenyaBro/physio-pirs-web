import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";

export default function Methodology() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold font-serif text-foreground">Methodology</h1>
        <p className="text-muted-foreground max-w-2xl">
          The scientific foundation of the Physio-PIRS system: Variables, Normalization, and the "Fair Scale" principle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: The Variables Ecosystem */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif">The "Language" of the System</CardTitle>
              <CardDescription>
                We measure 4 key dimensions of physiological performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reaction */}
                <div className="p-4 rounded-xl bg-red-50/50 border border-red-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <h3 className="font-bold text-foreground">Reaction</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>T_stick</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Stick Reaction</span>
                    </li>
                    <li className="flex justify-between">
                      <span>T_complex</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Choice Reaction</span>
                    </li>
                    <li className="flex justify-between">
                      <span>T_simple</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Simple Reaction</span>
                    </li>
                  </ul>
                </div>

                {/* Power */}
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500" />
                    <h3 className="font-bold text-foreground">Power</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>P_win6</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Explosive (6s)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>P_win30</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Endurance (30s)</span>
                    </li>
                  </ul>
                </div>

                {/* Physique */}
                <div className="p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                    <h3 className="font-bold text-foreground">Physique</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Height/Weight</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Anthropometry</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Grip</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Strength</span>
                    </li>
                  </ul>
                </div>

                {/* Speed */}
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <h3 className="font-bold text-foreground">Speed</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>V_max</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Max Speed</span>
                    </li>
                    <li className="flex justify-between">
                      <span>VO2max</span>
                      <span className="font-mono text-xs bg-background px-1 rounded border">Aerobic Cap.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif">Phenotypic Profiling (PCA)</CardTitle>
              <CardDescription>
                How we group players using Principal Component Analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-secondary/30 rounded-xl border border-border flex items-center justify-center overflow-hidden">
                {/* Abstract PCA Visualization Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <div className="w-48 h-48 rounded-full border-2 border-primary animate-[spin_10s_linear_infinite]" />
                   <div className="w-32 h-32 rounded-full border-2 border-amber-500 absolute animate-[spin_15s_linear_infinite_reverse]" />
                </div>
                <div className="z-10 text-center p-6">
                  <p className="text-lg font-medium text-foreground mb-2">Dimensionality Reduction</p>
                  <p className="text-sm text-muted-foreground">
                    Compressing 10+ variables into 2-3 key components to identify hidden player types.
                  </p>
                  <div className="flex gap-2 justify-center mt-4">
                    <Badge variant="outline">Sniper</Badge>
                    <Badge variant="outline">Power Fwd</Badge>
                    <Badge variant="outline">Defender</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: The Logic */}
        <div className="space-y-6">
          <Card className="bg-primary text-primary-foreground border-none shadow-lg shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Info className="h-5 w-5" />
                The Fair Scale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-foreground/90 leading-relaxed">
                "We compare a 12-year-old with other 12-year-olds, not with an 18-year-old KHL defender."
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="font-bold mb-1">Why it matters:</p>
                <ul className="list-disc list-inside text-sm space-y-1 opacity-90">
                  <li>Removes acceleration bias</li>
                  <li>Evaluates true talent</li>
                  <li>Allows cross-generation comparison</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif">Z-Score Formula</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border text-center mb-4">
                <p className="font-mono text-xl font-bold text-foreground">
                  z = (x - μ) / σ
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-mono font-bold">x</span>
                  <span className="text-muted-foreground">Raw test result</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="font-mono font-bold">μ</span>
                  <span className="text-muted-foreground">Age group average</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono font-bold">σ</span>
                  <span className="text-muted-foreground">Standard deviation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
