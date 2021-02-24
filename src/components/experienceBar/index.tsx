import styles from './styles.module.css'

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}}/>
                <span style={{left: '50%'}} className={styles.currentExperience}>300exp</span>
            </div>
            <span>688 xp</span>
        </header>
    )
}