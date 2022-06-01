import { useEffect, useRef } from 'react';

const EasterEgg = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (hasLogged.current) {
      return;
    }

    const str = `
  _____ _____                 _                
 / ____|  __ \\               | |               
| |  __| |  | | __ _ _ __ ___| |__   ___ _ __  
| | |_ | |  | |/ _\` | '__/ __| '_ \\ / _ \\ '_ \\ 
| |__| | |__| | (_| | | | (__| | | |  __/ | | |
 \\_____|_____/ \\__,_|_|  \\___|_| |_|\\___|_| |_|
                                                      
    `;

    console.log(str);
    hasLogged.current = true;
  }, []);

  return null;
};

export default EasterEgg;
