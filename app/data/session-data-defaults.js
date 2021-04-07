/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "local-authorities": [
    "Adur District Council",
    "Allerdale Borough Council",
    "Amber Valley Borough Council",
    "Arun District Council",
    "Ashfield District Council",
    "Ashford Borough Council",
    "Aylesbury Vale District Council",
    "Babergh District Council",
    "Barnsley Metropolitan Borough Council",
    "Barrow-in-Furness Borough Council",
    "Basildon Borough Council",
    "Basingstoke and Deane Borough Council",
    "Bassetlaw District Council",
    "Bath and North East Somerset Council",
    "Bedford Borough Council",
    "Birmingham City Council",
    "Blaby District Council",
    "Blackburn with Darwen Borough Council",
    "Blackpool Borough Council",
    "Blaenau Gwent County Borough Council",
    "Bolsover District Council",
    "Bolton Metropolitan Borough Council",
    "Borough Council of King's Lynn and West Norfolk",
    "Boston Borough Council",
    "Bournemouth, Christchurch and Poole Council",
    "Bracknell Forest Council",
    "Braintree District Council",
    "Breckland District Council",
    "Brentwood Borough Council",
    "Bridgend County Borough Council",
    "Brighton and Hove City Council",
    "Bristol City Council",
    "Broadland District Council",
    "Bromsgrove District Council",
    "Broxbourne Borough Council",
    "Broxtowe Borough Council",
    "Burnley Borough Council",
    "Bury Metropolitan Borough Council",
    "Caerphilly County Borough Council",
    "Calderdale Metropolitan Borough Council",
    "Cambridge City Council",
    "Cannock Chase District Council",
    "Canterbury City Council",
    "Cardiff Council",
    "Carlisle City Council",
    "Carmarthenshire County Council",
    "Castle Point Borough Council",
    "Central Bedfordshire Council",
    "Ceredigion County Council",
    "Charnwood Borough Council",
    "Chelmsford City Council",
    "Cheltenham Borough Council",
    "Cherwell District Council",
    "Cheshire East Council",
    "Cheshire West and Chester Council",
    "Chesterfield Borough Council",
    "Chichester District Council",
    "Chiltern District Council",
    "Chorley Borough Council",
    "City and County of Swansea",
    "City of Bradford Metropolitan District Council",
    "City of Lincoln Council",
    "City of London Corporation",
    "City of Westminster",
    "City of Wolverhampton Council",
    "City of York Council",
    "Colchester Borough Council",
    "Conwy County Borough Council",
    "Copeland Borough Council",
    "Corby Borough Council",
    "Cornwall Council",
    "Cotswold District Council",
    "Council of the Isles of Scilly",
    "Coventry City Council",
    "Craven District Council",
    "Crawley Borough Council",
    "Dacorum Borough Council",
    "Darlington Borough Council",
    "Dartford Borough Council",
    "Daventry District Council",
    "Denbighshire County Council",
    "Derby City Council",
    "Derbyshire Dales District Council",
    "Doncaster Metropolitan Borough Council",
    "Dorset Council",
    "Dover District Council",
    "Dudley Metropolitan Borough Council",
    "Durham County Council",
    "East Cambridgeshire District Council",
    "East Devon District Council",
    "East Hampshire District Council",
    "East Hertfordshire District Council",
    "East Lindsey District Council",
    "East Northamptonshire Council",
    "East Riding of Yorkshire Council",
    "East Staffordshire Borough Council",
    "East Suffolk Council",
    "Eastbourne Borough Council",
    "Eastleigh Borough Council",
    "Eden District Council",
    "Elmbridge Borough Council",
    "Epping Forest District Council",
    "Epsom and Ewell Borough Council",
    "Erewash Borough Council",
    "Exeter City Council",
    "Fareham Borough Council",
    "Fenland District Council",
    "Flintshire County Council",
    "Folkestone and Hythe District Council",
    "Forest of Dean District Council",
    "Fylde Borough Council",
    "Gateshead Metropolitan Borough Council",
    "Gedling Borough Council",
    "Gloucester City Council",
    "Gosport Borough Council",
    "Gravesham Borough Council",
    "Great Yarmouth Borough Council",
    "Guildford Borough Council",
    "Gwynedd Council",
    "Halton Borough Council",
    "Hambleton District Council",
    "Harborough District Council",
    "Harlow District Council",
    "Harrogate Borough Council",
    "Hart District Council",
    "Hartlepool Borough Council",
    "Hastings Borough Council",
    "Havant Borough Council",
    "Herefordshire Council",
    "Hertsmere Borough Council",
    "High Peak Borough Council",
    "Hinckley and Bosworth Borough Council",
    "Horsham District Council",
    "Hull City Council",
    "Huntingdonshire District Council",
    "Hyndburn Borough Council",
    "Ipswich Borough Council",
    "Isle of Anglesey County Council",
    "Isle of Wight Council",
    "Kettering Borough Council",
    "Kirklees Council",
    "Knowsley Metropolitan Borough Council",
    "Lancaster City Council",
    "Leeds City Council",
    "Leicester City Council",
    "Lewes District Council",
    "Lichfield District Council",
    "Liverpool City Council",
    "London Borough of Barking and Dagenham",
    "London Borough of Barnet",
    "London Borough of Bexley",
    "London Borough of Brent",
    "London Borough of Bromley",
    "London Borough of Camden",
    "London Borough of Croydon",
    "London Borough of Ealing",
    "London Borough of Enfield",
    "London Borough of Hackney",
    "London Borough of Hammersmith and Fulham",
    "London Borough of Haringey",
    "London Borough of Harrow",
    "London Borough of Havering",
    "London Borough of Hillingdon",
    "London Borough of Hounslow",
    "London Borough of Islington",
    "London Borough of Lambeth",
    "London Borough of Lewisham",
    "London Borough of Merton",
    "London Borough of Newham",
    "London Borough of Redbridge",
    "London Borough of Richmond upon Thames",
    "London Borough of Southwark",
    "London Borough of Sutton",
    "London Borough of Tower Hamlets",
    "London Borough of Waltham Forest",
    "London Borough of Wandsworth",
    "Luton Borough Council",
    "Maidstone Borough Council",
    "Maldon District Council",
    "Malvern Hills District Council",
    "Manchester City Council",
    "Mansfield District Council",
    "Medway Council",
    "Melton Borough Council",
    "Mendip District Council",
    "Merthyr Tydfil County Borough Council",
    "Mid Devon District Council",
    "Mid Suffolk District Council",
    "Mid Sussex District Council",
    "Middlesbrough Borough Council",
    "Milton Keynes Council",
    "Mole Valley District Council",
    "Monmouthshire County Council",
    "Neath Port Talbot County Borough Council",
    "New Forest District Council",
    "Newark and Sherwood District Council",
    "Newcastle City Council",
    "Newcastle-under-Lyme Borough Council",
    "Newport City Council",
    "North Devon District Council",
    "North East Derbyshire District Council",
    "North East Lincolnshire Council",
    "North Hertfordshire District Council",
    "North Kesteven District Council",
    "North Lincolnshire Council",
    "North Norfolk District Council",
    "North Somerset Council",
    "North Tyneside Council",
    "North Warwickshire Borough Council",
    "North West Leicestershire District Council",
    "Northampton Borough Council",
    "Northumberland County Council",
    "Norwich City Council",
    "Nottingham City Council",
    "Nuneaton and Bedworth Borough Council",
    "Oadby and Wigston Borough Council",
    "Oldham Metropolitan Borough Council",
    "Oxford City Council",
    "Pembrokeshire County Council",
    "Pendle Borough Council",
    "Peterborough City Council",
    "Plymouth City Council",
    "Portsmouth City Council",
    "Powys County Council",
    "Preston City Council",
    "Reading Borough Council",
    "Redcar and Cleveland Borough Council",
    "Redditch Borough Council",
    "Reigate and Banstead Borough Council",
    "Rhondda Cynon Taf County Borough Council",
    "Ribble Valley Borough Council",
    "Richmondshire District Council",
    "Rochdale Metropolitan Borough Council",
    "Rochford District Council",
    "Rossendale Borough Council",
    "Rother District Council",
    "Rotherham Metropolitan Borough Council",
    "Royal Borough of Greenwich",
    "Royal Borough of Kensington and Chelsea",
    "Royal Borough of Kingston upon Thames",
    "Royal Borough of Windsor and Maidenhead",
    "Rugby Borough Council",
    "Runnymede Borough Council",
    "Rushcliffe Borough Council",
    "Rushmoor Borough Council",
    "Rutland County Council",
    "Ryedale District Council",
    "Salford City Council",
    "Sandwell Metropolitan Borough Council",
    "Scarborough Borough Council",
    "Sedgemoor District Council",
    "Sefton Metropolitan Borough Council",
    "Selby District Council",
    "Sevenoaks District Council",
    "Sheffield City Council",
    "Shropshire Council",
    "Slough Borough Council",
    "Solihull Metropolitan Borough Council",
    "Somerset West and Taunton Council",
    "South Bucks District Council",
    "South Cambridgeshire District Council",
    "South Derbyshire District Council",
    "South Gloucestershire Council",
    "South Hams District Council",
    "South Holland District Council",
    "South Kesteven District Council",
    "South Lakeland District Council",
    "South Norfolk District Council",
    "South Northamptonshire Council",
    "South Oxfordshire District Council",
    "South Ribble Borough Council",
    "South Somerset District Council",
    "South Staffordshire Council",
    "South Tyneside Council",
    "Southampton City Council",
    "Southend-on-Sea Borough Council",
    "Spelthorne Borough Council",
    "St Albans City and District Council",
    "St Helens Council",
    "Stafford Borough Council",
    "Staffordshire Moorlands District Council",
    "Stevenage Borough Council",
    "Stockport Metropolitan Borough Council",
    "Stockton-on-Tees Borough Council",
    "Stoke-on-Trent City Council",
    "Stratford-on-Avon District Council",
    "Stroud District Council",
    "Sunderland City Council",
    "Surrey Heath Borough Council",
    "Swale Borough Council",
    "Swindon Borough Council",
    "Tameside Metropolitan Borough Council",
    "Tamworth Borough Council",
    "Tandridge District Council",
    "Teignbridge District Council",
    "Telford and Wrekin Council",
    "Tendring District Council",
    "Test Valley Borough Council",
    "Tewkesbury Borough Council",
    "Thanet District Council",
    "Three Rivers District Council",
    "Thurrock Council",
    "Tonbridge and Malling Borough Council",
    "Torbay Council",
    "Torfaen County Borough Council",
    "Torridge District Council",
    "Trafford Metropolitan Borough Council",
    "Tunbridge Wells Borough Council",
    "Uttlesford District Council",
    "Vale of Glamorgan Council",
    "Vale of White Horse District Council",
    "Wakefield Metropolitan District Council",
    "Walsall Metropolitan Borough Council",
    "Warrington Borough Council",
    "Warwick District Council",
    "Watford Borough Council",
    "Waverley Borough Council",
    "Wealden District Council",
    "Wellingborough Borough Council",
    "Welwyn Hatfield Borough Council",
    "West Berkshire Council",
    "West Devon Borough Council",
    "West Lancashire Borough Council",
    "West Lindsey District Council",
    "West Oxfordshire District Council",
    "West Suffolk Council",
    "Wigan Metropolitan Borough Council",
    "Wiltshire Council",
    "Winchester City Council",
    "Wirral Borough Council",
    "Woking Borough Council",
    "Wokingham Borough Council",
    "Worcester City Council",
    "Worthing Borough Council",
    "Wrexham County Borough Council",
    "Wychavon District Council",
    "Wycombe District Council",
    "Wyre Borough Council",
    "Wyre Forest District Council"
  ]

}
