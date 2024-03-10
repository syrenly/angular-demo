import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition, faArrowLeft, faArrowRight, faList, faMap, faX } from "@fortawesome/free-solid-svg-icons";

export const ICON_DICTIONARY: { [name: string]: IconDefinition } = {
	arrowLeft: faArrowLeft,
	arrowRight: faArrowRight,
	x: faX,
	map: faMap,
	list: faList,
};

@Component({
	selector: "app-icon",
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: "./icon.component.html",
	styleUrl: "./icon.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
	@Input() icon = "";
	selectedIcon!: IconDefinition;
	@Input() size: number = 1;
	@Input() unit: string = "rem";

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["icon"]) {
			this.selectedIcon = ICON_DICTIONARY[this.icon];
		}
	}
}
