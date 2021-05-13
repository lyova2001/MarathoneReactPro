import React from 'react';
import cn from 'classnames'

import s from './App.module.scss'

const App = () => {
    return (
        <div className={cn(s.header)}>
           Я не знал, что нельзя было коммитить до этого, и все нужно было делать в другой ветке.
           (Изменения ради пулл реквеста)
        </div>
    );
}

export default App;