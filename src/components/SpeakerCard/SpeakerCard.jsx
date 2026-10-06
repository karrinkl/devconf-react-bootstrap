import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Icon from '../Icon/Icon';
import { selectIsFavorite, toggleFavorite } from '../../store/favoritesSlice';
import calendarIcon from '../../assets/icons/icon-calendar.svg';
import locationIcon from '../../assets/icons/icon-location.svg';
import starIcon from '../../assets/icons/icon-star.svg';

/**
 * SpeakerCard - карточка спикера конференции на компоненте Card
 * из React Bootstrap.
 *
 * Класс h-100 растягивает карточку на высоту колонки, поэтому
 * в одной строке сетки все карточки выравниваются по нижнему краю
 * независимо от длины темы доклада.
 *
 * Данные доклада приходят через props. Признак «в избранном»
 * компонент читает из глобального хранилища хуком useSelector
 * и меняет, отправляя действие toggleFavorite хуком useDispatch.
 */
function SpeakerCard({
  id,
  name,
  role,
  topic,
  photo,
  photoRetina = undefined,
  date,
  hall,
}) {
  const isFavorite = useSelector(selectIsFavorite(id));
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <Card className="h-100 shadow-sm">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={photo}
          srcSet={photoRetina ? `${photo} 1x, ${photoRetina} 2x` : undefined}
          alt={`Фотография спикера: ${name}`}
          loading="lazy"
        />

        <Button
          variant={isFavorite ? 'warning' : 'light'}
          size="sm"
          className="speaker-star position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
          onClick={handleToggleFavorite}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Убрать из избранного: ${name}`
              : `Добавить в избранное: ${name}`
          }
        >
          <Icon src={starIcon} size={18} />
        </Button>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h5 mb-1">
          {name}
        </Card.Title>

        <Card.Subtitle className="small text-body-secondary fw-normal mb-3">
          {role}
        </Card.Subtitle>

        <Card.Text className="mb-0">{topic}</Card.Text>
      </Card.Body>

      <Card.Footer className="bg-transparent d-flex flex-wrap gap-3 small text-body-secondary">
        <span className="d-inline-flex align-items-center gap-2">
          <Icon src={calendarIcon} size={16} />
          {date}
        </span>

        <span className="d-inline-flex align-items-center gap-2">
          <Icon src={locationIcon} size={16} />
          {hall}
        </span>
      </Card.Footer>
    </Card>
  );
}

SpeakerCard.propTypes = {
  /** Идентификатор спикера, по нему ведётся список избранного */
  id: PropTypes.string.isRequired,
  /** Имя спикера. В Figma свойство Name */
  name: PropTypes.string.isRequired,
  /** Должность и место работы. В Figma свойство Role */
  role: PropTypes.string.isRequired,
  /** Тема доклада. В Figma свойство Topic */
  topic: PropTypes.string.isRequired,
  /** Изображение спикера в масштабе @1x */
  photo: PropTypes.string.isRequired,
  /** Изображение спикера в масштабе @2x для дисплеев Retina */
  photoRetina: PropTypes.string,
  /** Дата и время доклада */
  date: PropTypes.string.isRequired,
  /** Зал, в котором проходит доклад */
  hall: PropTypes.string.isRequired,
};

export default SpeakerCard;
