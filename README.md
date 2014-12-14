#jQuery EndlessScroll Plugin
Demo: http://yanosh-igor.github.io/endless-scroll/

This plugin is very light, simple and contains minimal configurations. So use it when you need scroll that easy to setup.

##How to use EndlessScroll Plugin?
1. **Include jQuery and EndlessScroll**

  To use EndlessScroll, you’ll need to make sure both the EndlessScroll and jQuery scripts are included. If you’ve already got jQuery (you can test by opening your JavaScript console and typing !!window.jQuery — if it says true, you have jQuery), you don’t need to add the first line.

  ```
  <script src="//code.jquery.com/jquery-latest.min.js"></script>
  <script src="path_to/js/jquery.endlessScroll.js"></script>
  ```

2. **Ready your HTML**
  ```
   <div class="endless-scroll"></div>
   <a href="/ajax_posts" class="next"></a>
  ```
3.  **Activate Plugin**

  The last thing we have to do is activate the plugin. To do this, add the following script:
  ```
  $('.endless-scroll').endlessScroll();
  ```
4. **That's it!**
 
  Plugin will call next url any time the bottom of the element approaches the bottom of the browser window. See the [API documentation](https://github.com/yanosh-igor/endless-scroll/blob/master/README.md#api-documentation) for more information about what attributes are available for use, and take a look at [the demos](http://yanosh-igor.github.io/endless-scroll/) to see EndlessScroll in action.

##API Documentation
#####Options:

Option        | Type	| Default Value | Description
------------- | ------------- | ------------- | -------------
scrollTrigger | number | 0.77 | Parameter that indicates how fast to trigger next page.
loader        | string | `.loader` | The selector that indocates loader.
loaderHtml    | string, jQuery object | `<div class="loader"></div>` | The HTML to be displayed during loading.
nextLink      | string | `.next` | The selector to use for finding the link which contains the href pointing to the next set of content. 

##Examples

Here will be examples soon.


##License
The MIT License (MIT)

Copyright (c) 2014 Yanosh Igor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
