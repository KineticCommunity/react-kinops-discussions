import reducers from './redux/reducers';
import { actions, types } from './redux/modules/discussions';
import { sagas, combineSagas } from './redux/sagas';
import { DiscussionContainer as Discussion } from './components/DiscussionContainer';

// Components
export { Discussion };

// Redux / Saga
export { reducers, sagas, combineSagas, actions, types };
