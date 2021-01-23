class UserServiceImpl {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUsers() {
        return this.userRepository.getUsers();
    }
}

export default UserServiceImpl;