// my-page.com/
import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  console.log(
    "Everything is happening on the server, not a client side. For that we can only see it in the Visual Studio's terminal"
  );

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href={'/awesome'}>Awesome</Link>
      </p>
    </main>
  );
}

// These names are reserved by Next.js but must be in the app folder
// These are routable
// page.js       👉🏻 Define page content
// layout.js     👉🏻 Define wrapper around the pages
// not-found.js  👉🏻 Define 'Not Found' fallback page
// error.js      👉🏻 Define 'Error' fallback page
// route.js      👉🏻
// icon.png      👉🏻 it appears on the top of the Browser tab (feel free to use favicon.ico)

// we need at least one root layout.js file

// every route needs at least one page.js file to next.js to understandt that it is a route like my-page.com/route.Otherwise it will be ignored by next.js

// import Header from '@/components/header'; @ refers to the root project
