<h1>myContacts Node.js Application</h1>

<p><em>myContacts</em> is a Node.js application that allows users to save and manage their contacts. Users can register, log in, and perform CRUD operations on their contacts.</p>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#dependencies">Dependencies</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="dependencies">Dependencies</h2>

<p>The application relies on the following dependencies:</p>

  <ul>
    <li><code>bcrypt</code>: Library for hashing passwords securely.</li>
    <li><code>dotenv</code>: Loads environment variables from a <code>.env</code> file.</li>
    <li><code>express</code>: Web application framework for building APIs.</li>
    <li><code>express-async-handler</code>: Handles asynchronous errors in Express routes.</li>
    <li><code>jsonwebtoken</code>: Generates JSON Web Tokens for user authentication.</li>
    <li><code>mongoose</code>: Object Data Modeling (ODM) library for MongoDB.</li>
    <li><code>nodemon</code> (dev): Monitors changes and restarts the server during development.</li>
  </ul>

<h2 id="getting-started">Getting Started</h2>

<h3>Installation</h3>

<ol>
  <li>Clone the repository:</li>
</ol>

<pre><code>git clone https://github.com/saad662/myContacts-backend.git
cd myContacts-backend</code></pre>

<!-- Add more installation steps here -->

<h3>Configuration</h3>

<ol>
  <li>Create a <code>.env</code> file in the root directory and add the following environment variables:</li>
</ol>

<pre><code>PORT=3000
CONNECTION_STRING=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_token_secret</code></pre>

<!-- Add more configuration details here -->

<h2 id="api-endpoints">API Endpoints</h2>
  <h3>User Authentication</h3>
  <ul>
    <li>
      <strong>Register a User</strong>
      <br>
      <em>Route:</em> <code>POST /api/register</code>
      <br>
      <em>Access:</em> Public
      <br>
      Registers a new user and returns the user's email upon successful registration.
    </li>
    <li>
      <strong>Login a User</strong>
      <br>
      <em>Route:</em> <code>POST /api/login</code>
      <br>
      <em>Access:</em> Public
      <br>
      Logs in a user and returns a JWT access token.
    </li>
    <li>
      <strong>Get Current User</strong>
      <br>
      <em>Route:</em> <code>GET /api/current</code>
      <br>
      <em>Access:</em> Private
      <br>
      Returns the current user's information based on the provided JWT token.
    </li>
  </ul>

  <h3>Contacts</h3>
  <ul>
    <li>
      <strong>Get All Contacts</strong>
      <br>
      <em>Route:</em> <code>GET /api/contacts</code>
      <br>
      <em>Access:</em> Private
      <br>
      Retrieves all contacts associated with the authenticated user.
    </li>
    <li>
      <strong>Create New Contact</strong>
      <br>
      <em>Route:</em> <code>POST /api/contacts</code>
      <br>
      <em>Access:</em> Private
      <br>
      Creates a new contact and associates it with the authenticated user.
    </li>
    <li>
      <strong>Get Contact by ID</strong>
      <br>
      <em>Route:</em> <code>GET /api/contacts/:id</code>
      <br>
      <em>Access:</em> Private
      <br>
      Retrieves a specific contact by its ID, if it belongs to the authenticated user.
    </li>
    <li>
      <strong>Update Contact</strong>
      <br>
      <em>Route:</em> <code>PUT /api/contacts/:id</code>
      <br>
      <em>Access:</em> Private
      <br>
      Updates a specific contact's information, if it belongs to the authenticated user.
    </li>
    <li>
      <strong>Delete Contact</strong>
      <br>
      <em>Route:</em> <code>DELETE /api/contacts/:id</code>
      <br>
      <em>Access:</em> Private
      <br>
      Delete a specific contact, if it belongs to the authenticated user.
    </li>
  </ul>
<h2 id="usage">Usage</h2>

<ol>
  <li>Make sure you have MongoDB installed and running.</li>
  <li>Start the server:</li>
</ol>

<pre><code>npm start  ||  npm run dev</code></pre>

<!-- Add more usage instructions here -->

<h2 id="contributing">Contributing</h2>

<p>Contributions are welcome! If you find any issues or want to enhance the functionality, feel free to open a pull request.</p>

<h2 id="license">License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>. Feel free to use and modify the code as per the license terms.</p>
