const getAllowedEmailDomainRegex = () => {
    // const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|org|gov|edu|mil|co|io|int|eu|biz|info|me|mobi|name|tv|wiq|au|ac|in)$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex ;
};

export default getAllowedEmailDomainRegex;