type PageWrapperProps = {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>{children}</main>
  );
}
