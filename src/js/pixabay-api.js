const API_KEY = '48239935-17beded8a236fb1397b75b1c0';
const BASE_URL = 'https://pixabay.com/api/';


export function fetchPhotos(query) {
  fetch('https://pixabay.com/api/?key=48239935-17beded8a236fb1397b75b1c0&q=cats&image_type=photo')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
//     const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
// console.log(`URL: ${url}`);
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     return response.json();
// })
// .catch ((error) => {
//       console.error('Error fetching images;', error); 
// throw error;
      

   // });

}
    