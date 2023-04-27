Mimers AI-chatt
Mimers AI-chatt är en React-baserad webbapplikation som använder sig av OpenAI:s ChatGPT-teknik för att möjliggöra effektiv och mångsidig användning av AI i verksamhetsstöd. Applikationen är utvecklad för organisationen Mimer och är en viktig del i deras arbete med att omfamna och utnyttja potentialen av AI-teknik för att förbättra produktiviteten och effektiviteten i deras verksamhet.

Installation
För att installera och köra Mimers AI-chatt på din dator, behöver du först klona det här GitHub-repot och därefter installera alla nödvändiga paket. Detta görs enklast med hjälp av Node Package Manager (npm).

För att klona repot, kör följande kommando i din terminal:

sh
Copy code
git clone https://github.com/mimer-ai-chat/chatapp.git
När du har klonat repot, kan du installera alla paket med följande kommando:

sh
Copy code
npm install
Konfiguration
För att kunna använda Mimers AI-chatt behöver du skapa en .env-fil och lägga till de nödvändiga konfigurationsvariablerna. En exempel-fil (env.sample) finns redan inkluderad i repot, och du kan använda den som grund för att skapa din egen fil.

De konfigurationsvariabler du behöver lägga till är:

REACT_APP_API_URL
URL till den custom API-tjänst som används för att hantera användare och chathistorik.

REACT_APP_API_KEY
API-nyckel för att autentisera mot den custom API-tjänsten.

REACT_APP_AUTH0_DOMAIN
Domännamnet för den Auth0-instans som används för autentisering och hantering av användare.

REACT_APP_AUTH0_CLIENTID
Client ID för Auth0-instansen.

Användning
När du har konfigurerat Mimers AI-chatt och installerat alla nödvändiga paket kan du starta applikationen med följande kommando:

sh
Copy code
npm start
Applikationen kommer då att köras i utvecklingsläge på http://localhost:3000.

Custom API
Mimers AI-chatt är beroende av en custom API-tjänst för att hantera användare och chathistorik. API-tjänsten har följande endpoints:

chat: Används för att skicka meddelanden till OpenAI:s API och ta emot svar.
clearChathistory: Används för att radera all chathistorik för en viss användare.
getchathistory: Används för att hämta chathistorik för en viss användare.
setSystemMessage: Används för att skicka systemmeddelanden till chatten.

För att använda API-tjänsten behöver du lägga till relevant URL och API-nyckel i din .env-fil. Dessa variabler är:

REACT_APP_API_URL: URL till din custom API-tjänst som används för att hantera användare och chathistorik.
REACT_APP_API_KEY: API-nyckel som används för att autentisera mot din custom API-tjänst.
Observera att du inte behöver lägga till några OpenAI-URL:er eller API-nycklar i din .env-fil, eftersom detta hanteras av din custom API-tjänst.

Bidragande
Vi uppmuntrar till bidragande till Mimers AI-chatt! Om du vill bidra med förbättringar, förslag på nya funktioner eller rapportera buggar kan du göra det genom att skapa en pull request eller issue.

Licens
Mimers AI-chatt är licensierad under MIT-licensen. Du är fri att använda, kopiera, modifiera och distribuera koden, så länge du följer licensens villkor.
