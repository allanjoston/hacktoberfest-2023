Asynchronous Js 

In JavaScript Synchronous and asynchronous are code execution Pattern,

In JavaScript Code Execution done By two separate ways:
1. Browser JS Engine (popular V8 JS Engine)
2. NodeJs V8 Engine

Browser JS Engine parse Html file and executes JavaScript by three patterns,
1. synchronous
2. Asynchronous
defer
index.html
<script src='index.js'>           //default Synchronous
<script async src='index.js'>      //parse as Asynchronously
<script defer src='index.js'>      //parse as deferred
while browser JS Engine parsing HTML file if <Script > tag occurs means there will be blocking, so how it gets execute JavaScript Code for that above three patterns.

If synchronous <script > tag occurs, JS engine will download the code and execute that code and after that only parsing the below HTML code, generally Synchronous is a blocking script execution.
If Asynchronous <script async> tag occurs, while downloading the code JS engine will parse the HTML and once If JS code gets downloaded pause the parsing and back into the JS Code Execution, generally Asynchronous is a Non-blocking script execution.
If Asynchronous <script defer> tag occurs, JS Engine will parse the all HTML code and after that only executes the JS Code,
NodeJS V8 Engine:
NodeJS V8 engine executes its JavaScript Code as single-threaded based on the Event loop
