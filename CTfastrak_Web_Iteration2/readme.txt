
Version History
==Nov 15, Iteration 2



Summary:
==build a web server using python to handle the GTFS data, static schedules
==integrated the iteration 1 website into the folder: gtfsscheduleviewer/files

New Functionality:
==show fastrak schedules in the left panel
==for a given route, click on the stop sign, you will see next departure times, routes, etc

Changes on the front end website:
==index.html has been changed, a left panel is added to show routes
==four javascripts are added to the scripts folder to handle markers, response to click events and talk to the server
==a button is added to turn off the KML layer or clear map as you need
==a function to handle failure of geolocation: handleLocationError is added to searchlocation.js



FAQ:
Q1: How to run the website?
A1: you need to install Python on your machine, then run the command:
===========python CCSU_Projct.py C:\location of your GTFS data====================
then the server is ready, you can view the website by typing localhost in your browser

Q2: Do I need to learn python to run the website?
A2: No, Liyuan will take care of the server side, you can develop the website front end as you normally do, the files are located in the gtfsscheduleviewer/files 

Q3: Why we need server?
A3: If you can develop the same functionality or better without using server, we will follow you. 

