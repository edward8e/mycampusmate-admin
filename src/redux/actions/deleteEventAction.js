import {DELETED_EVENT,ERROR_EVENTS} from './types';
import API from '../../api';

export const deleteClubEvent = (_url,id) => {
    return function(dispatch)
    {
        return fetch(API.ROOT_URL + "organizations/"+ _url +"/remove-event/"+id, {
            method: "POST",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
            })
        }).then(response => response.json().then( responseJson => {
            if(responseJson.status ==="OK")
            {
                alert('OK')
                dispatch(deletedEvent('Deleted Event Successfully'))
            }
            else{
                dispatch(errorEvents('Error occurred when deleting events'))
            }
          })
        ).catch(function(error){
             alert(error.message);
    });
    }
};
export const deletedEvent = (data) => {
    return {
        type: DELETED_EVENT,
        payload: data
    };
};
export const errorEvents = (data) => {
    return {
        type: ERROR_EVENTS,
        payload: data
    };
};
