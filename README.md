Wireframes made with HTML
=========================

Like a biological organism, software has a development life cycle that starts with a plan and matures in stages until it is ready to be released into its intended environment. What happens between the idea and its completion determines if it will grow to be a highly functional member of society or a malformed monstrosity destined never to leave the laboratory.

There are ways to increase the odds that your software will be a success. (And ways to ensure certain doom.) One helpful but underused technique is the creation of wireframes - highly simplified diagrams that demonstrate basic functionality. A "bare bones" UI can build a better bridge between business requirements and developers than a pile of words. ([Some even claim that written spec is a complete waste of time.](https://gettingreal.37signals.com/ch11_Theres_Nothing_Functional_about_a_Functional_Spec.php)) Wireframes are an effective tool to show stakeholders the effects of their requests on the design and to uncover requirements that are missing, forgotten, or taken for granted. Usability can be tested on a wireframe before significant time is invested in development. 

Wireframes can be created with pencil and paper, as a digital image, or with a specialized tool (like [Balsamiq](https://balsamiq.com/).) My preference is to use HTML. It offers several advantages.

* **Dynamic interaction**: Wireframes made with HTML can do more than show static layout. They can also demonstrate interactive functionality.
* **Easy sharing**: HTML was built for the web, so sharing wireframes is a natural thing to do.
* **Reusable code**: If the final product is going to build its interface using HTML, the wireframe can be reused as a starting point for development.

There are drawbacks too.

* **Learning curve**: Building UIs out of HTML takes more time to learn than drawing with pencil and paper. I'd argue it's easier to learn than PhotoShop, but if you are already a PhotoShop guru, that's no consolation.
* **Misleading purpose**: It is hard to tell the difference between a wireframe designed for quick demonstration and a poorly made application.

Learning HTML is a solvable problem—just take the time and learn it already. Solutions to the second problem are less obvious. If you show somebody a UI scrawled in crayon on a cocktail napkin, they are naturally inclined to look past the crudeness and focus on the underlying idea. A quick HTML page looks much better, but people expect more from it. They can have a difficult time looking past the "ugliness" of the design. I have discovered several solutions to this problem that I am happy to share.

Be Clear That It's Just A Rough Sketch
--------------------------------------

###No Colors

Save all of your styling or decoration or whatever you like to call it until the end. Color (expect for standard blue hyperlinks) is a message to the viewer that you would love their advice about how to make your design [pop](http://theoatmeal.com/comics/design_hell).

###Comic Sans

No other font face says "*I am totally messing around here and would never seriously consider this a final product*" like your friend Comic Sans. Using this font for everything should make it clear that you are not trying to make the interface look cool.

###Wires

Putting boxes around everything is not very pretty stylistically, but if you are building a *wireframe* UI, it makes sense to use *wire frames*.

###Explain What a Wireframe Is

Though not subtle, it is effective to hit the user over the head with the blunt facts. Include information that tells the user point-blank that they are looking at a wireframe, what a wireframe is, and why.

Example
-------

I made a [basic example of a wireframe](example) ([GitHub repo](https://github.com/chrisbroski/wireframe/)) to illustrate these techniques. Open it up and check it out. You'll probably notice the coffee ring stain. I may have gone overboard trying to convey the idea that it is just a scratch design. It may be a bit much, but the coffee ring has served as a nice launching point during live demos to talk about wireframes and the type of feedback they are meant to illicit.

Also noteworthy is the "What are Wireframes?" section at the bottom. This is my attempt to quickly inform the reader about what a wireframe UI is. It consists of a brief definition, recommended browsers, and links for more information.

I hope that this example and explanation are helpful to those that use wireframing as part of their development process. If you don't use wireframes, maybe I have inspired you to give it a try. If so, I think you will be surprised at how much more smoothly requirements gathering goes, how much clearer feature specifications are to the developers and how much more usable the end product will be.

And feel free to use the coffee stain idea.
