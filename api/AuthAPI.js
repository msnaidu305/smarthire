class AuthAPI {

    constructor(request) {
        this.request = request;
    }

    async login(email, password, tenant_slug) {
 const response = await this.request.post(
                '/api/v1/auth/login/',
                {
                    data: {
                        email,
                        password,
                        tenant_slug

                    }
                }
            );

        return response;
    }
}

module.exports = AuthAPI;