module.exports = {
    title: 'Developer Handbook',

    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],

    themeConfig: {
        sidebar: [
            '/',
            {
                title: 'Architecture',
                children: [
                    '/architecture/ddd',
                    '/architecture/rest',
                    '/architecture/microservices/',
                    '/architecture/eda',
                    '/architecture/12-factors',
                    '/architecture/object-calisthenics'
                ]
            },
            {
                title: 'Kubernetes',
                children: [
                    '/kubernetes/architecting-applications-for-kubernetes',
                    '/kubernetes/links'
                ]
            },
            {
                title: 'Java Backend',
                children: [
                    '/java-backend/',
                    '/java-backend/datetime',
                    '/java-backend/logging',
                    '/java-backend/dto',
                    '/java-backend/force-not-null',
                    '/java-backend/wf-engine'
                ]
            },
            {
                title: 'Frontend',
                children: [
                    '/frontend/js-frameworks/javascript-frameworks-seo-challenges',
                    '/frontend/css/css-best-practices',
                    '/frontend/js-frameworks/angular-code-guidelines',
                    '/frontend/architecture/spa-applications-architecture',
                    '/frontend/architecture/micro-frontends'
                ]
            },
            {
                title: 'Database',
                children: [
                    '/database/',
                ]
            },
            {
                title: 'API',
                children: [
                    '/api/general-guidelines',
                    '/api/naming',
                    '/api/resources',
                    '/api/request-response',
                    '/api/http',
                    '/api/json-guidelines',
                    '/api/foundations',
                ]
            },
            {
                title: 'Testing',
                children: [
                    '/testing/testing'
                ]
            },
            {
                title: 'Git',
                children: [
                    '/git/tbd'
                ]
            },
            {
                title: 'IAM',
                children: [
                    '/iam/basics'
                ]
            }
        ],

        repo: 'stakater/developer-handbook',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    }
}
