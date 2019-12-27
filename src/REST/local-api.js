import moment from 'moment';
import uuid from 'react-uuid'

export const api = {
    async getAllTaks() {
        
    },

    async createTask(data) {
        return {
            id: uuid(),
            completed: false,
            name: data.fieldName,
            type: data.fieldType,
            startDate:  moment().format("L"),
            finishDate: data.filedFinishDate,
        }
    },

    async renameTask() {

    },

    async removeTask() {

    },

    async comleteTask() {

    }
}