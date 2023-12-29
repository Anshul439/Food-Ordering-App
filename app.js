import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData?.info
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
            <h3 className="res-name">{name}</h3>
            <h4 className="cuisine">{cuisines.join(", ")}</h4>
            <div className="rating">
                <img className="star" src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png"></img>
                <h4>{avgRating}</h4> 
                <h4 className="time">• {sla.deliveryTime} mins</h4>
            </div>
            <div>
                <h4>{costForTwo}</h4></div>
        </div>
    )
}

const resList = [
    {
        "info": {
          "id": "324765",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "BMC Chowk",
          "areaName": "Gt Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.2,
          "parentId": "721",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-bmc-chowk-gt-road-jalandhar-324765",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361099",
          "name": "Faasos - Wraps, Rolls & Shawarma",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "21809",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-eminent-mall-shastri-nagar-jalandhar-361099",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361103",
          "name": "Sweet Truth - Cake and Desserts",
          "cloudinaryImageId": "2bff7ef1c40b8a1d356fcf9d487324f9",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Snacks",
            "Bakery",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "4444",
          "avgRatingString": "4.5",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-eminent-mall-shastri-nagar-jalandhar-361103",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361102",
          "name": "Firangi Bake",
          "cloudinaryImageId": "paadta6mn3rdzzk015it",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Mexican",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "3952",
          "avgRatingString": "4.1",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "33 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/firangi-bake-eminent-mall-shastri-nagar-jalandhar-361102",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361106",
          "name": "The Biryani Life",
          "cloudinaryImageId": "zzmg1peb1bhtcxoxdwa7",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "8496",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-biryani-life-eminent-mall-shastri-nagar-jalandhar-361106",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361105",
          "name": "The Good Bowl",
          "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "7918",
          "avgRatingString": "4.3",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-eminent-mall-shastri-nagar-jalandhar-361105",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "74227",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
          "locality": "Rainbow Road",
          "areaName": "Model Town",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "0.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-rainbow-road-model-town-jalandhar-74227",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "361104",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "hmyrmkykypkavct8knbv",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "4925",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-eminent-mall-shastri-nagar-jalandhar-361104",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "421645",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "xed8iztym0tfhp49qec7",
          "locality": "PPR Mall",
          "areaName": "PPR Market",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "4961",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹549",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-ppr-mall-ppr-market-jalandhar-421645",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "444143",
          "name": "Wendy's Burgers",
          "cloudinaryImageId": "a2ec5418246b622ec4baa3bd051ef6ab",
          "locality": "Guru Nanak Mission Chowk",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "972",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/wendys-burgers-guru-nanak-mission-chowk-shastri-nagar-jalandhar-444143",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "575223",
          "name": "Mehfil by Behrouz",
          "cloudinaryImageId": "2b579171cefc545ce6479e21c0016798",
          "locality": "Eminent Mall",
          "areaName": "Lajpat Nagar",
          "costForTwo": "₹700 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "344904",
          "avgRatingString": "4.2",
          "totalRatingsString": "10+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mehfil-by-behrouz-eminent-mall-lajpat-nagar-jalandhar-575223",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "566483",
          "name": "Faasos Signature Wraps & Rolls",
          "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
          "locality": "Eminent Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Fast Food",
            "Snacks",
            "North Indian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "340366",
          "avgRatingString": "4.3",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-12-26 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-eminent-mall-shastri-nagar-jalandhar-566483",
          "type": "WEBLINK"
        }
      }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {
              resList.map((restaurant) => (
                <RestaurantCard key = {restaurant.info.id} resData = {restaurant} /> 
              ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body /> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)

