/*
  Демонстрационные данные лендинга. Вынесены из разметки, чтобы
  компоненты получали их через props и оставались переиспользуемыми.
  Изображения подготовлены в ЛР № 17 и импортируются как модули:
  Vite подставит в сборку итоговые пути с хешем.

  Для ЛР № 23 список расширен до восьми докладов: на сетке
  xs={12} md={6} xl={3} это даёт восемь строк на телефоне,
  четыре строки по две карточки на планшете и две строки
  по четыре карточки на широком экране.
*/

import speaker01 from '../assets/images/speaker-01-1x.webp';
import speaker01Retina from '../assets/images/speaker-01-2x.webp';
import speaker02 from '../assets/images/speaker-02-1x.webp';
import speaker02Retina from '../assets/images/speaker-02-2x.webp';
import speaker03 from '../assets/images/speaker-03-1x.webp';
import speaker03Retina from '../assets/images/speaker-03-2x.webp';
import speaker04 from '../assets/images/speaker-04-1x.webp';
import speaker04Retina from '../assets/images/speaker-04-2x.webp';
import speaker05 from '../assets/images/speaker-05-1x.webp';
import speaker05Retina from '../assets/images/speaker-05-2x.webp';
import speaker06 from '../assets/images/speaker-06-1x.webp';
import speaker06Retina from '../assets/images/speaker-06-2x.webp';
import speaker07 from '../assets/images/speaker-07-1x.webp';
import speaker07Retina from '../assets/images/speaker-07-2x.webp';
import speaker08 from '../assets/images/speaker-08-1x.webp';
import speaker08Retina from '../assets/images/speaker-08-2x.webp';

export const speakers = [
  {
    id: 'kovalev',
    name: 'Алексей Ковалёв',
    role: 'Staff Engineer · EPAM',
    topic: 'Трекинг объектов в реальном времени: от YOLO до DeepSORT',
    photo: speaker01,
    photoRetina: speaker01Retina,
    date: '18 мая, 14:00',
    hall: 'Зал A',
  },
  {
    id: 'melnik',
    name: 'Дарья Мельник',
    role: 'Head of Design · Wargaming',
    topic: 'Дизайн-система без боли: что ломается на втором году',
    photo: speaker02,
    photoRetina: speaker02Retina,
    date: '18 мая, 15:30',
    hall: 'Зал B',
  },
  {
    id: 'savchuk',
    name: 'Игорь Савчук',
    role: 'SRE · iTechArt',
    topic: 'Наблюдаемость сервисов: метрики, которые правда нужны',
    photo: speaker03,
    photoRetina: speaker03Retina,
    date: '19 мая, 11:00',
    hall: 'Зал A',
  },
  {
    id: 'yarosh',
    name: 'Марина Ярош',
    role: 'Frontend Lead · Godel',
    topic: 'Компонентные библиотеки: когда брать готовую, а когда свою',
    photo: speaker04,
    photoRetina: speaker04Retina,
    date: '18 мая, 12:00',
    hall: 'Зал C',
  },
  {
    id: 'bortnik',
    name: 'Павел Бортник',
    role: 'Data Engineer · Яндекс',
    topic: 'Потоковая обработка видео: архитектура без лишних копий',
    photo: speaker05,
    photoRetina: speaker05Retina,
    date: '18 мая, 17:00',
    hall: 'Зал B',
  },
  {
    id: 'lagun',
    name: 'Ольга Лагун',
    role: 'QA Architect · Intetics',
    topic: 'Тестирование интерфейсов: визуальные регрессии в CI',
    photo: speaker06,
    photoRetina: speaker06Retina,
    date: '19 мая, 10:00',
    hall: 'Зал C',
  },
  {
    id: 'demchuk',
    name: 'Антон Демчук',
    role: 'Security Engineer · Viber',
    topic: 'Защита фронтенда: CSP, зависимости и чужой код в сборке',
    photo: speaker07,
    photoRetina: speaker07Retina,
    date: '19 мая, 13:30',
    hall: 'Зал A',
  },
  {
    id: 'rudenko',
    name: 'Вероника Руденко',
    role: 'Engineering Manager · Flo',
    topic: 'Рефакторинг легаси-интерфейса без остановки продукта',
    photo: speaker08,
    photoRetina: speaker08Retina,
    date: '19 мая, 16:00',
    hall: 'Зал B',
  },
];

export const faqItems = [
  {
    id: 'stream',
    question: 'Нужен ли билет, чтобы смотреть онлайн-трансляцию?',
    answer:
      'Нет. Трансляция главного зала бесплатная, достаточно зарегистрироваться по e-mail. ' +
      'Билет нужен только для очного участия и доступа к воркшопам.',
    defaultOpen: true,
  },
  {
    id: 'refund',
    question: 'Можно ли вернуть билет?',
    answer:
      'Да, до 1 мая действует полный возврат. После этой даты билет можно перенести ' +
      'на следующий год или передать другому участнику.',
    defaultOpen: false,
  },
  {
    id: 'records',
    question: 'Будут ли записи докладов?',
    answer:
      'Записи появятся на сайте в течение двух недель после конференции ' +
      'и останутся в открытом доступе.',
    defaultOpen: false,
  },
];
