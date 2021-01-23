import UserServiceImpl from "./UserService";

class MockedRepository {
    constructor() {       
    }

    async getUsers() {
        const response = [];
        return response;
    }
}

class MockedRepository2 {
    constructor() {

    }

    async getUsers() {
        const response = '';
        return response;
    }
}

describe('UserService', () => {
    it('should return an array', () => {
        const userService = new UserServiceImpl(new MockedRepository());
        return userService.getUsers().then((users) => {
            expect(Array.isArray(users)).toBe(true);
        });
    });

    it('should thrown an error if data is not an array', async () => {
        const userService = new UserServiceImpl(new MockedRepository2());
        await expect(userService.getUsers())
        .rejects
        .toThrow('Data retrieved is not of an expected data type');
    })
})