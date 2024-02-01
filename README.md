# 나의 포트폴리오 웹사이트 [바로 가기](https://junpark.xyz/)

이 웹사이트는 제 개인 포트폴리오를 소개하는 페이지입니다. 이 곳에서 제 프로젝트와 작업물들을 확인하실 수 있습니다.

## 기술 스택

이 웹사이트는 다음 기술들을 사용하여 개발되었습니다:

- Next.js
- Material UI
- React Framer Motion

## 연락하기

더 궁금한 점이 있거나 협업에 관심이 있다면, 아래 연락처로 언제든지 연락주세요.

- 이메일: devjoon623@email.com
- LinkedIn: [프로필 링크](https://www.linkedin.com/in/namjun-park-60423a1bb/)

## 사용하기

public/data/text.json에서 text 관리할 수 있습니다.<br/>
디자인이 맘에 드시는 분은 value값만 바꿔서 사용하시면 됩니다⭐️

```json
{
  "homeTop": {
    "job": "Software engineer",
    "name": "Jun"
  },
  "about": {
    "title": "\"Habit is life, and attitude is everything.\"",
    "content": "I quickly develop and solve problems by any means for business success. I sacrifice for the team to produce results. Even at the beginning, I swiftly learn and immediately apply it to work."
  },
  "experiences": [
    {
      "date": "March. 2023 ~ Now",
      "title": "B2B Saas API Platform (Asleep)",
      "role": "Backend Engineer",
      "content": [
        "Developed Dashboard APIs offering metrics like DAU, MAU, and Stickiness, resolving cross-domain service calls via BFF implementation.",
        "Introduced consistent code conventions through DDD adoption (Hexagonal Architecture, Layered Architecture), along with comprehensive Integration and Unit testing.",
        "Automated Cloud Infra management using AWS CDK and established a MonoRepo.",
        "Provided Swagger Docs and standardized ubiquitous language.",
        "Implemented automated deletion of information for approximately 100,000 departed members using Jenkins for batch automation and monitoring.",
        "Created an API Usage Alert service automating usage checks and sending warning emails using Jenkins and AWS SES.",
        "Configured email templates and set up Slack notifications for health checks.",
        "Developed an admin panel managing contracts, emails, and usage, enhancing architecture considering development effort by utilizing GraphQL for communication among MSA services.",
        "Implemented CI/CD pipelines using Github Action, integrated RBAC for user authorization via Cognito, and established offset-based Pagination, coupled with API Logging using Datadog.",
        "Expedited development in Developer Mode by shortening sleep analysis feature development from a minimum of 20 minutes to 2 minutes by optimizing data storage speed without persistence using Redis."
      ],
      "tags": [
        "FastAPI",
        "Python",
        "Graphql",
        "AWS",
        "MySQL"
      ]
    },
    {
      "date": "Nov. 2022 ~ Feb. 2023",
      "title": "B2B Saas Dashboard (Asleep)",
      "role": "Frontend Engineer",
      "content": [
        "Enhancing initial loading speed",
        "Implementing Streaming SSR",
        "Optimizing JS bundle size using Server Components",
        "Applying Next.js Middleware for improved functionality",
        "Improving Authentication User Experience",
        "Implementing Chakra UI Design System to streamline design resources",
        "Introducing a Code Generator for efficiency",
        "Utilizing Orval and Swagger",
        "Designing and developing Email templates and Admin interfaces",
        "Implementing BFF and GraphQL for enhanced service architecture."
      ],
      "tags": [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Vercel",
        "AWS",
        "Graphql"
      ]
    },
    {
      "date": "March. 2022 ~ Nov. 2022",
      "title": "B2C application for managing sleep habits (Asleep)",
      "role": "Frontend Engineer",
      "content": [
        "Developing a web view for sleep habit management application reports",
        "Enhancing Carousel performance",
        "Implementing Virtual Slides",
        "Incorporating multilingual support",
        "Shifting Remote Config to SSR",
        "Transitioning libraries: CRA to Next.js, AWS Amplify to Vercel, Styled-components to Styletron",
        "Managing server state",
        "Introducing React-query and Ky",
        "Testing libraries: Cypress for E2E Testing, Testing Library for Component Testing",
        "Establishing a Monorepo using Nx."
      ],
      "tags": [
        "Next.js",
        "Typescript",
        "Styletron",
        "Recoil",
        "Cypress",
        "Storybook"
      ]
    },
    {
      "date": "Nov. 2020 ~ March. 2023",
      "title": "Developed and maintained the official website for A-Sleep (Asleep)",
      "role": "Frontend Engineer",
      "content": [
        "Applying SSR, SSG, and ISR (incremental static regeneration)",
        "Minimizing API calls for optimal performance",
        "Improving initial loading speed",
        "Utilizing Google Spreadsheet API",
        "Cost-saving through Admin and API development strategies",
        "Implementing Atomic Design patterns for component reusability",
        "Conducting SEO operations such as Sitemap, Favicon, Open Graph protocol, and PWA integration",
        "Implementing Scroll, Gesture, and layout animations using React-framer."
      ],
      "tags": [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Amplify"
      ]
    },
    {
      "date": "April. 2020 ~ July. 2021",
      "title": "Sleep analysis application based on AI analysis of sound data (Asleep)",
      "role": "Android Engineer",
      "content": [
        "Set up Android technical environment and implemented all features.",
        "Implemented background recording using Foreground Service.",
        "File conversion of recordings using Mobile FFmpeg.",
        "Implemented custom views using Canvas.",
        "Enabled background music playback feature.",
        "Error logging using Crashlytics."
      ],
      "tags": [
        "Android",
        "MVVM",
        "CleanArchitecture",
        "JetPack",
        "Canvas"
      ]
    }
  ],
  "skills": [
    {
      "category": "Backend",
      "images": [
        "/images/fastapi.png",
        "/images/express.png",
        "/images/node.jpeg",
        "/images/python.png",
        "/images/mysql.png",
        "/images/ts.webp"
      ]
    },
    {
      "category": "Frontend",
      "images": [
        "/images/ts.webp",
        "/images/nextjs.png",
        "/images/react.png",
        "/images/html.png",
        "/images/css.jpg",
        "/images/javascript.png"
      ]
    },
    {
      "category": "Infra",
      "images": [
        "/images/vercel.jpeg",
        "/images/aws.png",
        "/images/docker.png",
        "/images/heroku.png"
      ]
    }
  ],
  "contact": {
    "email": "devjoon623@gmail.com",
    "linkedIn": "https://www.linkedin.com/in/namjun-park-60423a1bb/",
    "github": "https://github.com/joon623"
  }
}
```

감사합니다!
