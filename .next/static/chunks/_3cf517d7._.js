(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectSlugs",
    ()=>getProjectSlugs,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: 'probiotic-3d',
        title: 'Refreshed Probiotic Soda — 3D Carousel UI (Figma)',
        summary: 'Interactive 3D carousel concept with smooth micro-interactions.',
        tags: [
            'UX',
            'UI',
            'Figma',
            'Motion'
        ],
        cover: '/covers/probiotic-3d.png',
        demo: 'https://www.figma.com/proto/M0G1ARuvJFHCIIFBCPrPlg/Refreshed?node-id=2-2&starting-point-node-id=2%3A2',
        caseStudy: false
    },
    {
        slug: 'mindnest',
        title: 'Mindnest — Mental Health App Prototype (Figma)',
        summary: 'Mood tracking, guided journaling, self-care.',
        tags: [
            'UX',
            'Prototype',
            'Figma'
        ],
        cover: '/covers/mindnest.png',
        demo: 'https://www.figma.com/proto/JtMmthD0biKAElpL1CXA2i/Good-Health-and-Well-being?node-id=1-3&starting-point-node-id=1%3A3',
        caseStudy: true
    },
    {
        slug: 'path-in-motion',
        title: 'Path in Motion — Brand & Social',
        summary: 'Brand visuals and social content system.',
        tags: [
            'Brand',
            'Graphics',
            'Content'
        ],
        cover: '/covers/path-in-motion.png',
        demo: 'https://www.instagram.com/pathinmotion/',
        caseStudy: false
    },
    {
        slug: 'ewallet',
        title: 'EWallet App (Java, Swing, SQL)',
        summary: 'GUI app with secure auth and expense tracking.',
        tags: [
            'Java',
            'Swing',
            'SQL'
        ],
        cover: '/covers/ewallet.png',
        code: 'https://github.com/watkinsamya',
        caseStudy: false
    }
];
function getProjectBySlug(slug) {
    return projects.find((p)=>p.slug === slug);
}
function getProjectSlugs() {
    return projects.map((p)=>p.slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectsGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const data = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p)=>{
    var _p_cover, _p_summary, _p_code;
    return {
        ...p,
        image: (_p_cover = p.cover) !== null && _p_cover !== void 0 ? _p_cover : p.image,
        description: (_p_summary = p.summary) !== null && _p_summary !== void 0 ? _p_summary : p.description,
        repo: (_p_code = p.code) !== null && _p_code !== void 0 ? _p_code : p.repo
    };
});
function ProjectsGrid(param) {
    let { limit } = param;
    const list = typeof limit === 'number' ? data.slice(0, limit) : data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
        children: list.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: p.demo || p.repo || "/projects/".concat(p.slug),
                        target: p.demo || p.repo ? '_blank' : '_self',
                        rel: "noreferrer",
                        className: "block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[16/10] rounded-xl mb-4 overflow-hidden bg-neutral-100",
                            children: p.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: p.image,
                                alt: "".concat(p.title, " cover"),
                                fill: true,
                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                className: "object-cover",
                                priority: p.slug === 'probiotic-3d'
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectsGrid.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold",
                        children: p.title
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-600 mt-1 flex-1",
                        children: p.description
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge",
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 58,
                                columnNumber: 30
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-2",
                        children: [
                            p.caseStudy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "btn-outline",
                                href: "/projects/".concat(p.slug),
                                children: "Read case study"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            p.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn-outline",
                                href: p.repo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "View code"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            !p.repo && p.demo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn-outline",
                                href: p.demo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGrid.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectsGrid.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, p.slug, true, {
                fileName: "[project]/components/ProjectsGrid.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ProjectsGrid.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ProjectsGrid;
var _c;
__turbopack_context__.k.register(_c, "ProjectsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3cf517d7._.js.map