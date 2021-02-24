import style from './styles.module.css'

export default function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/alexcastrodev.png" alt="Alexandro"/>
            <div>
                <strong>Alexandro Castro</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                    </p>
            </div>
        </div>
    )
}