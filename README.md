

\# Enterprise Cloud Service Catalog



\## Project Information



\- \*\*Developer:\*\* John Daniel Iype

\- \*\*University Roll Number:\*\* 2648032

\- \*\*Course:\*\* MDS 403 - Cloud Services

\- \*\*Technology:\*\* Node.js and Express.js

\- \*\*Deployment Platform:\*\* Vercel



\## Project Description



The Enterprise Cloud Service Catalog is a Node.js and Express application that provides information about cloud computing services through REST APIs. It also includes a web-based interface to access the cloud services catalog and check application status.



\## Features



\- Displays an Enterprise Cloud Service Catalog homepage.

\- Provides a REST API listing four cloud services.

\- Provides an API to check application status.

\- Supports local and cloud deployment.

\- Uses Express.js to serve static files and API endpoints.



\## API Endpoints



| Method | Endpoint | Description |

|---|---|---|

| GET | `/api/services` | Returns the list of cloud services. |

| GET | `/api/status` | Returns application status and developer information. |



\## Local Setup and Execution



1\. Clone the repository.

2\. Install dependencies:



&#x20;  ```bash

&#x20;  npm install

&#x20;  ```



3\. Start the application:



&#x20;  ```bash

&#x20;  npm start

&#x20;  ```



4\. Open `http://localhost:8080` in your browser.



\## Local Port 8080 vs Cloud PaaS Port (100-word explanation)



During local development, the application uses port 8080 as its default port through `const PORT = process.env.PORT || 8080`. This makes the application available at `http://localhost:8080` when no environment variable is configured. In a cloud PaaS environment, the hosting platform may provide its own port through the `PORT` environment variable. The application reads that assigned value first, instead of forcing port 8080. This allows the same code to run in both environments without changing the source code. Using an environment-provided port supports the platform's deployment and routing requirements and makes the application more portable and supports consistent deployment across platforms.



\## Live Deployment



https://cloud-catalog-copy.vercel.app



\## GitHub Repository



https://github.com/johndanieliype-source/cloud-catalog-Copy



\## Technologies Used



\- Node.js

\- Express.js

\- HTML5

\- CSS3

\- JavaScript

\- Git and GitHub

\- Vercel



