module.exports = [
"[project]/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getProjectBySlug",
    ()=>getProjectBySlug
]);
const projects = [
    {
        slug: 'refreshed-3d-carousel',
        title: 'Refreshed Probiotic Soda — 3D Carousel UI (Figma)',
        description: 'Interactive 3D carousel concept with dynamic transitions to boost engagement for a probiotic soda brand.',
        tags: [
            'Figma',
            'UI Motion',
            'Prototype'
        ],
        demo: 'https://www.figma.com/proto/M0G1ARuvJFHCIIFBCPrPlg/Refreshed?t=WyxayQswpKyth8Wc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&show-proto-sidebar=1',
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&q=60'
    },
    {
        slug: 'mindnest',
        title: 'MindNest — Mental Health App Prototype',
        description: 'Mobile experience focused on mood tracking, guided journaling, and calming UI for teens/young adults.',
        tags: [
            'Figma',
            'UX',
            'Prototype'
        ],
        demo: 'https://www.figma.com/proto/JtMmthD0biKAElpL1CXA2i/Good-Health-and-Well-being?node-id=1-3&p=f&t=0mNDI8fXVOG8zJUM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=60'
    },
    {
        slug: 'path-in-motion',
        title: 'Path in Motion — Brand & Content',
        description: 'Brand/account showcasing internship & job discovery; social strategy, content design, and audience growth experiments.',
        tags: [
            'Branding',
            'Content',
            'Social'
        ],
        demo: 'https://www.instagram.com/pathinmotion/?igsh=MXJrNzJzeGoycmc1dg%3D%3D#',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60'
    },
    {
        slug: 'adobe-express-1',
        title: 'Campaign Graphics Set (Adobe Express)',
        description: 'Published social graphics; color/typography system and export-ready assets.',
        tags: [
            'Adobe Express',
            'Graphics'
        ],
        demo: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:US:2a5f6157-085f-48bd-a08f-c32754cc61e5?category=search',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=60'
    },
    {
        slug: 'adobe-express-2',
        title: 'Carousel + Poster Set (Adobe Express)',
        description: 'Additional published set exploring hierarchy, rhythm, and contrast for engagement.',
        tags: [
            'Adobe Express',
            'Graphics'
        ],
        demo: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:US:1ee6bf81-f788-45ba-8ef0-830b3aa024be?category=search',
        image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d5?w=1200&q=60'
    },
    {
        slug: 'ewallet',
        title: 'EWallet (Java Swing, SQL)',
        description: 'GUI wallet with login/auth, expense tracking, and planned DB integration; GitFlow + Trello workflow.',
        tags: [
            'Java',
            'Swing',
            'SQL'
        ],
        repo: 'https://github.com/cheesecheeseCHEEESE/Ewallet-SENG210',
        image: 'https://images.unsplash.com/photo-1554224155-3a589877462f?w=1200&q=60'
    },
    {
        slug: 'legacy-html',
        title: 'Legacy Projects Page (HTML Portfolio)',
        description: 'Earlier collection of web work; kept for history and extra context.',
        tags: [
            'HTML/CSS',
            'Archive'
        ],
        demo: 'https://watkinsamya.github.io/amya-portfolio/projects.html',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=60',
        caseStudy: false
    }
];
function getProjectBySlug(slug) {
    return projects.find((p)=>p.slug === slug);
}
const __TURBOPACK__default__export__ = projects;
}),
"[project]/components/ProjectsGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ProjectsGrid({ limit }) {
    const list = typeof limit === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].slice(0, limit) : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
        children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "card hover:shadow-lg transition flex flex-col",
                initial: {
                    opacity: 0,
                    y: 12
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: p.demo || p.repo || `/projects/${p.slug}`,
                        target: p.demo || p.repo ? '_blank' : '_self',
                        rel: "noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[16/10] rounded-xl bg-neutral-100 mb-4",
                            style: {
                                backgroundImage: `url(${p.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectsGrid.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold",
                        children: p.title
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-600 mt-1 flex-1",
                        children: p.description
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge",
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 25,
                                columnNumber: 30
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-2",
                        children: [
                            p.caseStudy !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "btn-outline",
                                href: `/projects/${p.slug}`,
                                children: "Read case study"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            p.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn-outline",
                                href: p.repo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "View code"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 32,
                                columnNumber: 24
                            }, this),
                            !p.repo && p.demo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn-outline",
                                href: p.demo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "View prototype"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 33,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, p.slug, true, {
                fileName: "[project]/components/ProjectsGrid.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ProjectsGrid.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_1b5709d8._.js.map