import {EDIT_EVENT,ERROR_EDITING} from './types';

export const fetchEditAPI = (editObject) => {
    return function(dispatch)
    {
        return fetch("https://rmate-backend.herokuapp.com/api/events/"+editObject.id+"/edit_event", {
            method: "POST",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: editObject.name,
                description: editObject.description,
                day_of_week: editObject.dayoftheweek,
                start_time: editObject.starttime,
                end_time : editObject.endtime,
                img_lg_src : editObject.largeimg,
                img_med_src: editObject.medimg,
                location: editObject.location
            })
        }).then(response => response.json().then( responseJson => {
            if(responseJson.status ==="OK")
            {
                dispatch(editEventSuccess('Success'))
            }
            else{
                dispatch(editEventError('Error occurred when editing events'))
            }
          })
        ).catch(function(error){
             alert(error.message);
    });
    } 
};
export const editEventSuccess = (data) => {
    return {
        type: EDIT_EVENT,
        payload: data
    };
};

export const editEventError = (data) => {
    return {
        type: ERROR_EDITING,
        payload: data
    };
};