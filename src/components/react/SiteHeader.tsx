import { Providers } from './Providers';
import { Header } from './Header';

// Island entry point for the site header (used on every page).
export default function SiteHeader({ siteTitle }: { siteTitle?: string }) {
  return (
    <Providers>
      <Header siteTitle={siteTitle} />
    </Providers>
  );
}
