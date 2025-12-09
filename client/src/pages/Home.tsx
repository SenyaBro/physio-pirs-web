import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Users, Target, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const mockPerformanceData = [
  { month: "Sep", score: 65 },
  { month: "Oct", score: 68 },
  { month: "Nov", score: 74 },
  { month: "Dec", score: 72 },
  { month: "Jan", score: 79 },
  { month: "Feb", score: 85 },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        
        <div className="relative z-20 p-8 md:p-12 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Pilot Proposal Ready
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-serif text-foreground">
            Physio-PIRS Academy <br/>
            <span className="text-primary">Analytics System</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            A comprehensive physiological monitoring system designed to transform raw data into competitive advantage. 
            From individual profiling to team modeling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/methodology">
              <Button size="lg" className="font-semibold shadow-lg shadow-primary/20">
                Explore Methodology <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/roadmap">
              <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                View Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: "Total Tests", 
            value: "3,000+", 
            desc: "Historical data points", 
            icon: Activity,
            color: "text-blue-600",
            bg: "bg-blue-50"
          },
          { 
            title: "Player Profiles", 
            value: "4", 
            desc: "Distinct role models", 
            icon: Users,
            color: "text-primary",
            bg: "bg-red-50"
          },
          { 
            title: "Prediction Accuracy", 
            value: "85%", 
            desc: "Duel outcome model", 
            icon: Target,
            color: "text-amber-600",
            bg: "bg-amber-50"
          },
          { 
            title: "Implementation", 
            value: "3-6 Mo", 
            desc: "Pilot phase timeline", 
            icon: TrendingUp,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
          },
        ].map((stat, i) => (
          <Card key={i} className="border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-serif">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif">System Impact Projection</CardTitle>
            <CardDescription>Estimated performance improvement over pilot season</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockPerformanceData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--popover)', 
                      borderColor: 'var(--border)',
                      borderRadius: 'var(--radius)',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="var(--primary)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Insights */}
        <Card className="border-border/60 shadow-sm bg-sidebar/50">
          <CardHeader>
            <CardTitle className="font-serif">Core Modules</CardTitle>
            <CardDescription>Explore the system components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Methodology", desc: "Z-Score Normalization & Variables", href: "/methodology" },
              { title: "Player Profiles", desc: "Sniper, Power Forward, Defender", href: "/profiles" },
              { title: "Duel Model", desc: "Goal Probability Calculator", href: "/duel-model" },
            ].map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
