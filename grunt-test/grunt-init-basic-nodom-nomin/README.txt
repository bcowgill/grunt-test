NO DOM NO MINIMIZATION
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test (master *%)$ mkdir grunt-init && cd grunt-init
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-init (master *)$ grunt-init 
Running "init" task

A valid init template name must be specified.

Available templates
  basic  Create a basic Gruntfile.                                             
 jquery  Create a jQuery plugin, including QUnit unit tests.                   
   node  Create a Node.js module, including Nodeunit unit tests.               

Templates that exist in the /home/brent.cowgill/.grunt-init directory may be run
with "grunt-init TEMPLATE". Templates that exist in another location may be run
with "grunt-init /path/to/TEMPLATE". A template is a directory that must
contain, at the very minimum, a template.js file.

For more information, see http://gruntjs.com/project-scaffolding
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-init (master *)$ grunt-init basic
Running "init:basic" (init) task
This task will create one or more files in the current directory, based on the
environment and the answers to a few questions. Note that answering "?" to any
question will show question-specific help and answering "none" to most questions
will leave its value blank.

"basic" template notes:
This template tries to guess file and directory paths, but you will most likely
need to edit the generated Gruntfile.js file before running grunt. If you run
grunt after generating the Gruntfile, and it exits with errors, edit the file!

Please answer the following:
[?] Is the DOM involved in ANY way? (Y/n) n
[?] Will files be concatenated or minified? (Y/n) n
[?] Will you have a package.json file? (Y/n) y
[?] Do you need to make any changes to the above before continuing? (y/N) n

Writing Gruntfile.js...OK
Writing package.json...OK

Initialized from template "basic".

Done, without errors.
brent.cowgill@bcowgill-dt:~/workspace/play/d3/WebContent/grunt-test/grunt-init (master *%)$ 

