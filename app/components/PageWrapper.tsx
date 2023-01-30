import { classNames } from '~/utils/tailwind';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type PageWrapperProps = {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
  className?: string;
};

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <>
      <Navbar />
      <main
        className={classNames(
          'mx-auto max-w-7xl px-6 lg:px-8 mt-20',
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
