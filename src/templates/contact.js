import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import ContactSection1 from "../components/PageContact/ContactSection1";

export default function PageContact({ data, pageContext }) {
	const section1 = data.allDatoCmsPagesScootin.nodes[0].sections[0];
	
	return (
		<Layout pageContext={pageContext}>
			<ContactSection1 content={section1} />
		</Layout>
	);
}

export const query = graphql`
	query template_contact($slug: String, $locale: String) {
		allDatoCmsPagesScootin(filter: { slug: { eq: $slug }, locale: { eq: $locale } }) {
			nodes {
				slug
				locale
				title
				sections {
					id
					components {
						... on DatoCmsFormContact {
							id
							labelName
							labelMail
							labelPhone
							labelMessage
							labelAgreement
							buttonSubmit
						}
						... on DatoCmsComponent {
							id
							componentBlocks {
								... on DatoCmsTextIllustration {
									id
									description
									illustration {
										alt
										gatsbyImageData
									}
								}
							}
						}
					}
					title
				}
			}
		}
	}
`;
