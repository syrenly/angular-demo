import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight, faList, faMap, faX } from "@fortawesome/free-solid-svg-icons";

/** Dictionary to map Font Awesome icons with well known  */
export const ICON_DICTIONARY: { [name: string]: IconDefinition } = {
	arrowLeft: faArrowLeft,
	arrowRight: faArrowRight,
	x: faX,
	map: faMap,
	list: faList,
};
