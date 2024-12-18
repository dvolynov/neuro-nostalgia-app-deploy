const generate = async (data) => {
    const queryParams = {
        url: data.url,
        creativity: data.creativity
    };

    if (data.mode === "v3") {
        queryParams.accuracy = data.accuracy;
    }

    if (["v1", "v2"].includes(data.mode)) {
        queryParams.model_name = data.model_name;
        queryParams.max_output_tokens = data.max_output_tokens;
    }

    const queryString = new URLSearchParams(queryParams).toString();

    const apiUrl = `https://seashell-app-unjjz.ondigitalocean.app/api/${data.mode}/generate?${queryString}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
            },
            body: '',
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        alert("An error occurred while generating!");
        console.error('Request failed:', error);
    }
};

export default generate;
