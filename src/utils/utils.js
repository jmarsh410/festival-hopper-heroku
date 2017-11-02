import Cookie from 'js-cookie';

/* jshint ignore:start */
function normalizeBreweryBeers(json, bucket = 0) {
  // code for undocumented api call
  const array = json.response.beers.items;

  // code for the documented api call
  // const array = json.response.brewery.beer_list.items;

  const beers = [];
  array.forEach((obj, i) => {
    const normalizedBeer = {
      id: obj.beer.bid,
      name: obj.beer.beer_name,
      brewery: obj.brewery.brewery_name,
      image: obj.beer.beer_label,
      description: '',
      rating: 0,
      isCheckedIn: false,
      isOpen: false,
      checked: false,
      bucket,
      index: i,
    };
    beers.push(normalizedBeer);
  });
  return beers;
}

function getAccessToken() {
  return Cookie.get('untappd_access_token');
}

const utils = {
  generateId(size) {
    const idSize = typeof size !== 'number'
      ? size
      : 5;
    let value = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = chars.length;
    for (let i = 0; i < idSize; i += 1) {
      value += chars.charAt(Math.floor(Math.random() * length));
    }
    return value;
  },
  getAccessToken,
  normalizeBreweryBeers,
  generateCheckInUrl() {
    return `https://api.untappd.com/v4/checkin/add?access_token=${getAccessToken()}`;
  },
  // lists the beers that a brewery has
  generateBreweryInfoUrl(breweryId, offset = 0) {
    // brewery/beer_list/BREWERY_ID
    // there is an undocumented api endpoint that the untappd website uses
    // which can be used to get a brewery's beers
    // this endpoint is subject to removal/changes since it is undocumented
    return `https://api.untappd.com/v4/brewery/beer_list/${breweryId}?access_token=${getAccessToken()}&offset=${offset}`;

    // documented api call https://untappd.com/api/docs#breweryinfo
    // return 'https://api.untappd.com/v4/brewery/info/'+ breweryId + '?access_token=' + getAccessToken();
  },
  // lists breweries that match the search term
  generateBrewerySearchUrl(breweryName) {
    return `https://api.untappd.com/v4/search/brewery/?access_token=${getAccessToken()}&q=${breweryName}&limit=50`;
  },
  makeBreweryBeerList(json, id) {
    const beers = normalizeBreweryBeers(json);
    // works off a previous list or creates a new one
    return {
      id,
      beers: [beers],
      checkCount: 0,
      maxItems: json.response.total_count,
      beerCount: beers.length,
    };
  },
  makeBreweryItems(json) {
    // loop over each brewery and create an object for it, then return array of those objects
    const breweries = [];
    json.response.brewery.items.forEach((breweryObj) => {
      // props: name, image, id
      const normalizedBrewery = {
        id: breweryObj.brewery.brewery_id,
        name: breweryObj.brewery.brewery_name,
        image: breweryObj.brewery.brewery_label,
      };
      breweries.push(normalizedBrewery);
    });
    return breweries;
  },
  removeClientCookie() {
    Cookie.remove('untappd_access_token');
  },
  isClientSide() {
    return typeof window !== 'undefined';
  },
  getPageDirection(props) {
    return props
      && props.location
      && props.location.state
      && props.location.state.enterDirection
      ? props.location.state.enterDirection
      : 'fade';
  },
  getBackPath(props) {
    return props
      && props.location
      && props.location.state
      && props.location.state.from
      ? props.location.state.from
      : '';
  },
};

export default utils;
