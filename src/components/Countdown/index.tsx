import { useEffect, useState } from 'react'
import styles from './styles.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60)
    const [active, setActive] = useState(false)
    const [finish, setFinish] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [MinuteLeft, MinuteRight] = String(minutes).padStart(2, '0').split('')
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => {
        setActive(true)
    }


    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        
        if(active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (active && time === 0) {
            setFinish(true)
            setActive(false)
        }
    }, [active, time])

    return (
        <div>
        <div className={styles.CountdownContainer}>
            <div>
                <span>{MinuteLeft}</span>
                <span>{MinuteRight}</span>
            </div>
            <span>
                :
            </span>
            <div>
                <span>{SecondLeft}</span>
                <span>{SecondRight}</span>
            </div>
        </div>
        { finish ? (
             <button type="button" disabled className={styles.countButton}>
                 Ciclo encerrado
            </button>
        ) : (
            <>
                    { active ? (
                    <button type="button" onClick={resetCountdown} className={`${styles.countButton} ${styles.countButtonActive}`}>
                        Abandonar Ciclo
                    </button>
                ) : (
                    <button type="button" onClick={startCountdown} className={styles.countButton}>
                        Iniciar Ciclo
                    </button>
                )}
            </>
        )}
        
       
        </div>
    )
}