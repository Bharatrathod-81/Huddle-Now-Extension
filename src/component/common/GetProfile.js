
const GetProfile = (data) => {

    let obj = {}

    const getBgColor = (i, name) => {
        let shortName = name.split(' ');
        shortName = shortName.length === 2 ? shortName[0][0]+shortName[1][0] : shortName[0][0];
        shortName = shortName?.toUpperCase();

        const bgColor = ['#f7fee7', '#fefce8', '#f0fdf4', '#f0f9ff', '#fff7ed', '#faf5ff', '#fdf2f8', '#f0fdfa'];
        const borderColor = ['#d9f99d', '#fef08a', '#bbf7d0', '#bae6fd', '#fed7aa', '#e9d5ff', '#fbcfe8', '#99f6e4'];
        const textColor= ['#4d7c0f', '#a16207', '#15803d', '#0369a1', '#c2410c', '#7e22ce', '#be185d', '#0f766e'];
        const idx = parseInt(`${i}`?.at(-1));
        return {shortName, color:bgColor[idx], border:borderColor[idx], text:textColor[idx]}
    };

    if(data.length > 0){
            obj = data?.reduce((acc,cur,i) => acc[cur?.personName] ? acc:({...acc, [cur?.personName]:getBgColor(i,cur?.personName)}),{})
    }

    return obj;
}

export default GetProfile;