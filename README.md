
# Page Architecture

## Markup

HTML will be your *one and only* place to establish relationships between elements. CSS and JavaScript leverage those connections, but HTML is where the connections are established.

There are two kinds of relationships: nesting and shared selector. 

### Nesting
Nesting elements inside a parent element, often a \<div> or a [semantic](https://www.w3schools.com/html/html5_semantic_elements.asp) element, enables three things:

 1. Movement of the inner contents en masse
 2. Internal organization of the inner contents, typically via flexbox or grid
 3. Styling all children simultaneously based on the state of the parent element

If you want any of those powers, nest! You should also use these rules of thumb as clues you should nest elements in a parent:
- You could refer to the group of elements as a singular entity: "navbar," "suggested videos," "main article," "comments section," etc.
-  You look at the elements and mentally position them in relation to each other - like aligning two photos on a wall
- It would make sense to put a border around the elements (it's fine if it's ugly, this is just a test of how self-contained the content is)

### Selector Choice
**Selectors create handholds on HTML elements that CSS and JavaScript can grab onto**. You can then use these handholds to position or size certain related elements, regardless of the parent/child relationship. 

Any repeating item, appearance, or characteristic should have its own CSS selector. Most elements should not receive their entire styling thanks to one selector. You should be abstracting out different aspects of styling to keep your CSS DRY and maintainable.

For example, a tile on your Netflix homepage might have:
 - class="tile unselected small" 
 - id="movie-tile-123abc"
 - data-tile-index="0"

Its parent element, representing the row of tiles, may have
- class "selected comedy row"
- id="comedy"

Fragmenting the selectors like this would enable, for example, styling just for unselected tiles of selected rows, by using `.row.selected .tile.unselected`.

There's no need for an exhaustive list of available selectors when great resources like [this](https://www.w3schools.com/cssref/css_selectors.asp) already exist. I **highly** recommend that you familiarize yourself with selector options/tactics, particularly combining selectors using an [object-oriented approach to styling](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) and using [custom data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

## Flexbox

Flexbox lets you visually organize a parent's immediate children using words. 

Flebox establishes an axis (horizontal or vertical, your choice) along which elements move. It then gives you tools to determine:
- How elements should be spaced along the axis
- How elements should be spaced perpendicular to the axis
- How elements should stretch/shrink (if at all) to fill the space of the flexbox
- Whether elements should "wrap" around to a new line

### Steps:

 1. In CSS, set your parent to `display: flex;`
 2. For a horizontal flow of elements, set the parent to `flex-direction: row`. For a vertical flow of elements, set `flex-direction: column`.
 3. Do your child elements have set size? Set your parent to `flex-wrap: wrap;`. Should your child elements' size conform to the size of the parent? Set your parent to `flex-wrap: nowrap;`.
 4. To space elements along the axis, apply  `justify-content` to the parent. Use [this](https://www.w3schools.com/cssref/playit.asp?filename=playcss_justify-content&preval=flex-start) visualizer to pick an option before you memorize all of them.
 5. To space elements against the axis, use `align-items` to the parent. Use [this](https://www.w3schools.com/cssref/playit.asp?filename=playcss_align-items&preval=stretch) visualizer to pick an option before you memorize all of them.

###  Flex grow/shrink
Do you want your sibling elements to grow inside of the flexbox according to set size ratios? Apply `flex: [some number]` to each sibling, where the number reflects its size relative to every other element. 

For example, if you have 3 siblings, 2 with `flex: 1` and 1 with `flex: 2`, the first two will stretch to take up 25% of the space along the axis, and the final element will stretch to take up 50%.

What if some elements in your flexbox need to have a specific size, while others should just grow or shrink to fill the space? Flex is often combined with other sizing rules because it takes up "the remaining space," whatever that space is, while sizing rules like `width` and `height` are much more explicit. 

Note that flex is set on child elements, not the parent (which is set to `display:flex`). 

The flex property is pretty confusing, check out examples [here](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) to help you visualize it. 

### Flexbox resources:
CSS Tricks has a great [article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to use as a reference for flexbox.
[Flexbox Froggy](https://flexboxfroggy.com/) is a fun game to help you learn flexbox rules.

## Height / Width

Height and width can be expressed:

 1. Intrinsically, using px
 2. Relative to its parent's size along the same dimension, using %
 3. Relative to the [viewport](https://www.w3schools.com/css/css_rwd_viewport.asp), using vw or vh
 4. Relative to a fixed variable, using rem, em, or combining [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) with [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Min-width/height and max-width/height

Any measurement can also boxed in by min- and max- guardrails. 

**Max- and min- let you add further nuance to elements' size within a media query**, while [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) should be used for the broad strokes of [responsive design](https://developers.google.com/web/fundamentals/design-and-ux/responsive). 

>You can go from saying "on phones make the image 300px wide," to saying, "on phones make the image 300px wide, but never bigger than 95% the width of the screen, and never smaller than 250px." 

**Min- and max- properties take greater precedence than width or height.** In situations where an element is subject to being resized (perhaps in a flexbox), using min- and/or max- properties on a child element will thwart the resizing attempt.

If using just min- or max-, the unit must be the different from the main measurement's unit (otherwise, what's the point?). If using both min- and max-, at least one of the three's units must be different from that of the other two.

## Margin / Padding

**Margin should be used to create personal space outside of a parent.**

**Padding should be used to make a buffer between a parent's border and its inner content.**   

Margin and padding exist in all four directions, all of which can have differing measurements.

Margin and padding can be expressed:
- Intrinsically, using px
- Relative to the width of the parent element, using %
- As whatever the parent's margin/padding is, using `inheret`
- *Margin only:* According to a browser's "auto" [rules](https://www.hongkiat.com/blog/css-margin-auto/) by using `auto`. Typically this will be used to center an element horizontally or take up all the remaining space on one side of an element.

You can use the following shorthands. All apply for padding as well:
- margin: top, right, bottom, left;
- margin: top, right/left, bottom;
- margin: top/bottom, right/left;
- margin: top/right/bottom/left;

If an element has`box-sizing: border-box;`, its width and height measurements will remain the static and padding will be placed inside it. If an element has`box-sizing: content-box;`, its padding will be added to the width and height. Visualization [here](https://css-tricks.com/box-sizing/).
