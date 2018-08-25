import {DELETED_EVENT,ERROR_EVENTS} from './types';

export const deleteClubEvent = (_url,id) => {
    return function(dispatch)
    {
        return fetch("https://cors-anywhere.herokuapp.com/https://www.mycampusmate.com/api/organizations/"+ _url +"/remove-event/"+id, {
            method: "POST",
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
