import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';


export async function Navbar() {
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <nav className="relative flex items-center justify-between p-4">
      <div className="block flex-none">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full">
        <Link href="/" className="mr-2 flex w-full items-center justify-center">
          <div className="flex max-w-[190px] md:max-w-[290px]">
            <LogoIcon />
          </div>
        </Link>
      </div>
      <div className="flex justify-end">
        <Suspense fallback={<OpenCart />}>
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
