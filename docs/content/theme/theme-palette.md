
+++
title = "Theme palette"
description = ""
weight = 2
draft = false
bref = ""
toc = true
menu = "theme"
tags = [ "theme" ]
+++

<style>
    .color-preview {
        display: inline-block;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        background-color: var(--bg, #fff);
        border: 1px solid #444;
    }
</style>

## List of theme palette variables

These variables are global hooks to override colors, fonts, spacing and more throughout the library of web components. Generally this is all you need, though component specific variables are also available. Feel free to copy this list and define the values needed for your site or application. Please note that the logo URL paths are empty here.

_If you have the project checked out locally, open up: pfe-styles/_temp/pfe-colors.css_

### Color variables

| Name | Project default |
| ------------- |  --- |
| `--pfe-theme--color--text` | <span class="color-preview" style="--bg:#151515;"></span> #151515 |
| `--pfe-theme--color--text--muted` | <span class="color-preview" style="--bg:#6a6e73;"></span> #6a6e73 |
| `--pfe-theme--color--link` | <span class="color-preview" style="--bg:#06c;"></span> #06c |
| `--pfe-theme--color--link--visited` | <span class="color-preview" style="--bg:#6753ac;"></span> #6753ac |
| `--pfe-theme--color--link--hover` | <span class="color-preview" style="--bg:#004080;"></span> #004080 |
| `--pfe-theme--color--link--focus` | <span class="color-preview" style="--bg:#004080;"></span> #004080 |
| `--pfe-theme--color--text--on-dark` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--text--muted--on-dark` | <span class="color-preview" style="--bg:#d2d2d2;"></span> #d2d2d2 |
| `--pfe-theme--color--link--on-dark` | <span class="color-preview" style="--bg:#73bcf7;"></span> #73bcf7 |
| `--pfe-theme--color--link--visited--on-dark` | <span class="color-preview" style="--bg:#bee1f4;"></span> #bee1f4 |
| `--pfe-theme--color--link--hover--on-dark` | <span class="color-preview" style="--bg:#bee1f4;"></span> #bee1f4 |
| `--pfe-theme--color--link--focus--on-dark` | <span class="color-preview" style="--bg:#bee1f4;"></span> #bee1f4 |
| `--pfe-theme--color--text--on-saturated` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--text--muted--on-saturated` | <span class="color-preview" style="--bg:#d2d2d2;"></span> #d2d2d2 |
| `--pfe-theme--color--link--on-saturated` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--link--visited--on-saturated` | <span class="color-preview" style="--bg:#8476d1;"></span> #8476d1 |
| `--pfe-theme--color--link--hover--on-saturated` | <span class="color-preview" style="--bg:#fafafa;"></span> #fafafa |
| `--pfe-theme--color--link--focus--on-saturated` | <span class="color-preview" style="--bg:#fafafa;"></span> #fafafa |
| `--pfe-theme--color--ui-base` | <span class="color-preview" style="--bg:#6a6e73;"></span> #6a6e73 |
| `--pfe-theme--color--ui-base--hover` | <span class="color-preview" style="--bg:#151515;"></span> #151515 |
| `--pfe-theme--color--ui-base--focus` | <span class="color-preview" style="--bg:#151515;"></span> #151515 |
| `--pfe-theme--color--ui-base--text` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-base--text--hover` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-base--text--focus` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-base--on-dark` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-base--hover--on-dark` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--ui-base--focus--on-dark` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--ui-base--text--on-dark` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-base--text--hover--on-dark` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-base--text--focus--on-dark` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-base--on-saturated` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-base--hover--on-saturated` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--ui-base--focus--on-saturated` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--ui-base--text--on-saturated` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-base--text--hover--on-saturated` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-base--text--focus--on-saturated` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-accent` | <span class="color-preview" style="--bg:#06c;"></span> #06c |
| `--pfe-theme--color--ui-accent--hover` | <span class="color-preview" style="--bg:#004080;"></span> #004080 |
| `--pfe-theme--color--ui-accent--focus` | <span class="color-preview" style="--bg:#004080;"></span> #004080 |
| `--pfe-theme--color--ui-accent--text` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-accent--text--hover` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-accent--text--focus` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-accent--on-dark` | <span class="color-preview" style="--bg:#73bcf7;"></span> #73bcf7 |
| `--pfe-theme--color--ui-accent--hover--on-dark` | <span class="color-preview" style="--bg:#2b9af3;"></span> #2b9af3 |
| `--pfe-theme--color--ui-accent--focus--on-dark` | <span class="color-preview" style="--bg:#2b9af3;"></span> #2b9af3 |
| `--pfe-theme--color--ui-accent--text--on-dark` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-accent--text--hover--on-dark` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-accent--text--focus--on-dark` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-accent--on-saturated` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--ui-accent--hover--on-saturated` | <span class="color-preview" style="--bg:#cccccc;"></span> #cccccc |
| `--pfe-theme--color--ui-accent--focus--on-saturated` | <span class="color-preview" style="--bg:#cccccc;"></span> #cccccc |
| `--pfe-theme--color--ui-accent--text--on-saturated` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-accent--text--hover--on-saturated` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-accent--text--focus--on-saturated` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--ui-disabled` | <span class="color-preview" style="--bg:#d2d2d2;"></span> #d2d2d2 |
| `--pfe-theme--color--ui-disabled--hover` | <span class="color-preview" style="--bg:#d2d2d2;"></span> #d2d2d2 |
| `--pfe-theme--color--ui-disabled--focus` | <span class="color-preview" style="--bg:transparent;"></span> transparent |
| `--pfe-theme--color--ui-disabled--text` | <span class="color-preview" style="--bg:#6a6e73;"></span> #6a6e73 |
| `--pfe-theme--color--ui-disabled--text--hover` | <span class="color-preview" style="--bg:#797979;"></span> #797979 |
| `--pfe-theme--color--ui-disabled--text--focus` | <span class="color-preview" style="--bg:#797979;"></span> #797979 |
| `--pfe-theme--color--surface--lightest` | <span class="color-preview" style="--bg:#fff;"></span> #fff |
| `--pfe-theme--color--surface--lightest--context` | <span class="color-preview" style="--bg:light;"></span> light |
| `--pfe-theme--color--surface--lighter` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--surface--lighter--context` | <span class="color-preview" style="--bg:light;"></span> light |
| `--pfe-theme--color--surface--base` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--surface--base--context` | <span class="color-preview" style="--bg:light;"></span> light |
| `--pfe-theme--color--surface--darker` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--surface--darker--context` | <span class="color-preview" style="--bg:dark;"></span> dark |
| `--pfe-theme--color--surface--darkest` | <span class="color-preview" style="--bg:#151515;"></span> #151515 |
| `--pfe-theme--color--surface--darkest--context` | <span class="color-preview" style="--bg:dark;"></span> dark |
| `--pfe-theme--color--surface--complement` | <span class="color-preview" style="--bg:#002952;"></span> #002952 |
| `--pfe-theme--color--surface--complement--context` | <span class="color-preview" style="--bg:saturated;"></span> saturated |
| `--pfe-theme--color--surface--accent` | <span class="color-preview" style="--bg:#004080;"></span> #004080 |
| `--pfe-theme--color--surface--accent--context` | <span class="color-preview" style="--bg:saturated;"></span> saturated |
| `--pfe-theme--color--surface--border--lightest` | <span class="color-preview" style="--bg:#f5f5f5;"></span> #f5f5f5 |
| `--pfe-theme--color--surface--border` | <span class="color-preview" style="--bg:#d2d2d2;"></span> #d2d2d2 |
| `--pfe-theme--color--surface--border--darker` | <span class="color-preview" style="--bg:#6a6e73;"></span> #6a6e73 |
| `--pfe-theme--color--surface--border--darkest` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--feedback--critical--lightest` | <span class="color-preview" style="--bg:#faeae8;"></span> #faeae8 |
| `--pfe-theme--color--feedback--critical` | <span class="color-preview" style="--bg:#bb0000;"></span> #bb0000 |
| `--pfe-theme--color--feedback--critical--darkest` | <span class="color-preview" style="--bg:#550000;"></span> #550000 |
| `--pfe-theme--color--feedback--important--lightest` | <span class="color-preview" style="--bg:#ffe1d8;"></span> #ffe1d8 |
| `--pfe-theme--color--feedback--important` | <span class="color-preview" style="--bg:#d73401;"></span> #d73401 |
| `--pfe-theme--color--feedback--important--darkest` | <span class="color-preview" style="--bg:#721b00;"></span> #721b00 |
| `--pfe-theme--color--feedback--moderate--lightest` | <span class="color-preview" style="--bg:#fffbf0;"></span> #fffbf0 |
| `--pfe-theme--color--feedback--moderate` | <span class="color-preview" style="--bg:#ffc024;"></span> #ffc024 |
| `--pfe-theme--color--feedback--moderate--darkest` | <span class="color-preview" style="--bg:#8a6200;"></span> #8a6200 |
| `--pfe-theme--color--feedback--success--lightest` | <span class="color-preview" style="--bg:#f7fcec;"></span> #f7fcec |
| `--pfe-theme--color--feedback--success` | <span class="color-preview" style="--bg:#2e7d32;"></span> #2e7d32 |
| `--pfe-theme--color--feedback--success--darkest` | <span class="color-preview" style="--bg:#1b5e20;"></span> #1b5e20 |
| `--pfe-theme--color--feedback--info--lightest` | <span class="color-preview" style="--bg:white;"></span> white |
| `--pfe-theme--color--feedback--info` | <span class="color-preview" style="--bg:#0277bd;"></span> #0277bd |
| `--pfe-theme--color--feedback--info--darkest` | <span class="color-preview" style="--bg:#01579b;"></span> #01579b |
| `--pfe-theme--color--feedback--default--lightest` | <span class="color-preview" style="--bg:#f0f0f0;"></span> #f0f0f0 |
| `--pfe-theme--color--feedback--default` | <span class="color-preview" style="--bg:#4f5255;"></span> #4f5255 |
| `--pfe-theme--color--feedback--default--darkest` | <span class="color-preview" style="--bg:#3c3f42;"></span> #3c3f42 |
| `--pfe-theme--color--overlay` | <span class="color-preview" style="--bg:rgba(21, 21, 21, 0.5);"></span> rgba(21, 21, 21, 0.5) |

### Typography sizing
|  Name | Project default |
| ------------- |  --- |
| `--pf-global--FontSize--root`        |     1em                                       | 
| `--pf-global--FontSize--6xl`         |     3rem                                      |
| `--pf-global--FontSize--5xl`         |     2.5rem                                    |
| `--pf-global--FontSize--4xl`         |     2.25rem                                   |
| `--pf-global--FontSize--3xl`         |     1.75rem                                   |
| `--pf-global--FontSize--2xl`         |     1.5rem                                    |
| `--pf-global--FontSize--xl`          |     1.25rem                                   |
| `--pf-global--FontSize--lg`          |     1.125rem                                  |
| `--pf-global--FontSize--md`          |     1rem                                      |
| `--pf-global--FontSize--sm`          |     0.875rem                                  |
| `--pf-global--FontSize--xs`          |     0.75rem                                   |
| `--pf-c-title--m-6xl--FontSize`      |     var(--pf-global--FontSize--6xl, 3rem)     |
| `--pf-c-title--m-5xl--FontSize`      |     var(--pf-global--FontSize--5xl, 2.5rem)   |
| `--pf-c-title--m-4xl--FontSize`      |     var(--pf-global--FontSize--4xl, 2.25rem)  |
| `--pf-c-title--m-3xl--FontSize`      |     var(--pf-global--FontSize--3xl, 1.75rem)  | 
| `--pf-c-title--m-2xl--FontSize`      |     var(--pf-global--FontSize--2xl, 1.5rem)   |
| `--pf-c-title--m-xl--FontSize`       |     var(--pf-global--FontSize--xl, 1.25rem)   |
| `--pf-c-title--m-lg--FontSize`       |     var(--pf-global--FontSize--lg, 1.125rem)  |
| `--pf-c-title--m-md--FontSize`       |     var(--pf-global--FontSize--md, 1rem)      |
| `--pf-c-title--m-sm--FontSize`       |     var(--pf-global--FontSize--sm, 0.875rem)  |
| `--pf-c-title--m-xs--FontSize`       |     var(--pf-global--FontSize--xs, 0.75rem)   |
| `--pf-c-content--h1--FontSize`       |     var(--pf-global--FontSize--3xl, 1.75rem)  |
| `--pf-c-content--h2--FontSize`       |     var(--pf-global--FontSize--2xl, 1.5rem)   |
| `--pf-c-content--h3--FontSize`       |     var(--pf-global--FontSize--xl, 1.25rem)   |
| `--pf-c-content--h4--FontSize`       |     var(--pf-global--FontSize--lg, 1.125rem)  |
| `--pf-c-content--h5--FontSize`       |     var(--pf-global--FontSize--md, 1rem)      |
| `--pf-c-content--h6--FontSize`       |     var(--pf-global--FontSize--sm, 0.875rem)  |
| `--pf-c-content--xl--FontSize`       |     var(--pf-global--FontSize--xl, 1.25rem)   |
| `--pf-c-content--lg--FontSize`       |     var(--pf-global--FontSize--lg, 1.125rem)  |
| `--pf-c-content--FontSize`           |     var(--pf-global--FontSize--md, 1rem)      |
| `--pf-c-content--small--FontSize`    |     var(--pf-global--FontSize--sm, 0.875rem)  |
| `--pf-c-content--xs--FontSize`       |     var(--pf-global--FontSize--xs, 0.75rem)   |

### Spacers
|  Name | Project default |
| ------------- |  --- |
|  `--pfe-theme--container-spacer`             | 1rem   |
|  `--pfe-theme--container-padding`            | 1rem   |
|  `--pfe-theme--content-spacer`               | 1.5rem |
|  `--pfe-theme--content-spacer--heading--lg`  | 2rem   |
|  `--pfe-theme--content-spacer--heading--md`  | 1.5rem |
|  `--pfe-theme--content-spacer--heading--sm`  | 1rem   |
|  `--pfe-theme--content-spacer--body--md`     | 1rem   |
|  `--pfe-theme--content-spacer--body--sm`     | 0.5rem |

### Other variables
|  Name | Project default |
| ------------- |  --- |
| `--pfe-theme--container-spacer` | 16px |
| `--pfe-theme--container-padding` | 16px |
| `--pfe-theme--content-spacer` | 24px |
| `--pfe-theme--font-size` | 16px |
| `--pfe-theme--line-height` | 1.5 |
| `--pfe-theme--font-family` | "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif |
| `--pfe-theme--font-family--heading` | "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif |
| `--pfe-theme--font-family--code` | "Overpass Mono", Consolas, Monaco,  Andale Mono , monospace |
| `--pfe-theme--font-weight--light` | 300 |
| `--pfe-theme--font-weight--normal` | 500 |
| `--pfe-theme--font-weight--semi-bold` | 600 |
| `--pfe-theme--font-weight--bold` | 700 |
| `--pfe-theme--surface--border-width` | 1px |
| `--pfe-theme--surface--border-width--heavy` | 4px |
| `--pfe-theme--surface--border-style` | solid |
| `--pfe-theme--surface--border-radius` | 3px |
| `--pfe-theme--surface--border-width--active` | 3px |
| `--pfe-theme--surface--border-width--color` | #151515 |
| `--pfe-theme--icon-size` | 1em |
| `--pfe-theme--ui--element--size` | 20px |
| `--pfe-theme--ui--border-width` | 1px |
| `--pfe-theme--ui--border-width--active` | 3px |
| `--pfe-theme--ui--border-style` | solid |
| `--pfe-theme--ui--border-radius` | 2px |
| `--pfe-theme--ui--focus-outline-width` | 1px |
| `--pfe-theme--ui--focus-outline-style` | solid |
| `--pfe-theme--link-decoration` | none |
| `--pfe-theme--link-decoration--hover` | underline |
| `--pfe-theme--link-decoration--focus` | underline |
| `--pfe-theme--link-decoration--visited` | none |
| `--pfe-theme--link-decoration--on-dark` | none |
| `--pfe-theme--link-decoration--hover--on-dark` | underline |
| `--pfe-theme--link-decoration--focus--on-dark` | underline |
| `--pfe-theme--link-decoration--visited--on-dark` | none |
| `--pfe-theme--link-decoration--on-saturated` | underline |
| `--pfe-theme--link-decoration--hover--on-saturated` | underline |
| `--pfe-theme--link-decoration--focus--on-saturated` | underline |
| `--pfe-theme--link-decoration--visited--on-saturated` | underline |
| `--pfe-theme--grid-breakpoint--xs` | 0 |
| `--pfe-theme--grid-breakpoint--sm` | 576px |
| `--pfe-theme--grid-breakpoint--md` | 768px |
| `--pfe-theme--grid-breakpoint--lg` | 992px |
| `--pfe-theme--grid-breakpoint--xl` | 1200px |
| `--pfe-theme--box-shadow--sm` | 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.2) |
| `--pfe-theme--box-shadow--md` | 0 0.125rem 0.0625rem 0.0625rem rgba(3, 3, 3, 0.12), 0 0.25rem 0.6875rem 0.375rem rgba(3, 3, 3, 0.05) |
| `--pfe-theme--box-shadow--lg` | 0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12) |
| `--pfe-theme--box-shadow--inset` | inset 0 0 0.625rem 0 #fafafa |
| `--pfe-theme--animation-speed` | 0.3s |
| `--pfe-theme--animation-timing` | cubic-bezier(0.465, 0.183, 0.153, 0.946) |
| `--pfe-theme--opacity` | 0.09 |
| `--pfe-theme--modal` | 99 |
| `--pfe-theme--navigation` | 98 |
| `--pfe-theme--overlay` | 97 |
| `--pfe-theme--content` | 0 |
