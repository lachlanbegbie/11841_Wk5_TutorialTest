// API key from NMA website
const apikey = "O38g7rekTZ1QL6VszYGqnkoDPQdW3wro";
const nmaURL =  + apikey;

const nmaAPI = "https://data.nma.gov.au/object?title=*";
const nmaIMG = "https://data.nma.gov.au/object?limit=10&media=*&format=simple&medium=canvas";

// Function that will load exhibitions
async function getExhibitions() {
    const exhibitionContainerItem = document.getElementById('objectsContainer');

    try {
        // Get the data from the NMA
        const response = await fetch(nmaIMG);
        // Return it in JSON
        const data = await response.json();

        // Log the data to the browser
        console.log(data);


        data.data.forEach(item => {
            console.log(item);

            const image = item.hasVersion[0].hasVersion[1].identifier;

            // Create a container
            const containerItem = document.createElement('div');

            // Create html tags for image and title
            const title = '<h2>' + item.title + '</h2>';
            const imageTag = '<img src="' + image + '" alt="image">';

            // console.log(image);

            // Add content to list item
            containerItem.innerHTML = title + imageTag;

            // Append children to parent
            exhibitionContainerItem.appendChild(containerItem);
        });

    } catch (error) {
        console.log('error: ', error);
    }
}

// Call the function so it executes
getExhibitions()