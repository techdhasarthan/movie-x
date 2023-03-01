const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '93fa04b3d14728f50673dbfa930c4d75',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;