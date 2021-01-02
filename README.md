# Practice

View on [Stackblitz](https://stackblitz.com/github/delwynpinto/practice)

# ImageCropper

A simple app that does the following:

1) A web panel where the user can upload an image
2) Each image has a recommended size of 1024 x 1024.
3) Don’t upload the file if it’s not the right size.
4) Each image has to be converted into 4 different sizes. 
horizontal : 755 x 450
vertical : 365 x 450
horizontal small : 365 x 212
gallery : 380 x 380
Images should not be stretched, and they should be cropped properly. 

5) Save all 4 of these images locally on the server
6) Show a webpage with all 4 of these new images.

Bonus : Instead of saving these files to the server, upload them to a
cloud image hosting service.

Double Bonus : While uploading the image show a preview in the
browser itself of all the different image sizes, and let the user
decide how to crop the images to the smaller size.

---------------------------------------------------------------------------

# IP Address Finder

Examine the Sample Input below:

input = ["1233454356\tGET /index.html\t10.10.10.1\n",
"1233454356\tGET /index.html\t10.10.10.1\n",
"1233454356\tGET /index.html\t10.10.10.1\n",
"1233454356\tGET /index.html\t10.13.10.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t123.14.10.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t10.14.11.1\n",
"1233454356\tGET /index.html\t10.14.11.1\n",
"1233454356\tGET /index.html\t10.14.11.1\n",
"1233454356\tGET /index.html\t10.14.11.1\n",
"1233454356\tGET /index.html\t10.14.11.1\n",
"1233454356\tGET /index.html\t10.14.10.1\n",
"1233454356\tGET /index.html\t123.14.10.1\n"]

Your task is to write javascript code to find the top ten IP address and print them in following format:

Sample output:

RANK    Input               COUNT
1       10.14.10.1          7
2       10.14.11.1          5
3       10.10.10.1          3
4       123.14.10.1         2
5       10.13.10.1          1

---------------------------------------------------------------------------

#Random Quote Generator

Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/qRZeGZ.

---------------------------------------------------------------------------

# Auto Generated

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
