/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/davarg5')
  .then( res => {
    res.data.name = 'Daniel Vargas';
    const usercard = createCard(res.data);
    cards.appendChild(usercard);
  })
  .catch( err => {
  console.log("Error:", err);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
followersArray.push("tetondan");
followersArray.push("dustinmyers");
followersArray.push("justsml");
followersArray.push("luishrd");
followersArray.push("bigknell");
for(let i=0; i<followersArray.length; i++)
{
  axios.get('https://api.github.com/users/'+followersArray[i])
    .then( res => {
      const usercard = createCard(res.data);
      cards.appendChild(usercard);
    })
    .catch( err => {
    console.log("Error:", err);
    })
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

cards = document.querySelector('.cards');

function createCard(obj)
{
  const card = document.createElement('div');
  card.classList.add('card');
  cards.appendChild(card);

  const img = document.createElement('img');
  img.setAttribute('src', obj.avatar_url);
  card.appendChild(img);

  const card_info = document.createElement('div');
  card_info.classList.add('card-info');
  card.appendChild(card_info);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = obj.name;
  card_info.appendChild(name);

  const username = document.createElement('p');
  username.textContent = obj.login;
  username.classList.add('username');
  card_info.appendChild(username);

  const location = document.createElement('p');
  location.textContent = 'Location: '+obj.location;
  location.classList.add('location');
  card_info.appendChild(location);

  const profile = document.createElement('p');
  profile.textContent = 'Profile:';
  card_info.appendChild(profile);

  const address = document.createElement('a');
  address.textContent = obj.url;
  address.setAttribute('href', obj.url);
  profile.appendChild(address);

  const followers = document.createElement('p');
  followers.textContent = 'Followers: '+obj.followers;
  card_info.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = 'Following: '+obj.following;
  card_info.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = 'Bio: '+obj.bio;
  card_info.appendChild(bio);

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
