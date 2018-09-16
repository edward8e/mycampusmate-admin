import {ADDED_EVENTS,ERROR_EVENTS} from './types';
import API from '../../api';

export const addClubEvent = (object_data) => {
    return function(dispatch)
    {
         return fetch(API.ROOT_URL + "organizations/" + object_data.club_name + "/add-event", {

            method: "POST",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: object_data.name,
              description: object_data.description,
              day_of_week: object_data.dayoftheweek,
              start_time: object_data.starttime,
              end_time : object_data.endtime,
              img_lg_src : object_data.largeimg,
              img_med_src: object_data.medimg,
              location: object_data.location
            })
        }).then(response => response.json().then( responseJson => {
            if(responseJson.status ==="OK")
            {
               dispatch(addedEvents('added Events Successfully'))
            }
            else{
               dispatch(errorEvents('Error occurred when adding events'))
            }
          })
        ).catch(function(error){
             alert(error.message);
    });
    }
};
export const addedEvents = (data) => {
    return {
        type: ADDED_EVENTS,
        payload: data
    };
};
export const errorEvents = (data) => {
    return {
        type: ERROR_EVENTS,
        payload: data
    };
};
