# Welcome to the 2nd round of Frontend Developer job role interview

In this part we would like to see your **knowledge of HTML/(S)CSS** and your task will be to code a part of the website according to provided designs and design specifications (your task is to create the main "middle" part between aready existing header and footer) for desktop :desktop_computer: and mobile :iphone:

Exercise is hosted on github, please create a branch with your name (e.g. john-doe) and checkout master branch into it.

## Project setup :computer:

In order to have the project running, please **make sure that you have git and NodeJS (version 10+) installed**. After the checkout, please run `npm install` first and then the only thing you need to do is start a `start:dev` script ("webpack-dev-server") that handles HTML and SASS compilation and also do a live reload. Project page can be reached on `localhost:8080`.

## Project structure :open_file_folder:

Source files are located in "src" folder, designs with specification in "_designs" folder. Please feel free to add any additional files, folders, code, variables, etc. you need to have the final result as close to the design as possible. There are already some SASS variables in place, please feel free to use them or extend them to your needs.

Your HTML will go to `index.html` to `<main id="content">` element.

**Good luck :crossed_fingers: and happy coding :sunglasses: !** 

## Design specifications :book:

#### Section with title

Property | Desktop | Mobile
------------ | ------------ | -------------
Background | #e6ebf0
Headline | black | black

#### Box/Card

Property | Desktop | Mobile
------------ | ------------ | -------------
Width | 570px | max 500px 
Height | 369px | adapt to content
Spacing between boxes | 30px | 30px
Border | thickness 1px, color #999 with 50% opacity | no border
Shadow | 2px blur, 1px spread, black color with 10% opacity | no shadow
Rounded corners | 4px | no rounded corners
Background | white, while hovering changes to #f5f8fa | transparent
Image area | 260x369px and rounded corners | full width, 185px fixed height and rounded corners
Headline | 18px semibold and #313a45
Link | underlined on hover (2px line) with link color | link color

Section with theme:

paragraph text: #000
outline button color: #000
outline button border: #000
text link color: #000

section vertical spacing 72px

Section typography:

headline:  32px light, bottom margin
36px, mobile 24px font-size 
paragraph: 16px regular

Box/Card:

space between boxes: 30px

text part: inner
padding 24px, on mobile and no padding on left
and right side

box/card headline: bottom margin: 24px 

box/card content text: color #58646f 14px
regular

link: 14px regular #0078b4