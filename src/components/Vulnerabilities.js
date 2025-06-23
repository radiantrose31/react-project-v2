 import React from "react";


export default function VulnerabilitiesPage() {
  return (
    <div className="vulnerabilities-page main-content">
      <h2>Top CVEs by Severity</h2>
      <ul>
        <li><a href="https://nvd.nist.gov/vuln/detail/CVE-2024-3094" target="_blank">CVE-2024-3094 - SSH Backdoor</a> (Critical)</li>
        <li><a href="https://nvd.nist.gov/vuln/detail/CVE-2023-23397" target="_blank">CVE-2023-23397 - Microsoft Outlook Privilege Escalation</a> (High)</li>
        <li><a href="https://nvd.nist.gov/vuln/detail/CVE-2024-20362" target="_blank">CVE-2024-20362 - Cisco IOS XE Remote Code Execution</a> (Critical)</li>
      </ul>

      <h3>CVEs by Category</h3>
      <ul>
        <li>Web Exploits: 23</li>
        <li>Privilege Escalation: 15</li>
        <li>RCE: 30</li>
        <li>Zero Days: 8</li>
      </ul>

      <div style={{ marginTop: "20px" }}>
        <h3>CVSS Trend Chart</h3>
        <img src="https://nvd.nist.gov/Content/images/nvd_banner_graphic.png" alt="CVSS Trends" width="100%" />
      </div>
    </div>
  );
}

