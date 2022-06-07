export const fetchGetConvert = (url, params) => {
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');

    url = url + '?' + query;

    return url;
}


export const ViewModel = (elementId, modelUrl) => {
    // let modelUrl = "http://edit.atip.top/uploads/battle.glb";

    let element = document.getElementById(elementId);
    let viewer = new Viewer(element, {});
    viewer.load(modelUrl).then(onSuccess).catch(onError);

    function onSuccess() {
        let spinnerEl = document.querySelector(".spinner");
        if (spinnerEl) spinnerEl.style.display = "none";
        console.log("Succeeded!");
    }

    function onError(error) {
        let message = (error || {}).message || error.toString();
        if (message.match(/ProgressEvent/)) {
            message =
                "Unable to retrieve this file. Check JS console and browser network tab.";
        } else if (message.match(/Unexpected token/)) {
            message = `Unable to parse file content. Verify that this file is valid. Error: "${message}"`;
        } else if (error && error.target && error.target instanceof Image) {
            message = "Missing texture: " + error.target.src.split("/").pop();
        }
        window.alert(message);
        console.error(error);
    }
}

export const LoadScript = (url, success) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = 'text/javascript';
    script.onload = success;
    document.body.appendChild(script);

    
}




