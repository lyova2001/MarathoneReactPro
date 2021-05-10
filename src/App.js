import React from 'react';
import s from './App.modules.scss'
import './custom.css'
import cn from 'cl'

const App = () => {
    return (
        <div className={cn(s.header, 'custom')}>
            A new component, some changes
        </div>
    );
}

export default App;