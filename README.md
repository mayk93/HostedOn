# HostedOn

A simple footer component for React displaying where the source is hosted on.
---

---

1. Status

[![Build Status](https://travis-ci.org/mayk93/HostedOn.svg?branch=master)](https://travis-ci.org/mayk93/HostedOn)

---

---

2. Installation

Your choice of `yarn add hosted_on` or `npm install hosted_on`. When installing with `npm`, you
can also use `npm install hosted_on --save` in order to save to your `package.json`.

In your `index.html`, add the following:

```
<link rel="stylesheet"
      crossorigin="anonymous"
      href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css"
      integrity="sha384-dNpIIXE8U05kAbPhy3G1cz+yZmTzA6CY8Vg/u2L9xRnHjJiAK76m2BIEaSEV+/aU"
>
```

That may not be necessary. That is simply the easiest way to get `font awesome`. If you downloaded it,
you can use your own.

---

---

3. Use

Inside a component you define (most likely the main component like `App.js`), do `import HostedOn from 'hosted_on'`.

White the component imported, use it like this:

`<HostedOn link="https://github.com/my_username/my_repo"/>`

It doesn't have to be `Github`. You can use it with `Bitbucket` or `Gitlab`, whatever else is out there.

The component will try to guess the icon based on the link and will send you there if you click.

You can also do this:

`<HostedOn link="https://github.com/my_username/my_repo" icon="my_special_icon" />`

If the icon exists in font awesome, it will use that instead.

---

---

<a href="http://tinypic.com?ref=29wpp9d" target="_blank"><img src="http://i68.tinypic.com/29wpp9d.png" border="0" alt="Image and video hosting by TinyPic"></a>
    
---