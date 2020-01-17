import uuid from 'react-uuid';
import moment from 'moment';

export const api = {
    async getAllTaks() {
    },

    async createTask(data) {

        return {
            id: uuid(),
            completed: false,
            name: data.fieldName,
            type: data.fieldType,
            startDate:  moment(data.currentDay).format('L'),
            finishDate: moment(data.filedFinishDate).format('L')
        }
    },

    async renameTask() {

    },

    async removeTask() {

    },

    async comleteTask() {

    }
}