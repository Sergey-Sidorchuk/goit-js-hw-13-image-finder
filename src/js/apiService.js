const apiService = (query, page, API_KEY) => {
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;

    return fetch(URL)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data =>{
        return data.hits;
    });
};
export default apiService;

