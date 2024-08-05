export default function Comments() {
  const notes = [
    {
      reservedNames: [
        {
          'page.js': `Define page content, 
            Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)`,

          'layout.js': `Define wrapper around the pages, 
          Create a new layout that wraps sibling and nested pages`,

          'not-found.js': `Define 'Not Found' fallback page, 

          Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)`,

          'error.js': `Define 'Error' fallback page, Fallback page for other errors (thrown by sibling pages or nested pages or layouts)`,

          'loading.js': `Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data`,

          'icon.png': 'it represent favicon of where included',

          'route.js': `Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)`,
        },
      ],
      folders: [
        {
          app: `folder is only for the routing and routing relating tasks,
        (folderOutside) ? next.js'll ignore it and it will be components or api : must be inside to routing`,
        },
      ],
    },
  ];

  return <>{notes}</>;
}
