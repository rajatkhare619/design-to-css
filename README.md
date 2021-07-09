# Welcome to the 2nd round of Frontend Developer job role interview

In this part we would like to see your **knowledge of HTML/(S)CSS** and your task will be to code a part of the website according to provided designs and design specifications (your task is to create the main "middle" part between aready existing header and footer) for desktop :desktop_computer: and mobile :iphone:

Exercise is hosted on github, please clone the project to your local environment and when you are finished, please push the project to your private github repository with granting access to one of our colleagues (will be specified).

## :computer:  Project setup

In order to have the project running, please **make sure that you have git and NodeJS (version 10+) installed**. After the checkout, please run `npm install` first and then the only thing you need to do is start a script with `npm run start:dev` that handles HTML and SASS compilation and also do a live reload. Project page can be reached on `localhost:8080`.

## :open_file_folder:  Project structure

Source files are located in "src" folder, designs with specification in "_designs" folder. Please feel free to add any additional files, folders, code, variables, etc. you need to have the final result as close to the design as possible. There are already some SASS variables in place, please feel free to use them or extend them to your needs.

Your HTML will go to `index.html` to `<main id="content">` element.

**Good luck :crossed_fingers: and happy coding!** :sunglasses:

## :book:  Design specifications

In designs, there are texts in german language, but you can replace them with some dummy text, lorem ipsum, or create them by your own.

#### Section with title

Property | Desktop | Mobile
------------ | ------------ | -------------
Background | #e6ebf0 | #e6ebf0
Headline | font size 32px, font weight light, color black  | font size 24px, font weight light, color black
Text | font-size 16px, font-weight regular, color black | font-size 16px, font-weight regular, color black
Spacing | top and bottom 72px | top and bottom 72px

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
Headline | 18px semibold, color #313a45 | 18px semibold, color black
Content | font size 14px, color #2d3c4a | font size 14px, color black
Content spacing | inner spacing 24px | no left and right spacing
Link | underlined on hover (2px line) with link color | link color

#### Button

Property | Desktop | Mobile
------------ | ------------ | -------------
Color | black | black
Border | black | black
Font size | default button size | default button size