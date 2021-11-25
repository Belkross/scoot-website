import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Typography from "@mui/material/Typography";
import GroupedQuestions from "../components/template-faq/GroupedQuestions";

export default function PageFaq({ data, pageContext }) {
	const page = data.allDatoCmsPagesScootin.nodes[0];
	const [section1, section2] = page.sections;

	return (
		<Layout pageContext={pageContext}>
			<Typography variant="h1" children={page.title} textAlign="center" mb={4} />
			<GroupedQuestions content={section1} />
			<GroupedQuestions content={section2} />
		</Layout>
	);
}

export const query = graphql`
	query template_faq($slug: String, $locale: String) {
		allDatoCmsPagesScootin(filter: { slug: { eq: $slug }, locale: { eq: $locale } }) {
			nodes {
				slug
				locale
				title
				sections {
					title
					components {
						... on DatoCmsComponent {
							componentBlocks {
								... on DatoCmsPoint {
									id
									title
									description
								}
							}
						}
					}
				}
			}
		}
	}
`;
