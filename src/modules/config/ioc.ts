import { Container, token } from 'brandi';
import { AgifyService } from '../../services/agify.service';

class ApiService {

    getUsername = () => {
        return `stephen_rodrigues`;
    }
}

const TOKENS = {
    apiService: token<ApiService>('apiService'),
    agifyService: token<AgifyService>('agifyService'),
};

const container = new Container();
container.bind(TOKENS.agifyService).toInstance(AgifyService).inTransientScope();
container.bind(TOKENS.apiService).toInstance(ApiService).inTransientScope();


export {
    container,
    TOKENS
}

// const apiService = container.get(TOKENS.apiService);

// expect(apiService).toBeInstanceOf(ApiService);