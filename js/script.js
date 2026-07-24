// Global projects detail metadata data-store
const projectsData = {
    hospital: {
        title: "Hospital Analytics Dashboard",
        images: [
            "Dashboard images/Power BI/DEPI/Hospital Dashboard_P1_Overview.png",
            "Dashboard images/Power BI/DEPI/Hospital Dashboard_P2_Medical Analysis.png",
            "Dashboard images/Power BI/DEPI/Hospital Dashboard_P3_Financial Analysis.png"
        ],
        tools: "Power BI, Power Query, DAX, Data Modeling",
        dataset: "Clinical Workload & Financial Records",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/DEPI/Power%20BI/Power%20BI%206",
        readme: "### Overview\nThis 3-page interactive hospital analytics dashboard maps clinical workloads, patient department admissions, and hospital financial performance. It helps hospital administration optimize resource allocation and evaluate profitability.\n\n### Key Insights & Features\n- **Clinical Admissions:** Tracks patient admissions, average length of stay, and department workload over time.\n- **Medical Analysis:** Visualizes physician metrics, clinical department load, and patient satisfaction ratings.\n- **Financial Analysis:** Explores revenue trends, expenses, and net profit margins across departments."
    },
    amazon: {
        title: "Amazon Product Sales Dashboard",
        images: [
            "Dashboard images/Power BI/DEPI/Amazon Dashboard_P1_Overview.png",
            "Dashboard images/Power BI/DEPI/Amazon Dashboard_P2_Products.png",
            "Dashboard images/Power BI/DEPI/Amazon Dashboard_P3_Product view.png",
            "Dashboard images/Power BI/DEPI/Amazon Dashboard_Tooltip.png"
        ],
        tools: "Power BI, Data Modeling, DAX, Power Query",
        dataset: "Amazon Sales Dataset",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/DEPI/Power%20BI/Power%20BI%203",
        readme: "### Overview\nA comprehensive 4-page dashboard analyzing Amazon product sales, units sold, and customer ratings. It features dynamic toggles for quick metric switching and drill-down product lookup details.\n\n### Key Insights & Features\n- **Sales & Units Toggle:** Instantly switches dashboard charts between revenue and units sold.\n- **Product Lookups:** Detailed card overlays and tooltips showing individual product performance and sales rank.\n- **Dynamic Modeling:** Star-schema database design connecting sales fact tables with customer demographics and category dimensions."
    },
    dssurvey: {
        title: "Data Science Survey Analytics",
        images: [
            "Dashboard images/Power BI/DEPI/Data Science Survey Dashboard_P1_Overview.png",
            "Dashboard images/Power BI/DEPI/Data Science Survey Dashboard_P2_Career.png",
            "Dashboard images/Power BI/DEPI/Data Science Survey Dashboard_P3_Satisfaction.png"
        ],
        tools: "Power BI, Power Query, Data Cleaning, ETL",
        dataset: "Global Data Science Survey",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/DEPI/Power%20BI/Power%20BI%202",
        readme: "### Overview\nAn in-depth dashboard examining career trends, education, salaries, and tool satisfaction values across the global data science community. Raw survey response data was cleaned and transformed using Power Query.\n\n### Key Insights & Features\n- **Salary Demographics:** Breaks down average salary by country, experience level, and job title.\n- **Tool Satisfaction:** Evaluates user feedback and satisfaction ratings for python, R, SQL, and BI tools.\n- **Education Pathways:** Displays certificates, university degrees, and self-learning preferences of survey respondents."
    },
    adventureworks: {
        title: "Sales Performance Dashboard",
        images: [
            "Dashboard images/Power BI/EraaSoft/Sales Performance Dashboard.png",
            "Dashboard images/Power BI/EraaSoft/Sales Performance Dashboard Drill Through Snapshot.png"
        ],
        tools: "Power BI, SQL Server, DirectQuery, DAX",
        dataset: "AdventureWorks Database",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/EraaSoft/Power%20BI/Power%20BI%203",
        readme: "### Overview\nA live-connected Power BI dashboard utilizing DirectQuery to report real-time sales performance. Key performance indicators track orders, delay metrics, and salesperson drilling cards.\n\n### Key Insights & Features\n- **Live SQL Server Connection:** Demonstrates real-time querying capabilities with DirectQuery database integration.\n- **Salesperson Performance:** Provides drill-through pages analyzing individual salesperson contributions and targets.\n- **Order Delay Metrics:** Identifies logistics bottlenecks by tracking order processing and delivery lag times."
    },
    excelsales: {
        title: "Excel Sales Performance Dashboard",
        images: [
            "Dashboard images/Excel/DEPI/Sales Performace Dashboard.png"
        ],
        tools: "Excel, PivotTables, Slicers, Data Visualization",
        dataset: "Corporate Sales Records",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/DEPI/Excel/Excel%201",
        readme: "### Overview\nAn interactive sales performance dashboard built entirely in Excel. Enables dynamic exploration of sales, profits, discounts, and production costs by category, month, and year.\n\n### Key Insights & Features\n- **Interactive Slicers:** Allows immediate filtering by region, category, and sales channel.\n- **Profitability Analysis:** Pinpoints products with high discounts that affect overall profit margins.\n- **Time Series Insights:** Displays weekly and monthly sales trends with integrated target lines."
    },
    excelretail: {
        title: "Excel Retail Electronics Sales",
        images: [
            "Dashboard images/Excel/EraaSoft/Sales Performance.png"
        ],
        tools: "Excel, Power Pivot, Data Modeling, DAX",
        dataset: "Electronics Branch Sales (Egypt)",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/EraaSoft/Excel",
        readme: "### Overview\nA data model dashboard utilizing Excel Power Pivot to analyze electronics retail performance. Tracks branch profitability, electronics classes, and product segments across regional markets.\n\n### Key Insights & Features\n- **Power Pivot Data Model:** Integrates multiple tables into a unified relational data model inside Excel.\n- **Branch Profitability:** Compares performance of retail outlets in Egypt to identify top revenue generators.\n- **Product Segment Analysis:** Analyzes sales distribution by product category (laptops, phones, smart home devices)."
    },
    excelorder: {
        title: "Excel Order Analysis Dashboard",
        images: [
            "Dashboard images/Excel/EraaSoft/Order Analysis.png"
        ],
        tools: "Excel, Power Pivot, Data Modeling",
        dataset: "E-Commerce Orders Dataset",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/EraaSoft/Excel",
        readme: "### Overview\nAn Excel dashboard built with Power Pivot analyzing regional order distribution, product performance, and customer return rates.\n\n### Key Insights & Features\n- **Regional Distribution:** Maps sales volume and order numbers by geographical region.\n- **Product Performance:** Details best-selling products and ranks categories by overall profitability.\n- **Return Rate Tracking:** Visualizes return percentages to help identify product quality issues or delivery challenges."
    },
    excelsalesdist: {
        title: "Excel Sales Distribution",
        images: [
            "Dashboard images/Excel/DEPI/Sales Distribution.png"
        ],
        tools: "Excel, Power Pivot, Target Tracking",
        dataset: "Sales Target & Revenue Data",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/DEPI/Excel/Excel%202",
        readme: "### Overview\nAn Excel analytical dashboard tracking weekly revenue trends, evaluating sales performance against pre-set business targets, and breaking down sales distribution by region.\n\n### Key Insights & Features\n- **Sales-to-Target Evaluation:** Measures individual sales rep and regional team performance against quarterly goals.\n- **Weekly Trends:** Visualizes revenue fluctuations week-over-week to highlight seasonal demand.\n- **Regional Distribution:** Breaks down sales volume by territory to optimize inventory management."
    },
    pythoneda: {
        title: "Python Data Cleaning & EDA",
        images: [
            "images/python_analysis.png"
        ],
        tools: "Python, Pandas, Plotly, Jupyter Notebooks",
        dataset: "Sales Transaction Data",
        github: "https://github.com/nourhankha1ifa/Data_Analysis/tree/main/DEPI/Python",
        readme: "### Overview\nA comprehensive Jupyter Notebook covering the data cleaning and exploratory data analysis (EDA) pipeline. Resolves data anomalies, handles missing values, and performs multivariate statistical profiling.\n\n### Key Insights & Features\n- **Anomalies Detection:** Cleans duplicate entries, corrects spelling inconsistencies, and handles outliers using robust statistical metrics.\n- **Exploratory Data Analysis:** Explores correlation matrices, distributions, and patterns among variables.\n- **Interactive Visualizations:** Employs Plotly to build interactive, publishable graphs illustrating data profiles."
    }
};

