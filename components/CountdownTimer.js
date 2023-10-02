import React from 'react';
import { useCountdown } from '/hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';


const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '0.25rem',
        margin: '0.5rem'
      }}>
        <span style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'white'
        }}>DEMO DAY START!!!</span>
        <p style={{ fontSize: '1.5rem' }}>Enjoy and let's F the EXAM :3</p>
      </div>
    );
  } else {
    return (
      <div style={{display:'flex', 
                    padding: '0.5rem',
                    border: '1px solid #ebebeb',
                    borderRadius: '0.25rem',
                    margin: '0.15rem',
                    width : '800px',
                    justifyContent: 'center',
                    fontSize: '42px',
                }}>
        <div className="flex countdown">
            <DateTimeDisplay
                value={days}
                type={'Days'}
                isDanger={days <= 3}
                style={{ lineHeight: '1.25rem' }}
            />
            <p class = "ml-5" style={{marginLeft:'20px', marginRight:'20px'}}>:</p>
            <DateTimeDisplay
                value={hours}
                type={'Hours'}
                isDanger={false}
                style={{ lineHeight: '1.25rem' }}
            />
            <p class = "ml-5" style={{marginLeft:'20px', marginRight:'20px'}}>:</p>

            <DateTimeDisplay
                value={minutes}
                type={'Mins'}
                isDanger={false}
                style={{ lineHeight: '1.25rem' }}
            />
            <p class = "ml-5" style={{marginLeft:'20px', marginRight:'20px'}}>:</p>

            <DateTimeDisplay
                value={seconds}
                type={'Seconds'}
                isDanger={false}
                style={{ lineHeight: '1.25rem' }}
            />
        </div>
      </div>
    );
  }
};

export default CountdownTimer;