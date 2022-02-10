class Github {
    constructor() {
        this.client_id = '782e132732baebee503c';
        this.client_secret = 'f2bb0f3047b1188312a001c1a715a7cce23880e0';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
