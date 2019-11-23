# Employee_Summary
It will need to be based off of the activities 8, 9, 22
NO MOCKS
Use the class and extends 
Employee is the master class
    manager
    engineer
    intern

Pseudo code
import directory structure (X)
create test.js for every class in file(x)
    populate tests()
FormatHTML [it will be provided] ()
Create classes(X)
    give this.objects to all classes
        employee class: name, employee type, ID, email
        manager class: office number
        engineer class: git hub page
        intern class: school name
    linked them all back to employee.js

Axios js page(X)
    questions to ask
        Name
        employee type [will need a choice]
        email
    if manager
        office number
    if engineer
        github link
    if intern 
        school name
    loop through until user is done()
    can have functions in the choices to allow for if statements and run auto

Add conditionals by method for axios questions
    maybe break them up so they only run on employee obj?
    the way to think about it is in activity 24 Letter.js
INfo is stored on obj so must be pushed to the htmls at some point

The templates are only snippet of html[manager.html, engineer.html, intern.html] that will eventually be pasted on main.html
    how do you take snippets of seperate html files together on one main.html?
        https://jonsuh.com/blog/javascript-templating-without-a-library/
    what are the variables that they use on the html to ensure consistency?
    where do these snippets get refernced on obj? If at all?
    handlebar library
OR
    may need a for loop to do for multiple employee types [might need to save to array?]
   var = fs.readFileSync ('pathway to the snippet html', {encoding: 'utf8'});
    let var = templateFile.replace('{{name}}', 'obj info');
    then write onto the main.html with replace.({{team}}, )
    string .replace

make sure the references account for the files()
Send the newly generated HTML with the snippets to the output folder()

    