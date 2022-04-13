import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	URLInputButton,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";

import {
	ToolbarGroup,
	DropdownMenu,
	MenuItemsChoice,
	ToolbarButton,
	Popover,
} from "@wordpress/components";

import {
	arrowLeft,
	arrowRight,
	arrowDown,
	heading,
	link,
	linkOff,
} from "@wordpress/icons";
import { useState, useEffect, useRef } from "@wordpress/element";

const NIVEAUX = ["petit", "moyen", "grand"];
const NEW_TAB_REL = "noreferrer noopener";

export default function blockContextMenu(props, richTextRef, ref) {
	const {
		isSelected,
		setAttributes,
		attributes: { url, text, level, linkTarget, rel },
	} = props;

	const [isEditingURL, setIsEditingURL] = useState(false);
	const isURLSet = !!url;
	const opensInNewTab = linkTarget === "_blank";
	useEffect(() => {
		if (!isSelected) {
			setIsEditingURL(false);
		}
	}, [isSelected]);

	function onToggleOpenInNewTab(value) {
		const newLinkTarget = value ? "_blank" : undefined;

		let updatedRel = rel;
		if (newLinkTarget && !rel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newLinkTarget && rel === NEW_TAB_REL) {
			updatedRel = undefined;
		}
		console.log(linkTarget);
		console.log(newLinkTarget);
		setAttributes({
			linkTarget: newLinkTarget,
			rel: updatedRel,
		});
	}

	return (
		<>
			<BlockControls group="block">
				{!isURLSet && (
					<ToolbarButton
						name="link"
						icon={link}
						title={__("Link")}
						onClick={(e) => {
							e.preventDefault();
							setIsEditingURL(true);
						}}
					/>
				)}
				{isURLSet && (
					<ToolbarButton
						name="link"
						icon={linkOff}
						title={__("Unlink")}
						onClick={() => {
							setAttributes({
								url: undefined,
							});
						}}
						isActive={true}
					/>
				)}
				<DropdownMenu
					icon={heading}
					label="Choisir le format de boutton"
					controls={NIVEAUX.map((el) => {
						return {
							title: `Boutton ${el}`,
							onClick: () => setAttributes({ level: el }),
						};
					})}
				/>
			</BlockControls>
			{isSelected && (isEditingURL || isURLSet) && (
				<Popover
					position="bottom center"
					onClose={() => {
						setIsEditingURL(false);
						richTextRef.current?.focus();
					}}
					anchorRef={ref?.current}
					focusOnMount={isEditingURL ? "firstElement" : false}
				>
					<LinkControl
						className="wp-block-navigation-link__inline-link-input"
						value={{ url, opensInNewTab }}
						onChange={({
							url: newURL = "",
							opensInNewTab: newOpensInNewTab,
							title: newTitle
						}) => {
							setAttributes({ url: newURL, text: newTitle });

							if (opensInNewTab !== newOpensInNewTab) {
								onToggleOpenInNewTab(newOpensInNewTab);
							}
						}}
						onRemove={() => {
							setAttributes({
								url: undefined,
								linkTarget: undefined,
								rel: undefined,
							});
							setIsEditingURL(false);
							richTextRef.current?.focus();
						}}
						forceIsEditingLink={isEditingURL}
					/>
				</Popover>
			)}
		</>
	);
}
