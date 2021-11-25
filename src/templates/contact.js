import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import ContactSection1 from "../components/PageContact/ContactSection1";
import ContactSection2 from "../components/PageContact/ContactSection2";

export default function PageContact({ data, pageContext }) {
	const [section1, section2] = data.allDatoCmsPagesScootin.nodes[0].sections;
	
	return (
		<Layout pageContext={pageContext}>
			<ContactSection2 content={section2} />
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
