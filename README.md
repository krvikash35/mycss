# mycss
Material Design Library using css

# flexbox properties
```
.flex-container{
    display: flex || inline-flex;
    flex-direction: row || row-reverse || column || column-reverse;
    flex-wrap: nowrap || wrap || wrap-reverse
    flex-flow: <flex-direction> || <flex-wrap>;
    justify-content: flex-start || flex-end || center || space-between || space-around;
    align-items: strech || flex-start || flex-end || center || baseline;
    align-content:  strech || flex-start || flex-end || center || space-between || space-around;
}
```
Notes:
-------
```
display: only properties need to set to make all immediate children flex items
flex-direction: how flex-items are laid out in flex-container
flex-wrap: whether to wrap flex-items to new line or stack all items on single line.
flex-flow: shorthand for flex-direction and flex-wrap
justify-content: align flex-items along the main axis. it help distribute left free space among flex items.
align-items: flex items can be aligned in the cross axis of the current line of the flex container, similar to justify-content but in the perpendicular direction.
align-content:
```
```
.flex-item{
  order: 0 <number>;
  flex-grow: 0 <number>;
  flex-shrink: 1 <number>;
  flex-basis: auto | <width>;
  flex: none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
}
```
Notes
-------
```
order: order in which children flex-item will appear.
flex-grow: how much flex-item will grow relative to rest of flex-items when positive free space is distributed.
flex-shrink: how much flex-item will shrink relative to rest of flex-items when negative free space is distributed.
flex-basis: it is same as width and height properties.  specifies the initial main size of the flex-item before free space is distributed.
flex: shorthand for flex-grow, flex-shrink, flex-basis.
```
# Grid
```
.grid{
  display: grid;
  grid-template-columns: 3fr 1fr; /* 2 columns; col1:3fr, col2:1fr*/
  grid-template-columns: repeat(3, 1fr); /* 3 columns eachCol:1fr*/
  grid-template-columns: repeat(2, 1fr 2fr); /* 2 columns col1:1fr, col2:2fr*/
  grid-template-columns: 100px repeat(2, 1fr 2fr); /* 3 columns col1:100px col2:1fr, col3:2fr*/
  grid-template-columns: repeat(auto-fill/fit, minmax(150px, 1fr));/*as many col as possible */
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-gap: 20px;
  grid-area: hd; /* name area & use in template-areas*/
  grid-template-areas:
  "hd hd"
  "sidebar main"
  "ft ft";
  grid-column: 1 / 3; /* start at column1 & end at column3*/
  grid-row: 1 / 3; /* start at row1 & end at row3*/
  justify-items: "start";/* useIn gridContainer, forRow: start end stretch(default) center*/
  align-items: "start";/* useIn gridContainer,forColumn: start end stretch(default) center*/
  justify-self: "";/* useIn gridItem,forRow: start end stretch(default) center*/
  align-self: "";/* useIn gridItem,forColumn: start end stretch(default) center*/
}
```

# Transition

The CSS transition property listens for changes to specified properties (background-color, width, height, etc.) over time.
```
.selector {
    transtion: [property-name] [duration] [timing-function] [delay]
}

div {
  width: 100px;
  height: 100px;
  background-color: yellow;
  transition: background-color 1s ease-in-out;
  /* timing function and delay not specified*/
}
```

# Transform

The CSS transform property rotates/scales/skews an element over the X,Y, or Z axes. It's behavior does not relate to transition. Simply put, on page load, the element will just appear rotated/skewed/scaled.

```
.selector {
    transform: [rotate] [skew] [scale] [translate] [perspective]
}

div {
  width: 100px;
  height: 100px;
  background-color: yellow;
  transition: transform 1s;
  /* timing function and delay not specified*/
}
div:hover {
  transform: rotate(30deg);
}
```
# Expensive CSS Property
Whenever you make any changes to CSS style or attribute of HTML element, the browser generally perform three steps. `1. Layout calculation` to decide where to place the element on the screen. `2. Paint operation` to start filling actual pixel on the screen. `3. Compositing` multiple layers if any. Each of this operation can be quite expensive depending on actual use case, resulting in page low performance
```
Layout & Paint & Composite: display
Paint: background-color
Composite: opacity, transform
```
