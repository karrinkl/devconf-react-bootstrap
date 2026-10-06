import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

/*
  Порядок подключения стилей важен. Сначала идёт готовая таблица
  Bootstrap из пакета, затем собственная тема: она переопределяет
  CSS-переменные библиотеки и поэтому должна читаться браузером
  после неё. Шрифт Inter подключается в index.html.

  Provider передаёт хранилище Redux вниз по дереву через контекст
  React, поэтому любой компонент получает доступ к нему хуками
  useSelector и useDispatch без передачи props через промежуточные
  уровни.
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
