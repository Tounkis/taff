import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>

      <h1>Application Taff</h1>

    </>
  );
});

export const head: DocumentHead = {
  title: 'Demo Taff Application',
  meta: [
    {
      name: 'description',
      content: 'Demo Taff Application',
    },
  ],
};
