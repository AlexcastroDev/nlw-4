import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import style from './styles.module.css'

export default function ChallengeBox() {
    let hasActiveChallenge = true;
    const contextData = useContext(ChallengesContext)

    return (
        <div className={style.ChallengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={style.ChallengeBoxActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Faça alguma coisa</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={style.danger}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button" 
                            className={style.success}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
                    ) : (
            <div className={style.ChallengeBoxDisabled}>
                        <strong>Finalize um cliclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="leve-up"/>
                            Avance de level completando desafios
                        </p>
                    </div>
            )}
        </div>
    )
}