// Helper function to safely build Lucide-style SVG icons
function createLucideIcon(iconName) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.style.width = '16px';
    svg.style.height = '16px';
    svg.style.display = 'inline-block';
    svg.style.verticalAlign = 'middle';

    if (iconName === 'database') {
        const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipse.setAttribute('cx', '12');
        ellipse.setAttribute('cy', '5');
        ellipse.setAttribute('rx', '9');
        ellipse.setAttribute('ry', '3');
        svg.appendChild(ellipse);
        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5');
        svg.appendChild(path1);
        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('d', 'M3 12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12');
        svg.appendChild(path2);
    } else if (iconName === 'wrench') {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z');
        svg.appendChild(path);
    } else if (iconName === 'github') {
        const i = document.createElement('i');
        i.className = 'devicon-github-original';
        i.style.fontSize = '16px';
        i.style.display = 'inline-block';
        return i;
    }
    return svg;
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    /* --- Theme Toggle Logic --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const cachedTheme = localStorage.getItem('theme') || 'dark';

    // Set initial theme
    document.documentElement.setAttribute('data-theme', cachedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    /* --- Sticky Header & Active Scroll Link --- */
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Sticky Header transition
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Nav link updates
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    /* --- Mobile Menu Navigation --- */
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* --- Scroll Reveal Animations --- */
    const animItems = document.querySelectorAll('.scroll-animate');

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animItems.forEach(item => {
        scrollObserver.observe(item);
    });

    /* --- Typewriter Hero Effect --- */
    const typewriter = document.getElementById('typewriter');
    const titles = ["Data Analyst", "Data Scientist"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function handleTypewriter() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            typewriter.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            delay = 75; // delete faster
        } else {
            typewriter.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            delay = 150;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            delay = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            delay = 500; // Pause before typing next word
        }

        setTimeout(handleTypewriter, delay);
    }

    // Start typewriter
    setTimeout(handleTypewriter, 1000);

    /* --- Projects Filtering Grid --- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    // Trigger reflow for animation
                    void card.offsetWidth;
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px) scale(0.95)';
                    // Delay hiding from layout to allow fade out animation
                    setTimeout(() => {
                        if (btn.getAttribute('data-filter') !== 'all' && !card.getAttribute('data-category').split(' ').includes(btn.getAttribute('data-filter'))) {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });


    // Markdown-to-DOM parser function (Avoids innerHTML)
    function renderMarkdownToDom(markdownText, container) {
        container.replaceChildren();
        if (!markdownText) return;

        const lines = markdownText.split('\n');
        let activeList = null;
        let activeTable = null;
        let tableHeaderSeen = false;

        lines.forEach(line => {
            const trimmed = line.trim();

            // Handle lists
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                if (activeTable) { activeTable = null; }
                if (!activeList) {
                    activeList = document.createElement('ul');
                    activeList.style.paddingLeft = '1.25rem';
                    activeList.style.marginBottom = '1rem';
                    activeList.style.listStyle = 'disc';
                    container.appendChild(activeList);
                }
                const li = document.createElement('li');
                li.style.marginBottom = '0.25rem';
                li.style.fontSize = '0.925rem';
                li.style.color = 'var(--text-muted)';
                li.textContent = trimmed.substring(2).replace(/\*\*/g, '').replace(/`/g, '');
                activeList.appendChild(li);
                return;
            } else {
                activeList = null;
            }

            // Handle tables
            if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                if (trimmed.includes('---')) {
                    return;
                }
                if (!activeTable) {
                    activeTable = document.createElement('table');
                    activeTable.style.width = '100%';
                    activeTable.style.borderCollapse = 'collapse';
                    activeTable.style.marginBottom = '1.5rem';
                    activeTable.style.fontSize = '0.9rem';
                    container.appendChild(activeTable);
                    tableHeaderSeen = false;
                }
                const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
                const row = document.createElement('tr');
                cells.forEach(cellText => {
                    const cell = document.createElement(tableHeaderSeen ? 'td' : 'th');
                    cell.textContent = cellText.replace(/\*\*/g, '').replace(/`/g, '');
                    cell.style.border = '1px solid var(--border-color)';
                    cell.style.padding = '0.5rem 0.75rem';
                    if (!tableHeaderSeen) {
                        cell.style.background = 'var(--surface-solid)';
                        cell.style.textAlign = 'left';
                        cell.style.fontWeight = '600';
                    }
                    row.appendChild(cell);
                });
                activeTable.appendChild(row);
                if (!tableHeaderSeen) {
                    tableHeaderSeen = true;
                }
                return;
            } else {
                activeTable = null;
            }

            if (!trimmed) return;

            // Handle headings
            if (trimmed.startsWith('### ')) {
                const h = document.createElement('h5');
                h.textContent = trimmed.substring(4).replace(/\*\*/g, '').replace(/`/g, '');
                h.style.fontSize = '1rem';
                h.style.fontWeight = '600';
                h.style.marginTop = '1.2rem';
                h.style.marginBottom = '0.6rem';
                h.style.color = 'var(--color-primary)';
                container.appendChild(h);
            } else if (trimmed.startsWith('## ')) {
                const h = document.createElement('h4');
                h.textContent = trimmed.substring(3).replace(/\*\*/g, '').replace(/`/g, '');
                h.style.fontSize = '1.15rem';
                h.style.fontWeight = '600';
                h.style.marginTop = '1.5rem';
                h.style.marginBottom = '0.75rem';
                h.style.borderBottom = '1px solid var(--border-color)';
                h.style.paddingBottom = '0.25rem';
                h.style.color = 'var(--text-color)';
                container.appendChild(h);
            } else if (trimmed.startsWith('# ')) {
                const h = document.createElement('h3');
                h.textContent = trimmed.substring(2).replace(/\*\*/g, '').replace(/`/g, '');
                h.style.fontSize = '1.4rem';
                h.style.fontWeight = '700';
                h.style.marginBottom = '1rem';
                h.style.color = 'var(--text-color)';
                container.appendChild(h);
            } else {
                if (trimmed === '---') {
                    const hr = document.createElement('hr');
                    hr.style.border = 'none';
                    hr.style.borderTop = '1px solid var(--border-color)';
                    hr.style.margin = '1.5rem 0';
                    container.appendChild(hr);
                    return;
                }
                if (trimmed.startsWith('![') || trimmed.startsWith('<br') || trimmed.startsWith('<img')) {
                    return;
                }
                const p = document.createElement('p');
                p.textContent = trimmed.replace(/\*\*/g, '').replace(/`/g, '');
                p.style.marginBottom = '1rem';
                p.style.lineHeight = '1.6';
                p.style.color = 'var(--text-muted)';
                container.appendChild(p);
            }
        });
    }

    /* --- Modals & Carousel Toggle Logic (Strictly Secure DOM Sinks) --- */
    const modalOverlay = document.getElementById('modal-overlay');
    const projectModal = document.getElementById('project-modal');
    const projectModalClose = document.getElementById('project-modal-close');
    const projectModalBody = document.getElementById('project-modal-body');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxModalClose = document.getElementById('lightbox-modal-close');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    let currentSlide = 0;
    let slidesCount = 0;
    let carouselTrack = null;

    // Open Project Details Modal
    document.querySelectorAll('.view-project-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project-id');
            const project = projectsData[projectId];

            if (project) {
                populateProjectModal(project);
                modalOverlay.classList.add('active');
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // prevent background scrolling
            }
        });
    });

    // Populate Modal safely
    function populateProjectModal(project) {
        projectModalBody.replaceChildren(); // clear old elements

        // Title
        const titleEl = document.createElement('h3');
        titleEl.className = 'modal-project-title';
        titleEl.textContent = project.title;
        projectModalBody.appendChild(titleEl);

        // Carousel Container
        const carousel = document.createElement('div');
        carousel.className = 'modal-carousel';

        const track = document.createElement('div');
        track.className = 'modal-carousel-track';
        carouselTrack = track;

        currentSlide = 0;
        slidesCount = project.images.length;

        project.images.forEach(imgSrc => {
            const slide = document.createElement('div');
            slide.className = 'modal-carousel-slide';

            const img = document.createElement('img');
            img.setAttribute('src', imgSrc);
            img.setAttribute('alt', project.title + " View");

            slide.appendChild(img);
            track.appendChild(slide);
        });
        carousel.appendChild(track);

        // Prev/Next Navigation buttons for Carousel
        if (slidesCount > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'carousel-nav-btn carousel-prev-btn';
            prevBtn.setAttribute('aria-label', 'Previous slide');
            prevBtn.appendChild(createSvgArrow('left'));
            prevBtn.addEventListener('click', () => rotateCarousel(currentSlide - 1));

            const nextBtn = document.createElement('button');
            nextBtn.className = 'carousel-nav-btn carousel-next-btn';
            nextBtn.setAttribute('aria-label', 'Next slide');
            nextBtn.appendChild(createSvgArrow('right'));
            nextBtn.addEventListener('click', () => rotateCarousel(currentSlide + 1));

            carousel.appendChild(prevBtn);
            carousel.appendChild(nextBtn);

            // Dot Indicators
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'carousel-dots';
            for (let i = 0; i < slidesCount; i++) {
                const dot = document.createElement('span');
                dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => rotateCarousel(i));
                dotsContainer.appendChild(dot);
            }
            carousel.appendChild(dotsContainer);
        }
        projectModalBody.appendChild(carousel);

        // Details Grid Layout
        const detailsGrid = document.createElement('div');
        detailsGrid.className = 'modal-project-details-grid';

        // Left Side details
        const leftCol = document.createElement('div');
        leftCol.className = 'modal-details-left';

        const readmeContainer = document.createElement('div');
        readmeContainer.className = 'modal-readme-content';
        renderMarkdownToDom(project.readme, readmeContainer);
        leftCol.appendChild(readmeContainer);

        detailsGrid.appendChild(leftCol);

        // Right Side Meta details
        const rightCol = document.createElement('div');
        rightCol.className = 'modal-details-right';

        const metaTitle = document.createElement('h4');
        metaTitle.className = 'modal-details-title';
        metaTitle.textContent = "Project Metadata";
        rightCol.appendChild(metaTitle);

        // Dataset Meta
        if (project.dataset && project.dataset !== "N/A") {
            const metaDataset = document.createElement('div');
            metaDataset.className = 'modal-meta-item';

            const lbl1 = document.createElement('span');
            lbl1.className = 'modal-meta-label';

            // Database Icon
            const dbIcon = createLucideIcon('database');
            dbIcon.style.marginRight = '0.35rem';
            lbl1.appendChild(dbIcon);

            const dbText = document.createElement('span');
            dbText.textContent = "Data Source";
            lbl1.appendChild(dbText);

            const val1 = document.createElement('span');
            val1.className = 'modal-meta-value';
            val1.textContent = project.dataset;

            metaDataset.appendChild(lbl1);
            metaDataset.appendChild(val1);
            rightCol.appendChild(metaDataset);
        }

        // Tools Meta
        const metaTools = document.createElement('div');
        metaTools.className = 'modal-meta-item';

        const lbl2 = document.createElement('span');
        lbl2.className = 'modal-meta-label';

        // Tool Icon
        const toolIcon = createLucideIcon('wrench');
        toolIcon.style.marginRight = '0.35rem';
        lbl2.appendChild(toolIcon);

        const toolText = document.createElement('span');
        toolText.textContent = "Tools & Libraries";
        lbl2.appendChild(toolText);

        const val2 = document.createElement('span');
        val2.className = 'modal-meta-value';
        val2.textContent = project.tools;

        metaTools.appendChild(lbl2);
        metaTools.appendChild(val2);
        rightCol.appendChild(metaTools);

        // Action CTA
        const githubLink = document.createElement('a');
        githubLink.setAttribute('href', project.github);
        githubLink.setAttribute('target', '_blank');
        githubLink.setAttribute('rel', 'noopener noreferrer');
        githubLink.className = 'btn btn-primary';
        githubLink.style.marginTop = '1rem';
        githubLink.style.display = 'inline-flex';
        githubLink.style.alignItems = 'center';
        githubLink.style.gap = '0.5rem';

        const gitIcon = createLucideIcon('github');
        gitIcon.style.stroke = '#fff';
        githubLink.appendChild(gitIcon);

        const linkText = document.createTextNode("Explore Source Code");
        githubLink.appendChild(linkText);

        rightCol.appendChild(githubLink);

        detailsGrid.appendChild(rightCol);
        projectModalBody.appendChild(detailsGrid);
    }

    function rotateCarousel(index) {
        if (index < 0) {
            currentSlide = slidesCount - 1;
        } else if (index >= slidesCount) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        // Move track
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dot states
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function createSvgArrow(dir) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '3');
        svg.style.width = '18px';
        svg.style.height = '18px';

        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        if (dir === 'left') {
            poly.setAttribute('points', '15 18 9 12 15 6');
        } else {
            poly.setAttribute('points', '9 18 15 12 9 6');
        }
        svg.appendChild(poly);
        return svg;
    }

    // Open Lightbox for Certificates
    let activePdfPath = null;

    lightboxCaption.addEventListener('click', () => {
        if (activePdfPath) {
            window.open(activePdfPath, "_blank", "noopener,noreferrer");
        }
    });

    document.querySelectorAll('.open-certificate-lightbox').forEach(btn => {
        btn.addEventListener('click', () => {
            const imgPath = btn.getAttribute('data-img-path');
            const pdfPath = btn.getAttribute('data-pdf-path');
            const caption = btn.getAttribute('data-caption');

            lightboxImage.setAttribute('src', imgPath);
            lightboxCaption.textContent = caption;

            activePdfPath = pdfPath || null;
            if (activePdfPath) {
                lightboxCaption.classList.add('has-pdf');
            } else {
                lightboxCaption.classList.remove('has-pdf');
            }

            modalOverlay.classList.add('active');
            lightboxModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close Modals logic
    function closeAllModals() {
        modalOverlay.classList.remove('active');
        projectModal.style.display = 'none';
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // restore scroll
    }

    projectModalClose.addEventListener('click', closeAllModals);
    lightboxModalClose.addEventListener('click', closeAllModals);

    // Close on overlay background click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeAllModals();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    /* --- Contact Form Handling --- */
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const feedbackPanel = document.getElementById('form-feedback-panel');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Perform basic input validation
        const nameVal = document.getElementById('form-name').value.trim();
        const emailVal = document.getElementById('form-email').value.trim();
        const subjectVal = document.getElementById('form-subject').value.trim();
        const messageVal = document.getElementById('form-message').value.trim();

        if (!nameVal || !emailVal || !subjectVal || !messageVal) {
            showFeedback("Please populate all form inputs before submitting.", "error");
            return;
        }

        // Email validation regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            showFeedback("Please introduce a valid email address.", "error");
            return;
        }

        // Update button state (Simulate sending)
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Delivering message...";

        // Simulate AJAX request
        setTimeout(() => {
            showFeedback(`Thank you, ${nameVal}! Your message has been sent successfully. Nourhan will get back to you soon.`, "success");
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;

            // Auto hide feedback after 8 seconds
            setTimeout(() => {
                feedbackPanel.style.display = 'none';
                feedbackPanel.replaceChildren();
            }, 8000);
        }, 1500);
    });

    function showFeedback(text, type) {
        feedbackPanel.replaceChildren(); // clear old elements

        feedbackPanel.className = `form-feedback ${type}`;
        feedbackPanel.textContent = text;
        feedbackPanel.style.display = 'block';
    }



    /* --- Back-To-Top Toggle Logic --- */
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.style.display = 'flex';
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
            // Wait for fadeout animation
            setTimeout(() => {
                if (window.scrollY <= 400) {
                    backToTop.style.display = 'none';
                }
            }, 300);
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* --- Dynamic Viewer Counter --- */
    const viewerValEl = document.getElementById('viewer-val');
    if (viewerValEl) {
        const hasCounted = sessionStorage.getItem('counted_this_session');
        let apiUrl = 'https://countapi.mileshilliard.com/api/v1/hit/nourhankhalifa_portfolio_site_views_2026';
        if (hasCounted) {
            // Just get the current view count without incrementing
            apiUrl = 'https://countapi.mileshilliard.com/api/v1/get/nourhankhalifa_portfolio_site_views_2026';
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                if (data && typeof data.value === 'number') {
                    viewerValEl.textContent = data.value.toLocaleString();
                    if (!hasCounted) {
                        sessionStorage.setItem('counted_this_session', 'true');
                    }
                }
            })
            .catch(err => {
                console.error("Failed to fetch live viewer count:", err);
                // Secure client-side fallback if the public counter service is offline
                let views = localStorage.getItem('portfolio_view_count') || 0;
                views = parseInt(views, 10);
                if (!hasCounted) {
                    views++;
                    localStorage.setItem('portfolio_view_count', views);
                    sessionStorage.setItem('counted_this_session', 'true');
                }
                viewerValEl.textContent = views.toLocaleString();
            });
    }

});
