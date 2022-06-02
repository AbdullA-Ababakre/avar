export const fetchGetConvert = (url, params) => {
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');

    url = url + '?' + query;

    return url;
}