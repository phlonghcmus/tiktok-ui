import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/170299674_476250096896829_477993717090595706_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=PTCCOiSKFWMAX9gliR6&tn=Bud0mmqPMHZJPESD&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAGthwgoiDvNhkqbTVI-JPcMJBNJGFs9CZzhrR9GLNASA&oe=641E6FA7"
        alt="Hoa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span> Ly My Nhu</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>lymynhu</span>
      </div>
    </div>
  );
}

export default AccountItem;
