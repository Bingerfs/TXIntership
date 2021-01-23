import Data from '../../share/data.json';

class UserFileRepository {
    constructor() {
        
    }

    async getUsers() {
        try {
            return Data.users;
        } catch (error) {
            throw new Error('Error while retrieving users');
        }
    }
}

export default UserFileRepository;