import { Link } from 'react-router-dom';
import { Path } from '../../router/types';
import { authorsData } from '../../data/data';
import { AuthorData } from '../../types/types';
import styles from './Welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles.welcomePage}>
      <div className={styles.welcomePage_links}>
        <Link to={Path.SignIn}>Sign In</Link>
        <Link to={Path.SignUp}>Sign Up</Link>
        <Link to={Path.Main}>Home</Link>
      </div>

      <div className={styles.welcomePage_content}>
        <div>
          <h3>We greet you!</h3>
          We are a React Rangers team consisting of three talented developers!
        </div>

        <ul className={styles.welcomePage_list}>
          <h3>Team</h3>
          {authorsData.map((author: AuthorData) => (
            <li key={author.githubName} className={styles.welcomePage_listItem}>
              {author.name}
              <div>
                GitHub:
                <Link to={author.githubUrl} target="_blank">
                  {author.githubName}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div>
          We have successfully completed the JavaScript/Front-end 2023Q1 course
          provided by RSSchool.
        </div>

        <div>
          <h3>RSSchool</h3>
          RSSchool is free-of-charge and community-based education program
          conducted by The Rolling Scopes developer community since 2013.
        </div>

        <div>
          <h3>Final task</h3>
          We are actively studying on the React 2023 Q4 course. The final task
          of the React 2023 Q4 course is creating a GraphiQL application.
          GraphiQL is a convenient playground and development environment (IDE)
          for sending queries in the GraphQL language. This application allows
          developers to interactively test and debug their queries, making it a
          powerful tool for working with GraphQL.
        </div>
      </div>
    </div>
  );
}
