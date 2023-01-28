import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '~/utils/tailwind';
import { NavLink } from '@remix-run/react';
import logo from '~/images/logo.png';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Home',
    href: '/d',
  },
  {
    name: 'Home',
    href: '/e',
  },
];

export default function Navbar() {
  function navbarClassnames(isActive: boolean, desktop: boolean) {
    if (desktop) {
      return classNames(
        isActive
          ? 'border-black text-gray-900 font-medium '
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        'inline-flex items-center border-b-2 px-1 pt-1 text-sm'
      );
    }
    return classNames(
      isActive
        ? 'border-gray-900 text-black'
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
      'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500'
    );
  }

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    src={logo}
                    alt='diurivj'
                    className='block h-4 w-auto lg:hidden'
                  />
                  <img
                    src={logo}
                    alt='diurivj'
                    className='hidden h-6 w-auto lg:block'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {links.map((link) => (
                    <NavLink
                      to={link.href}
                      key={link.href}
                      className={({ isActive }) =>
                        navbarClassnames(isActive, true)
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button
                  className={classNames(
                    'inline-flex items-center justify-center p-2 border border-black text-black focus:outline-none focus:ring-1 focus:ring-inset focus:ring-black ease-in-out duration-150',
                    !open
                      ? 'shadow-brutalism-md'
                      : 'shadow-brutalism-sm translate-x-1 translate-y-1'
                  )}
                >
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              {links.map((link) => (
                <NavLink
                  to={link.href}
                  key={link.href}
                  className={({ isActive }) =>
                    navbarClassnames(isActive, false)
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
