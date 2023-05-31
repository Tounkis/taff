import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStyles$(styles)

  return (
    <footer>
      <p>&copy;Copyright <span>2023</span> - Design by Tounkis</p>    
    </footer>
  );
});
