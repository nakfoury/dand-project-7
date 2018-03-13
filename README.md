# Titanic Visualization
Visualization of survival rate among demographic groups aboard [RMS Titanic](https://en.wikipedia.org/wiki/RMS_Titanic).

## Summary
This visualization depicts the respective survival rate for different groups of passengers aboard the Titanic when it
sank. The passengers are divided into 6 groups based on sex (male or female) and passenger class. Passenger class is
represented as follows:
- 1: First class (most expensive)
- 2: Second class
- 3: Third class (least expensive)
## Design
Originally, I had chosen a simple bar chart representing only passenger sex. I decided to take the feedback to
represent an additional dimension of the data, and shifted to a 3D bar chart. In doing so, I divided the passengers
into 6 groups, and organized them visually along the x axis by passenger class, then by sex. The y axis represents the
survival rate of each group (out of 1.0).

I applied some layout feedback to move the chart to the center of the page. This seemed appropriate, considering
how minimal the content of the page is.

One of my feedbackers wanted to know how many people were represented in my data. I added more information to the
tooltip text to show the size of each group.
## Feedback
After prototyping my visualization, I shared it with 3 people (hands-on demo) for their feedback. I have implemented
the feedback, and compiled it in this section.
### Software Developer #1
- Too much margin on the top
- Graph should be centered
- Can tell what's being described, but graph needs more description
### University Student
- Add another dimension for passenger class
### Software Developer #2
- It would be nice to see the number of passengers in each group
## Resources
- [Dimple.js Documentation](http://dimplejs.org/)
- [the deep blue (waves)](https://codepen.io/andyfitz/pen/akAKdV)
- https://stackoverflow.com/questions/32618638/override-dimple-tooltip-text-only?rq=1
