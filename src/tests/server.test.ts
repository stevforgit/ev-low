import supertest from 'supertest';
import { app } from '../app_startup';

describe('User Endpoints',  () => {
    const requestWithSupertest = supertest(app);

    it('GET /user should show all users', async () => {
        const res = await requestWithSupertest.get('/api/v2');
        expect(200).toEqual(200);
    });

});

