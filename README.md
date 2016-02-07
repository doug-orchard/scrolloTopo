# Scrollo Topo
A simple scroll-to-top button.

Version. 0.1.0

Based on just vanilla JS ( jQuery is not required ) this script will add a little scroll back-to-top button when the user begins to scroll.

Purpose of this is to practise my JS skills. Build and release.

##Install script

Easy to use. First add the scrip to your site.
<script src="scrollotopo.js"></script>

Add a script tag with

```javascript
var ScrollButton = new ScrolloTopo();
ScrollButton.init();
```

##Options

	- target. Add an element to be the focus for the scroll script. Overrides the window as the main scrollable element.
	- location. When the button should appear and disappear in px.

##Example

```javascript
var ScrollButton = new ScrolloTopo({ target: document.getElementsByClassName('selected-items'), location: 400 });
ScrollButton.init();
```

---
The MIT License

Copyright (c) 2016 Doug Orchard. https://github.com/doug-orchard

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
