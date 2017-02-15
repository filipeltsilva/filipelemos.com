const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const metalsmith = require('metalsmith');

metalsmith('src/')
  .clean(true)
  .metadata({
    site_name: 'filipelemos.com',
    author: 'Filipe Lemos',
    author_email:'contato@filipelemos.com',
    author_github: 'https://github.com/filipeltsilva',
    author_linkedin: 'https://www.linkedin.com/in/filipeltsilva'
  })
  .source('site/')
  .destination('../dist/')
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: 'templates'
  }))
  .build((error) => {
    if (error)
      throw error
    else
      console.log('Build complete without errors!');
  });
