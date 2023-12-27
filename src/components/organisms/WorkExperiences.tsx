"use client";

import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { mediaQueryInput } from "@/styles/breakpoint";
import Title from "@/components/atoms/Title";
import { v4 } from "uuid";
import { WorkCard } from "@/components/mocules";

const WORK_DATA = [
  {
    date: "March. 2023 ~ Now",
    title: "B2B Saas API Platform (Asleep)",
    role: "Backend Developer",
    content:
      "Developed Dashboard APIs offering metrics like DAU, MAU, and Stickiness, resolving cross-domain service calls via BFF implementation.\n" +
      "Introduced consistent code conventions through DDD adoption (Hexagonal Architecture, Layered Architecture), along with comprehensive Integration and Unit testing.\n" +
      "Automated Cloud Infra management using AWS CDK and established a MonoRepo.\n" +
      "Provided Swagger Docs and standardized ubiquitous language.\n" +
      "Implemented automated deletion of information for approximately 100,000 departed members using Jenkins for batch automation and monitoring.\n" +
      "Created an API Usage Alert service automating usage checks and sending warning emails using Jenkins and AWS SES.\n" +
      "Configured email templates and set up Slack notifications for health checks.\n" +
      "Developed an admin panel managing contracts, emails, and usage, enhancing architecture considering development effort by utilizing GraphQL for communication among MSA services.\n" +
      "Implemented CI/CD pipelines using Github Action, integrated RBAC for user authorization via Cognito, and established offset-based Pagination, coupled with API Logging using Datadog.\n" +
      'Expedited development in Developer Mode by shortening sleep analysis feature development from a minimum of 20 minutes to 2 minutes by optimizing data storage speed without persistence using Redis."',
    tags: ["FastAPI", "Python", "DDD", "MSA", "AWS", "MySQL", "Graphql"],
  },
  {
    date: "Nov. 2022 ~ Feb. 2023",
    title: "B2B Saas Dashboard (Asleep)",
    role: "Frontend Developer",
    content:
      "Enhancing initial loading speed\n" +
      "Implementing Streaming SSR\n" +
      "Optimizing JS bundle size using Server Components\n" +
      "Applying Next.js Middleware for improved functionality\n" +
      "Improving Authentication User Experience\n" +
      "Implementing Chakra UI Design System to streamline design resources\n" +
      "Introducing a Code Generator for efficiency\n" +
      "Utilizing Orval and Swagger\n" +
      "Designing and developing Email templates and Admin interfaces\n" +
      "Implementing BFF and GraphQL for enhanced service architecture.",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Vercel", "AWS", "Graphql"],
  },
  {
    date: "March. 2022 ~ Nov. 2022",
    title: "B2C application for managing sleep habits (Asleep)",
    role: "Frontend Developer",
    content:
      "Developing a web view for sleep habit management application reports\n" +
      "Enhancing Carousel performance\n" +
      "Implementing Virtual Slides\n" +
      "Incorporating multilingual support\n" +
      "Shifting Remote Config to SSR\n" +
      "Transitioning libraries: CRA to Next.js, AWS Amplify to Vercel, Styled-components to Styletron\n" +
      "Managing server state\n" +
      "Introducing React-query and Ky\n" +
      "Testing libraries: Cypress for E2E Testing, Testing Library for Component Testing\n" +
      "Establishing a Monorepo using Nx.",
    tags: [
      "Next.js",
      "Typescript",
      "Styletron",
      "Recoil",
      "Cypress",
      "Storybook",
    ],
  },
  {
    date: "Nov. 2020 ~ March. 2023",
    title: "Developed and maintained the official website for A-Sleep (Asleep)",
    role: "Frontend Developer",
    content:
      "Applying SSR, SSG, and ISR (incremental static regeneration)\n" +
      "Minimizing API calls for optimal performance\n" +
      "Improving initial loading speed\n" +
      "Utilizing Google Spreadsheet API\n" +
      "Cost-saving through Admin and API development strategies\n" +
      "Implementing Atomic Design patterns for component reusability\n" +
      "Conducting SEO operations such as Sitemap, Favicon, Open Graph protocol, and PWA integration\n" +
      "Implementing Scroll, Gesture, and layout animations using React-framer.",
    tags: ["Next.js", "Typescript", "TailwindCSS", "Amplify"],
  },
  {
    date: "April. 2020 ~ July. 2021",
    title:
      "Sleep analysis application based on AI analysis of sound data (Asleep)",
    role: "Android Developer",
    content:
      "Set up Android technical environment and implemented all features.\n" +
      "Implemented background recording using Foreground Service.\n" +
      "File conversion of recordings using Mobile FFmpeg.\n" +
      "Implemented custom views using Canvas.\n" +
      "Enabled background music playback feature.\n" +
      "Error logging using Crashlytics.",
    tags: ["Android", "MVVM", "CleanArchitecture", "JetPack", "Canvas"],
  },
];

function WorkExperiences() {
  const matches = useMediaQuery(mediaQueryInput);

  return (
    <Box
      padding={"300px 0px 100px"}
      display={matches ? "flex" : "auto"}
      gap={"3rem"}
      component={"section"}
    >
      <Box
        position={matches ? "sticky" : "static"}
        alignSelf={"flex-start"}
        top={"6rem"}
        display={"flex"}
        justifyContent={"center"}
        marginBottom={"1.5rem"}
      >
        <Title title={"Work\nExperience"} />
      </Box>
      <Box>
        {WORK_DATA.map((work) => (
          <WorkCard
            key={v4()}
            role={work.role}
            date={work.date}
            title={work.title}
            content={work.content}
            tags={work.tags}
          />
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperiences;
