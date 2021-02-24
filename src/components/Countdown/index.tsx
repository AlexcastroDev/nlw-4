import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export function Countdown() {
    const [time, setTime] = useState(1 * 60)
    const [active, setActive] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [MinuteLeft, MinuteRight] = String(minutes).padStart(2, '0').split('')
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => {
        setActive(true)
    }

    useEffect(() => {
        
        if(active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
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
        <button type="button" onClick={startCountdown} className={styles.countButton}>Iniciar um ciclo</button>
        </div>
    )
}