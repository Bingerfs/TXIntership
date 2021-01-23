class UserRestRepository {
    constructor(url) {
        this.API_URL= url;
    }

    async getUsers() {
        try {
            const response = await fetch(this.API_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const jsonData = await response.json();
            return jsonData.users;
        } catch (error) {
            throw new Error('Error while retrieving users');
        }
    }
}

export default UserRestRepository;