/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { Fragment, useRef } from "@wordpress/element";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	URLInput,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	__experimentalSpacer as Spacer,
	CheckboxControl,
	TextControl,
	CustomSelectControl,
} from "@wordpress/components";

import BackgroundColorPalette from "./BackgroundColorPalette";
import blockContextMenu from "./blockContextMenu";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	// Extraire les variables venant de props
	const {
		attributes: {
			content,
			url,
			text,
			level,
			colonnage_withStart,
			colonnage_simple_start,
			colonnage_simple,
			colonnage_withResponsive,
			backgroundColorClass,
		},
	} = props;

	/**
	 * Tableau d'objets pour la conversion
	 * des noms de colonnage en id
	 */
	const tabColonne = [
		{ nom: "colonnage_small", id: "sm" },
		{ nom: "colonnage_medium", id: "md" },
		{ nom: "colonnage_large", id: "lg" },
		{ nom: "colonnage_extraLarge", id: "xl" },
		{ nom: "colonnage_extraExtraLarge", id: "xxl" },
	];

	const tagH = "h1";

	/**
	 * Construire les classes pour le colonnage
	 */
	const constructColClass = () => {
		let classes = "";
		// Condition "start"
		if (colonnage_withStart) {
			// Mettre la classe "simple-start"
			classes += `col-${colonnage_simple}-start-${colonnage_simple_start} `;
		} else {
			// Mettre la classe "simple"
			classes += `col-${colonnage_simple} `;
		}
		// Condition "responsive"
		if (colonnage_withResponsive) {
			// Condition "start"
			if (colonnage_withStart) {
				// Parcours de tableau et mettre classes
				tabColonne.map((e) => {
					if (props.attributes[`${e.nom}_checked`] && props.attributes[e.nom]) {
						classes += `col-${e.id}-${props.attributes[e.nom]}-start-${
							props.attributes[`${e.nom}_start`]
						} `;
					}
				});
				// classes += "";
			} else {
				// Parcours de tableau et mettre classes
				tabColonne.map((e) => {
					if (props.attributes[`${e.nom}_checked`] && props.attributes[e.nom]) {
						classes += `col-${e.id}-${props.attributes[e.nom]} `;
					}
				});
			}
		}
		return classes;
	};
	const ref = useRef();
	const richTextRef = useRef();
	const blockProps = useBlockProps({ ref });
	return (
		<Fragment>
			<InspectorControls>
				{BackgroundColorPalette(props)}
				<PanelBody title="Colonnage" initialOpen={true}>
					<Spacer>
						<ToggleControl
							label={__(
								"Permettre le placement du début du colonnage",
								"fourmi-e"
							)}
							checked={colonnage_withStart}
							onChange={() => {
								props.setAttributes({
									colonnage_withStart: !colonnage_withStart,
								});
							}}
						/>
						{colonnage_withStart && (
							<RangeControl
								label="Début du positionnement (simple)"
								value={colonnage_simple_start}
								onChange={(v) =>
									props.setAttributes({
										colonnage_simple_start: v,
									})
								}
								min={1}
								max={23} // Max 23 colonnes
								beforeIcon="arrow-down"
								afterIcon="arrow-up"
							/>
						)}
						<RangeControl
							label="Nombre de colonne (simple)"
							value={colonnage_simple}
							onChange={(v) => {
								props.setAttributes({
									colonnage_simple: v,
								});
							}}
							min={1}
							max={24} // Max 24 colonne
							beforeIcon="arrow-down"
							afterIcon="arrow-up"
						/>
					</Spacer>
					<Spacer>
						<ToggleControl
							label={__("Colonnage responsive", "fourmi-e")}
							checked={colonnage_withResponsive}
							onChange={() =>
								props.setAttributes({
									colonnage_withResponsive: !colonnage_withResponsive,
								})
							}
						/>
						{colonnage_withResponsive &&
							tabColonne.map((e) => (
								<Fragment>
									<CheckboxControl
										label={e.nom}
										checked={props.attributes[`${e.nom}_checked`]}
										onChange={() => {
											props.setAttributes({
												[`${e.nom}_checked`]:
													!props.attributes[`${e.nom}_checked`],
											});
										}}
									/>
									{props.attributes[`${e.nom}_checked`] && (
										<Fragment>
											{colonnage_withStart && (
												<RangeControl
													label="Début du positionnement "
													value={props.attributes[`${e.nom}_start`]}
													onChange={(v) =>
														props.setAttributes({
															[`${e.nom}_start`]: v,
														})
													}
													min={1}
													max={23} // Max 23 colonnes
													beforeIcon="arrow-down"
													afterIcon="arrow-up"
												/>
											)}
											<RangeControl
												label={`Nombre de colonne (${e.nom})`}
												value={props.attributes[e.nom]}
												onChange={(v) => {
													props.setAttributes({
														[e.nom]: v,
													});
												}}
												min={1}
												max={24} // Max 24 colonnes
												beforeIcon="arrow-down"
												afterIcon="arrow-up"
											/>
										</Fragment>
									)}
								</Fragment>
							))}
					</Spacer>
				</PanelBody>
			</InspectorControls>
			{blockContextMenu(props, richTextRef, ref)}
			<div
				{...blockProps}
				className={`${
					useBlockProps().className
				} ${constructColClass()} ${backgroundColorClass}`}
				style={{ backgroundColor: props.attributes.backgroundColor }}
			>
				<a
					className={`conteneur-button-link bouton-${level}`}
					href={url}
					onClick={(e) => e.preventDefault()}
				>
					<span class="conteneur-button-content">
						<RichText
							ref={richTextRef}
							placeholder={__("Add text…")}
							value={text}
							withoutInteractiveFormatting
							onChange={(value) => {
								props.setAttributes({ text: value });
							}}
							class="conteneur-button-text"
						/>
						<span class="conteneur-button-decoration">&rarr;</span>
					</span>
				</a>
			</div>
		</Fragment>
	);
}
