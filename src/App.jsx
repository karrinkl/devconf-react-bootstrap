import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import Icon from './components/Icon/Icon';
import SpeakerCard from './components/SpeakerCard/SpeakerCard';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Favorites from './components/Favorites/Favorites';

import logo from './assets/icons/logo-devconf-full-inverse.svg';
import microphoneIcon from './assets/icons/icon-microphone.svg';
import heroImage from './assets/images/banner-hero-1x.webp';

import { speakers, faqItems } from './data/content';

/**
 * App - корневой компонент лендинга.
 *
 * Вся вёрстка собрана из компонентов React Bootstrap и утилитарных
 * классов библиотеки, собственных CSS-модулей в проекте больше нет.
 * Адаптивность списка спикеров задана свойствами компонента Col:
 * xs={12} - одна колонка на телефоне, md={6} - две на планшете,
 * xl={3} - четыре на широком экране.
 */
function App() {
  const handleRegister = (email) => {
    console.log('Зарегистрирован участник:', email);
  };

  const scrollToSpeakers = () => {
    document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const defaultFaqKey = String(faqItems.findIndex((item) => item.defaultOpen));

  return (
    <div className="d-flex flex-column min-vh-100">
      <header
        className="hero py-5 text-white"
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <Container>
          <Stack gap={4} className="align-items-start">
            <img className="hero-logo" src={logo} alt="DEVCONF 2026" />

            <h1
              className="display-5 fw-bold lh-sm mb-0"
              style={{ maxWidth: '18em' }}
            >
              Конференция инженеров и разработчиков, 18 мая 2026
            </h1>

            <p className="lead text-white-50 mb-0">
              Минск · 24 доклада · 6 воркшопов · онлайн-трансляция бесплатно
            </p>

            <Stack direction="horizontal" gap={3} className="flex-wrap">
              <Button variant="primary" size="lg" onClick={scrollToSpeakers}>
                Купить билет
              </Button>

              <Button
                variant="outline-light"
                size="lg"
                className="d-inline-flex align-items-center gap-2"
                onClick={scrollToSpeakers}
              >
                <Icon src={microphoneIcon} size={20} />
                Смотреть программу
              </Button>
            </Stack>
          </Stack>
        </Container>
      </header>

      <main className="flex-grow-1">
        <section className="py-5" id="speakers">
          <Container>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
              <h2 className="h1 fw-bold mb-0">Спикеры</h2>
              <Favorites />
            </div>

            {/* g-4 задаёт одинаковые промежутки между колонками и строками */}
            <Row className="g-4">
              {speakers.map((speaker) => (
                <Col key={speaker.id} xs={12} md={6} xl={3}>
                  <SpeakerCard
                    id={speaker.id}
                    name={speaker.name}
                    role={speaker.role}
                    topic={speaker.topic}
                    photo={speaker.photo}
                    photoRetina={speaker.photoRetina}
                    date={speaker.date}
                    hall={speaker.hall}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-white border-top border-bottom" id="faq">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <h2 className="h1 fw-bold mb-4">Частые вопросы</h2>

                <Accordion defaultActiveKey={defaultFaqKey}>
                  {faqItems.map((item, index) => (
                    <Accordion.Item eventKey={String(index)} key={item.id}>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5" id="registration">
          <Container>
            <Row>
              <Col xs={12} md={8} xl={5}>
                <h2 className="h1 fw-bold mb-4">Регистрация</h2>
                <RegistrationForm onRegister={handleRegister} />
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="py-4 border-top">
        <Container>
          <p className="mb-0 small text-body-secondary">
            DEVCONF 2026 · Лабораторная работа № 23 · React, Vite, React
            Bootstrap, Redux Toolkit
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
