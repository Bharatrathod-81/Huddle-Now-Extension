
const GetProfile = (data) => {

    let obj = {}

    const getBgColor = (i, name) => {
        let shortName = name.split(' ');
        shortName = shortName.length === 2 ? shortName[0][0]+shortName[1][0] : shortName[0][0];
        shortName = shortName?.toUpperCase();

        const bgColor = ['#4ec0e2', '#cec548', '#c16ad4', '#bf4368', '#6b61c8', '#c0d06e', '#39c0ca', '#df4cbf', '#4be196'];
        const idx = parseInt(`${i}`?.at(-1));
        return {shortName, color:bgColor[idx]}
    };

    if(data.length > 0){
            obj = data?.reduce((acc,cur,i) => acc[cur?.personName] ? acc:({...acc, [cur?.personName]:getBgColor(i,cur?.personName)}),{})
    }

    return obj;
}

export default GetProfile;