# locus

Nodejs/Expressjs API for locus which is an app provides information of the place wheere users checkin.
This package uses MongoDB as a backend.

# Requisites
<ul>
  <li>Nodejs/Expressjs</li>
  <li>MongoDB</li>
</ul>

# Preinstallation

Before starting the server, run the following scripts to initialize the data into the MongoDB database.
<ul>
  <li>/db/scripts/init.js</li>
  <li>/db/scripts/insert-place.js</li>
  <li>/db/scripts/insert-user.js</li>
</ul>

Create the following directory where uploaded images are stored.
<ul>
  <li>/golden-land/images/</li>
</ul>

# Running the server
This API is written in Nodejs and NPM to manage dependencies and packages.
Run the following commends to install necessary packages.
<ul>
  <li>npm install</li>
</ul>
If this API is hosted in localhost, the port number will be 3000.

# API End-points
There are two API end-points - public and private. For private, the API will generate the token after login.
Client application needs to pass the token (either in body, parameters and headers).

# Public API
The followings are the sample public API end-points.
<ul>
  <li>[GET] localhost:3000/api/v1/places/16.798380/96.149620 <br/><span>[16.798380, 96.149620] are latitude and longitude</span></li>
  <li>[GET] localhost:3000/api/v1/login</li>
</ul>

# Private API
In order to access this API end-points, client applications need to pass the token.
<ul>
  <li>[POST] localhost:3000/api/v1/recommend <br/><span>Pass <b>placeId</b> of the place to be recommended in the http body.</span></li>
  <li>
    [POST] localhost:3000/api/v1/review/submit <br/>
    <span>
        Pass <b>placeId</b> of the place to be reviewed.<br/>
        Pass <b>comment</b> of the palce to be commented.<br/>
    </span>
  </li>
  <li>
    [POST] localhost:3000/api/v1/image/upload <br/>
    <span>
      <b>image</b> is the uploaded image fieldname.
    </span>
  </li>
</ul>




