import { useState, useEffect } from 'react';

const CatPage = () => {

    const [ checked, setChecked] = useState(false);

    const showCat = () => {
        return (
            <div className="app">
                <h2>Shake, shake!!</h2>
                <embed width="500px" src="https://i.gifer.com/ZiFz.gif"></embed>
            </div>
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setChecked(!checked);
        }, 2000);
        return () => clearInterval(interval);
      }, [ checked ]);

    if(checked) {
        return showCat();
    }

    return <h2>Waiting for..</h2>
}

export default CatPage;