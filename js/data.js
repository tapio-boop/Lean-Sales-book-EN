// Metosin Agentic Sales System - Data Model
// Q1 2026 Sales Plan Data

const MetosinData = {
    // Company Info
    company: {
        name: "Metosin Oy",
        quarter: "Q1 2026",
        dateRange: "January 1 - March 31, 2026"
    },

    // Strategic Intent
    strategicIntent: [
        "Open new, high-level strategic conversations with CTO / Director / VP / SVP stakeholders",
        "Deepen and reposition key accounts (especially WPP and Telecom)",
        "Make Metosin's way of working meaningfully AI-enabled",
        "Ensure our external narrative (website) reflects the new strategy"
    ],

    // OKRs
    okrs: [
        {
            id: "okr-1",
            number: 1,
            objective: "Open and Validate Strategic MAS Conversations",
            intent: "Establish Metosin as a trusted CTO-level strategic discussion partner around MAS thinking.",
            keyResults: [
                {
                    id: "kr-1-1",
                    description: "10-15 MAS discussions with CTO / Director / VP / SVP-level stakeholders",
                    target: 15,
                    current: 3,
                    unit: "discussions"
                },
                {
                    id: "kr-1-2",
                    description: "2-3 Telecom CTO Office discussions",
                    target: 3,
                    current: 1,
                    unit: "discussions"
                },
                {
                    id: "kr-1-3",
                    description: "2-3 WPP-level discussions",
                    target: 3,
                    current: 0,
                    unit: "discussions"
                },
                {
                    id: "kr-1-4",
                    description: "Ardoq CTO discussion completed",
                    target: 1,
                    current: 0,
                    unit: "discussions"
                },
                {
                    id: "kr-1-5",
                    description: "Cloudpermit CTO discussion completed",
                    target: 1,
                    current: 0,
                    unit: "discussions"
                },
                {
                    id: "kr-1-6",
                    description: "3-5 recurring themes or tensions documented",
                    target: 5,
                    current: 1,
                    unit: "themes"
                },
                {
                    id: "kr-1-7",
                    description: "At least 2 concrete follow-up paths identified",
                    target: 2,
                    current: 0,
                    unit: "paths"
                }
            ]
        },
        {
            id: "okr-2",
            number: 2,
            objective: "Build a Systematic Telecom Growth Pipeline (Finland & Sweden)",
            intent: "Create a repeatable model for opening and growing Telecom accounts.",
            keyResults: [
                {
                    id: "kr-2-1",
                    description: "Sweden: ≥12 meetings booked by Åsa at Director/VP/SVP level",
                    target: 12,
                    current: 4,
                    unit: "meetings"
                },
                {
                    id: "kr-2-2",
                    description: "Sweden: 2 promising accounts identified for 1H 2026",
                    target: 2,
                    current: 1,
                    unit: "accounts"
                },
                {
                    id: "kr-2-3",
                    description: "Finland: Growth hypothesis defined for Elisa",
                    target: 1,
                    current: 1,
                    unit: "hypothesis"
                },
                {
                    id: "kr-2-4",
                    description: "Finland: Growth hypothesis defined for DNA",
                    target: 1,
                    current: 0,
                    unit: "hypothesis"
                },
                {
                    id: "kr-2-5",
                    description: "Finland: 2-3 meaningful meetings per account (Elisa)",
                    target: 3,
                    current: 2,
                    unit: "meetings"
                },
                {
                    id: "kr-2-6",
                    description: "Finland: 2-3 meaningful meetings per account (DNA)",
                    target: 3,
                    current: 1,
                    unit: "meetings"
                },
                {
                    id: "kr-2-7",
                    description: "Shared Telecom positioning documented and in use",
                    target: 1,
                    current: 0,
                    unit: "document"
                }
            ]
        },
        {
            id: "okr-3",
            number: 3,
            objective: "Reposition the WPP Account at Executive Level",
            intent: "Move from operational delivery to strategic Engineering Growth & AI Transformation partnership.",
            keyResults: [
                {
                    id: "kr-3-1",
                    description: "2025 WPP account retrospective completed in January",
                    target: 1,
                    current: 0,
                    unit: "retrospective"
                },
                {
                    id: "kr-3-2",
                    description: "5-7 key learnings documented",
                    target: 7,
                    current: 0,
                    unit: "learnings"
                },
                {
                    id: "kr-3-3",
                    description: "3 concrete changes to account execution documented",
                    target: 3,
                    current: 0,
                    unit: "changes"
                },
                {
                    id: "kr-3-4",
                    description: "Updated executive-level WPP value narrative",
                    target: 1,
                    current: 0,
                    unit: "narrative"
                },
                {
                    id: "kr-3-5",
                    description: "At least 2 discussions at higher organizational level within WPP",
                    target: 2,
                    current: 0,
                    unit: "discussions"
                }
            ]
        },
        {
            id: "okr-4",
            number: 4,
            objective: "Scale the 'AI in Sales' Theme to CIO Level",
            intent: "Turn a proven theme into a repeatable growth engine and expand it into CIO Offices.",
            keyResults: [
                {
                    id: "kr-4-1",
                    description: "≥30 meetings held in Q1 (10/month)",
                    target: 30,
                    current: 8,
                    unit: "meetings"
                },
                {
                    id: "kr-4-2",
                    description: "CIO Office discussions initiated in at least 10 companies",
                    target: 10,
                    current: 2,
                    unit: "companies"
                },
                {
                    id: "kr-4-3",
                    description: "≥5 concrete sales opportunities identified",
                    target: 5,
                    current: 1,
                    unit: "opportunities"
                },
                {
                    id: "kr-4-4",
                    description: "Arttu operating as primary owner of the meeting flow",
                    target: 1,
                    current: 1,
                    unit: "status"
                },
                {
                    id: "kr-4-5",
                    description: "Trainer's House process running without bottlenecks",
                    target: 1,
                    current: 0,
                    unit: "status"
                }
            ]
        },
        {
            id: "okr-5",
            number: 5,
            objective: "Make Metosin's Own Operating Model AI-Enabled",
            intent: "Be a credible AI partner by operating with an AI-assisted model ourselves.",
            keyResults: [
                {
                    id: "kr-5-1",
                    description: "1-2 AI agents actively used for meeting coordination, preparation, notes and follow-ups",
                    target: 2,
                    current: 0,
                    unit: "agents"
                },
                {
                    id: "kr-5-2",
                    description: "≥50% of meeting-related routine work automated",
                    target: 50,
                    current: 15,
                    unit: "percent"
                },
                {
                    id: "kr-5-3",
                    description: "Q1 learnings and signals synthesized and documented",
                    target: 1,
                    current: 0,
                    unit: "document"
                },
                {
                    id: "kr-5-4",
                    description: "Light website update delivered aligned with new strategy",
                    target: 1,
                    current: 0,
                    unit: "update"
                }
            ]
        }
    ],

    // Strategic Initiatives
    initiatives: [
        {
            id: "init-1",
            name: "Telecom: Sweden - New Customer Opening",
            icon: "fas fa-globe-europe",
            color: "blue",
            owner: "Åsa",
            support: ["Janne", "Mikko", "Mike", "Tapio"],
            target: "Open 2 new Telecom customers in Sweden during 1H 2026",
            q1Focus: "Opening and validation phase - ~12 meetings",
            keyOutcomes: [
                "~12 meetings in Sweden",
                "2-3 strong customer-specific hypotheses",
                "Clear pipeline for 1H 2026"
            ],
            status: "active",
            progress: 33
        },
        {
            id: "init-2",
            name: "Telecom: Finland - Focused Account Growth",
            icon: "fas fa-signal",
            color: "green",
            owner: "Mikko (Elisa), Janne (DNA)",
            support: ["Tapio"],
            target: "Account growth on CTO/technology axis",
            q1Focus: "One growth hypothesis per account, 2-3 meaningful meetings",
            keyOutcomes: [
                "Growth hypothesis per account",
                "Deeper foothold at DNA",
                "New development angles identified"
            ],
            status: "active",
            progress: 45
        },
        {
            id: "init-3",
            name: "WPP - Moving Up & Repositioning",
            icon: "fas fa-arrow-up",
            color: "purple",
            owner: "Tapio",
            support: ["Key Metosin contributors"],
            target: "Gain access higher up in organization, reposition Metosin",
            q1Focus: "January: 2025 Account Management Retrospective",
            keyOutcomes: [
                "5-7 clear learnings from 2025",
                "3 concrete changes to WPP execution",
                "Updated executive-level value narrative"
            ],
            status: "active",
            progress: 20
        },
        {
            id: "init-4",
            name: "MAS Theme - Strategic CTO Conversations",
            icon: "fas fa-comments",
            color: "yellow",
            owner: "Team",
            support: [],
            target: "10-15 discussions focused on MAS theme",
            q1Focus: "Modern / Modular / AI-Supported Systems discussions",
            keyOutcomes: [
                "Shared patterns and tensions identified",
                "2-3 concrete follow-up paths",
                "Customer work or partnership opportunities"
            ],
            status: "active",
            progress: 25
        },
        {
            id: "init-5",
            name: "AI-Enabled Operating Model - Professional Services",
            icon: "fas fa-building",
            color: "purple",
            owner: "Team",
            support: [],
            target: "10 conversations with consulting/law/communications firms",
            q1Focus: "AI impact on roles, pricing, skills, scalability",
            keyOutcomes: [
                "10 conversations completed",
                "Clear view on credible value creation areas"
            ],
            status: "planned",
            progress: 10
        },
        {
            id: "init-6",
            name: "AI in Sales - Scalable Meeting Flow",
            icon: "fas fa-chart-line",
            color: "green",
            owner: "Arttu",
            support: ["Tapio", "Trainer's House"],
            target: "10 meetings/month, expansion into CIO Office",
            q1Focus: "Large B2B enterprises, HQ in Finland",
            keyOutcomes: [
                "~30 meetings in Q1",
                "CIO Office discussions initiated",
                "Process running smoothly"
            ],
            status: "active",
            progress: 27
        },
        {
            id: "init-7",
            name: "AI Agents & Automation",
            icon: "fas fa-robot",
            color: "blue",
            owner: "Team",
            support: [],
            target: "1-2 AI agents in real daily use",
            q1Focus: "Meeting booking, calendar, notes, follow-ups automation",
            keyOutcomes: [
                "Practical AI agents deployed",
                "Routine work automated",
                "Focus on value, not perfection"
            ],
            status: "in_progress",
            progress: 15
        },
        {
            id: "init-8",
            name: "Website Update Sprint",
            icon: "fas fa-globe",
            color: "yellow",
            owner: "Team",
            support: [],
            target: "Update structure and content for new strategy",
            q1Focus: "Engineering Growth Partner, AI Transformation, MAS thinking",
            keyOutcomes: [
                "Clear before/after",
                "Website supports conversations",
                "No brand or platform changes"
            ],
            status: "planned",
            progress: 0
        }
    ],

    // Team Members
    team: [
        {
            id: "team-1",
            name: "Tapio",
            initials: "TA",
            role: "Strategic Lead",
            color: "#6366f1",
            accounts: ["WPP"],
            support: ["Elisa", "DNA", "Sweden Telecom"],
            meetingsThisMonth: 6,
            dealsInPipeline: 2
        },
        {
            id: "team-2",
            name: "Åsa",
            initials: "ÅS",
            role: "Sweden Market Lead",
            color: "#3b82f6",
            accounts: ["Sweden Telecom"],
            support: [],
            meetingsThisMonth: 4,
            dealsInPipeline: 1
        },
        {
            id: "team-3",
            name: "Mikko",
            initials: "MI",
            role: "Account Manager - Elisa",
            color: "#10b981",
            accounts: ["Elisa"],
            support: [],
            meetingsThisMonth: 3,
            dealsInPipeline: 1
        },
        {
            id: "team-4",
            name: "Janne",
            initials: "JA",
            role: "Account Manager - DNA",
            color: "#f59e0b",
            accounts: ["DNA"],
            support: ["Sweden Telecom"],
            meetingsThisMonth: 2,
            dealsInPipeline: 1
        },
        {
            id: "team-5",
            name: "Arttu",
            initials: "AR",
            role: "AI in Sales Lead",
            color: "#8b5cf6",
            accounts: [],
            support: [],
            meetingsThisMonth: 8,
            dealsInPipeline: 3
        },
        {
            id: "team-6",
            name: "Mike",
            initials: "MK",
            role: "Technical Lead",
            color: "#ef4444",
            accounts: [],
            support: ["Sweden Telecom", "MAS Theme"],
            meetingsThisMonth: 2,
            dealsInPipeline: 0
        }
    ],

    // Key Accounts
    accounts: [
        {
            id: "acc-1",
            name: "WPP",
            type: "Strategic",
            owner: "Tapio",
            status: "repositioning",
            industry: "Marketing/Advertising",
            country: "Global",
            positioning: ["Engineering Growth Partner", "AI Transformation Partner", "Google Partner"],
            q1Focus: "Move from operational delivery to strategic partnership",
            hypothesis: "WPP needs a partner who can help them modernize their tech infrastructure while scaling AI capabilities",
            meetingsQ1: 0,
            targetMeetings: 2,
            nextAction: "Complete 2025 retrospective",
            nextActionDate: "2026-01-31"
        },
        {
            id: "acc-2",
            name: "Elisa",
            type: "Strategic",
            owner: "Mikko",
            status: "growth",
            industry: "Telecom",
            country: "Finland",
            positioning: ["CTO Office Partner", "Tech Modernization"],
            q1Focus: "Account growth on CTO/technology axis",
            hypothesis: "Elisa's digital transformation creates opportunities in platform modernization",
            meetingsQ1: 2,
            targetMeetings: 3,
            nextAction: "Follow up on growth hypothesis",
            nextActionDate: "2026-01-20"
        },
        {
            id: "acc-3",
            name: "DNA",
            type: "Strategic",
            owner: "Janne",
            status: "development",
            industry: "Telecom",
            country: "Finland",
            positioning: ["Development Partner"],
            q1Focus: "Deeper foothold and new development angles",
            hypothesis: "DNA's new CTO is open to fresh approaches in development practices",
            meetingsQ1: 1,
            targetMeetings: 3,
            nextAction: "Define growth hypothesis",
            nextActionDate: "2026-01-25"
        },
        {
            id: "acc-4",
            name: "Sweden Telecom Pipeline",
            type: "New Market",
            owner: "Åsa",
            status: "prospecting",
            industry: "Telecom",
            country: "Sweden",
            positioning: ["CTO Office", "Engineering", "Digital Platforms"],
            q1Focus: "Open 12 meetings, identify 2 promising accounts",
            hypothesis: "Swedish telecom market is underserved by strategic engineering partners",
            meetingsQ1: 4,
            targetMeetings: 12,
            nextAction: "Continue outreach - 4 meetings/month target",
            nextActionDate: "2026-01-15"
        },
        {
            id: "acc-5",
            name: "Ardoq",
            type: "Strategic Discussion",
            owner: "Team",
            status: "planned",
            industry: "SaaS",
            country: "Norway",
            positioning: ["MAS Theme Discussion"],
            q1Focus: "CTO conversation on MAS thinking",
            hypothesis: "Enterprise architecture tools company may resonate with MAS thinking",
            meetingsQ1: 0,
            targetMeetings: 1,
            nextAction: "Schedule CTO meeting",
            nextActionDate: "2026-02-15"
        },
        {
            id: "acc-6",
            name: "Cloudpermit",
            type: "Strategic Discussion",
            owner: "Team",
            status: "planned",
            industry: "GovTech",
            country: "Finland",
            positioning: ["MAS Theme Discussion"],
            q1Focus: "CTO conversation on MAS thinking",
            hypothesis: "Government tech company faces unique architecture challenges",
            meetingsQ1: 0,
            targetMeetings: 1,
            nextAction: "Schedule CTO meeting",
            nextActionDate: "2026-02-28"
        }
    ],

    // Meetings
    meetings: [
        {
            id: "meet-1",
            title: "Elisa CTO Office Intro",
            account: "Elisa",
            type: "Discovery",
            date: "2026-01-08",
            time: "10:00",
            attendees: ["Mikko", "Tapio"],
            stakeholderLevel: "VP",
            status: "completed",
            notes: "Positive reception to growth hypothesis. Follow-up scheduled.",
            followUp: "Send case studies on similar transformations"
        },
        {
            id: "meet-2",
            title: "Sweden Telecom - Company A",
            account: "Sweden Telecom Pipeline",
            type: "Prospecting",
            date: "2026-01-10",
            time: "14:00",
            attendees: ["Åsa"],
            stakeholderLevel: "Director",
            status: "completed",
            notes: "Good initial conversation. Interested in AI transformation.",
            followUp: "Schedule deeper dive session"
        },
        {
            id: "meet-3",
            title: "AI in Sales - Manufacturing Co",
            account: "AI in Sales Pipeline",
            type: "Sales",
            date: "2026-01-12",
            time: "09:00",
            attendees: ["Arttu"],
            stakeholderLevel: "Sales Director",
            status: "completed",
            notes: "Strong interest in AI-enabled sales. Budget discussion pending.",
            followUp: "Prepare proposal draft"
        },
        {
            id: "meet-4",
            title: "DNA Technical Discussion",
            account: "DNA",
            type: "Technical",
            date: "2026-01-15",
            time: "13:00",
            attendees: ["Janne"],
            stakeholderLevel: "Tech Lead",
            status: "scheduled",
            notes: "",
            followUp: ""
        },
        {
            id: "meet-5",
            title: "WPP 2025 Retrospective Planning",
            account: "WPP",
            type: "Internal",
            date: "2026-01-18",
            time: "10:00",
            attendees: ["Tapio", "Team"],
            stakeholderLevel: "Internal",
            status: "scheduled",
            notes: "",
            followUp: ""
        },
        {
            id: "meet-6",
            title: "Sweden Telecom - Company B",
            account: "Sweden Telecom Pipeline",
            type: "Prospecting",
            date: "2026-01-20",
            time: "11:00",
            attendees: ["Åsa", "Mike"],
            stakeholderLevel: "VP",
            status: "scheduled",
            notes: "",
            followUp: ""
        },
        {
            id: "meet-7",
            title: "AI in Sales - ICT Services",
            account: "AI in Sales Pipeline",
            type: "Sales",
            date: "2026-01-22",
            time: "15:00",
            attendees: ["Arttu", "Tapio"],
            stakeholderLevel: "CIO",
            status: "scheduled",
            notes: "",
            followUp: ""
        },
        {
            id: "meet-8",
            title: "Elisa Growth Strategy",
            account: "Elisa",
            type: "Strategy",
            date: "2026-01-25",
            time: "14:00",
            attendees: ["Mikko", "Tapio"],
            stakeholderLevel: "CTO",
            status: "scheduled",
            notes: "",
            followUp: ""
        }
    ],

    // Pipeline (Sales Opportunities)
    pipeline: [
        {
            id: "pipe-1",
            name: "AI Sales Platform - Manufacturing",
            account: "Finnish Manufacturing Co",
            stage: "qualification",
            value: 150000,
            probability: 30,
            owner: "Arttu",
            nextStep: "Technical deep-dive",
            expectedClose: "Q2 2026"
        },
        {
            id: "pipe-2",
            name: "Platform Modernization - Elisa",
            account: "Elisa",
            stage: "discovery",
            value: 300000,
            probability: 20,
            owner: "Mikko",
            nextStep: "Architecture review",
            expectedClose: "Q2 2026"
        },
        {
            id: "pipe-3",
            name: "Sweden Telecom - Initial Engagement",
            account: "Sweden Telecom Co A",
            stage: "lead",
            value: 200000,
            probability: 10,
            owner: "Åsa",
            nextStep: "Deeper discovery meeting",
            expectedClose: "1H 2026"
        },
        {
            id: "pipe-4",
            name: "AI Sales Tools - Services Co",
            account: "Finnish Services Company",
            stage: "qualification",
            value: 100000,
            probability: 40,
            owner: "Arttu",
            nextStep: "Stakeholder alignment",
            expectedClose: "Q1 2026"
        },
        {
            id: "pipe-5",
            name: "DNA Development Partnership",
            account: "DNA",
            stage: "discovery",
            value: 250000,
            probability: 15,
            owner: "Janne",
            nextStep: "Define growth hypothesis",
            expectedClose: "Q2 2026"
        }
    ],

    // Activities (Tasks & Actions)
    activities: [
        {
            id: "act-1",
            title: "Complete WPP 2025 Retrospective",
            type: "task",
            priority: "high",
            assignee: "Tapio",
            dueDate: "2026-01-31",
            status: "in_progress",
            initiative: "WPP Repositioning",
            description: "Analyze what worked, what didn't, where we stayed too operational"
        },
        {
            id: "act-2",
            title: "Prepare Sweden Telecom positioning deck",
            type: "task",
            priority: "medium",
            assignee: "Åsa",
            dueDate: "2026-01-20",
            status: "pending",
            initiative: "Sweden Telecom",
            description: "Create shared positioning and narrative for Swedish market"
        },
        {
            id: "act-3",
            title: "Define DNA growth hypothesis",
            type: "task",
            priority: "high",
            assignee: "Janne",
            dueDate: "2026-01-25",
            status: "pending",
            initiative: "Finland Telecom",
            description: "Document one clear growth hypothesis for DNA account"
        },
        {
            id: "act-4",
            title: "Schedule Ardoq CTO meeting",
            type: "task",
            priority: "medium",
            assignee: "Team",
            dueDate: "2026-02-15",
            status: "pending",
            initiative: "MAS Theme",
            description: "Reach out and schedule MAS discussion with Ardoq CTO"
        },
        {
            id: "act-5",
            title: "Set up meeting coordination AI agent",
            type: "task",
            priority: "high",
            assignee: "Team",
            dueDate: "2026-02-28",
            status: "pending",
            initiative: "AI Agents",
            description: "Deploy first AI agent for meeting booking and follow-ups"
        },
        {
            id: "act-6",
            title: "Review Trainer's House booking process",
            type: "task",
            priority: "medium",
            assignee: "Arttu",
            dueDate: "2026-01-30",
            status: "pending",
            initiative: "AI in Sales",
            description: "Ensure meeting booking process is running smoothly"
        },
        {
            id: "act-7",
            title: "Document MAS conversation themes",
            type: "task",
            priority: "low",
            assignee: "Team",
            dueDate: "2026-03-15",
            status: "pending",
            initiative: "MAS Theme",
            description: "Synthesize patterns and tensions from MAS discussions"
        },
        {
            id: "act-8",
            title: "Website content audit",
            type: "task",
            priority: "low",
            assignee: "Team",
            dueDate: "2026-02-15",
            status: "pending",
            initiative: "Website Update",
            description: "Review current website content against new strategy"
        }
    ],

    // AI Agents Configuration
    aiAgents: [
        {
            id: "agent-1",
            name: "Meeting Coordinator",
            description: "Handles meeting booking, calendar invitations, and reminder emails",
            status: "development",
            automations: [
                "Meeting booking",
                "Calendar invitations",
                "Reminder emails"
            ],
            tasksAutomated: 0,
            timeSaved: 0
        },
        {
            id: "agent-2",
            name: "Research Assistant",
            description: "Participant profiling and company background research before meetings",
            status: "planned",
            automations: [
                "Participant profiling",
                "Company background research"
            ],
            tasksAutomated: 0,
            timeSaved: 0
        },
        {
            id: "agent-3",
            name: "Meeting Notes Agent",
            description: "Automated meeting notes and follow-up email drafts",
            status: "planned",
            automations: [
                "Meeting notes transcription",
                "Follow-up email drafts",
                "Action item extraction"
            ],
            tasksAutomated: 0,
            timeSaved: 0
        },
        {
            id: "agent-4",
            name: "Insights Synthesizer",
            description: "Synthesis of learnings and signals across all conversations",
            status: "planned",
            automations: [
                "Pattern recognition across meetings",
                "Signal aggregation",
                "Quarterly insights report"
            ],
            tasksAutomated: 0,
            timeSaved: 0
        }
    ],

    // Integration Status
    integrations: [
        {
            id: "int-1",
            name: "Google Workspace",
            icon: "fab fa-google",
            color: "#4285f4",
            status: "manual",
            description: "Email and Calendar integration",
            features: ["Email sync", "Calendar sync", "Contact sync"],
            setupStatus: "Planned for Phase 2"
        },
        {
            id: "int-2",
            name: "Slack",
            icon: "fab fa-slack",
            color: "#4a154b",
            status: "manual",
            description: "Team communication and notifications",
            features: ["Channel notifications", "Deal updates", "Meeting reminders"],
            setupStatus: "Planned for Phase 2"
        },
        {
            id: "int-3",
            name: "Odoo CRM",
            icon: "fas fa-database",
            color: "#714b67",
            status: "manual",
            description: "Customer relationship management",
            features: ["Contact sync", "Deal tracking", "Activity logging"],
            setupStatus: "Manual data entry for Phase 1"
        }
    ]
};

