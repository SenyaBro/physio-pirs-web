import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const profiles = {
  sniper: {
    name: "Sniper / Tech",
    role: "Creative Attack",
    desc: "High reaction speed, precise stick handling, and game reading. The finisher.",
    formula: "0.35·Reaction + 0.25·Stick + 0.20·Explosion + 0.20·Reading",
    image: "/images/profile-sniper.jpg",
    stats: [
      { subject: 'Reaction', A: 95, fullMark: 100 },
      { subject: 'Stick', A: 90, fullMark: 100 },
      { subject: 'Explosion', A: 75, fullMark: 100 },
      { subject: 'Reading', A: 85, fullMark: 100 },
      { subject: 'Strength', A: 60, fullMark: 100 },
      { subject: 'Endurance', A: 70, fullMark: 100 },
    ]
  },
  power: {
    name: "Power Forward",
    role: "Physical Dominance",
    desc: "Combines size, strength, and speed to control the ice and win battles.",
    formula: "0.30·Weight + 0.25·Endurance + 0.25·Speed + 0.20·Strength",
    image: "/images/profile-power.jpg",
    stats: [
      { subject: 'Reaction', A: 70, fullMark: 100 },
      { subject: 'Stick', A: 75, fullMark: 100 },
      { subject: 'Explosion', A: 90, fullMark: 100 },
      { subject: 'Reading', A: 70, fullMark: 100 },
      { subject: 'Strength', A: 95, fullMark: 100 },
      { subject: 'Endurance', A: 90, fullMark: 100 },
    ]
  },
  goalie: {
    name: "Goalie",
    role: "The Wall",
    desc: "Evaluated on a completely separate coordinate system. Reaction is king.",
    formula: "0.35·Simple_Rxn + 0.30·Power_Win6 + 0.25·Complex_Rxn + 0.10·VO2",
    image: "/images/profile-goalie.jpg",
    stats: [
      { subject: 'Simple Rxn', A: 98, fullMark: 100 },
      { subject: 'Power (Lat)', A: 90, fullMark: 100 },
      { subject: 'Complex Rxn', A: 85, fullMark: 100 },
      { subject: 'VO2 Max', A: 75, fullMark: 100 },
      { subject: 'Flexibility', A: 90, fullMark: 100 },
      { subject: 'Focus', A: 95, fullMark: 100 },
    ]
  }
};

export default function Profiles() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold font-serif text-foreground">Player Profiles</h1>
        <p className="text-muted-foreground max-w-2xl">
          We don't look for "universal soldiers". We look for the perfect fit for specific tactical roles.
        </p>
      </div>

      <Tabs defaultValue="sniper" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mb-8">
          <TabsTrigger value="sniper">Sniper</TabsTrigger>
          <TabsTrigger value="power">Power Fwd</TabsTrigger>
          <TabsTrigger value="goalie">Goalie</TabsTrigger>
        </TabsList>

        {Object.entries(profiles).map(([key, profile]) => (
          <TabsContent key={key} value={key} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Visual & Stats */}
              <div className="lg:col-span-5 space-y-6">
                <Card className="overflow-hidden border-border/60 shadow-sm">
                  <div className="aspect-square relative bg-secondary/20 p-8 flex items-center justify-center">
                     <img 
                       src={profile.image} 
                       alt={profile.name}
                       className="w-full h-full object-contain drop-shadow-xl"
                     />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-serif text-2xl">{profile.name}</CardTitle>
                        <CardDescription className="text-base mt-1">{profile.role}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                        Elite Tier
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {profile.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Data & Formula */}
              <div className="lg:col-span-7 space-y-6">
                <Card className="border-border/60 shadow-sm h-full">
                  <CardHeader>
                    <CardTitle className="font-serif">Profile Fingerprint</CardTitle>
                    <CardDescription>Target physiological metrics for this role</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full mb-8">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={profile.stats}>
                          <PolarGrid stroke="var(--border)" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }} />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                          <Radar
                            name={profile.name}
                            dataKey="A"
                            stroke="var(--primary)"
                            strokeWidth={3}
                            fill="var(--primary)"
                            fillOpacity={0.2}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-foreground uppercase tracking-wide">Role Formula</h4>
                      <div className="p-4 bg-secondary/50 rounded-lg border border-border font-mono text-sm text-foreground break-all">
                        {profile.formula}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
