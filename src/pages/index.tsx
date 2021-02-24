import CompletedChallenges from "../components/completedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/experienceBar";
import Profile from "../components/Profile";
import styles from './../styles/Home.module.css';
import Head from 'next/head'
import ChallengeBox from "../components/challengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bora Lerdeza</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
