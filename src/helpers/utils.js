import moment from 'moment';

const today = moment(new Date());
export const isDelayed = date => {    
    return moment(date).diff(today, 'days') < 0;
};

export const delaySum = (date) => {
    return (Date.parse(today) - Date.parse(date)) / (1000 * 60 * 60 * 24)
};