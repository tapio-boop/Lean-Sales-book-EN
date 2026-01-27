// Metosin Agentic Sales System - View Templates

const Views = {
    // Dashboard View
    dashboard: function() {
        const q1Progress = DataHelpers.getQ1Progress();
        const totalPipeline = DataHelpers.getTotalPipelineValue();
        const weightedPipeline = DataHelpers.getWeightedPipelineValue();
        const upcomingMeetings = DataHelpers.getUpcomingMeetings(7);
        const completedMeetings = DataHelpers.getMeetingsByStatus('completed');
        const pendingActivities = DataHelpers.getActivitiesByStatus('pending');
        const inProgressActivities = DataHelpers.getActivitiesByStatus('in_progress');

        return `
            <!-- Stats Overview -->
            <div class="grid grid-4 mb-3">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon purple">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <span class="stat-trend up">Q1</span>
                    </div>
                    <div class="stat-value">${q1Progress}%</div>
                    <div class="stat-label">Overall OKR Progress</div>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill primary" style="width: ${q1Progress}%"></div>
                        </div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon green">
                            <i class="fas fa-euro-sign"></i>
                        </div>
                    </div>
                    <div class="stat-value">${DataHelpers.formatCurrency(totalPipeline)}</div>
                    <div class="stat-label">Total Pipeline Value</div>
                    <p class="text-muted" style="font-size: 0.8rem; margin-top: 0.5rem;">
                        Weighted: ${DataHelpers.formatCurrency(weightedPipeline)}
                    </p>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon blue">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                        <span class="stat-trend up">+${upcomingMeetings.length}</span>
                    </div>
                    <div class="stat-value">${completedMeetings.length}</div>
                    <div class="stat-label">Meetings Completed</div>
                    <p class="text-muted" style="font-size: 0.8rem; margin-top: 0.5rem;">
                        ${upcomingMeetings.length} upcoming this week
                    </p>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon yellow">
                            <i class="fas fa-tasks"></i>
                        </div>
                    </div>
                    <div class="stat-value">${pendingActivities.length + inProgressActivities.length}</div>
                    <div class="stat-label">Open Tasks</div>
                    <p class="text-muted" style="font-size: 0.8rem; margin-top: 0.5rem;">
                        ${inProgressActivities.length} in progress
                    </p>
                </div>
            </div>

            <div class="grid grid-2">
                <!-- Strategic Intent -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Strategic Intent Q1 2026</h3>
                    </div>
                    <ul style="list-style: none; padding: 0;">
                        ${MetosinData.strategicIntent.map(intent => `
                            <li style="display: flex; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
                                <i class="fas fa-arrow-right" style="color: var(--primary-light); margin-top: 0.2rem;"></i>
                                <span>${intent}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- OKR Summary -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">OKR Progress</h3>
                        <a href="#" class="btn btn-sm btn-secondary" data-view="okrs" onclick="app.loadView('okrs'); app.setActiveNav(document.querySelector('[data-view=okrs]')); return false;">View All</a>
                    </div>
                    ${MetosinData.okrs.slice(0, 3).map(okr => {
                        const progress = DataHelpers.getOKRProgress(okr);
                        return `
                            <div style="margin-bottom: 1.25rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 500; font-size: 0.9rem;">O${okr.number}: ${okr.objective.substring(0, 40)}...</span>
                                    <span style="font-weight: 600; color: var(--primary-light);">${progress}%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill ${progress >= 70 ? 'green' : progress >= 40 ? 'yellow' : 'blue'}" style="width: ${progress}%"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="grid grid-2 mt-2">
                <!-- Upcoming Meetings -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Upcoming Meetings</h3>
                        <a href="#" class="btn btn-sm btn-secondary" onclick="app.loadView('meetings'); app.setActiveNav(document.querySelector('[data-view=meetings]')); return false;">View All</a>
                    </div>
                    ${upcomingMeetings.length > 0 ? upcomingMeetings.slice(0, 4).map(meeting => {
                        const date = new Date(meeting.date);
                        return `
                            <div class="meeting-card">
                                <div class="meeting-date">
                                    <div class="meeting-day">${date.getDate()}</div>
                                    <div class="meeting-month">${date.toLocaleDateString('en-US', { month: 'short' })}</div>
                                </div>
                                <div class="meeting-details">
                                    <div class="meeting-title">${meeting.title}</div>
                                    <div class="meeting-meta">
                                        <span><i class="fas fa-building"></i>${meeting.account}</span>
                                        <span><i class="fas fa-clock"></i>${meeting.time}</span>
                                        <span><i class="fas fa-user-tie"></i>${meeting.stakeholderLevel}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('') : '<p class="text-muted">No upcoming meetings this week</p>'}
                </div>

                <!-- Active Initiatives -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Active Initiatives</h3>
                        <a href="#" class="btn btn-sm btn-secondary" onclick="app.loadView('initiatives'); app.setActiveNav(document.querySelector('[data-view=initiatives]')); return false;">View All</a>
                    </div>
                    ${MetosinData.initiatives.filter(i => i.status === 'active').slice(0, 4).map(initiative => `
                        <div class="initiative-card" style="padding: 1rem; margin-bottom: 0.75rem; background: var(--bg-tertiary); border-radius: 6px;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div class="stat-icon ${initiative.color}" style="width: 32px; height: 32px;">
                                    <i class="${initiative.icon}" style="font-size: 0.9rem;"></i>
                                </div>
                                <div>
                                    <div style="font-weight: 500; font-size: 0.9rem;">${initiative.name}</div>
                                    <div style="font-size: 0.75rem; color: var(--text-muted);">Owner: ${initiative.owner}</div>
                                </div>
                            </div>
                            <div class="progress-bar" style="height: 4px;">
                                <div class="progress-fill ${initiative.color}" style="width: ${initiative.progress}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Team Activity -->
            <div class="card mt-2">
                <div class="card-header">
                    <h3 class="card-title">Team Overview</h3>
                    <a href="#" class="btn btn-sm btn-secondary" onclick="app.loadView('team'); app.setActiveNav(document.querySelector('[data-view=team]')); return false;">View Team</a>
                </div>
                <div class="grid grid-3">
                    ${MetosinData.team.slice(0, 6).map(member => `
                        <div class="team-member">
                            <div class="team-avatar" style="background: ${member.color};">${member.initials}</div>
                            <div class="team-info">
                                <div class="team-name">${member.name}</div>
                                <div class="team-role">${member.role}</div>
                            </div>
                            <div class="team-stats">
                                <span><i class="fas fa-calendar" style="margin-right: 0.25rem;"></i>${member.meetingsThisMonth}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // OKRs View
    okrs: function() {
        return `
            <div class="card mb-3">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Q1 2026 Objectives & Key Results</h3>
                        <p class="card-subtitle">Track progress against strategic objectives</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="text-align: right;">
                            <div style="font-size: 2rem; font-weight: 700; color: var(--primary-light);">${DataHelpers.getQ1Progress()}%</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Overall Progress</div>
                        </div>
                    </div>
                </div>
            </div>

            ${MetosinData.okrs.map(okr => {
                const progress = DataHelpers.getOKRProgress(okr);
                return `
                    <div class="okr-card">
                        <div class="okr-header">
                            <div class="okr-number">O${okr.number}</div>
                            <div>
                                <h3 class="okr-title">${okr.objective}</h3>
                                <p class="okr-intent">${okr.intent}</p>
                            </div>
                            <div style="margin-left: auto; text-align: right;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: ${progress >= 70 ? 'var(--accent-green)' : progress >= 40 ? 'var(--accent-yellow)' : 'var(--primary-light)'};">${progress}%</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">Progress</div>
                            </div>
                        </div>
                        <div class="key-results">
                            ${okr.keyResults.map(kr => {
                                const krProgress = Math.min((kr.current / kr.target) * 100, 100);
                                return `
                                    <div class="kr-item">
                                        <div class="kr-header">
                                            <span class="kr-title">${kr.description}</span>
                                            <div class="kr-progress">
                                                <span style="font-weight: 600; color: ${krProgress >= 100 ? 'var(--accent-green)' : 'var(--text-primary)'};">
                                                    ${kr.current} / ${kr.target} ${kr.unit}
                                                </span>
                                                <button class="btn btn-sm btn-secondary update-kr-btn" data-kr-id="${kr.id}">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="progress-bar" style="margin-top: 0.5rem;">
                                            <div class="progress-fill ${krProgress >= 100 ? 'green' : krProgress >= 50 ? 'yellow' : 'blue'}" style="width: ${krProgress}%"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        `;
    },

    // Initiatives View
    initiatives: function() {
        return `
            <div class="tabs">
                <button class="tab active" data-filter="all">All Initiatives</button>
                <button class="tab" data-filter="active">Active</button>
                <button class="tab" data-filter="planned">Planned</button>
                <button class="tab" data-filter="in_progress">In Development</button>
            </div>

            <div class="grid grid-2">
                ${MetosinData.initiatives.map(initiative => `
                    <div class="initiative-card">
                        <div class="initiative-header">
                            <div class="initiative-icon stat-icon ${initiative.color}">
                                <i class="${initiative.icon}"></i>
                            </div>
                            <div style="flex: 1;">
                                <h4 class="initiative-title">${initiative.name}</h4>
                                <span class="initiative-owner">Owner: ${initiative.owner}</span>
                            </div>
                            <span class="badge ${initiative.status === 'active' ? 'badge-success' : initiative.status === 'in_progress' ? 'badge-info' : 'badge-neutral'}">
                                ${initiative.status === 'active' ? 'Active' : initiative.status === 'in_progress' ? 'In Development' : 'Planned'}
                            </span>
                        </div>

                        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">
                            <strong>Target:</strong> ${initiative.target}
                        </p>

                        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 1rem;">
                            <strong>Q1 Focus:</strong> ${initiative.q1Focus}
                        </p>

                        <div class="progress-container" style="margin-bottom: 1rem;">
                            <div class="progress-header">
                                <span class="text-muted">Progress</span>
                                <span>${initiative.progress}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill ${initiative.color}" style="width: ${initiative.progress}%"></div>
                            </div>
                        </div>

                        <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
                            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Key Outcomes:</p>
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                ${initiative.keyOutcomes.map(outcome => `
                                    <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; margin-bottom: 0.25rem;">
                                        <i class="fas fa-check-circle" style="color: var(--accent-green); margin-top: 0.15rem;"></i>
                                        <span>${outcome}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        ${initiative.support && initiative.support.length > 0 ? `
                            <div class="initiative-targets">
                                <span style="font-size: 0.75rem; color: var(--text-muted); margin-right: 0.5rem;">Support:</span>
                                ${initiative.support.map(s => `<span class="target-badge">${s}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    },

    // Team View
    team: function() {
        return `
            <div class="card mb-3">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">Sales Team</h3>
                        <p class="card-subtitle">Team of 5-9 people executing Q1 2026 plan</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-3">
                ${MetosinData.team.map(member => `
                    <div class="card">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                            <div class="team-avatar" style="width: 56px; height: 56px; font-size: 1.25rem; background: ${member.color};">
                                ${member.initials}
                            </div>
                            <div>
                                <h4 style="font-weight: 600; margin-bottom: 0.25rem;">${member.name}</h4>
                                <span style="font-size: 0.85rem; color: var(--text-muted);">${member.role}</span>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="text-align: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 6px;">
                                <div style="font-size: 1.5rem; font-weight: 700;">${member.meetingsThisMonth}</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">Meetings/Month</div>
                            </div>
                            <div style="text-align: center; padding: 1rem; background: var(--bg-tertiary); border-radius: 6px;">
                                <div style="font-size: 1.5rem; font-weight: 700;">${member.dealsInPipeline}</div>
                                <div style="font-size: 0.75rem; color: var(--text-muted);">Pipeline Deals</div>
                            </div>
                        </div>

                        ${member.accounts.length > 0 ? `
                            <div style="margin-bottom: 1rem;">
                                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Primary Accounts:</p>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                    ${member.accounts.map(acc => `<span class="badge badge-info">${acc}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}

                        ${member.support.length > 0 ? `
                            <div>
                                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Supporting:</p>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                    ${member.support.map(sup => `<span class="badge badge-neutral">${sup}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            <!-- Team Assignments Matrix -->
            <div class="card mt-3">
                <div class="card-header">
                    <h3 class="card-title">Account Assignments</h3>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Account</th>
                                <th>Owner</th>
                                <th>Strategic Support</th>
                                <th>Status</th>
                                <th>Q1 Target</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${MetosinData.accounts.map(account => `
                                <tr>
                                    <td><strong>${account.name}</strong></td>
                                    <td>${account.owner}</td>
                                    <td>${account.type === 'Strategic' ? 'Tapio' : '-'}</td>
                                    <td><span class="badge ${account.status === 'growth' ? 'badge-success' : account.status === 'repositioning' ? 'badge-warning' : 'badge-info'}">${account.status}</span></td>
                                    <td>${account.q1Focus.substring(0, 50)}...</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // Accounts View
    accounts: function() {
        return `
            <div class="tabs">
                <button class="tab active">All Accounts</button>
                <button class="tab">Strategic</button>
                <button class="tab">New Market</button>
                <button class="tab">Pipeline</button>
            </div>

            ${MetosinData.accounts.map(account => `
                <div class="card mb-2 account-row" data-account-id="${account.id}" style="cursor: pointer;">
                    <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
                        <div class="account-logo">${account.name.substring(0, 2).toUpperCase()}</div>
                        <div style="flex: 1;">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                                <h4 style="font-size: 1.1rem; font-weight: 600;">${account.name}</h4>
                                <span class="badge ${account.type === 'Strategic' ? 'badge-purple' : account.type === 'New Market' ? 'badge-info' : 'badge-neutral'}">${account.type}</span>
                                <span class="badge ${account.status === 'growth' ? 'badge-success' : account.status === 'repositioning' ? 'badge-warning' : account.status === 'development' ? 'badge-info' : 'badge-neutral'}">${account.status}</span>
                            </div>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.5rem;">
                                ${account.industry} | ${account.country} | Owner: <strong>${account.owner}</strong>
                            </p>
                            <p style="font-size: 0.9rem; margin-bottom: 1rem;"><strong>Q1 Focus:</strong> ${account.q1Focus}</p>

                            <div class="hypothesis-card">
                                <p class="hypothesis-title">Growth Hypothesis</p>
                                <p class="hypothesis-text">${account.hypothesis}</p>
                            </div>

                            <div style="display: flex; gap: 2rem; margin-top: 1rem;">
                                <div>
                                    <span style="font-size: 0.75rem; color: var(--text-muted);">Meetings Q1</span>
                                    <div style="font-size: 1.25rem; font-weight: 600;">${account.meetingsQ1} / ${account.targetMeetings}</div>
                                </div>
                                <div>
                                    <span style="font-size: 0.75rem; color: var(--text-muted);">Next Action</span>
                                    <div style="font-size: 0.9rem;">${account.nextAction}</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted);">Due: ${DataHelpers.formatDate(account.nextActionDate)}</div>
                                </div>
                            </div>

                            ${account.positioning && account.positioning.length > 0 ? `
                                <div style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                    <span style="font-size: 0.75rem; color: var(--text-muted); margin-right: 0.5rem;">Positioning:</span>
                                    ${account.positioning.map(p => `<span class="badge badge-neutral">${p}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                        <div style="text-align: right;">
                            <div class="progress-container" style="width: 100px;">
                                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-light);">
                                    ${Math.round((account.meetingsQ1 / account.targetMeetings) * 100)}%
                                </div>
                                <div class="progress-bar" style="margin-top: 0.5rem;">
                                    <div class="progress-fill primary" style="width: ${Math.min((account.meetingsQ1 / account.targetMeetings) * 100, 100)}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
    },

    // Pipeline View
    pipeline: function() {
        const stages = ['lead', 'discovery', 'qualification', 'proposal', 'negotiation'];
        const stageNames = {
            lead: 'Lead',
            discovery: 'Discovery',
            qualification: 'Qualification',
            proposal: 'Proposal',
            negotiation: 'Negotiation'
        };

        const totalValue = DataHelpers.getTotalPipelineValue();
        const weightedValue = DataHelpers.getWeightedPipelineValue();

        return `
            <div class="grid grid-3 mb-3">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon green">
                            <i class="fas fa-euro-sign"></i>
                        </div>
                    </div>
                    <div class="stat-value">${DataHelpers.formatCurrency(totalValue)}</div>
                    <div class="stat-label">Total Pipeline Value</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon blue">
                            <i class="fas fa-balance-scale"></i>
                        </div>
                    </div>
                    <div class="stat-value">${DataHelpers.formatCurrency(weightedValue)}</div>
                    <div class="stat-label">Weighted Pipeline</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon purple">
                            <i class="fas fa-chart-pie"></i>
                        </div>
                    </div>
                    <div class="stat-value">${MetosinData.pipeline.length}</div>
                    <div class="stat-label">Active Opportunities</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Pipeline Board</h3>
                    <button class="btn btn-primary" onclick="app.openAddPipelineModal()">
                        <i class="fas fa-plus"></i> Add Opportunity
                    </button>
                </div>

                <div class="pipeline-board">
                    ${stages.map(stage => {
                        const deals = DataHelpers.getPipelineByStage(stage);
                        const stageValue = deals.reduce((sum, d) => sum + d.value, 0);
                        return `
                            <div class="pipeline-column">
                                <div class="pipeline-column-header">
                                    <span class="column-title">
                                        ${stageNames[stage]}
                                        <span class="column-count">${deals.length}</span>
                                    </span>
                                    <span style="font-size: 0.8rem; color: var(--text-muted);">${DataHelpers.formatCurrency(stageValue)}</span>
                                </div>
                                ${deals.map(deal => `
                                    <div class="pipeline-card" data-deal-id="${deal.id}">
                                        <div class="pipeline-card-title">${deal.name}</div>
                                        <div class="pipeline-card-meta">
                                            <i class="fas fa-building" style="margin-right: 0.25rem;"></i>${deal.account}
                                        </div>
                                        <div class="pipeline-card-meta">
                                            <i class="fas fa-user" style="margin-right: 0.25rem;"></i>${deal.owner}
                                        </div>
                                        <div class="pipeline-card-footer">
                                            <span class="pipeline-value">${DataHelpers.formatCurrency(deal.value)}</span>
                                            <span class="badge badge-info">${deal.probability}%</span>
                                        </div>
                                        <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                                            <p style="font-size: 0.75rem; color: var(--text-muted);">Next: ${deal.nextStep}</p>
                                            <p style="font-size: 0.75rem; color: var(--text-muted);">Close: ${deal.expectedClose}</p>
                                        </div>
                                    </div>
                                `).join('')}
                                ${deals.length === 0 ? '<p class="text-muted text-center" style="padding: 1rem;">No opportunities</p>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    // Meetings View
    meetings: function() {
        const scheduledMeetings = DataHelpers.getMeetingsByStatus('scheduled');
        const completedMeetings = DataHelpers.getMeetingsByStatus('completed');

        return `
            <div class="grid grid-3 mb-3">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon blue">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                    </div>
                    <div class="stat-value">${scheduledMeetings.length}</div>
                    <div class="stat-label">Scheduled Meetings</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon green">
                            <i class="fas fa-check-circle"></i>
                        </div>
                    </div>
                    <div class="stat-value">${completedMeetings.length}</div>
                    <div class="stat-label">Completed in Q1</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon purple">
                            <i class="fas fa-bullseye"></i>
                        </div>
                    </div>
                    <div class="stat-value">${MetosinData.meetings.length}</div>
                    <div class="stat-label">Total Meetings</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Meeting Schedule</h3>
                    <button class="btn btn-primary add-meeting-btn" onclick="app.openAddMeetingModal()">
                        <i class="fas fa-plus"></i> Add Meeting
                    </button>
                </div>

                <div class="tabs">
                    <button class="tab active" data-filter="all">All</button>
                    <button class="tab" data-filter="scheduled">Scheduled</button>
                    <button class="tab" data-filter="completed">Completed</button>
                </div>

                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Meeting</th>
                                <th>Account</th>
                                <th>Type</th>
                                <th>Level</th>
                                <th>Attendees</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${MetosinData.meetings.sort((a, b) => new Date(a.date) - new Date(b.date)).map(meeting => `
                                <tr>
                                    <td>
                                        <div style="font-weight: 600;">${DataHelpers.formatDate(meeting.date)}</div>
                                        <div style="font-size: 0.8rem; color: var(--text-muted);">${meeting.time}</div>
                                    </td>
                                    <td><strong>${meeting.title}</strong></td>
                                    <td>${meeting.account}</td>
                                    <td><span class="badge badge-neutral">${meeting.type}</span></td>
                                    <td><span class="badge badge-info">${meeting.stakeholderLevel}</span></td>
                                    <td>${meeting.attendees.join(', ')}</td>
                                    <td>
                                        <span class="badge ${meeting.status === 'completed' ? 'badge-success' : 'badge-warning'}">
                                            ${meeting.status}
                                        </span>
                                    </td>
                                    <td>
                                        ${meeting.status === 'scheduled' ? `
                                            <button class="btn btn-sm btn-success meeting-status-btn" data-meeting-id="${meeting.id}" data-status="completed">
                                                <i class="fas fa-check"></i>
                                            </button>
                                        ` : ''}
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            ${completedMeetings.length > 0 ? `
                <div class="card mt-3">
                    <div class="card-header">
                        <h3 class="card-title">Meeting Notes & Follow-ups</h3>
                    </div>
                    ${completedMeetings.filter(m => m.notes).map(meeting => `
                        <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: 6px; margin-bottom: 0.75rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <strong>${meeting.title}</strong>
                                <span class="text-muted">${DataHelpers.formatDate(meeting.date)}</span>
                            </div>
                            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${meeting.notes}</p>
                            ${meeting.followUp ? `
                                <p style="font-size: 0.85rem;"><strong>Follow-up:</strong> ${meeting.followUp}</p>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        `;
    },

    // Activities View
    activities: function() {
        const pending = DataHelpers.getActivitiesByStatus('pending');
        const inProgress = DataHelpers.getActivitiesByStatus('in_progress');
        const completed = DataHelpers.getActivitiesByStatus('completed');
        const overdue = DataHelpers.getOverdueActivities();

        return `
            <div class="grid grid-4 mb-3">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon yellow">
                            <i class="fas fa-clock"></i>
                        </div>
                    </div>
                    <div class="stat-value">${pending.length}</div>
                    <div class="stat-label">Pending Tasks</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon blue">
                            <i class="fas fa-spinner"></i>
                        </div>
                    </div>
                    <div class="stat-value">${inProgress.length}</div>
                    <div class="stat-label">In Progress</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon green">
                            <i class="fas fa-check-circle"></i>
                        </div>
                    </div>
                    <div class="stat-value">${completed.length}</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-header">
                        <div class="stat-icon red">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                    </div>
                    <div class="stat-value">${overdue.length}</div>
                    <div class="stat-label">Overdue</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Tasks & Activities</h3>
                    <button class="btn btn-primary add-activity-btn" onclick="app.openAddActivityModal()">
                        <i class="fas fa-plus"></i> Add Task
                    </button>
                </div>

                <div class="tabs">
                    <button class="tab active">All Tasks</button>
                    <button class="tab">Pending</button>
                    <button class="tab">In Progress</button>
                    <button class="tab">Completed</button>
                </div>

                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th style="width: 40px;"></th>
                                <th>Task</th>
                                <th>Initiative</th>
                                <th>Assignee</th>
                                <th>Due Date</th>
                                <th>Priority</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${MetosinData.activities.sort((a, b) => {
                                const priorityOrder = { high: 0, medium: 1, low: 2 };
                                return priorityOrder[a.priority] - priorityOrder[b.priority];
                            }).map(activity => {
                                const isOverdue = new Date(activity.dueDate) < new Date() && activity.status !== 'completed';
                                return `
                                    <tr>
                                        <td>
                                            <input type="checkbox" class="task-checkbox" data-activity-id="${activity.id}" ${activity.status === 'completed' ? 'checked' : ''}>
                                        </td>
                                        <td>
                                            <strong style="${activity.status === 'completed' ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${activity.title}</strong>
                                            ${activity.description ? `<p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${activity.description}</p>` : ''}
                                        </td>
                                        <td><span class="badge badge-neutral">${activity.initiative || '-'}</span></td>
                                        <td>${activity.assignee}</td>
                                        <td style="${isOverdue ? 'color: var(--accent-red);' : ''}">
                                            ${DataHelpers.formatDate(activity.dueDate)}
                                            ${isOverdue ? '<br><span class="badge badge-danger">Overdue</span>' : ''}
                                        </td>
                                        <td>
                                            <span class="badge ${activity.priority === 'high' ? 'badge-danger' : activity.priority === 'medium' ? 'badge-warning' : 'badge-neutral'}">
                                                ${activity.priority}
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge ${activity.status === 'completed' ? 'badge-success' : activity.status === 'in_progress' ? 'badge-info' : 'badge-neutral'}">
                                                ${activity.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // AI Agents View
    'ai-agents': function() {
        return `
            <div class="card mb-3">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">AI Agents & Automation</h3>
                        <p class="card-subtitle">Automate meeting-related routine work with AI agents</p>
                    </div>
                </div>
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: 6px;">
                    <h4 style="margin-bottom: 0.75rem;">Q1 2026 Automation Goals</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <i class="fas fa-bullseye" style="color: var(--primary-light);"></i>
                            <span>1-2 AI agents in real daily use</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <i class="fas fa-bullseye" style="color: var(--primary-light);"></i>
                            <span>≥50% of meeting-related routine work automated</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-bullseye" style="color: var(--primary-light);"></i>
                            <span>Focus on practical value, not perfection</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="grid grid-2">
                ${MetosinData.aiAgents.map(agent => `
                    <div class="agent-card">
                        <div class="agent-header">
                            <div class="agent-icon">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div>
                                <h4 class="agent-name">${agent.name}</h4>
                                <div class="agent-status">
                                    <span class="status-dot ${agent.status === 'active' ? 'active' : agent.status === 'development' ? 'pending' : 'inactive'}"></span>
                                    <span style="color: var(--text-muted);">${agent.status === 'active' ? 'Active' : agent.status === 'development' ? 'In Development' : 'Planned'}</span>
                                </div>
                            </div>
                        </div>

                        <p class="agent-description">${agent.description}</p>

                        <div style="margin-bottom: 1rem;">
                            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Automations:</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                ${agent.automations.map(auto => `<span class="badge badge-neutral">${auto}</span>`).join('')}
                            </div>
                        </div>

                        <div class="agent-metrics">
                            <div class="agent-metric">
                                <div class="agent-metric-value">${agent.tasksAutomated}</div>
                                <div class="agent-metric-label">Tasks Done</div>
                            </div>
                            <div class="agent-metric">
                                <div class="agent-metric-value">${agent.timeSaved}h</div>
                                <div class="agent-metric-label">Time Saved</div>
                            </div>
                            <div class="agent-metric">
                                <div class="agent-metric-value">${agent.status === 'active' ? '100%' : agent.status === 'development' ? '50%' : '0%'}</div>
                                <div class="agent-metric-label">Ready</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="card mt-3">
                <div class="card-header">
                    <h3 class="card-title">Workflows to Automate</h3>
                </div>
                <div class="grid grid-4">
                    ${['Meeting booking', 'Calendar invitations', 'Reminder emails', 'Participant profiling', 'Company research', 'Meeting notes', 'Follow-up drafts', 'Signal synthesis'].map(workflow => `
                        <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: 6px; text-align: center;">
                            <i class="fas fa-cog" style="font-size: 1.5rem; color: var(--primary-light); margin-bottom: 0.5rem;"></i>
                            <p style="font-size: 0.9rem;">${workflow}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Integrations View
    integrations: function() {
        return `
            <div class="card mb-3">
                <div class="card-header">
                    <div>
                        <h3 class="card-title">System Integrations</h3>
                        <p class="card-subtitle">Connect your tools for seamless workflow</p>
                    </div>
                </div>
                <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--accent-yellow); padding: 1rem; border-radius: 6px;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <i class="fas fa-info-circle" style="color: var(--accent-yellow);"></i>
                        <span><strong>Phase 1:</strong> Manual integrations. Full API integrations planned for Phase 2.</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-3">
                ${MetosinData.integrations.map(integration => `
                    <div class="integration-card">
                        <div class="integration-icon" style="background: ${integration.color}20; color: ${integration.color};">
                            <i class="${integration.icon}"></i>
                        </div>
                        <div class="integration-info">
                            <h4 class="integration-name">${integration.name}</h4>
                            <p class="integration-status">${integration.description}</p>
                        </div>
                        <span class="badge ${integration.status === 'connected' ? 'badge-success' : 'badge-warning'}">${integration.status}</span>
                    </div>
                `).join('')}
            </div>

            <div class="grid grid-3 mt-3">
                ${MetosinData.integrations.map(integration => `
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title" style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="${integration.icon}" style="color: ${integration.color};"></i>
                                ${integration.name}
                            </h4>
                        </div>
                        <ul style="list-style: none; padding: 0; margin-bottom: 1rem;">
                            ${integration.features.map(feature => `
                                <li style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                                    <i class="fas fa-circle" style="font-size: 0.5rem; color: var(--text-muted);"></i>
                                    <span>${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div style="background: var(--bg-tertiary); padding: 0.75rem; border-radius: 6px;">
                            <p style="font-size: 0.85rem; color: var(--text-muted);">
                                <strong>Status:</strong> ${integration.setupStatus}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="card mt-3">
                <div class="card-header">
                    <h3 class="card-title">Manual Workflow Instructions</h3>
                </div>
                <div class="grid grid-3">
                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 6px;">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fab fa-google" style="color: #4285f4;"></i>
                            Google Workspace
                        </h4>
                        <ol style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
                            <li style="margin-bottom: 0.5rem;">Add meetings to Google Calendar manually</li>
                            <li style="margin-bottom: 0.5rem;">Update meeting status after completion</li>
                            <li style="margin-bottom: 0.5rem;">Log follow-up actions in this system</li>
                        </ol>
                    </div>
                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 6px;">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fab fa-slack" style="color: #4a154b;"></i>
                            Slack
                        </h4>
                        <ol style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
                            <li style="margin-bottom: 0.5rem;">Share weekly updates in #sales channel</li>
                            <li style="margin-bottom: 0.5rem;">Notify team of key meeting outcomes</li>
                            <li style="margin-bottom: 0.5rem;">Coordinate follow-ups via DMs</li>
                        </ol>
                    </div>
                    <div style="padding: 1.5rem; background: var(--bg-tertiary); border-radius: 6px;">
                        <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-database" style="color: #714b67;"></i>
                            Odoo CRM
                        </h4>
                        <ol style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-secondary);">
                            <li style="margin-bottom: 0.5rem;">Sync pipeline opportunities weekly</li>
                            <li style="margin-bottom: 0.5rem;">Update deal stages in both systems</li>
                            <li style="margin-bottom: 0.5rem;">Record contact interactions</li>
                        </ol>
                    </div>
                </div>
            </div>
        `;
    }
};

// Make Views available globally
window.Views = Views;
