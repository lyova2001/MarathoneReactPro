import React from 'react';
import s from './App.modules.scss'
import './custom.css'
import cn from 'cl'

const App = () => {
    return (
        <div className={cn(s.header, 'custom')}>
           Я не знал, что нельзя было коммитить до этого, и все нужно было делать в другой ветке.
           (Изменения ради пулл реквеста)
        </div>
    );
}

export default App;