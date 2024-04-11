import moment from "moment";

const GetDayFormat = (date) => {
    
    if (date){
        const millisecondsInADay = 24 * 60 * 60 * 1000;
        const todayValue = new Date().setHours(0,0,0,0);
        const yesterdayValue = todayValue - millisecondsInADay;

        let result = '';

        if (todayValue === new Date(date).setHours(0,0,0,0)){
            result = 'Today';
        }else if (yesterdayValue === new Date(date).setHours(0,0,0,0)){
            result = 'Yesterday';
        }else{
            result = moment(date)?.format('MMM DD, ddd - YYYY').toUpperCase();
        }

        return result;
    }
};

export default GetDayFormat;