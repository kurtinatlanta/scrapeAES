# scrapeAES

This is an Express node.js app that uses cheerio and rxjs to scrape the Advanced Event Systems
web site and extract volleyball tournament results.

To use, clone the repo and then do:

    npm install
    node server.js

You will need to adjust divisionList.js, teamCodes.js, and teamList.js to match the data you want to extract.

fixClubName.js is used to clean up the opponent team names to make them more readable when needed.
fixTeamName.js is used to clean up your team names to make them more what you like when needed.

### Todo:
* Figure out how to use reduce after the data is scraped to generate the HTML.