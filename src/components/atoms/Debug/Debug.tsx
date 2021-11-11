import {FC, useState} from 'react';
import cx from 'classnames';

const Debug: FC = () => {

    const [showGrid, setShowGrid] = useState(false);

    return (
        <div className={cx('debug', [
            { 'grid' : showGrid }
        ])} onClick={() => setShowGrid(!showGrid)}></div>
    )
}

export { Debug };