const parseSingleCrimeDocument = crimeDocument => {
    const {
	beat,
	community_area,
	date,
	description,
	id,
	latitude,
	location,
	longitude,
	primary_type,
	time
    } = crimeDocument;

//    const pos = {lat:latitude , lng:longitude};
//    console.log('lalal',pos);

    return {
	beat,
        community_area,
        date,
        description,
        id,
        latitude,
        location,
        longitude,
        primary_type,
        time,
	pos
    };
};

const ParseCrimeDocument = crimeList => {
  if(!crimeList){
    return [];
  }
  else if (Array.isArray(crimeList)) {
    // return array if input is array
    return crimeList.map(parseSingleCrimeDocument);
  } else {
    // return single object if input is single object
    return parseSingleCrimeDocument(crimeList);
  }
};

export default ParseCrimeDocument;
