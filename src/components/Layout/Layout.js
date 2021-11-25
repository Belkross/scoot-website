import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import VerticalLayoutContainerA from "./VerticalLayoutContainerA";
import VerticalLayoutContainerB from "./VerticalLayoutContainerB";
import LateralLayoutContainer from "./LateralLayoutContainer";
import DialogFakeWebsite from "../MyComponents/DialogFakeWebsite";
import PageContextProvider from "../MyComponents/PageContextProvider";

export default function Layout({ children, pageContext }) {
	return (
		<PageContextProvider pageContext={pageContext}>
			<DialogFakeWebsite>
				<HtmlAttributesAndHead />
				<VerticalLayoutContainerA>
					<Header />
					<VerticalLayoutContainerB>
						<PageTransition>
							<LateralLayoutContainer>{children}</LateralLayoutContainer>
						</PageTransition>
					</VerticalLayoutContainerB>
					<Footer />
				</VerticalLayoutContainerA>
			</DialogFakeWebsite>
		</PageContextProvider>
	);
}
