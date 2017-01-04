# mycss
Material Design Library using css

#flexbox properties

.flex-container{
    display: flex || inline-flex;
    flex-direction: row || row-reverse || column || column-reverse;
    flex-wrap: nowrap || wrap || wrap-reverse
    flex-flow: <flex-direction> || <flex-wrap>;
    justify-content: flex-start || flex-end || center || space-between || space-around;
    align-items: strech || flex-start || flex-end || center || baseline;
    align-content:  strech || flex-start || flex-end || center || space-between || space-around;
}

Notes:
-------
display: only properties need to set to make all immediate children flex items
flex-direction: how flex-items are laid out in flex-container
flex-wrap: whether to wrap flex-items to new line or stack all items on single line.
flex-flow: shorthand for flex-direction and flex-wrap
justify-content: align flex-items along the main axis. it help distribute left free space among flex items.
align-items: flex items can be aligned in the cross axis of the current line of the flex container, similar to justify-content but in the perpendicular direction.
align-content:

.flex-item{
  order: 0 <number>;
  flex-grow: 0 <number>;
  flex-shrink: 1 <number>;
  flex-basis: auto | <width>;
  flex: none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
}
Notes
-------
order: order in which children flex-item will appear.
flex-grow: how much flex-item will grow relative to rest of flex-items when positive free space is distributed.
flex-shrink: how much flex-item will shrink relative to rest of flex-items when negative free space is distributed.
flex-basis: it is same as width and height properties.  specifies the initial main size of the flex-item before free space is distributed.
flex: shorthand for flex-grow, flex-shrink, flex-basis.
