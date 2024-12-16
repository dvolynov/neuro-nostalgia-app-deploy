const generate = async (data, temperature) => {

    const queryParams = new URLSearchParams({
        url: data.url,
        model_name: data.model_name,
        max_output_tokens: data.max_output_tokens,
        temperature: temperature.toString(),
    }).toString();

    const apiUrl = `https://seashell-app-unjjz.ondigitalocean.app/api/${data.mode}/retroify?${queryParams}`;

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
        alert("An error occured while generating!")
        console.error('Request failed:', error);
    }
};

export default generate;

