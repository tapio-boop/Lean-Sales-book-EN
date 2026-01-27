// Metosin Agentic Sales System - Main Application

class MetosinApp {
    constructor() {
        this.currentView = 'dashboard';
        this.init();
    }

    init() {
        // Initialize navigation
        this.setupNavigation();

        // Initialize modal
        this.setupModal();

        // Initialize quick add
        this.setupQuickAdd();

        // Load initial view
        this.loadView('dashboard');

        // Load data from localStorage or use default
        this.loadStoredData();
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.dataset.view;
                if (view) {
                    this.loadView(view);
                    this.setActiveNav(item);
                }
            });
        });
    }

    setActiveNav(activeItem) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }

    loadView(viewName) {
        this.currentView = viewName;
        const contentBody = document.getElementById('content-body');
        const pageTitle = document.getElementById('page-title');

        // Update page title
        const titles = {
            'dashboard': 'Dashboard',
            'okrs': 'OKRs & Objectives',
            'initiatives': 'Strategic Initiatives',
            'team': 'Team & Assignments',
            'accounts': 'Key Accounts',
            'pipeline': 'Sales Pipeline',
            'meetings': 'Meetings',
            'activities': 'Activities & Tasks',
            'ai-agents': 'AI Agents',
            'integrations': 'Integrations'
        };

        pageTitle.textContent = titles[viewName] || 'Dashboard';

        // Load view content
        if (typeof Views !== 'undefined' && Views[viewName]) {
            contentBody.innerHTML = Views[viewName]();
        } else {
            contentBody.innerHTML = '<p>Loading...</p>';
        }

        // Initialize view-specific functionality
        this.initViewHandlers(viewName);
    }

    initViewHandlers(viewName) {
        // Add event handlers specific to each view
        switch(viewName) {
            case 'okrs':
                this.initOKRHandlers();
                break;
            case 'meetings':
                this.initMeetingHandlers();
                break;
            case 'activities':
                this.initActivityHandlers();
                break;
            case 'pipeline':
                this.initPipelineHandlers();
                break;
            case 'accounts':
                this.initAccountHandlers();
                break;
        }
    }

    initOKRHandlers() {
        // Update KR progress buttons
        document.querySelectorAll('.update-kr-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const krId = e.target.dataset.krId;
                this.openUpdateKRModal(krId);
            });
        });
    }

    initMeetingHandlers() {
        // Add meeting button
        const addBtn = document.querySelector('.add-meeting-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => this.openAddMeetingModal());
        }

        // Meeting status update
        document.querySelectorAll('.meeting-status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const meetingId = e.target.dataset.meetingId;
                const status = e.target.dataset.status;
                this.updateMeetingStatus(meetingId, status);
            });
        });
    }

    initActivityHandlers() {
        // Task checkbox handlers
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const activityId = e.target.dataset.activityId;
                const completed = e.target.checked;
                this.updateActivityStatus(activityId, completed ? 'completed' : 'pending');
            });
        });

        // Add activity button
        const addBtn = document.querySelector('.add-activity-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => this.openAddActivityModal());
        }
    }

    initPipelineHandlers() {
        // Pipeline card click handlers
        document.querySelectorAll('.pipeline-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const dealId = card.dataset.dealId;
                this.openDealModal(dealId);
            });
        });
    }

    initAccountHandlers() {
        // Account card click handlers
        document.querySelectorAll('.account-row').forEach(row => {
            row.addEventListener('click', (e) => {
                const accountId = row.dataset.accountId;
                this.loadView('account-detail');
            });
        });
    }

    setupModal() {
        const overlay = document.getElementById('modal-overlay');
        const closeBtn = document.getElementById('modal-close');

        closeBtn.addEventListener('click', () => this.closeModal());
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    openModal(title, content) {
        const overlay = document.getElementById('modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        overlay.classList.add('active');
    }

    closeModal() {
        const overlay = document.getElementById('modal-overlay');
        overlay.classList.remove('active');
    }

    setupQuickAdd() {
        const quickAddBtn = document.getElementById('quick-add-btn');
        quickAddBtn.addEventListener('click', () => {
            this.openQuickAddModal();
        });
    }

    openQuickAddModal() {
        const content = `
            <div class="quick-add-options">
                <button class="quick-add-option" data-type="meeting">
                    <i class="fas fa-calendar-plus"></i>
                    <span>New Meeting</span>
                </button>
                <button class="quick-add-option" data-type="activity">
                    <i class="fas fa-tasks"></i>
                    <span>New Task</span>
                </button>
                <button class="quick-add-option" data-type="pipeline">
                    <i class="fas fa-plus-circle"></i>
                    <span>New Opportunity</span>
                </button>
                <button class="quick-add-option" data-type="note">
                    <i class="fas fa-sticky-note"></i>
                    <span>Quick Note</span>
                </button>
            </div>
            <style>
                .quick-add-options {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }
                .quick-add-option {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1.5rem;
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .quick-add-option:hover {
                    border-color: var(--primary-color);
                    background: rgba(99, 102, 241, 0.1);
                }
                .quick-add-option i {
                    font-size: 1.5rem;
                    color: var(--primary-light);
                }
            </style>
        `;

        this.openModal('Quick Add', content);

        // Add handlers for quick add options
        document.querySelectorAll('.quick-add-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const type = option.dataset.type;
                this.closeModal();
                setTimeout(() => {
                    switch(type) {
                        case 'meeting':
                            this.openAddMeetingModal();
                            break;
                        case 'activity':
                            this.openAddActivityModal();
                            break;
                        case 'pipeline':
                            this.openAddPipelineModal();
                            break;
                        case 'note':
                            this.openAddNoteModal();
                            break;
                    }
                }, 200);
            });
        });
    }

    openAddMeetingModal() {
        const teamOptions = MetosinData.team.map(t =>
            `<option value="${t.name}">${t.name}</option>`
        ).join('');

        const accountOptions = MetosinData.accounts.map(a =>
            `<option value="${a.name}">${a.name}</option>`
        ).join('');

        const content = `
            <form id="add-meeting-form">
                <div class="form-group">
                    <label class="form-label">Meeting Title</label>
                    <input type="text" class="form-input" name="title" required placeholder="Enter meeting title">
                </div>
                <div class="form-group">
                    <label class="form-label">Account</label>
                    <select class="form-select" name="account" required>
                        <option value="">Select account</option>
                        ${accountOptions}
                    </select>
                </div>
                <div class="grid grid-2">
                    <div class="form-group">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-input" name="date" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Time</label>
                        <input type="time" class="form-input" name="time" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Meeting Type</label>
                    <select class="form-select" name="type" required>
                        <option value="Discovery">Discovery</option>
                        <option value="Prospecting">Prospecting</option>
                        <option value="Sales">Sales</option>
                        <option value="Technical">Technical</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Internal">Internal</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Stakeholder Level</label>
                    <select class="form-select" name="stakeholderLevel" required>
                        <option value="Tech Lead">Tech Lead</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                        <option value="SVP">SVP</option>
                        <option value="CTO">CTO</option>
                        <option value="CIO">CIO</option>
                        <option value="Internal">Internal</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">Attendees</label>
                    <select class="form-select" name="attendees" multiple>
                        ${teamOptions}
                    </select>
                    <small class="text-muted">Hold Ctrl/Cmd to select multiple</small>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Meeting</button>
                </div>
            </form>
        `;

        this.openModal('Add New Meeting', content);

        document.getElementById('add-meeting-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveMeeting(new FormData(e.target));
        });
    }

    openAddActivityModal() {
        const teamOptions = MetosinData.team.map(t =>
            `<option value="${t.name}">${t.name}</option>`
        ).join('');

        const initiativeOptions = MetosinData.initiatives.map(i =>
            `<option value="${i.name}">${i.name}</option>`
        ).join('');

        const content = `
            <form id="add-activity-form">
                <div class="form-group">
                    <label class="form-label">Task Title</label>
                    <input type="text" class="form-input" name="title" required placeholder="Enter task title">
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-textarea" name="description" placeholder="Task description..."></textarea>
                </div>
                <div class="grid grid-2">
                    <div class="form-group">
                        <label class="form-label">Assignee</label>
                        <select class="form-select" name="assignee" required>
                            <option value="">Select assignee</option>
                            <option value="Team">Team</option>
                            ${teamOptions}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Due Date</label>
                        <input type="date" class="form-input" name="dueDate" required>
                    </div>
                </div>
                <div class="grid grid-2">
                    <div class="form-group">
                        <label class="form-label">Priority</label>
                        <select class="form-select" name="priority" required>
                            <option value="low">Low</option>
                            <option value="medium" selected>Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Initiative</label>
                        <select class="form-select" name="initiative">
                            <option value="">Select initiative</option>
                            ${initiativeOptions}
                        </select>
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </div>
            </form>
        `;

        this.openModal('Add New Task', content);

        document.getElementById('add-activity-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveActivity(new FormData(e.target));
        });
    }

    openAddPipelineModal() {
        const teamOptions = MetosinData.team.map(t =>
            `<option value="${t.name}">${t.name}</option>`
        ).join('');

        const content = `
            <form id="add-pipeline-form">
                <div class="form-group">
                    <label class="form-label">Opportunity Name</label>
                    <input type="text" class="form-input" name="name" required placeholder="Enter opportunity name">
                </div>
                <div class="form-group">
                    <label class="form-label">Account / Company</label>
                    <input type="text" class="form-input" name="account" required placeholder="Company name">
                </div>
                <div class="grid grid-2">
                    <div class="form-group">
                        <label class="form-label">Value (EUR)</label>
                        <input type="number" class="form-input" name="value" required placeholder="100000">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Probability (%)</label>
                        <input type="number" class="form-input" name="probability" min="0" max="100" value="10">
                    </div>
                </div>
                <div class="grid grid-2">
                    <div class="form-group">
                        <label class="form-label">Stage</label>
                        <select class="form-select" name="stage" required>
                            <option value="lead">Lead</option>
                            <option value="discovery">Discovery</option>
                            <option value="qualification">Qualification</option>
                            <option value="proposal">Proposal</option>
                            <option value="negotiation">Negotiation</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Owner</label>
                        <select class="form-select" name="owner" required>
                            <option value="">Select owner</option>
                            ${teamOptions}
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Next Step</label>
                    <input type="text" class="form-input" name="nextStep" placeholder="Next action to take">
                </div>
                <div class="form-group">
                    <label class="form-label">Expected Close</label>
                    <select class="form-select" name="expectedClose">
                        <option value="Q1 2026">Q1 2026</option>
                        <option value="Q2 2026">Q2 2026</option>
                        <option value="1H 2026">1H 2026</option>
                        <option value="2H 2026">2H 2026</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Opportunity</button>
                </div>
            </form>
        `;

        this.openModal('Add New Opportunity', content);

        document.getElementById('add-pipeline-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.savePipelineItem(new FormData(e.target));
        });
    }

    openAddNoteModal() {
        const content = `
            <form id="add-note-form">
                <div class="form-group">
                    <label class="form-label">Quick Note</label>
                    <textarea class="form-textarea" name="note" rows="6" required placeholder="Enter your note here..."></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">Related To</label>
                    <select class="form-select" name="relatedTo">
                        <option value="">General</option>
                        <option value="MAS Theme">MAS Theme</option>
                        <option value="WPP">WPP</option>
                        <option value="Telecom">Telecom</option>
                        <option value="AI in Sales">AI in Sales</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Note</button>
                </div>
            </form>
        `;

        this.openModal('Quick Note', content);

        document.getElementById('add-note-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveNote(new FormData(e.target));
        });
    }

    openUpdateKRModal(krId) {
        // Find the KR
        let targetKR = null;
        let parentOKR = null;

        for (const okr of MetosinData.okrs) {
            const kr = okr.keyResults.find(k => k.id === krId);
            if (kr) {
                targetKR = kr;
                parentOKR = okr;
                break;
            }
        }

        if (!targetKR) return;

        const content = `
            <form id="update-kr-form">
                <div class="form-group">
                    <label class="form-label">Key Result</label>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">${targetKR.description}</p>
                </div>
                <div class="grid grid-2">
                    <div class="form-group">
                        <label class="form-label">Current Value</label>
                        <input type="number" class="form-input" name="current" value="${targetKR.current}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Target</label>
                        <input type="number" class="form-input" value="${targetKR.target}" disabled>
                    </div>
                </div>
                <div class="progress-container" style="margin-top: 1rem;">
                    <div class="progress-bar">
                        <div class="progress-fill primary" style="width: ${Math.min((targetKR.current / targetKR.target) * 100, 100)}%"></div>
                    </div>
                    <p class="text-muted" style="font-size: 0.8rem; margin-top: 0.5rem;">
                        Current progress: ${Math.round((targetKR.current / targetKR.target) * 100)}%
                    </p>
                </div>
                <input type="hidden" name="krId" value="${krId}">
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="app.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Update Progress</button>
                </div>
            </form>
        `;

        this.openModal('Update Key Result', content);

        document.getElementById('update-kr-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateKRProgress(new FormData(e.target));
        });
    }

    // Data Save Functions
    saveMeeting(formData) {
        const meeting = {
            id: 'meet-' + Date.now(),
            title: formData.get('title'),
            account: formData.get('account'),
            type: formData.get('type'),
            date: formData.get('date'),
            time: formData.get('time'),
            attendees: formData.getAll('attendees'),
            stakeholderLevel: formData.get('stakeholderLevel'),
            status: 'scheduled',
            notes: '',
            followUp: ''
        };

        MetosinData.meetings.push(meeting);
        this.saveToLocalStorage();
        this.closeModal();
        this.showNotification('Meeting added successfully');

        if (this.currentView === 'meetings' || this.currentView === 'dashboard') {
            this.loadView(this.currentView);
        }
    }

    saveActivity(formData) {
        const activity = {
            id: 'act-' + Date.now(),
            title: formData.get('title'),
            type: 'task',
            priority: formData.get('priority'),
            assignee: formData.get('assignee'),
            dueDate: formData.get('dueDate'),
            status: 'pending',
            initiative: formData.get('initiative'),
            description: formData.get('description')
        };

        MetosinData.activities.push(activity);
        this.saveToLocalStorage();
        this.closeModal();
        this.showNotification('Task added successfully');

        if (this.currentView === 'activities' || this.currentView === 'dashboard') {
            this.loadView(this.currentView);
        }
    }

    savePipelineItem(formData) {
        const item = {
            id: 'pipe-' + Date.now(),
            name: formData.get('name'),
            account: formData.get('account'),
            stage: formData.get('stage'),
            value: parseInt(formData.get('value')),
            probability: parseInt(formData.get('probability')),
            owner: formData.get('owner'),
            nextStep: formData.get('nextStep'),
            expectedClose: formData.get('expectedClose')
        };

        MetosinData.pipeline.push(item);
        this.saveToLocalStorage();
        this.closeModal();
        this.showNotification('Opportunity added successfully');

        if (this.currentView === 'pipeline' || this.currentView === 'dashboard') {
            this.loadView(this.currentView);
        }
    }

    saveNote(formData) {
        // For now, just show a notification
        // In a real app, this would save to a notes collection
        this.closeModal();
        this.showNotification('Note saved');
    }

    updateKRProgress(formData) {
        const krId = formData.get('krId');
        const newValue = parseInt(formData.get('current'));

        for (const okr of MetosinData.okrs) {
            const kr = okr.keyResults.find(k => k.id === krId);
            if (kr) {
                kr.current = newValue;
                break;
            }
        }

        this.saveToLocalStorage();
        this.closeModal();
        this.showNotification('Progress updated');
        this.loadView(this.currentView);
    }

    updateMeetingStatus(meetingId, status) {
        const meeting = MetosinData.meetings.find(m => m.id === meetingId);
        if (meeting) {
            meeting.status = status;
            this.saveToLocalStorage();
            this.loadView(this.currentView);
        }
    }

    updateActivityStatus(activityId, status) {
        const activity = MetosinData.activities.find(a => a.id === activityId);
        if (activity) {
            activity.status = status;
            this.saveToLocalStorage();
            this.loadView(this.currentView);
        }
    }

    // Local Storage Functions
    saveToLocalStorage() {
        try {
            localStorage.setItem('metosin-data', JSON.stringify(MetosinData));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }

    loadStoredData() {
        try {
            const stored = localStorage.getItem('metosin-data');
            if (stored) {
                const data = JSON.parse(stored);
                // Merge stored data with default data
                Object.assign(MetosinData, data);
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    }

    // Notification helper
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--accent-green);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 2000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new MetosinApp();
});
