class NumberService {

    calculateExpiryDate(endDate){
        const expiryDate = new Date(endDate);
        const todayDate = new Date();
        const dDay = expiryDate - todayDate;
        const dDayDate = Math.floor(dDay / (1000*60*60*24));
        return dDayDate;
    }

    inputComma(number){
        // 1000 미만의 수는 처리할 필요 없으므로 return;
        if(number < 1000) {
            return number;
        }else{
            const result = number.toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            return result;
        }
    }

    convertDashToDot(date) {
        const convertDateFormat = date.replaceAll('-','.');
        return convertDateFormat;
    }
}

export default NumberService;