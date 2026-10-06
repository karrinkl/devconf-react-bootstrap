import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import Icon from '../Icon/Icon';
import {
  clearFavorites,
  selectFavoriteIds,
  selectFavoritesCount,
} from '../../store/favoritesSlice';
import { speakers } from '../../data/content';
import starIcon from '../../assets/icons/icon-star.svg';

/**
 * Favorites - счётчик избранных спикеров.
 *
 * Состояние панели целиком приходит из хранилища Redux, а внешний вид
 * собран из компонентов Badge, Button и Stack: цвет метки переключается
 * свойством bg, а список имён скрывается на узких экранах утилитарными
 * классами d-none d-xl-inline.
 */
function Favorites() {
  const count = useSelector(selectFavoritesCount);
  const favoriteIds = useSelector(selectFavoriteIds);
  const dispatch = useDispatch();

  const names = speakers
    .filter((speaker) => favoriteIds.includes(speaker.id))
    .map((speaker) => speaker.name)
    .join(', ');

  const suffix =
    count === 1 ? 'спикер' : count >= 2 && count <= 4 ? 'спикера' : 'спикеров';

  return (
    <Stack direction="horizontal" gap={3} className="flex-wrap">
      <Badge
        bg={count ? 'primary' : 'secondary'}
        className="d-inline-flex align-items-center gap-2 fs-6 fw-normal py-2 px-3"
      >
        <Icon src={starIcon} size={18} />
        {count === 0 ? 'Избранное пусто' : `В избранном: ${count} ${suffix}`}
      </Badge>

      {count === 0 ? (
        <span className="small text-body-secondary d-none d-xl-inline">
          Отметьте доклады звёздочкой на карточке
        </span>
      ) : (
        <>
          <span className="small text-body-secondary d-none d-xl-inline">
            {names}
          </span>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => dispatch(clearFavorites())}
          >
            Очистить
          </Button>
        </>
      )}
    </Stack>
  );
}

export default Favorites;
