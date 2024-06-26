import React from 'react';

function TopicsPage() {
  return (
    <>
      <h2>Web Development Concepts</h2>
      <nav className="localNav">
        <a href="#webServers">Web Servers</a>
        <a href="#frontendDesign">Frontend Design</a>
        <a href="#optimizingImages">Optimizing Images</a>
        <a href="#Favicons">Favicons</a>
        <a href="#cascadingStylesheets">CSS</a>
        <a href="#formUsability">Forms Usability</a>
        <a href="#nodeExpress">Node/Express</a>
        <a href="#javascript">JavaScript</a>
      </nav>
      <article id="webServers">
        <h3>Web Servers</h3>
        <p>
          {/* Explain what index means as it relates to websites and servers. */}
          For websites and servers, an "index" is used to provide a starting point for site visitors, often the default page,
          the "designated homepage." Most applications often have an "index.html" or similar file as the index file. Index files
          aren't limited to websites; servers can also use them. For example, OSU's Engineering server, Apache, uses a similarly
          named "index.html" file. In other cases, servers may use "default.html" as a homepage, or the server might look for
          "index.js" or "index.php."
        </p>
        
        <p>
          {/* Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen. What is different about the file's 
              details when viewed from the web server versus the local computer? */}
          When an HTTP request is made by a browser's Web Dev/Inspector Network tab, the <strong>header</strong> would return the URL, 
          request method, status codes, IP address, and the policy. Additional information from the 
          <strong>request</strong> also shows the language, cache controls, host, encoding, and browser. HTTP responses are very 
          similar to HTTP requests, also providing information such as the age, cache details, server date, last-modified date, server 
          type. The inspector also displays the website's code (HTML, CSS, or JavaScript) known as the "raw response data." Viewing a 
          file from a local computer typically shows only the HTML file, as it's a static file. In contrast, viewing from a web server 
          is more complex, as the server has to process the request and respond, resulting in multiple HTTP responses visible in the 
          Network output screen.
        </p>

        <p>
          {/* Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. */}
          The "favicon.ico" has a status code of 200 because the request was successful. On the other hand, "main.css" and "main.js" 
          have a 404 status code, indicating that the request failed because there was no response for these files.
        </p>

        <p>
          Example web file URL: https://web.engr.oregonstate.edu/~nguyema9/a1-nguyema9/
        </p>

        <p>
          {/* Explain the parts of the URL to your web file. What is the scheme, the subdomain, the host domain, and the resources? */}
          A URL starts with a <strong>scheme</strong>, in this case, "HTTPS," used by the web client to request the resource. The server 
          name follows, in the example, it's "web.engr," which can be considered a <strong>subdomain</strong>, an optional part of the 
          domain name. The primary part of the domain is the <strong>"host domain,"</strong> represented by "oregonstate.edu," mapping to 
          the server's IP address. The last part is typically the <strong>resource path,</strong> "/~nguyema9/Assignment1/" in the 
          example, indicating the location and file/directory structure on the web server.
        </p>
      </article>


      <article id="frontendDesign">
        <h3>Frontend Design</h3>
        <p>
          {/* The concept of frontend design */}
          <strong>Frontend design</strong> is about creating the visual and interactive elements of a website or application. It 
          involves the design and layout of the application, including the colors, typography, images, and other visual elements 
          to create a visually appealing and user-friendly interface.<strong> Usability</strong> is a very important part of 
          the frontend design, and it is the quality of the user experience with the website or application. Usability is usually a 
          combination of details from the frontend design, how it feels, runs, etc. And it can be defined through the concept of the
          <strong>Five "E"s of usability.</strong>
        </p>

        {/* The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions. */}
        <h4>The Five "E"s of usability</h4>
        <dl> 
          <dt><strong>Effective</strong></dt>
          <dd>Does it help the user meet their goals? Does it support users in completing actions accurately?</dd>
          <dt><strong>Efficient</strong></dt>
          <dd>Does it help users perform tasks quickly through the easiest and quickest process?</dd>
          <dt><strong>Easy to navigate</strong></dt>
          <dd>How accessible is it for new users? Can they accomplish goals easily now and on future visits?</dd>
          <dt><strong>Error-free</strong></dt>
          <dd>Avoid  the common errors from user experience, and only shows an error in genuine erroneous situations?</dd>
          <dt><strong>Enjoyable/ Engaging </strong></dt>
          <dd>Do users find it pleasant to use and appropriate for their needs? Will they come back as a result of their experience?</dd>
        </dl>

        <p>
          {/* The purpose of each of the page layout tags */}
          <strong>Page layout tags</strong> are used to separate content into sections, making it easier to read. They also help machines understand 
          which area of the page includes which components.

          Pages usually start with a <strong>&lt;header&gt;</strong> element which shows the banner for an app/site, usually being the 
          name, publisher, and marketing slogan. Mainly used to tell that the user is still on the same site.  
          
          The <strong>&lt;nav&gt;</strong> element is usually next, and it is used as navigation, taking users to other pages. 
          Sets of navigation are used in the main menu, search, tools, stories, locations, and legal links.
          
          Up next is the <strong>&lt;main&gt;</strong> element, and it's use rather simple, being used to mark the primary content block. 
          
          On the other hand, <strong>&lt;section&gt;</strong> elements are used to separate content blocks. With the first &lt;h1&gt; 
          headline describing what is in the section.
          
          <strong>&lt;Article&gt;</strong> element are placed inside a &lt;section&gt; and they show a topic marked with a headline
          &lt;h2&gt;. When there are multiple article tags are on a page, they should be marked with ID selectors that are styled 
          differently. 
          
          <strong>&lt;Aside&gt;</strong> elements create a section of text to the left or right of the main text, mainly for sidebars 
          or to add additional information. 
          
          <strong>&lt;Figure&gt;</strong> are similar to &lt;Article&gt; elements, but they also include images or videos; 
          <strong>&lt;Figcaption&gt;</strong> are used to explain the media in the &lt;Figure&gt; element.
        
          Moving on, <strong>&lt;Blockquote&gt;</strong> display both quotes that are too long for the main blocks and the citation.
          
          While <strong>&lt;Footer&gt;</strong> elements display the legal information, contact information, and links 
          to critical pages at the bottom of the website page. The footer should at the very least contain the website owner's 
          copyright statement and copyright symbol. 
          
          The last element is <strong>&lt;div&gt;</strong> and it is used as a placeholder for dynamic content or
          to divide content as a last resort.
        </p>

        <h4>How anchors link to external content, internal content, and from page-to-page, in an ordered list</h4>
        <ol>
          {/* How anchors link to external content, internal content, and from page-to-page, in an <ol> ordered list */}
          <li>To link from one content page to another, use <strong>&lt;nav&gt;</strong> and <strong>&lt;anchors&gt;</strong>.</li>
          <li> A &lt;nav&gt; block typically has page-to-page, section-to-section, or article-to-article 
              groups of anchors using relative paths</li>
          <li>An <strong>internal anchor</strong> makes use an ID to jump down to other sections or articles.  </li>
          <li>An <strong>external anchor</strong> can link to other websites using an absolute path.</li>
        </ol>
      </article>
    
      <article id="optimizingImages">
        <h3>Optimizing Images</h3>
        {/* What are the 6 major specifications of images for the web?  And why? */}
        <p>
          The first major specification of images is to have a <strong>descriptive file name</strong>. This will help the images show up 
          in search engines, so the file names should be descriptive but concise. 
          
          The next specification is to have <strong>small file sizes</strong> to help with loading times. File sizes should be reduced to
          the smallest size possible, image compression can also help with this. 
          
          Relating to small file sizes, the image should also fit the <strong>exact dimensions</strong> of the space it's going into. If 
          the image is larger than the space where it's going to, it results in wasted space, causing higher load times. 
          
          Images should also be in the <strong>correct file format</strong>. Every file format has its own features and purpose, but
          online photos usually are JPG, line-art like logos and icons are GIF or 8-bit PNG, and graphics with true transparency need
          24-bit PNG.
          
          Moving on, having a <strong> reduced resolution</strong> is another specification for images. Since monitors can render higher 
          resolutions, providing multiple image sizes for each is becoming a standard. But the main reason is to again help with the load
          speeds of a site. 
          
          The last specification for images is the <strong>color mode</strong> for them. This helps optimize images and ensure that 
          they appear identically.
        </p>

        {/* Which file formats are most appropriate for photos and for line art? And why? */}
        <p>
          For photos, JPG and WebP tend to be the best file formats to use. 
          
          <strong>JPGs</strong> uses lossy compression, so it reduces the file size. But more importantly, they can handle 
          millions of colors and shades, making it ideal for realistic images. The compression level can be adjusted to balance 
          image quality and file size. 
          
          <strong>WebPs</strong> is a newer alternative to JPG. It offers both lossless and lossy compression. But unlike JPGs, WebP also
          supports transparency.
          
          On the other hand, for line art, PNG, SVG, and to a lesser extent, GIF file formats are also used.

          <strong>PNGs</strong> is a lossless image format that is suitable for line art, icons, and images with sharp edges and 
          limited colors. It supports transparency, which makes it ideal for images with transparent backgrounds. PNG is particularly 
          well-suited for graphics that need to be crisp and high-quality, like logos, icons, or vector-like illustrations.

          <strong>SVGs</strong> are excellent for line art, and simple graphics since they are scalable, which means they can be resized 
          without losing quality. They are defined using XML, making them suitable for vector graphics and logos. While SVGs are not  
          suitable for photographs, they are perfect for graphics that require scalability and precision.

          <strong>GIFs</strong> are mostly used for simple animations and images with a limited color palette. They also 
          support transparency and are often used for small, simple graphics or animations. While not ideal for photographs or 
          complex graphics, they can be useable in line art.
        </p>
      </article>

      <article id="Favicons">
        <h3>Favicons</h3>
        {/* How do browsers and devices use favicons? */}
        <p>
          <strong>Favicons</strong> are small, typically square images used to represent a website or web page. Browsers and devices use 
          them in several ways, they are displayed as tab icons in a browser to help users switch between tabs. Favicons are often 
          displayed alongside the website's name in bookmark menus and lists of favorite websites. This makes it easier for users to 
          recognize and access their favorite sites quickly. Some browsers use favicons to represent web pages in your browsing history 
          or when displaying search results, helping users identify visited pages more easily. And lastly, for mobile devices especially, 
          favicons are used both as home screen and notifications icons.  
        </p>
      </article>

      <article id="cascadingStylesheets">
        <h3>Cascading Stylesheets</h3>
        {/* What are the main reasons to incorporate stylesheets in websites and apps? */}
        <p>
          Using <strong>Cascading Style Sheets(CSS)</strong>  in websites and apps is essential for redefining how 
          the structure, content, and components should look and behave. CSS separates the visual presentation from the underlying 
          structure, making it easier to customize every part of the user interface. It defines the fonts, colors, 
          spacing, and layouts, making content more readable and visually appealing. Lastly, CSS also helps with adherence 
          to brand requirements, since web designers and developers use it to implement and maintain the visual aspects of a brand.
          And by making sure that the website or app reflects the brand's identity and values, it helps improve a brand's recognition 
          and impact in the digital space.
        </p>

        {/* What are the 5 ways to incorporate styles? And why? */}
        <p>
          There are 5 ways to incorporate styles into websites and apps, each with its own advantages and use cases. The first one 
          is to use external CSS files, which are linked in the global &lt;head&gt; section of a website, providing consistent styles 
          across all pages. This approach is all about efficiency and maintainability, as changes only need to be made at one place. 
          Of course, specific parts can be changed by linking or importing separate CSS files.
          
          It is also possible to embed styles directly in HTML and JavaScript files. There are several of these methods, however they
          typically are for one-off style changes only. The first way is to <strong>embedded</strong> within a &lt;style&gt; tag, next is having 
          styles <strong>inline</strong> within an element using an attribute and value. 
          
          For more dynamic applications, JavaScript can be employed to manipulate styles. This can be achieved through <strong> 
          template literals </strong>within JavaScript functions or by manipulating the <strong>Document Object Model (DOM)</strong>. 
          The latter method allows for real-time style updates and dynamic behavior. Overall, the choice of how to incorporate styles 
          depends on the specific needs of the project, striking a balance between consistency and customization.
        </p>
      </article>
    
      <article id="formUsability">
        <h3>Form usability, elements and attributes, best practices, and accessibility:</h3>
        {/* What are the 6 major goals of accessible forms? And why? */}
        <p>
          The 1st major goal of accessible forms is to <strong> provide clear instructions</strong> through labels and before
          the form. The 2nd major goal is to <strong>let users know why</strong> you are getting data and which ones are required.
          Next is to <strong>set the first field to autofocus</strong> as a quality of life feature where users can start typing
          without using the mouse. The fourth goal is to <strong>ensure each form control can be filled in using the keyboard,</strong>
          mainly as another quality life feature for users that do not use a mouse or trackpad. <strong>Add tab indexing to complex 
          forms</strong> is the next goal so that it is clear which order the fields should be filled in. The last major goal is to
          <strong>ensure validation messages are screen readable,</strong> since the built-in HTML browser messages are not screen
          readable.
        </p>
        {/* What are the major tags, their attributes, and their purposes? */}
        <p>
          The first major tag is the <strong>&lt;form&gt</strong> which is the way to add a form to an HTML document. &lt;form&gt
          can hold general content and have 2 other attributes too. The first is <strong>action</strong>, which specifies where the request from the 
          form should be sent. The browser will package the data input and send it to the URL specified 
          in the action, the value of the action can be a relative path or an absolute URL. 
          
          The next attribute is <strong>methods,</strong>
          which specifies the HTTP method to be used in the HTTP request sent when the form is submitted. The next tags are 
          <strong>&lt;fieldset&gt and &lt;legend&gt</strong> which are used to make forms more accessible to the visually-impaired. 
          
          <strong>&lt;label&gt</strong> tag is used with controls to help screen reader users understand the purpose of data entries.
          Labels have a for="" attribute  that is used to match up with the form control's id="". The very commonly used <strong>
          &lt;input&gt</strong> is next, and its main purpose is for user input. These tags have 3 attributes with the first being
          the <strong>type=""</strong> attribute which has 3 different types, email types, checkboxes, and radio types that differ 
          in the way  it is displayed, how it is used, and even what other attributes can be included. <strong>Name=""</strong> attributes
          are also important as it is how the server knows which part 
          of the form each data item is associated with. Lastly, are <strong>required</strong> attributes that help mark important 
          data and can prevent bots from overloading servers through spamming the form.
          
          <strong>&lt;select&gt</strong> elements provide the user a drop-down list of choices, the name attribute is also used for the select element 
          when sending the user choice in the request. <strong>&lt;option&gt</strong> are used within select tags, and they are used to define the 
          choices in the drop-down list.

          <strong>&lt;textarea&gt</strong> allows users to input multiple lines of text in a box, it has its own label and attributes. The last tag is the
          <strong>&lt;button&gt</strong> and it needs an activation like a mouse click, or finger touch. Otherwise, it performs that action="" 
          specified by the form tag. 
        </p>
        {/* What are the major form style recommendations to improve usability? And why? */}
        <p>
          Many developers will change the default form elements, so they are easier to read and interact with. Since many forms are now
          filled in via cellphone, features such as height and width of inputs, selects, and buttons ought to be mobile friendly. 
          
          First, starting with the <strong>fieldset</strong> element, properties to improve usability of controls include changing the 
          color of the border, changing the type, and/or the width. Margin and padding can also be added to help with readability.
          
          For the <strong>legend</strong> elements, consider changing the font size and color, while 
          
          <strong>labels</strong> should use the display property to display the label on top rather than side to side with input boxes, 
          
          font size can also be changed. For <strong>input, button, textarea, select</strong> elements, consider increasing the font size 
          and adding padding to help quality of life for large fingers and arthritic hands, font should also be inherited to keep 
          typography consistent.
          
          The most common form input attribute to help users start typing in a form is <strong>autofocus</strong>, which places the 
          cursor in the first field for immediate typing, rather than needing an input to start. 
          
          The <strong>:required</strong> status of a field is important to let users know which fields to fill in and which 
          can be ignored. 
          
          <strong>Asterisks</strong> can be added to tell users which particular fields are required, and another good suggestion is to 
          have the border for invalid and valid inputs change color. 
          
          <strong>Placeholder text</strong> can be updated to improve readability through a color change. 
          
          Also consider updating how a checked box or radio button looks when unchecked and checked through using the type="checkbox" 
          attribute. 
          
          <strong>Complex forms,</strong> where one input relies on another, so they often use 
          the :disabled and :enabled attributes to keep parts of a form from being accessed until the user provides the necessary input. 
          Styling these disabled controls often follows this pattern. 
          
          The <strong>select and option</strong> elements are complex but at the very least increase the font-size and padding, to 
          match the input.
        </p>
      </article>

      <article id="nodeExpress">
        <h3>Node, npm, and Express</h3>
        {/* What are these three technologies, and how can we use them to improve the web development experience? */}
        <p>
          <strong>Node.js</strong>  is an open source runtime environment for developing server-side and networking applications. Node is
          very widely used to develop and run server-side web applications in JavaScript. It also provides a rich library of various 
          JavaScript modules to simplify development of web applications. <strong>Npm</strong> is a package manager for Node, and it 
          is an online repository for publishing Node.js packages. Npm packages can be searched on the Node package manager website. Npm is 
          also a command-line utility that can install packages and manage the dependencies for projects. The npm init command is used to 
          initialize a new Node.js application. While npm install is used to install packages that apps depend on. <strong>Express.js</strong>
          is a framework used to build web applications using Node.js. The main use of Express is the ability to get, post, and delete data 
          and define the ports and routes that data will take. Express allows people to serve static files using the express.static 
          method with a specified directory (usually named 'public'). Express uses the app API structure to define <strong>routes</strong>
          for handling HTTP requests. Routes are defined by specifying the HTTP method, the endpoint path, and a handler function. For 
          <strong>GET requests</strong>, data is sent as key-value pairs in the URL's query string. 
          Express stores this data in the req.query object for easy access in route handlers. <strong>POST requests</strong> send data 
          in the body of the request, making it more secure for sensitive data. GET requests display data in the URL, which is not suitable for sensitive information. GET requests may have URL length limitations, while
          POST requests are not subject to such restrictions. In Express, <strong>endpoints</strong> can be defined through specifying routes with paths 
          such as /order or /results.
        </p>
      </article>
      
      <article id="javascript">
        <h3>JavaScript</h3>
        {/* What are the main data types? */}
        <p>
          In terms of data types in JavaScript, there are numbers, boolean values, strings, symbols, special values of 
          undefined and null, and objects. To start off, <strong>numbers</strong> data types are  used to represent
          double-precision floating-point numbers. In terms of functions that JavaScript provides, there is parseFloat & 
          parseInt that are both used to convert strings to numbers, toString() does the opposite. Next is toLocaleString 
          which converts numbers to US currency with additional parameters, Math.trunc() discards the fractional part of numbers, 
          and Math.round() rounds a number to the nearest integer. There is also a special <strong>NaN</strong> value that is used to 
          show a value is "not a number." The next data types are <strong>boolean values</strong>, true and false, and they are mainly used in 
          conditions. When a value of another type is used in a condition, JavaScript converts this into boolean values to be used.
          The "special values" of <strong>null and undefined</strong> data types are mainly used to show the absence
          of a value. <strong>Strings</strong> are very common, and they can enclose in quotes, these strings that contain only 
          characters and are called <strong>String Literals</strong>. While strings that only contain expressions are 
          called <strong>Template Literals</strong>. Template literals are enclosed in backticks, `, with expressions embedded 
          within brackets ${`...`}. Symbols are not used in the class, while <strong>objects</strong> are a set of name-value pairs.
        </p>

        {/* How are objects, arrays, and JSON used? */}
        <p>
          In JavaScript, <strong>objects</strong> are defined as a set of name-value pairs, these pairs are also called properties of 
          the object. The properties of these objects can be either created, read, updated, or deleted. Adding or updating a property is done 
          using the dot operator on the variable in an assignment statement. While reading a property is done through both a dot operator or  
          a bracket operator []. Lastly, properties are deleted using the delete operator. <strong>Arrays</strong> in JavaScript are objects 
          whose property names are the strings. Elements can be accessed through using integer index in square brackets. The values in an 
          array can be of any JavaScript type, including another object. The method Array.isArray() can be used to determine if the value of a 
          variable is an array or not. A const variable of array type cannot be reassigned to another value, but elements can still be 
          changed. 
          
          The property length of an array can be used to return the number of elements in the array. An array also provides the method push() 
          to add an element at the end of the array, while pop() removes and returns the last element in the array. 
          Finally, includes() can be called on an array to determine if a value exists among the elements of the array.

          <strong>JSON</strong> or JavaScript Object Notation, is a very widely used format for exchanging data between 
          applications. The idea is that while objects differ in different programming languages, JSON can map an object in a program to 
          its format, as well as create an object in a program from a string in the 
          JSON format. This allows programs to exchange data even when the programs are using different programming languages. 
          The two primary methods for using JSON in 
          JavaScript are: JSON.stringify() for creating a JSON string from a JavaScript object, and JSON.parse() for creating a 
          JavaScript object from a JSON string.
        </p>

        {/* How are conditionals and loops used? */}
        <p>
          JavaScript supports statements for branching and looping that are similar to most other programming languages. 
          Starting off are <strong>if</strong> statements which will execute if the provided expression evaluates to true. 
          They can also be extended to an <strong>if-then-else</strong> statement, or just a sole else branch without an expression, 
          which is executed if none of the expressions provided with the other branches evaluate to true. If-then-else statements 
          can also be substituted with <strong>switch</strong> statements, switch statements match expressions to cases, involving 
          less code. Next are <strong>conditional (or ternary) operators</strong> which have the format of 
          condition ? expression1 : expression2. They are a more compacted version of the if-else statement, with expression1 
          being the true case and expression2 being the false. Conditions in JavaScript can contain values of any type, but any 
          non-boolean values are converted into either true or false. JavaScript has two types of 
          <strong>equality operators</strong>, <strong>strict equality</strong> operators are === (strictly equal) and !== 
          (not strictly equal). With strict equality operators, the rules are as followed: operands of different types are 
          never the same, boolean values, string and number operands (except for NaN and NaN) are equal when their values are the 
          same, null does not equal undefined, and objects are equal only when both the operands refer to the same object. 
          The <strong>loose equality</strong> operators are == to check whether the two operands are loosely equal, and != to check 
          whether the two operands are not loosely equal. These operators can compare operands of different type by automatically 
          converting them to a common type, but they should be avoided. JavaScript also supports the standard comparison operators 
          that are seen in other languages, being {'<, <=, >, and >='}. It is possible to combine Boolean values with their usual 
          operators, && (and), ||  (or), and !(not). Moving on to loops, <strong>while loops</strong> keep executing the body as 
          long as the expression evaluates to true. <strong>Do While</strong> are while loops with one difference, expressions are evaluated 
          after the body has been executed. <strong>For loops</strong> are used to execute a block of code a certain number of times. 
          There are 3 types of for loops, the first being the stock standard one with an initialization statement being executed once, 
          which allows code to be executed repeatedly until the condition returns false. Next are <strong>for of</strong> loops which 
          are used to iterate over the elements of an iterable value, such as, a string or an array. The last types are 
          <strong>for in</strong> statements, which are used to iterate over the properties of an object. Break statements are used to 
          break out of a loop even when the loop's condition is true, and continue statements skip to the next iteration of a loop.
        </p>

        {/* What is object-oriented programming? */}
        <p>
          JavaScript has supported objects for a long time, but differs in its object-oriented programming by allowing objects can be 
          created in JavaScript without declaring classes. In JavaScript, an object is expected to have an identity, state and behavior.
          Typically, when defined objects, properties of an object would have to be listed separately even if they are the same. So 
          when there are many objects with the same properties, it would be more practical to declare the properties once and then create 
          many objects with these common properties, this is done through the concept of <strong>prototypes.</strong> Prototypes are objects 
          that collect common properties of objects. JavaScript can also create <strong>classes</strong> through using the keyword class.
          <strong>Static methods and fields</strong> are properties of a class, and not of individual objects. So when a value needs to be 
          shared by all instances of a class, it should be defined using the static keyword. <strong>Subclasses</strong> are also supported 
          through the extend keyword, these subclasses inherit those properties, fields as well as methods, of the existing class. As well as 
          add its own properties and override any inherited method.
        </p>

        {/* What is functional programming? */}
        <p>
          Functions in JavaScript have several important features, they can be assigned to variables, they can be defined to receive other functions as arguments,
          and they can be defined to return functions. A function that receives a function(s) as an argument is called a 
          <strong> higher-order function.</strong> JavaScript provides many built-in higher-order functions and methods, one of these being the 
          <strong>map</strong> object. A map in JS is a collection of elements, where each element is stored as a Key, value pair. But, 
          many times, the function we pass to a higher-order function may not be useful other than for this call. To help with this problem, 
          functions without names or <strong>anonymous functions</strong> can be used. Anonymous functions are defined using function expressions,
          which have 2 different syntaxes. The first way is by using the function keyword, and the next, more concise way is through using the 
          arrow operator {'>='}. Named functions can be defined by using function expressions by assigning a function expression to a variable. Moving on,
          JavaScript <strong>closure</strong> allows inner functions to access the outer scope of a function. They are very widely used in JavaScript 
          code and are a core stable of functional programming. Functions can be called with fewer arguments than the number of parameters it declares, 
          with the missing arguments being set to undefined. It is also possible to define a function with default values for one or more parameters.
          When an error occurs in a function, instead of returning the value undefined, the function can throw an <strong>exception</strong>. 
          Exceptions can be caught using the catch clause to take appropriate action. They are thrown using the throw statement, and as they execute, 
          the execution skips to the nearest catch statement. If the exception is not caught by any function, then the program terminates.
          A try statement can also optionally have a finally clause. The code in the finally clause is always executed regardless of whether an exception occurs or not.
        </p>
      </article>
    </>
  );
}

export default TopicsPage;