export const statsData = [
  { id: 1, label: "Indicators", count: 1200, boxClass: "box1" },
  { id: 2, label: "Actors", count: 48, boxClass: "box2" },
  { id: 3, label: "Malwares", count: 75, boxClass: "box3" },
  { id: 4, label: "Vulnerabilities", count: 36, boxClass: "box4" },
];

export const actorBars = [
  { title: "APT28", height: "60%" },
  { title: "APT29", height: "85%" },
  { title: "APT10", height: "40%" },
  { title: "APT41", height: "70%" },
  { title: "Lazarus", height: "45%" },
  { title: "Sandworm", height: "66%" },
];

export const cveList = [
  {
    id: "CVE-2024-3094",
    title: "SSH Backdoor Vulnerability",
    severity: "Critical",
    url: "https://nvd.nist.gov/vuln/detail/CVE-2024-3094"
  },
  {
    id: "CVE-2023-23397",
    title: "Microsoft Outlook Elevation of Privilege",
    severity: "High",
    url: "https://nvd.nist.gov/vuln/detail/CVE-2023-23397"
  },
  {
    id: "CVE-2024-20362",
    title: "Cisco IOS XE Remote Code Execution",
    severity: "Critical",
    url: "https://nvd.nist.gov/vuln/detail/CVE-2024-20362"
  }
];

export const cveCategories = [
  { category: "Web Exploits", count: 23 },
  { category: "Privilege Escalation", count: 15 },
  { category: "RCE", count: 30 },
  { category: "Zero Days", count: 8 }
];
 // src/mockdata.js

export const topMalwareData = [
  { name: "BEACON", height: 90 },
  { name: "METASPLOIT", height: 85 },
  { name: "RIFLE", height: 75 },
  { name: "STEALC", height: 65 },
  { name: "REDLINESTEALER", height: 55 },
];

export const malwareCards = [
  {
    title: "BEACON",
    tags: ["BEACON", "Bigpipeloader", "Biopss", "Chatloader", "Cobalt"],
    description:
      "BEACON is a backdoor written in C/C++ that is part of the Cobalt Strike framework. Supported backdoor commands include shell command execution, file transfer, file execution, and file management.",
    role: "Backdoor",
  },
  {
    title: "METASPLOIT",
    tags: ["Exploit", "Framework", "Payload"],
    description:
      "Metasploit is a penetration testing framework that enables users to write, test, and execute exploit code against remote targets. It provides a consistent environment for developing and testing exploits.",
    role: "Utility",
  },
];
// src/data/mockData.js

export const topActorData = [
  { name: "APT28", height: 80 },
  { name: "Lazarus", height: 65 },
  { name: "FIN7", height: 50 },
  { name: "APT29", height: 45 },
  { name: "TA505", height: 40 },
];

export const actorCards = [
  {
    name: "APT28",
    region: "Europe",
    industries: ["Government", "Defense"],
    malware: ["X-Agent", "Zebrocy"],
    tools: ["Mimikatz"],
    description: "APT28 is a Russian cyber espionage group believed to be associated with the GRU...",
  },
  {
    name: "Lazarus Group",
    region: "Asia",
    industries: ["Finance", "Healthcare"],
    malware: ["WannaCry", "Brambul"],
    tools: ["Empire"],
    description: "Lazarus is a North Korean group known for its wide range of financial and political attacks...",
  },
];


