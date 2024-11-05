import Link from 'next/link';
import { resourcesLinks, platformLinks, communityLinks } from '../constants';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto pt-20 px-6 py-10 mt-10 border-t border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-base font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
