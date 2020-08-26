export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4626f3d47f525791a4085f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-preview-studio',
                  apiId: '9f03d9ae-9d3b-49c4-8705-6e5d6ce8addc'
                },
                {
                  buildHookId: '5f4626f31d3c9ecbfec1c0de',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-preview',
                  apiId: '4df63352-8443-4736-b2d5-a4ff7fb82db5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivekneem/sanity-gatsby-preview',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-preview.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
