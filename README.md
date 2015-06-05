Wireframe
=========

Like a biological organism, software has a development life cycle that starts with a plan and matures in stages until it is ready to be released into its intended environment. The stages between an idea and completion determine if the end product will be a highly functional member of society or a malformed monstrosity that should never leave the laboratory.

There are ways to increase the chances that your software is successful. (And ways to ensure certain doom.) One helpful but underused technique is the creation of wireframes - highly simplified diagrams that demonstrate basic functionality. A "bare bones" UI can communicate software requirements better than a pile of words to both stakeholders and developers. [Some even claim that written spec is a complete waste of time.](https://gettingreal.37signals.com/ch11_Theres_Nothing_Functional_about_a_Functional_Spec.php) Wireframes can be used during requirements gathering to make plain to stakeholders the repercussions of their requests and to uncover requirements that are missing, forgotten, or taken for granted. Usability feedback can be acquired from end users using a wireframe before significant time is spent on development. 

Wireframes can be created with pencil and paper, as a digital image, or with a specialized tool (like [Balsamiq](https://balsamiq.com/).) My preferences is to use HTML. It offers several advantages.

* **Dynamic interaction**: Wireframes in HTML demonstrate not only static layout, but interactive functionality as well.
* **Easy sharing**: HTML was built for the web, so sharing wireframes is a natural thing to do.
* **Reusable code**: If the final product is going to build its interface based on HTML, the wireframe can be reused as a starting point for development.

There are drawbacks too.

* **Learning curve**: The ability to build UIs out of HTML takes more time to acquire than drawing with pencil and paper. I'd argue it takes less time than PhotoShop, but if you are already a PhotoShop guru, that's no consolation.
* **Misleading purpose**: It is hard to tell the difference between a wireframe designed for quick demonstration and a poorly made application.

Learning HTML is a solvable problem - invest the time in learning it. Solutions to the second problem are less obvious. If you show somebody a UI scrawled in crayon on a cocktail napkin, they are naturally inclined to look past the crudeness and focus on the underlying idea. A quick HTML page looks much better, but people expect more from it. They can have a difficult time looking past the "ugliness" of the design. I have found several effective techniques to handle this that I am happy to share along with some tools.

###No Colors

Save all of your styling or decoration or whatever you like to call it until the end. Any colors (expect for standard blue hyperlinks) is a message to the viewer that you want their advice on how to make your design [pop](http://theoatmeal.com/comics/design_hell).

###Comic Sans

No other font face says "*I am totally messing around here and would never seriously think this is a final product*" like your friend Comic Sans.

###Wires

Putting boxes around everything is not very pretty stylistically, but if you are building a *wireframe* UI, you should use *wire frames*.

###Tell Them What a Wireframe Is

This is not subtle, but it is effective to hit the user over the head with the blunt facts. Add words that tell the user point-blank that they are looking at a wireframe and what a wireframe is.

Example
-------

I made a [basic example of a wireframe](example) to illustrate these techniques. Open it up and check it out. You should notice right away that I may have gone overboard it trying to convey the idea that it is just a scratch design. I added a background image of a coffee ring stain. It may be a little too much, but it has served me as a nice talking point about the type of feedback I am looking for.

You should also take not of the "What are Wireframes?" section. This is my attempt to let the reader know what a wireframe UI is all about if I am not there to explain it. It consists of a quick definition, recommended browsers, and links for more information.

I hope that this example and explanation is helpful to those that use wireframing in their development process. If you don't currently use wireframes, I hope that I have convinced you to give it a try. If you do, I think you will be surprised at how smoothly requirements gathering goes, how much clearer the specifications are to the developers and how much cleaner and usable the end product will be.
