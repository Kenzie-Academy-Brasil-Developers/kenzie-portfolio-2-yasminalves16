// Styles
import { Container, Flex, Flex2, Flex3 } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { Section, Container2, AnimationContainer } from "./styles";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  AboutMe,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

import img from "@/public/static/img/logo/laptop.png";

const github = "https://github.com/yasminalves16";

export const Home = (): JSX.Element => {
  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"120px"}
                height={"120px"}
              />
              <Container2>
                <Section>
                  <p className="line typing-animation">
                    {" "}
                    Hello, my name is Yasmin{" "}
                  </p>
                </Section>
              </Container2>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{" "}
              <Text as="span" type="heading1" color="brand1">
                am
              </Text>{" "}
              full stack{" "}
              <Text as="span" type="heading1" color="brand1">
                developer
              </Text>{" "}
            </Text>
            <Text type="body2" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="circle" target="_blank" href={github}>
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMe id="aboutme">
        <Container>
          <Flex3>
            <AnimationContainer>
              <UserImage
                src={img}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"250px"}
                height={"250px"}
              />
            </AnimationContainer>
          </Flex3>
          <Flex2>
            <Text type="body3" color="grey5">
            ✨ Hello, my name is Yasmin, have 22 years old, live in São Paulo and
              I'm a Junior Full-Stack Developer.
            </Text>
            <Text type="body3" color="grey5">
            ✨ I am studying systems analysis and development, I am
              also a student at Kenzie Academy Brasil in the 2000-hour
              Full-Stack Web Development course.
            </Text>
            <Text type="body3" color="grey5">
            ✨ At kenzie too I work as a Peer Coach (monitor) and also develop
              experiences in real team projects.
            </Text>
            <Text type="body3" color="grey5">
            ✨ I'm currently studying Node.js, Express, TypeScript and Python ,
              so I'll be adding projects with these techs here soon. Also, I'll
              be exploring more of the Back-End world within the next few
              months.
            </Text>
            <Text type="body3" color="grey5">
            ✨ I am a determined, careful and hardworking web developer looking
              for my first career opportunity in technology where I can learn
              and share new knowledge
            </Text>
          </Flex2>
        </Container>
      </AboutMe>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="brand5">
                My projects
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
