const GET = () => {
    return {
        method: 'GET',
        /* headers: {
            'Content-Type': 'application/json',
        }, */
    };
};

const POST = body => {
    return {
        method: 'POST',
        /* headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json',
        }, */
        body: JSON.stringify(body),
    };
};

export { GET, POST }