Wireframes
==========

Like a biological organism, software has a development life cycle that starts with a plan and matures in stages until it is ready to be released into its intended environment. What happens between the idea and its completion determines if it will grow to be a highly functional member of society or a malformed monstrosity destined never to leave the laboratory.

There are ways to increase the chances that software development is successful. (And ways to ensure certain doom.) One helpful but underused technique is the creation of wireframes - highly simplified diagrams that demonstrate basic functionality. A "bare bones" UI can be a better bridge between business requirements and developers than a pile of words. [Some even claim that written spec is a complete waste of time.](https://gettingreal.37signals.com/ch11_Theres_Nothing_Functional_about_a_Functional_Spec.php) Wireframes are an effective tool to show stakeholders effects of their requests on overall design and to uncover requirements that are missing, forgotten, or taken for granted. Usability can be tested on a wireframe before significant time is invested in development. 

Wireframes can be created with pencil and paper, as a digital image, or with a specialized tool (like [Balsamiq](https://balsamiq.com/).) My preference is to use HTML. It offers several advantages.

* **Dynamic interaction**: Wireframes in HTML demonstrate not only static layout, but interactive functionality as well.
* **Easy sharing**: HTML was built for the web, so sharing wireframes is a natural thing to do.
* **Reusable code**: If the final product is going to build its interface based on HTML, the wireframe can be reused as a starting point for development.

There are drawbacks too.

* **Learning curve**: The ability to build UIs out of HTML takes more time to acquire than drawing with pencil and paper. I'd argue it takes less time than PhotoShop, but if you are already a PhotoShop guru, that's no consolation.
* **Misleading purpose**: It is hard to tell the difference between a wireframe designed for quick demonstration and a poorly made application.

Learning HTML is a solvable problem—just take the time and learn it already. Solutions to the second problem are less obvious. If you show somebody a UI scrawled in crayon on a cocktail napkin, they are naturally inclined to look past the crudeness and focus on the underlying idea. A quick HTML page looks much better, but people expect more from it. They can have a difficult time looking past the "ugliness" of the design. I have found several effective techniques to handle this that I am happy to share along with some tools.

###No Colors

Save all of your styling or decoration or whatever you like to call it until the end. Any colors (expect for standard blue hyperlinks) is a message to the viewer that you want their advice on how to make your design [pop](http://theoatmeal.com/comics/design_hell).

###Comic Sans

No other font face says "*I am totally messing around here and would never seriously think this is a final product*" like your friend Comic Sans. Using this font for everything should make it clear that you are not intending for the interface look cool.

###Wires

Putting boxes around everything is not very pretty stylistically, but if you are building a *wireframe* UI, you should use *wire frames*.

###Tell Them What a Wireframe Is

Though not subtle, it is effective to hit the user over the head with the blunt facts. Include information that tells the user point-blank that they are looking at a wireframe and what a wireframe is.

Example
-------

I made a [basic example of a wireframe](example) to illustrate these techniques. Open it up and check it out. You'll probably notice the coffee ring stain. I may have gone overboard trying to convey the idea that it is just a scratch design. It may be a little too much, but the coffee ring has served as a nice talking point about wireframes and the type of feedback they are meant to illicit.

Also noteworthy is the "What are Wireframes?" section. This is my attempt to quickly inform the reader about what a wireframe UI is. It consists of a brief definition, recommended browsers, and links for more information.

I hope that this example and explanation are helpful to those that use wireframing as part of their development process. If you don't use wireframes, maybe I have inspired you to give it a try. If so, I think you will be surprised at how much more smoothly requirements gathering goes, how much clearer feature specifications are to the developers and how much more usable the end product will be.
