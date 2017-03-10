## Synopsis

I have created an extension that will allow developers of the CUBE application to be able to autofill the submission info page with the necessary information to be able to save and work and new policy.

## Installation

Once you download the two folders, place were desired and create the extensions to point to the locations. Note: I hid my 'extension' that is being reference in the chrome menu to lessen the confusion on which one works on click. Also, you will of course have to change your file location in the manifest.json and .js files as well as point to the correct extension id in the discogs extension.

## Click Voltron In The Toolbar to autofill
![voltron](/AutoFillExtension/voltron.png)

## .bat File (Windows Users)

Added .bat file to be run as admin. This will remove the annoying 'Developer Extention' message you see everytime you open Chrome. Prior to running this, you'll need to add the following to your **PATH** environment variable:

~~~
%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\
~~~
