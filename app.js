
const getNasa = async () => {
    try {
        const resp = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY");
        const data = await resp.json();
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ""
        data.photos.slice(0, 10).forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.img_src;
            img.alt = `Mars Rover Photo taken on ${photo.earth_date}`;
            img.width = 200; // Set a fixed width for display purposes

            outputDiv.appendChild(img); 
        })

    }   catch (error) {
        console.log("Error", error);
    }
};

document.getElementById("fetchButton").addEventListener("click", getNasa);
