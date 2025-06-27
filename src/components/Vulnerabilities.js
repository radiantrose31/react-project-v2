import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const topCVEs = [
  {
    id: "CVE-2024-3094",
    title: "SSH Backdoor",
    severity: "Critical",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2024-3094",
  },
  {
    id: "CVE-2023-23397",
    title: "Outlook Privilege Escalation",
    severity: "High",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2023-23397",
  },
  {
    id: "CVE-2024-20362",
    title: "Cisco IOS XE RCE",
    severity: "Critical",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2024-20362",
  },
];

const cveCategories = {
  "Web Exploits": 23,
  "Privilege Escalation": 15,
  "RCE": 30,
  "Zero Days": 8,
};

const severityData = {
  labels: ["Critical", "High", "Medium", "Low"],
  datasets: [
    {
      data: [12, 24, 30, 10],
      backgroundColor: ["#f87171", "#fbbf24", "#60a5fa", "#34d399"],
      borderWidth: 1,
    },
  ],
};

const categoryBarData = {
  labels: Object.keys(cveCategories),
  datasets: [
    {
      label: "CVEs",
      data: Object.values(cveCategories),
      backgroundColor: ["#6366f1", "#06b6d4", "#f97316", "#10b981"],
      borderRadius: 8,
    },
  ],
};

export default function VulnerabilitiesPage() {
  return (
    <div className="vulnerabilities-page main-content">
      <div className="vuln-header">
        <h2>Top CVEs by Severity</h2>
      </div>

      <div className="cve-cards-container">
        {topCVEs.map((cve) => (
          <div key={cve.id} className={`cve-card ${cve.severity.toLowerCase()}`}>
            <a href={cve.link} target="_blank" rel="noopener noreferrer">
              <h4>{cve.id}</h4>
            </a>
            <p>{cve.title}</p>
            <span className="severity">{cve.severity}</span>
          </div>
        ))}
      </div>

      <div className="chart-section-horizontal">
        <div className="chart-box">
          <h3>Severity Distribution</h3>
          <div className="chart-wrapper pie-wrapper">
            <Pie data={severityData} />
          </div>
        </div>

        <div className="chart-box">
          <h3>CVEs by Category</h3>
          <div className="chart-wrapper">
            <Bar data={categoryBarData} />
          </div>
        </div>
      </div>
    </div>
  );
}
