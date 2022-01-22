# Windward

Home assignment.<br />
Implemntation is based on Nest.js (sever) and Angular (Web app).<br />
Server is exposing API only and is listening for incoming requests on port 3000.<br />

## Run

Clone the repository and install with `npm i`.<br />
On Windows, use `run.bat`.<br />
Otherwise, run `npm run startDev`.<br />
Angular is running with its own Web server, proxying API requests to the Nest.js server.

# Server API

-   GET /api/fleets, /api/fleets?filter={} - return a collection of fleet entities, with an optional filter (query) of the fleets
-   GET /api/fleets/:id - return a fleet by its ID
-   GET /api/fleets/:id/vessels - return the collection of vessels of a specific fleet

# Web app pages

-   /, /fleets - show a table of all fleets
-   /fleet/:id - show the details of a specific fleet, including its vessels

# Implemntation notes

## Data

Server data is loaded directly from JSON files and the server's FleetsService (fleets.service.ts) is simulating queries and processing of the data.
