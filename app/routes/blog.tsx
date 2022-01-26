import styles from 'highlight.js/styles/github-dark-dimmed.css';
import {LinksFunction, Outlet} from 'remix';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export default function Blog() {
  return (
    <div className="flex justify-center">
      <article className="prose py-10 lg:prose-xl">
        <Outlet />
      </article>
    </div>
  );
}
