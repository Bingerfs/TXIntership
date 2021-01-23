class UserServiceImpl {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUsers() {
        const users = await this.userRepository.getUsers();
        if(!Array.isArray(users))
            throw new Error('Data retrieved is not of an expected data type'); 
        return users;
    }
}

export default UserServiceImpl;