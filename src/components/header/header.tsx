import { component$, useStyles$ } from '@builder.io/qwik';

import styles from './header.css?inline';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useStyles$(styles)

  return (
    <header>
      <nav>
        <img src="/taff.jpg" alt="logo" />
        <h1>TAFF</h1>
        <ul>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          <li>
            <Link href='/about'>A Propos</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
