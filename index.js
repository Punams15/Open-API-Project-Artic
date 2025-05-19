//function// HTTP GET method using the fetch() API//The code uses Promises, which is a core part of how the fetch() API works in JavaScript.//the code is not using async/await. Instead, it's using the Promise .then() and .catch() method chain.


fetch("https://api.artic.edu/api/v1/artworks")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed with status ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });



  //Here's what you should expect to see:
  //In the console, you will see a JSON object printed, which contains data about artworks from the Art Institute of Chicago's public API.

 //The structure of the JSON typically looks like this:
  //{
  //"pagination": {
    //"total": 116929,
   // "limit": 12,
   // "offset": 0,
   // "total_pages": 9745,
   // "current_page": 1,
  //  "next_url": "https://api.artic.edu/api/v1/artworks?page=2"
 // },
 // "data": [
   // {
   //   "id": 129884,
    //  "title": "The Bedroom",
    //  "artist_display": "Vincent van Gogh",
    //  "image_id": "abc123xyz456",
    //  ...
  //  },
  //  ...
 // ],
  //"config": {
   // "iiif_url": "https://www.artic.edu/iiif/2",
  //  ...
 // }
//}

//What’s inside:
//pagination: Info about how many artworks exist and how the results are paginated.

//data: An array of artwork objects (e.g., titles, artists, IDs, etc.).

//config: Configuration details like image URLs and API behavior.
