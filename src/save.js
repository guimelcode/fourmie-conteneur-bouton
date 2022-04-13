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
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const {
		attributes: {
			content,
			url,
			text,
			rel,
			linkTarget,
			level,
			colonnage_withStart,
			colonnage_simple_start,
			colonnage_simple,
			colonnage_withResponsive,
			backgroundColorClass,
		},
	} = props;
	const tabColonne = [
		{ nom: "colonnage_small", id: "sm" },
		{ nom: "colonnage_medium", id: "md" },
		{ nom: "colonnage_large", id: "lg" },
		{ nom: "colonnage_extraLarge", id: "xl" },
		{ nom: "colonnage_extraExtraLarge", id: "xxl" },
	];

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

	return (
		<div
			{...useBlockProps.save()}
			className={`${
				useBlockProps.save().className
			} ${constructColClass()} ${backgroundColorClass}`}
			style={{ backgroundColor: props.attributes.backgroundColor }}
		>
			<a
				className={`conteneur-button-link bouton-${level}`}
				href={url}
				target={linkTarget}
				rel={rel}
			>
				<span class="conteneur-button-content">
					<span class="conteneur-button-text">{text}</span>
					<span class="conteneur-button-decoration">&rarr;</span>
				</span>
			</a>
		</div>
	);
}