// Helper functions for data manipulation
const DataHelpers = {
    // Calculate overall OKR progress
    getOKRProgress: function(okr) {
        if (!okr.keyResults || okr.keyResults.length === 0) return 0;
        const total = okr.keyResults.reduce((sum, kr) => {
            const progress = (kr.current / kr.target) * 100;
            return sum + Math.min(progress, 100);
        }, 0);
        return Math.round(total / okr.keyResults.length);
    },

    // Get meetings by status
    getMeetingsByStatus: function(status) {
        return MetosinData.meetings.filter(m => m.status === status);
    },

    // Get upcoming meetings
    getUpcomingMeetings: function(days = 7) {
        const today = new Date();
        const futureDate = new Date(today.getTime() + (days * 24 * 60 * 60 * 1000));
        return MetosinData.meetings.filter(m => {
            const meetingDate = new Date(m.date);
            return meetingDate >= today && meetingDate <= futureDate && m.status === 'scheduled';
        });
    },

    // Get pipeline by stage
    getPipelineByStage: function(stage) {
        return MetosinData.pipeline.filter(p => p.stage === stage);
    },

    // Calculate total pipeline value
    getTotalPipelineValue: function() {
        return MetosinData.pipeline.reduce((sum, p) => sum + p.value, 0);
    },

    // Calculate weighted pipeline value
    getWeightedPipelineValue: function() {
        return MetosinData.pipeline.reduce((sum, p) => sum + (p.value * p.probability / 100), 0);
    },

    // Get activities by status
    getActivitiesByStatus: function(status) {
        return MetosinData.activities.filter(a => a.status === status);
    },

    // Get overdue activities
    getOverdueActivities: function() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return MetosinData.activities.filter(a => {
            if (a.status === 'completed') return false;
            const dueDate = new Date(a.dueDate);
            return dueDate < today;
        });
    },

    // Get team member by name
    getTeamMember: function(name) {
        return MetosinData.team.find(t => t.name === name);
    },

    // Get account by name
    getAccount: function(name) {
        return MetosinData.accounts.find(a => a.name === name);
    },

    // Calculate overall Q1 progress
    getQ1Progress: function() {
        const totalProgress = MetosinData.okrs.reduce((sum, okr) => {
            return sum + this.getOKRProgress(okr);
        }, 0);
        return Math.round(totalProgress / MetosinData.okrs.length);
    },

    // Format currency
    formatCurrency: function(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    },

    // Format date
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }
};

// Make data available globally
window.MetosinData = MetosinData;
window.DataHelpers = DataHelpers;
