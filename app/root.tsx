import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { PageWrapper } from './components/PageWrapper';
import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Diurivj',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en' className='h-full'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-full'>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
