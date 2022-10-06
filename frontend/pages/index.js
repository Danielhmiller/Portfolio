import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvzrddz");
  if (state.succeeded) {
    return <p>Thanks for reaching out! Daniel will be in touch shortly.</p>;
  }
  return (
    <form
          className={styles.conForm}
          onSubmit={handleSubmit}
        >
          <input type={"text"} name={"name"} placeholder={"Name"} />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input type={"email"} name={"email"} placeholder={"Email"} />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input type={"tel"} name={"phone"} placeholder={"Phone"} />
          <textarea name={"message"} placeholder={"Message"}></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type={"submit"} disabled={state.submitting}>Submit</button>
        </form>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Miller - Portfolio</title>
        <meta
          name="description"
          content="Portfolio Site for Daniel Miller - Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main} id={"home"}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 style={{ marginBottom: "1rem" }}>
            Daniel is a Web Developer from Jackson, MS.
          </h1>
          <h2>
            As a former United States Marine, he's decided to pursue a career in
            tech.
          </h2>
          <h2>
            Daniel taught himself HTML and CSS, and was later hired at a
            marketing firm
          </h2>
          <h2>
            in Jackson, MS where he worked under a close friend building
            websites.
          </h2>
          <br />
          <h2>
            During his time there, he learned the fundamentals of JavaScript and
          </h2>
          <h2>
            continued to learn web development using technologies such as React
            and Next.
          </h2>
          <br />
          <h2>
            He is now a confident developer who is ready to begin the next
            chapter
          </h2>
          <h2>of his career in tech.</h2>
        </div>
      </main>

      <div className={styles.projects} id={"projects"}>
        <h1>Projects</h1>
        <div className={styles.projectSec}>
          <div className={styles.project}>
            <h2>Alabama Insurance Guaranty Association</h2>
            <Image src={"/aiga.png"} alt={"AIGA"} width={450} height={250} />
            <a href="https://alaiga.com" target={"_blank"}>
              View Site
            </a>
          </div>
          <div className={styles.project}>
            <h2>Adcock {"&"} Ivison</h2>
            <Image src={"/adcock.png"} alt={"AIGA"} width={450} height={250} />
            <a
              href="https://adcock-and-ivison-uunx5.ondigitalocean.app/"
              target={"_blank"}
            >
              View Site
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contact} id={"contact"}>
        <h1>Get In Touch</h1>
        <ContactForm />
      </div>
    </div>
  );
}
