export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#career", label: "Career" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  { tag: "WEB", title: "Web Applications", desc: "Custom web apps designed around how your team actually operates, not stretched to fit a generic template." },
  { tag: "SITE", title: "Website Design & Development", desc: "Marketing sites, giving/CMS platforms, and portfolio sites, designed and built from scratch and styled to match your brand." },
  { tag: "DATA", title: "Database Design", desc: "Schemas and reporting structures that stay accurate as your data grows, not just on the day they ship." },
  { tag: "AUTO", title: "Automation", desc: "Connect the tools you already use so status updates, handoffs, and notifications happen without anyone having to remember to do them." },
  { tag: "CRM", title: "CRM Systems", desc: "Dynamics 365, Dataverse, and legacy CRM platforms configured, reported on, and kept usable for the people working in them every day." },
  { tag: "BI", title: "Data Analytics & Visualization", desc: "Turn scattered spreadsheets and CRM exports into dashboards, charts, and reports your team actually checks, not ones that go stale after the kickoff meeting." },
];

export const PROCESS = [
  { n: "01", title: "Discovery", desc: "Understand the actual problem, and who has to live with the solution every day." },
  { n: "02", title: "Design", desc: "Map the data, the flows, and the interface before a line of production code gets written." },
  { n: "03", title: "Build", desc: "Iterative development, with working versions you can react to early and often." },
  { n: "04", title: "QA", desc: "Tested against real scenarios your team runs into, not just the happy path." },
  { n: "05", title: "Launch & Handoff", desc: "Deployed, documented, and set up so your team can run it without me in the room." },
];

export const INDEPENDENT_BUILDS = [
  { title: "Quest Tracker", status: "BUILT", variant: "kanban", category: "Web App", desc: "A gamified job-search tracker: scans postings by keyword, tracks applications through every stage, and shows funnel and response-rate analytics.", tags: ["Next.js", "Adzuna API", "Dashboard"] },
  { title: "CodeDash", status: "BUILT", variant: "dashboard", category: "Tool", link: "https://codedash-demo.streamlit.app/", desc: "A usage dashboard that tracks Claude Code and chat token consumption across projects, broken down by sub-agent, so you can see exactly where a week's usage went.", tags: ["Python", "Streamlit", "PostgreSQL"] },
  { title: "Waitlist Scheduler", status: "BUILT", variant: "calendar", category: "Web App", client: "Behavioral Health Specialist", link: "https://waitlist-scheduler.vercel.app/", desc: "A client scheduling waitlist app with board and calendar views. Tracks availability and session cadence, and flags when a client's longer-interval booking window opens.", tags: ["Next.js", "Supabase"] },
  { title: "Online Giving Tracker", status: "BUILT", variant: "table", category: "Web App", desc: "A campaign tracker for online giving site setups. Replaces a scattered ticketing system with a clear view of every campaign's status, type, and assignee.", tags: ["Campaign Tracking"] },
  { title: "Force Camp", status: "BUILT", variant: "game", category: "Game", client: "Salesforce Users", link: "https://forcecamp.pages.dev/", desc: "Gamified prep for the Salesforce Certified Platform Administrator exam: a Jeopardy-style board, rapid fire rounds, flashcards, survival mode, boss rush, daily challenges, and a full blueprint-weighted mock exam, across 152 scenario questions.", tags: ["React", "Vite", "Convex"] },
  { title: "S & G General Contractors", status: "BUILT", variant: "marketing", category: "Website", client: "Commercial & Residential Contractor", link: "https://sggeneralcontractors.netlify.app/", desc: "A marketing and lead-generation site for a Houston-based commercial and residential general contractor, built to showcase services and past work and give new leads a clear path to reach out.", tags: ["Website", "Netlify"] },
];

export const CLIENT_WORK = [
  { title: "Web Applications", desc: "Shipped full applications end to end, not just prototypes: a job-search tracker with live application-funnel analytics and API-driven job matching, and a client scheduling app with board and calendar views, delivered for a behavioral health practice tracking availability and session cadence.", tags: ["Next.js", "Supabase", "API Integration"] },
  { title: "Website Design & Development", desc: "Designed and built marketing sites from scratch, then kept them working everywhere clients' customers actually see them: a lead-generation site for a Houston general contractor, and ongoing front-end work across five CMS-based giving platforms, including layout fixes, form validation, and cross-client email rendering.", tags: ["HTML/CSS/JS", "CMS", "Cross-Browser Fixes"] },
  { title: "Automation & Workflows", desc: "Replaced manual, easy-to-miss processes with flows that run themselves: a workflow that reads campaign dates off a CRM record and auto-generates a six-task outreach sequence with correct due dates, and a flow that stamps batch IDs across a production application automatically.", tags: ["Power Automate", "PowerApps", "Process Design"] },
  { title: "CRM Systems", desc: "Configured, queried, and kept usable Dynamics 365/Dataverse CRMs for nonprofit networks: built contact and multi-year membership retention reports by working around platform limitations the built-in report tools couldn't get past.", tags: ["Dynamics 365", "Dataverse", "SQL4CDS"] },
];

export const CAREER = [
  { title: "Software Engineer", org: "Boeing · NASA" },
  { title: "Sr. Business Intelligence Engineer", org: "American Cancer Society · United Way" },
  { title: "Solutions Architect", org: "ARC 47 Solutions" },
];
