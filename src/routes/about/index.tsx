import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from './about.css?inline'

export default component$(() => {
    useStylesScoped$(styles)

    return(
        <div>
            
            <h2>A Propos</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos expedita praesentium provident. Voluptatum dolore possimus ipsum similique repellendus doloremque obcaecati suscipit quaerat quis consectetur hic natus libero, magnam nisi quas!
            </p>
            
        </div>
    )
})