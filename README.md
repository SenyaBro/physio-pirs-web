# Physio-PIRS Academy Analytics System

A comprehensive physiological monitoring system designed to transform raw test data into competitive advantage for hockey academies. This project combines scientific rigor with modern web technology to provide actionable insights for coaching staff.

## 🎯 Overview

**Physio-PIRS** (Physiological Performance Identification and Rating System) is an innovative analytics platform that:

- **Profiles Players** using Z-Score normalization across 4 key physiological dimensions (Reaction, Power, Physique, Speed)
- **Identifies Role-Specific Talent** through Principal Component Analysis (Sniper, Power Forward, Goalie)
- **Predicts Game Outcomes** using the Duel Model (Sniper vs. Goalie probability calculator)
- **Guides Strategic Decisions** with a phased implementation roadmap

## 📊 Features

### Dashboard
- Overview of system metrics (3,000+ historical data points, 4 player profiles, 85% prediction accuracy)
- Performance projection charts
- Quick navigation to all modules

### Methodology
- Explanation of Z-Score normalization and the "Fair Scale" principle
- Visualization of 4 physiological dimensions
- Phenotypic profiling using PCA

### Player Profiles
- Interactive radar charts for Sniper, Power Forward, and Goalie roles
- Role-specific formulas and target metrics
- Visual fingerprints of each archetype

### Duel Model
- Interactive simulator to adjust player ratings
- Real-time probability calculation (Sigmoid curve)
- Visual representation of the tipping point in skill superiority

### Roadmap
- Phased implementation timeline (3-6 months pilot, 6-18 months full system)
- Deliverables and milestones
- Path to scientific recognition

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 22+ (for local development)
- pnpm package manager

### Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/SenyaBro/physio-pirs-web.git
cd physio-pirs-web

# Build and run with Docker Compose
docker-compose up --build

# Access the application
# Client: http://localhost:8080
# Server: http://localhost:3000
```

### Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
physio-pirs-web/
├── client/                    # React frontend application
│   ├── src/
│   │   ├── pages/            # Page components (Dashboard, Methodology, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React contexts (Theme, etc.)
│   │   ├── lib/              # Utility functions
│   │   ├── App.tsx           # Main app component with routing
│   │   ├── index.css         # Global styles and theme variables
│   │   └── main.tsx          # React entry point
│   ├── public/               # Static assets (images, etc.)
│   ├── nginx.conf            # Nginx configuration for production
│   ├── Dockerfile            # Docker build configuration
│   └── index.html            # HTML template
├── server/                    # Express.js backend (placeholder for future APIs)
│   └── index.ts              # Server entry point
├── Dockerfile.client         # Multi-stage build for client
├── Dockerfile.server         # Multi-stage build for server
├── docker-compose.yml        # Docker Compose orchestration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🛠 Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Recharts** - Data visualization
- **Wouter** - Routing

### Backend
- **Express.js** - Web server
- **Node.js** - Runtime

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Orchestration
- **Nginx** - Reverse proxy

## 📝 Configuration

### Environment Variables

Create a `.env` file in the root directory (optional for local development):

```env
NODE_ENV=production
PORT=3000
VITE_APP_TITLE=Physio-PIRS Academy
VITE_APP_LOGO=/logo.png
```

### Docker Compose

The `docker-compose.yml` file defines two services:

- **client**: Nginx server serving the React app (port 8080)
- **server**: Node.js Express server (port 3000)

Both services communicate via the `app-network` bridge network.

## 🎨 Design System

The application follows "The Strategist's Tablet" design philosophy:

- **Colors**: Red (#C44848) and Gold (#D6AE7E) for brand identity
- **Typography**: Playfair Display (headings), Inter (body)
- **Layout**: Executive-friendly dashboard with sidebar navigation
- **Interactions**: Smooth transitions and interactive charts

## 📊 Data Visualization

All charts use **Recharts** for interactive data visualization:

- Area charts for performance trends
- Radar charts for player profiles
- Line charts for probability curves
- Responsive design for all screen sizes

## 🔄 API Communication

The client proxies API requests to the server through Nginx:

```
Client (Port 8080)
    ↓
Nginx (Reverse Proxy)
    ↓
Server (Port 3000)
```

Configure API endpoints in `client/nginx.conf`:

```nginx
location /api {
    proxy_pass http://server:3000;
    ...
}
```

## 🚢 Deployment

### Using Docker Compose

```bash
docker-compose up -d
```

### Using Kubernetes (Optional)

Convert Docker images to Kubernetes manifests using tools like:
- Kompose
- Helm
- Kustomize

### Using Cloud Platforms

- **AWS ECS**: Push images to ECR, create ECS tasks
- **Google Cloud Run**: Deploy containerized apps
- **Azure Container Instances**: Run containers on Azure
- **DigitalOcean App Platform**: Deploy from GitHub

## 📈 Roadmap

- **Phase 1 (Now)**: Data access and role integration
- **Phase 2 (3-6 months)**: MVP pilot with unified database and initial player profiles
- **Phase 3 (6-18 months)**: Full system with coach dashboard, advanced analytics, and scientific publications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💼 Contact & Support

For questions or support regarding the Physio-PIRS system, please contact the development team or open an issue on GitHub.

---

**Built with ❤️ for hockey academies worldwide.**
