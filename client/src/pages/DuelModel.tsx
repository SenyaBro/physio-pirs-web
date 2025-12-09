import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts";

export default function DuelModel() {
  const [sniperRating, setSniperRating] = useState([1600]);
  const [goalieRating, setGoalieRating] = useState([1500]);
  
  const rSniper = sniperRating[0];
  const rGoalie = goalieRating[0];
  const diff = rSniper - rGoalie;
  const scale = 400;
  
  // Calculate probability: 1 / (1 + 10^(-diff/400))
  // Using Math.exp for the sigmoid curve visualization logic from slides: 1 / (1 + e^(-diff/scale))
  // Let's stick to the standard Elo logistic curve formula for accuracy: P = 1 / (1 + 10^(-diff/400))
  const probability = 1 / (1 + Math.pow(10, -diff / scale));
  const probPercent = (probability * 100).toFixed(1);

  // Generate curve data
  const data = [];
  for (let d = -800; d <= 800; d += 50) {
    const p = 1 / (1 + Math.pow(10, -d / scale));
    data.push({
      diff: d,
      prob: (p * 100).toFixed(1),
      current: d === Math.round(diff / 50) * 50 // Mark closest point
    });
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold font-serif text-foreground">The Duel Model</h1>
        <p className="text-muted-foreground max-w-2xl">
          Predicting the outcome of a "Sniper vs Goalie" situation based on physiological ratings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Simulator */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-border/60 shadow-sm bg-card">
            <CardHeader>
              <CardTitle className="font-serif">Duel Simulator</CardTitle>
              <CardDescription>Adjust ratings to see the probability shift.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Sniper Rating (R_Sn)</label>
                  <Badge variant="outline" className="font-mono text-primary border-primary/20 bg-primary/5">
                    {rSniper}
                  </Badge>
                </div>
                <Slider 
                  value={sniperRating} 
                  onValueChange={setSniperRating} 
                  min={1000} 
                  max={2000} 
                  step={10}
                  className="py-2"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Goalie Rating (R_G)</label>
                  <Badge variant="outline" className="font-mono text-amber-600 border-amber-200 bg-amber-50">
                    {rGoalie}
                  </Badge>
                </div>
                <Slider 
                  value={goalieRating} 
                  onValueChange={setGoalieRating} 
                  min={1000} 
                  max={2000} 
                  step={10}
                  className="py-2"
                />
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Goal Probability</p>
                  <div className="text-5xl font-bold font-serif text-foreground">
                    {probPercent}%
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Rating Difference: <span className={diff > 0 ? "text-green-600" : "text-red-600"}>{diff > 0 ? "+" : ""}{diff}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-none shadow-lg shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Key Insight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                This model bridges the gap between <strong>physiology</strong> and <strong>game events</strong>. 
                We can predict the outcome of a shootout or breakaway before the players even step on the ice.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Visualization */}
        <div className="lg:col-span-8">
          <Card className="border-border/60 shadow-sm h-full">
            <CardHeader>
              <CardTitle className="font-serif">Probability Curve (Sigmoid)</CardTitle>
              <CardDescription>
                Visualizing the "tipping point" where skill superiority leads to goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis 
                      dataKey="diff" 
                      type="number" 
                      domain={[-800, 800]} 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                      label={{ value: 'Rating Difference (Sniper - Goalie)', position: 'bottom', offset: 0, fill: 'var(--muted-foreground)', fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[0, 100]} 
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                      label={{ value: 'Goal Probability (%)', angle: -90, position: 'insideLeft', fill: 'var(--muted-foreground)', fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--popover)', 
                        borderColor: 'var(--border)',
                        borderRadius: 'var(--radius)',
                        color: 'var(--foreground)'
                      }}
                      labelFormatter={(label) => `Diff: ${label}`}
                    />
                    <ReferenceLine x={diff} stroke="var(--foreground)" strokeDasharray="3 3" label="Current" />
                    <ReferenceLine y={50} stroke="var(--muted-foreground)" strokeDasharray="3 3" />
                    <Line 
                      type="monotone" 
                      dataKey="prob" 
                      stroke="var(--primary)" 
                      strokeWidth={3} 
                      dot={false} 
                      activeDot={{ r: 6, fill: 'var(--primary)' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
