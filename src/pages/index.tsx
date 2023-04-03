import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p="10">
        <Heading>
            Problem2Profit
        </Heading>
        <Box mt= "5">
          <UnorderedList>
            <ListItem mt="2">
              {`Problem2Profit is a digital platform designed to inspire Indian entrepreneurs by presenting a curated list of real-world issues that can be transformed into viable business ventures.`}
            </ListItem>
            <ListItem mt="2">
              {`By targeting India-specific challenges, the platform encourages innovation and empowers the youth to generate wealth while creating a positive impact on society.`}
            </ListItem>
            <ListItem mt="2">
              {`The platform showcases expert-endorsed opportunities, ranks them based on relevance, and offers resources for users to develop effective solutions.`}
            </ListItem>
            <ListItem mt="2">
              {`Revenue for the platform will be generated through advertisements from services catering to startups and small businesses.`}
            </ListItem>
            <ListItem mt="2">
              {`The platform will also offer a subscription-based service for users to access premium content and resources.`}
            </ListItem>
          </UnorderedList>
        </Box>
    </Box>
  )
}
