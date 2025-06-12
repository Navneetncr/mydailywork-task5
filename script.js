
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        }
                    }
                }
            }
        }

  // Mock data for projects
        const projects = [
            {
                id: 1,
                name: "Website Redesign",
                description: "Complete redesign of company website with modern UI/UX",
                startDate: "2023-05-01",
                endDate: "2023-06-15",
                progress: 65,
                status: "active",
                tasks: [
                    { id: 101, title: "Design Homepage", status: "done", dueDate: "2023-05-10", assignee: "John Doe" },
                    { id: 102, title: "Develop Mobile Layout", status: "inprogress", dueDate: "2023-05-20", assignee: "Jane Smith" },
                    { id: 103, title: "Content Migration", status: "todo", dueDate: "2023-05-25", assignee: "Mike Johnson" }
                ]
            },
            {
                id: 2,
                name: "Mobile App Development",
                description: "Build new mobile application for iOS and Android",
                startDate: "2023-05-10",
                endDate: "2023-07-30",
                progress: 30,
                status: "active",
                tasks: [
                    { id: 201, title: "UI Prototyping", status: "done", dueDate: "2023-05-15", assignee: "Jane Smith" },
                    { id: 202, title: "Backend API Setup", status: "inprogress", dueDate: "2023-05-30", assignee: "Alex Brown" },
                    { id: 203, title: "User Authentication", status: "todo", dueDate: "2023-06-10", assignee: "John Doe" }
                ]
            },
            {
                id: 3,
                name: "Marketing Campaign",
                description: "Summer promotion campaign for new product line",
                startDate: "2023-06-01",
                endDate: "2023-06-30",
                progress: 10,
                status: "upcoming",
                tasks: [
                    { id: 301, title: "Create Ad Designs", status: "todo", dueDate: "2023-06-05", assignee: "Sarah Wilson" },
                    { id: 302, title: "Social Media Plan", status: "todo", dueDate: "2023-06-10", assignee: "Mike Johnson" }
                ]
            },
            {
                id: 4,
                name: "Database Migration",
                description: "Migrate legacy database to new cloud infrastructure",
                startDate: "2023-05-20",
                endDate: "2023-06-10",
                progress: 85,
                status: "active",
                tasks: [
                    { id: 401, title: "Backup Existing Data", status: "done", dueDate: "2023-05-22", assignee: "Alex Brown" },
                    { id: 402, title: "Test New Environment", status: "inprogress", dueDate: "2023-05-30", assignee: "John Doe" },
                    { id: 403, title: "Final Migration", status: "blocked", dueDate: "2023-06-05", assignee: "Alex Brown" }
                ]
            }
        ];
        
        // Mock data for tasks
        const tasks = [
            {
                id: 102,
                title: "Develop Mobile Layout",
                description: "Implement responsive design for mobile devices based on approved mockups",
                project: "Website Redesign",
                status: "inprogress",
                dueDate: "2023-05-20",
                assignee: "Jane Smith",
                progress: 45,
                comments: [
                    {
                        id: 1,
                        author: "Jane Smith",
                        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        date: "2023-05-12",
                        text: "Started working on the mobile navigation. Need feedback on the hamburger menu design."
                    },
                    {
                        id: 2,
                        author: "John Doe",
                        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        date: "2023-05-13",
                        text: "The design looks good. Let's make sure the transition animations are smooth."
                    }
                ]
            },
            {
                id: 202,
                title: "Backend API Setup",
                description: "Set up the backend API endpoints for the mobile app",
                project: "Mobile App Development",
                status: "inprogress",
                dueDate: "2023-05-30",
                assignee: "Alex Brown",
                progress: 70,
                comments: [
                    {
                        id: 1,
                        author: "Alex Brown",
                        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        date: "2023-05-18",
                        text: "Completed user authentication endpoints. Working on data models now."
                    }
                ]
            },
            {
                id: 403,
                title: "Final Migration",
                description: "Perform the final data migration after testing is complete",
                project: "Database Migration",
                status: "blocked",
                dueDate: "2023-06-05",
                assignee: "Alex Brown",
                progress: 0,
                comments: [
                    {
                        id: 1,
                        author: "Alex Brown",
                        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                        date: "2023-05-25",
                        text: "Waiting for approval from IT security team before proceeding with migration."
                    }
                ]
            },
            {
                id: 301,
                title: "Create Ad Designs",
                description: "Design promotional materials for summer campaign",
                project: "Marketing Campaign",
                status: "todo",
                dueDate: "2023-06-05",
                assignee: "Sarah Wilson",
                progress: 0,
                comments: []
            },
            {
                id: 103,
                title: "Content Migration",
                description: "Migrate all content from old CMS to new website",
                project: "Website Redesign",
                status: "todo",
                dueDate: "2023-05-25",
                assignee: "Mike Johnson",
                progress: 0,
                comments: []
            }
        ];
        
        // Team members
        const teamMembers = [
            {
                id: 1,
                name: "John Doe",
                role: "Frontend Developer",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                id: 2,
                name: "Jane Smith",
                role: "UI/UX Designer",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                id: 3,
                name: "Alex Brown",
                role: "Backend Developer",
                avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                id: 4,
                name: "Mike Johnson",
                role: "Content Manager",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                id: 5,
                name: "Sarah Wilson",
                role: "Graphic Designer",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
        ];
        
        // DOM elements
        const projectCardsContainer = document.querySelector('.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3');
        const tasksListContainer = document.querySelector('.divide-y.divide-gray-200.dark\\:divide-gray-700');
        const newProjectModal = document.getElementById('new-project-modal');
        const newProjectBtn = document.getElementById('new-project-btn');
        const cancelProjectBtn = document.getElementById('cancel-project-btn');
        const createProjectBtn = document.getElementById('create-project-btn');
        const newProjectForm = document.getElementById('new-project-form');
        const taskDetailsModal = document.getElementById('task-details-modal');
        const closeTaskDetailsBtn = document.getElementById('close-task-details');
        const cancelTaskBtn = document.getElementById('cancel-task-btn');
        const saveTaskBtn = document.getElementById('save-task-btn');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Format date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
        
        // Calculate days remaining
        function getDaysRemaining(endDate) {
            const today = new Date();
            const end = new Date(endDate);
            const diffTime = end - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }
        
        // Render project cards
        function renderProjects() {
            projectCardsContainer.innerHTML = '';
            
            projects.forEach(project => {
                const daysRemaining = getDaysRemaining(project.endDate);
                const statusClass = project.status === 'active' ? 'bg-green-100 text-green-800' : 
                                   project.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 
                                   'bg-gray-100 text-gray-800';
                
                const projectCard = document.createElement('div');
                projectCard.className = 'bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg project-card transition-all duration-200 ease-in-out';
                projectCard.innerHTML = `
                    <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-center justify-between">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">${project.name}</h3>
                            <span class="px-2 py-1 text-xs font-semibold rounded-full ${statusClass}">
                                ${project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                            </span>
                        </div>
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">${project.description}</p>
                        
                        <div class="mt-4">
                            <h4 class="sr-only">Progress</h4>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                                <span class="text-sm font-medium text-primary-600 dark:text-primary-400">${project.progress}%</span>
                            </div>
                            <div class="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div class="bg-primary-600 h-2 rounded-full" style="width: ${project.progress}%"></div>
                            </div>
                        </div>
                        
                        <div class="mt-4 flex items-center justify-between">
                            <div>
                                <span class="text-xs text-gray-500 dark:text-gray-400">Start: ${formatDate(project.startDate)}</span>
                                <span class="mx-1 text-xs text-gray-500 dark:text-gray-400">•</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">End: ${formatDate(project.endDate)}</span>
                            </div>
                            <span class="text-xs font-medium ${daysRemaining < 0 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}">
                                ${daysRemaining < 0 ? Math.abs(daysRemaining) + ' days overdue' : daysRemaining + ' days left'}
                            </span>
                        </div>
                        
                        <div class="mt-4">
                            <h4 class="sr-only">Team</h4>
                            <div class="flex -space-x-2">
                                ${project.tasks.slice(0, 5).map(task => {
                                    const member = teamMembers.find(m => m.name === task.assignee);
                                    return member ? `<img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="${member.avatar}" alt="${member.name}" title="${member.name}">` : '';
                                }).join('')}
                                ${project.tasks.length > 5 ? `<span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-500 dark:text-gray-300">+${project.tasks.length - 5}</span>` : ''}
                            </div>
                        </div>
                    </div>
                `;
                
                projectCardsContainer.appendChild(projectCard);
            });
        }
        
        // Render task list
        function renderTasks() {
            tasksListContainer.innerHTML = '';
            
            tasks.forEach(task => {
                const statusClass = task.status === 'todo' ? 'task-status-todo' : 
                                   task.status === 'inprogress' ? 'task-status-inprogress' : 
                                   task.status === 'done' ? 'task-status-done' : 
                                   'task-status-blocked';
                
                const statusText = task.status === 'todo' ? 'To Do' : 
                                  task.status === 'inprogress' ? 'In Progress' : 
                                  task.status === 'done' ? 'Done' : 
                                  'Blocked';
                
                const daysRemaining = getDaysRemaining(task.dueDate);
                const isOverdue = daysRemaining < 0;
                
                const taskItem = document.createElement('li');
                taskItem.className = 'px-4 py-4 sm:px-6';
                taskItem.innerHTML = `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center">
                                    <p class="truncate text-sm font-medium text-primary-600 dark:text-primary-400">${task.project}</p>
                                    <span class="mx-2 text-gray-400">•</span>
                                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">${formatDate(task.dueDate)}</p>
                                </div>
                                <h3 class="mt-1 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                                    <span class="truncate">${task.title}</span>
                                </h3>
                            </div>
                        </div>
                        <div class="ml-2 flex flex-shrink-0 items-center">
                            <span class="px-2 py-1 text-xs font-semibold rounded-full ${statusClass}">${statusText}</span>
                            <button class="ml-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 task-details-btn" data-task-id="${task.id}">
                                <i class="fas fa-ellipsis-v"></i>
                                <span class="sr-only">View details</span>
                            </button>
                        </div>
                    </div>
                    ${isOverdue ? `
                    <div class="mt-2 flex items-center text-sm text-red-500">
                        <i class="fas fa-exclamation-circle mr-1"></i>
                        <span>Overdue by ${Math.abs(daysRemaining)} days</span>
                    </div>
                    ` : ''}
                `;
                
                tasksListContainer.appendChild(taskItem);
            });
            
            // Add event listeners to task detail buttons
            document.querySelectorAll('.task-details-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const taskId = parseInt(btn.getAttribute('data-task-id'));
                    showTaskDetails(taskId);
                });
            });
        }
        
        // Show task details modal
        function showTaskDetails(taskId) {
            const task = tasks.find(t => t.id === taskId);
            if (!task) return;
            
            const statusClass = task.status === 'todo' ? 'task-status-todo' : 
                               task.status === 'inprogress' ? 'task-status-inprogress' : 
                               task.status === 'done' ? 'task-status-done' : 
                               'task-status-blocked';
            
            const statusText = task.status === 'todo' ? 'To Do' : 
                              task.status === 'inprogress' ? 'In Progress' : 
                              task.status === 'done' ? 'Done' : 
                              'Blocked';
            
            // Update modal content
            document.getElementById('task-title').textContent = task.title;
            document.getElementById('task-description').textContent = task.description;
            document.getElementById('task-project').textContent = task.project;
            document.getElementById('task-status').textContent = statusText;
            document.getElementById('task-status').className = `px-2 py-1 text-xs font-semibold rounded-full ${statusClass}`;
            document.getElementById('task-due-date').textContent = `Due: ${formatDate(task.dueDate)}`;
            
            const assignee = teamMembers.find(m => m.name === task.assignee);
            if (assignee) {
                document.getElementById('task-assignee').innerHTML = `
                    <img class="h-5 w-5 rounded-full mr-1" src="${assignee.avatar}" alt="">
                    ${assignee.name}
                `;
            }
            
            // Update progress
            const progressBar = document.getElementById('task-progress-bar');
            const progressText = document.getElementById('task-progress-text');
            progressBar.style.width = `${task.progress}%`;
            progressText.textContent = `${task.progress}% complete`;
            
            // Render comments
            const commentsContainer = taskDetailsModal.querySelector('.divide-y.divide-gray-200.dark\\:divide-gray-700');
            commentsContainer.innerHTML = '';
            
            task.comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'py-4';
                commentElement.innerHTML = `
                    <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8 rounded-full" src="${comment.avatar}" alt="${comment.author}">
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 dark:text-white">${comment.author}</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">${comment.date}</p>
                            <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">${comment.text}</p>
                        </div>
                    </div>
                `;
                commentsContainer.appendChild(commentElement);
            });
            
            // Show modal
            taskDetailsModal.classList.remove('hidden');
        }
        
        // Event listeners
        newProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newProjectModal.classList.remove('hidden');
        });
        
        cancelProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newProjectModal.classList.add('hidden');
        });
        
        createProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('project-name').value;
            const description = document.getElementById('project-description').value;
            const startDate = document.getElementById('project-start-date').value;
            const endDate = document.getElementById('project-end-date').value;
            
            if (name && startDate && endDate) {
                // In a real app, this would send data to the server
                alert(`Project "${name}" created successfully!`);
                newProjectModal.classList.add('hidden');
                newProjectForm.reset();
                
                // For demo purposes, add to projects array and re-render
                const newProject = {
                    id: projects.length + 1,
                    name,
                    description,
                    startDate,
                    endDate,
                    progress: 0,
                    status: "upcoming",
                    tasks: []
                };
                
                projects.unshift(newProject);
                renderProjects();
            } else {
                alert('Please fill in all required fields');
            }
        });
        
        closeTaskDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            taskDetailsModal.classList.add('hidden');
        });
        
        cancelTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            taskDetailsModal.classList.add('hidden');
        });
        
        saveTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real app, this would save changes to the server
            alert('Task changes saved!');
            taskDetailsModal.classList.add('hidden');
        });
        
        mobileMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.toggle('hidden');
        });
        
        // Navigation links
        document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // In a real app, this would navigate to different views
                alert(`Navigating to ${link.textContent}`);
            });
        });
        
        // Initialize the app
        document.addEventListener('DOMContentLoaded', () => {
            renderProjects();
            renderTasks();
        });       
