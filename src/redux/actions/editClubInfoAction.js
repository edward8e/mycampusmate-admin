import {EDIT_CLUB,ERROR_EVENTS} from './types';

export const editClubInfo = (object_data) => {
    return function(dispatch)
    {
        return fetch("https://rmate-backend.herokuapp.com/api/organizations/" + object_data.url + "/edit_club", {
            method: "POST",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: object_data.name,
              additional_info: object_data.additional_info,
              description: object_data.description,
              address: object_data.address,
              email: object_data.email,
              icon_src : object_data.icon_src,
              phone_number : object_data.phone_number,
              photo_album: object_data.photo_album,
              social_urls: object_data.social_urls
            })
        }).then(response => response.json().then( responseJson => {
            if(responseJson.status ==="OK")
            {
               dispatch(editClub('Success'))
            }
            else{
               alert(responseJson.status)
               dispatch(errorClub('Error occurred when adding events'))
            }
          })
        ).catch(function(error){
             alert(error.message);
    });
    }
};
export const editClub = (data) => {
    return {
        type: EDIT_CLUB,
        payload: data
    };
};
export const errorClub = (data) => {
    return {
        type: ERROR_EVENTS,
        payload: data
    };
};
