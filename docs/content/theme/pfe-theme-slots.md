+++
title = "Theming slots"
description = ""
weight = 5
draft = false
bref = ""
toc = true
menu = "theme"
tags = [ "theme" ]
wcs = [ "pfe-card"]
+++

## Slot basics

**Vocab tip:** Elements that can be inserted into slots are known as _slotable_; when an element has been inserted in a slot, it is said to be _slotted_.

At first glace, there seem to be lots of "gotchas" related to web components, and a *lot* of [documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots). Here’s a simplified guide with some basic code examples.

1. **Slots are places to pass content or markup into specific regions within your web component template.**

    pfe-card.html:

    ```html
    <slot name="pfe-card--header"></slot>
    <slot></slot>
    <slot name="pfe-card--footer"></slot>
    ```

2. **If you put content within a web component tag without a slot name, it will place that markup into the unnamed slot, if there is one.**

    ```html
    <pfe-card>
        This would appear in the unnamed slot
    </pfe-card>
    ```

    * If there is no unnamed slot in the component, it will not render that content. For this reason, it’s perhaps a good idea to leave one unnamed slot if general markup is allowed.

    * For example, the reason we are able to style links within the CTA component is because the `<a>` tag is being passed into the only unnamed slot in the CTA component. The link tag doesn’t need an explicit attribute like `slot="link"` because if a web component has one unnamed `<slot></slot>` then anything you put inside that custom component tag will be in that slot by default.

    ```html
    <pfe-cta priority="primary">
      <!-- this element is slotted by default -->
      <a href="#">Primary</a>
    </pfe-cta>
    ```

3. **The slot attribute must be applied to direct descendant of the custom tag.**

    my-web-page.html:

    ```html
    <pfe-card>
     <div>
       <h1 slot="pfe-card--header">This content will not render in the header slot of the card</h1>
     </div>
    </pfe-card>
    ```

    Once you nest an element inside another element in a custom tag, it can no longer be slotted. This is true of named slots and the default unnamed slot.

    For example, if the `pfe-cta` web component has some basic styles on all slots like this: `::slotted(*) { color: red; }`, then both the div and link tag would be styled red:

    ```html
    <pfe-cta priority="primary">
        <div>styled!</div>
        <a href="#">styled!</a>
    </pfe-cta>
    ```

    However, if the link tag is nested inside the div, then it would not receive styles because it’s not a direct child of the pfe-cta component anymore.

    ```html
     <pfe-cta priority="primary">
       <div>
         <a href="#">Cannot receive styles, because it’s not a direct descendant of the slot. (The div is.)</a>
       </div>
     </pfe-cta>
    ```

    In the template, slots cannot have the same name, however you can put multiple elements inside a slot by assigning that slot multiple times in your light DOM code.

    ```html
    <pfe-demo>
        <h1 slot="foo">Bar</h1>
        <p slot="foo">Testing slots</p>
    </pfe-demo>
    ```

    Both the h1 and p tag in this example will render inside the "foo" slot of the component's template.

4. **Whenever you add the attribute `slot="foo"` in your web component template, you are prescribing *where* elements will appear in the shadow DOM template.**

    Using the pfe-card template example above, let's explore what would happen if we called the slots out of order:

    my-web-page.html template:

    ```html
    <pfe-card>
        <p slot="pfe-card--footer">World</p>
        <h3 slot="pfe-card--header">Hello</h3>
    </pfe-card>
    ```

    will render the content like this:

    <pfe-card>
      <p slot="pfe-card--footer">World</p>
      <h3 slot="pfe-card--header">Hello</h3>
    </pfe-card>

## Styling Slots

While building a component, if a `slot` is added, it opens a window to allow styles from outside the component to style that section.  Slotted content is not encapsulated like shadow DOM content. The component's styles can influence the styles using the `::slotted` selector, but it only applies to the direct children of the slot.

_example-page.html_:

```html
<pfe-card>
    <h1 slot="pfe-card--header">
      <a>Yes!</a>
    </h1>
    <div slot="pfe-card--header">
      <h1>
        <a>Nope.</a>
      </h1>
    </div>
</pfe-card>
```

Inside the styles for your component, you have a few choices for how to target slotted content:

1. Style anything inside the slot.

    ```css
    /* my-component.scss */
    ::slotted(*)  {
      color: red;
    }
    ```

2. Style any links in a slot.

    ```css
    /* my-component.scss */
    ::slotted(a)  {
      color: red;
    }
    ```

3. Apply styles to any HTML element with attribute `slot="headline"`. Styles will cascade to nested children, but the specificity will *not* override anything inside the slot.

    For example, this CSS:

    ```css
    /* my-component.scss */
    [name="headline"]::slotted(*)  {
      color: red;
      text-decoration: none;
    }
    ```

    will style the markup inside the web component accordingly:



    ```html
    <!--example-page.html-->
    <my-component>
      <header slot="headline">
        I will be red!
        <a href="#">I will be red too, but will keep the underline provided by the browser styles.</h2>
      </header>
      <a slot="pfe-card--header">I have no underline.</a>
    </my-component>
    ```


4. Add further specificity, styling only `<h1>` tags with the attribute `slot="headline"`

    ```css
    /* my-component.scss */
    [name="headline"]::slotted(h1)  {
      color: red;
    }
    ```

    ```html
    <!--example-page.html-->
    <my-component>
      <h1 slot="headline">
        I will be red!
      </h1>
      <h2 slot="headline">
        I will not.
      </h2>
    </my-component>
    ```

5. Nothing following the `::slotted()` selector will work; such as the follow:

    ```css
    /* my-component.scss */
    ::slotted(*) iframe[name="video"] {}
    ::slotted(*) h2 {}
    ::slotted(*) [name="headline"] {}
    ::slotted(*) .headline {}
    ```

[More examples in JSFiddle](https://jsfiddle.net/kendalltotten/qdz0tkcm/)

## Web component style specificity

* Note that anything in the light DOM can be styled by regular classes loaded on the page (in the document head or inline) and they will *win* the specificity battle. For example, this style:

    ```html
    <head>
      <style>
        iframe {
          border: 2px solid red;
        }
      </style>
    </head>
    ```

    Slots are now subject to all the standard rules of specificity so most styles from the light DOM will be able to override `:host` which is a pseudo element.

    ```css
    [name="video"]::slotted(iframe)  {
        border: 2px solid blue;
    }
    ```

    However, you can move an element into the Shadow DOM, where document styles will not apply.

    ```js
    connectedCallback() {
      super.connectedCallback();

      const iframe = this.querySelector("iframe");
      this.shadowRoot.appendChild(iframe);
    }
    ```
